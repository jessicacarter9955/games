import { createRuntimeInspector } from './runtime.js';
import { mountUniversalInspector } from './universal-inspector.js';
import { saveDraft, readDraft, listDrafts, clearDraft, downloadBlob, downloadJSON } from './storage.js';
import { initializeAssetReskin, invalidateReskinCache, assetReskinAvailable } from './sw-client.js';
import { findAtlasMetadata, loadAtlasFrames, previewAtlasFrame, patchAtlasFrame } from './atlas.js';
import { initializeDiagnostics } from './diagnostics.js';
import {scope, versions, activeVersion, prepareVersions, selectVersion, forkVersion, versionURL, exportVersion} from './versions.js';

const byId = id => document.getElementById(id);
const UI = Object.fromEntries([
  'gameCount','assetCount','toggleList','closeList','gameSidebar','mobileBackdrop',
  'searchGames','categoryFilter','statusFilter','sortGames','gameList','downloadCatalog',
  'currentGame','currentDesc','gameStatus','techLabel','modePlay','modeInspect',
  'retryGame','fullscreenGame','gameStage','gameFrame','inspectSurface','hoverBox',
  'hoverName','stageNotice','stageDiagnostic','runtimeState','viewportState',
  'librarySubtitle','searchAssets','assetKind','assetGrid','runtimeInfo',
  'hoverInfo','assetDetail','reskinControls','replacementFile','chooseReplacement',
  'restoreAsset','exportAsset','applyReskinGame','reskinLayerState',
  'atlasPanel','atlasInfo','atlasFrameSelect','atlasPreview',
  'atlasDimensions','atlasWarning','atlasPatchFile','atlasPatchButton',
  'reskinStatus','draftCount','exportManifest',
].map(id => [id, byId(id)]));

const knownStatuses = ['experimental','limited','blocked','missing'];
const PRIORITY = { experimental:0,limited:1,blocked:2,missing:3 };
let catalog = null, game = null, runtime = null, mode = 'play';
let selectedAsset = null, selectedObject = null, saved = [];
let launchId = 0, activePromise = null, lastPointer = null, inspectorTick = null;
let loaded = false;
let resourceLayer = {available:false,reason:'Layer non inizializzato'};
let atlasFrames=[], atlasMeta=null, atlasWanted='', atlasAssetPath='';
let atlasRequest=0;
let quickDiagnostics=null;
let universalInspector=null;
let pinnedRegion=null;
let branch={id:'original',locked:true,name:'Originale'};
let comparing=false, versionBusy=false;
const draftScope=()=>game?scope(game.id,branch.id):null;
function renderVersions(){
 const select=byId('reskinVersion');
 select.replaceChildren(...(game?versions(game.id):[]).map(v=>{const o=document.createElement('option');o.value=v.id;o.textContent=v.name+(v.locked?' · protetta':'');return o;}));
 select.value=branch.id;
 byId('versionState').textContent=branch.locked?'Sola lettura · crea una variante per modificare':'Variante modificabile · originale protetto';
 byId('versionCompare').disabled=!game?.entry||branch.id==='original';
 byId('versionFork').disabled=!game||versionBusy;byId('versionCheckpoint').disabled=!game||versionBusy||branch.locked;
 byId('versionPackage').disabled=!game||versionBusy;
 UI.chooseReplacement.disabled=branch.locked;UI.atlasPatchButton.disabled=branch.locked;
}
function stopCompare(){comparing=false;byId('originalFrame').removeAttribute('src');byId('originalFrame').hidden=true;UI.gameStage.classList.remove('version-compare');byId('versionCompare').textContent='Prima / dopo';}
function startCompare(){
 if(!game?.entry||branch.id==='original')return;
 comparing=true;const url=versionURL(game.entry,game.id,'original');if(game.engine==='unity')url.searchParams.set('useLocalSdk','true');
 const frame=byId('originalFrame');frame.hidden=false;frame.src=url.href;UI.gameStage.classList.add('version-compare');byId('versionCompare').textContent='Chiudi confronto';updateMode('play');
}
async function changeBranch(id){if(!game||versionBusy)return;stopCompare();selectVersion(game.id,id);branch=activeVersion(game.id);renderVersions();await loadDraftList();renderAssetDetails();await launchGame(true);}
async function createBranch(locked){if(!game||versionBusy)return;const current=game;const parent=branch.id;const name=prompt(locked?'Nome checkpoint protetto':'Nome nuova variante',locked?'Checkpoint '+new Date().toLocaleDateString('it-IT'):'Reskin 02');if(!name?.trim())return;versionBusy=true;renderVersions();try{const id=await forkVersion(current.id,parent,name,locked);versionBusy=false;if(game===current)await changeBranch(id);}catch(e){log('Versioning: '+e.message);}finally{versionBusy=false;renderVersions();}}
const requestLog = [];
const fmt = n => Number(n||0).toLocaleString('it-IT');
const esc = s => String(s??'').replace(/[&<>"']/g, ch =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const localURL = s => typeof s === 'string' &&
  (s.startsWith('/extracted/') || s.startsWith('/local-mirror/')) &&
  !s.includes('\\') && !s.includes('..') && !/[\n\r<>"']/.test(s) ? s : null;
const statusClass = status => knownStatuses.includes(status) ? status : 'missing';
const dotClass = status => ({experimental:'yellow',limited:'neutral',
  blocked:'red',missing:'muted'}[status]||'muted');
const normalize = value => String(value||'').toLowerCase();

function notice(title, description, action, onClick) {
  UI.stageNotice.innerHTML =
    '<div class="notice-icon">◈</div><h3>'+esc(title)+'</h3>'+
    '<p>'+esc(description)+'</p>'+
    (action?'<button type="button" class="button primary" id="noticeAction">'+
      esc(action)+'</button>':'');
  UI.stageNotice.hidden=false;
  if(action)byId('noticeAction')?.addEventListener('click',onClick,{once:true});
}
function log(message){
  requestLog.push(new Date().toLocaleTimeString('it-IT')+' · '+String(message));
  if(requestLog.length>40)requestLog.shift();
  UI.stageDiagnostic.textContent=String(message);
  console.info('[2Night Games]',message);
}
function updateMode(value){
  mode=value;
  runtime?.setInspectMode?.(mode==='inspect');
  if(mode!=='inspect')pinnedRegion=null;
  UI.modePlay.classList.toggle('selected',mode==='play');
  UI.modeInspect.classList.toggle('selected',mode==='inspect');
  UI.modePlay.setAttribute('aria-pressed',String(mode==='play'));
  UI.modeInspect.setAttribute('aria-pressed',String(mode==='inspect'));
  UI.inspectSurface.hidden=mode!=='inspect'||!loaded;
  if(mode!=='inspect'){
    UI.hoverBox.hidden=true;
    selectedObject=null;
    showHover(null);
    UI.gameFrame.contentWindow?.focus?.();
  }
}
function renderCount(){
  if(!catalog)return;
  UI.gameCount.textContent=fmt(catalog.total)+' titoli';
  const totalAssets=catalog.games.reduce((sum,g)=>sum+g.assetCount,0);
  UI.assetCount.textContent=fmt(totalAssets)+' asset indicizzati';
}
const viewParams=new URLSearchParams(location.search);
function populateCategories(){
  const categories=[...new Set(catalog.games.map(g=>g.category))];
  for(const category of categories.sort((a,b)=>a.localeCompare(b,'it'))){
    const option=document.createElement('option');
    option.value=category;option.textContent=category==='Word games'?'Word Games':category;
    UI.categoryFilter.append(option);
  }
  const requested=categories.find(c=>normalize(c)===normalize(viewParams.get('category')));
  if(requested)UI.categoryFilter.value=requested;
}
function filters(){
  if(!catalog)return [];
  let list=catalog.games.filter(g=>{
    const text=normalize([g.title,g.category,g.engine,g.reportedEngine].join(' '));
    const query=normalize(UI.searchGames.value).trim();
    return (!query||text.includes(query)) &&
      (UI.categoryFilter.value==='all'||g.category===UI.categoryFilter.value) &&
      !(viewParams.get('wordtest')==='1' && UI.categoryFilter.value==='Word games' && g.id==='wordgamesdeathnotetype') &&
      (UI.statusFilter.value==='all'||g.status===UI.statusFilter.value);
  });
  const sort=UI.sortGames.value;
  list=list.sort((a,b)=>sort==='title'?a.title.localeCompare(b.title,'it'):
    sort==='status'?(PRIORITY[a.status]-PRIORITY[b.status]||
      (b.score||0)-(a.score||0)):
      ((b.score||0)-(a.score||0)||a.title.localeCompare(b.title,'it')));
  return list;
}
function renderGameList(){
  const matches=filters();
  UI.gameList.innerHTML=matches.length?matches.map(g=>
    '<button type="button" class="game-item '+(game?.id===g.id?'active':'')+
    '" data-game="'+esc(g.id)+'" role="option" aria-selected="'+
    String(game?.id===g.id)+'" title="'+esc(g.reason)+'">'+
    '<div class="game-title"><i class="dot '+dotClass(g.status)+'"></i>'+
    '<span>'+esc(g.title)+'</span></div>'+
    '<div class="game-meta"><span>'+esc(g.engine)+'</span>'+
    '<span>'+fmt(g.imageCount)+' immagini</span>'+
    (g.score===null?'':'<span class="score">'+g.score+'/100</span>')+'</div>'+
    '<div class="game-desc">'+esc(g.label)+'</div></button>'
  ).join(''):'<div class="empty-list">Nessun gioco corrispondente ai filtri.</div>';
  UI.gameList.querySelectorAll('[data-game]').forEach(button=>
    button.addEventListener('click',()=>selectGame(button.dataset.game)));
}
function updateHeader(){
  if(!game)return;
  UI.currentGame.textContent=game.title;
  UI.currentDesc.textContent=game.reason;
  UI.gameStatus.className='pill '+statusClass(game.status);
  UI.gameStatus.textContent=game.label;
  UI.techLabel.textContent=game.engine+' · '+game.graphics;
  UI.librarySubtitle.textContent=fmt(game.fileCount)+' file nel mirror · '+
    fmt(game.imageCount)+' immagini · '+fmt(game.modelCount)+' modelli · '+
    game.screensEstimate+' schermate (stima)';
  UI.retryGame.disabled=!game.entry;
  UI.fullscreenGame.disabled=!game.entry;
  UI.viewportState.textContent='Viewport —';
}
function updateRuntime(){
  if(!game)return;
  const report=runtime?.getReport();
  const safeReport=report||{engine:game.engine,canvas:false,drawCalls:0,
    knownDraws:0,engineObjects:0,patched:false,errors:[]};
  UI.runtimeInfo.innerHTML=
    '<dl class="kv">'+
    '<dt>Motore stimato</dt><dd>'+esc(game.engine)+'</dd>'+
    '<dt>Runtime rilevato</dt><dd>'+esc(safeReport.engine)+'</dd>'+
    '<dt>File HTML</dt><dd>'+(game.entry?'presente':'assente')+'</dd>'+
    '<dt>Canvas</dt><dd>'+(safeReport.canvas?'rilevato':'non rilevato')+'</dd>'+
    '<dt>Draw image 2D</dt><dd>'+fmt(safeReport.drawCalls)+'</dd>'+
    '<dt>Elementi runtime</dt><dd>'+fmt(safeReport.engineObjects)+'</dd>'+
    '<dt>Texture WebGL osservate</dt><dd>'+fmt(safeReport.webgl?.textures?.length||0)+'</dd>'+
    '<dt>Draw WebGL (ispezione)</dt><dd>'+fmt(safeReport.webgl?.drawCalls||0)+'</dd>'+
    '<dt>Stato</dt><dd>'+esc(game.status)+'</dd>'+
    '<dt>PNG intercettabili</dt><dd>'+fmt(game.assets.filter(a=>
      a.kind==='image' && /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(a.name)).length)+'</dd>'+
    '<dt>Reskin in ingresso</dt><dd>'+
      (assetReskinAvailable()?'Service Worker attivo':'Solo Canvas2D/DOM')+
    '</dd></dl>'+
    '<p class="footnote">'+esc(game.reason)+'</p>'+
    (game.entry?'<p class="footnote">HTML caricato ≠ gameplay verificato. '+
    'Il rilevamento DOM/Canvas2D funziona solo per oggetti esposti dal motore.'+
    '</p>':'');
  UI.runtimeState.textContent=(loaded?'HTML locale aperto':'Non avviato')+
    ' · '+safeReport.engine+' · '+fmt(safeReport.knownDraws)+' disegni tracciati';
  try{
    const frame=UI.gameFrame;
    const canvas=frame.contentDocument?.querySelector('canvas');
    if(canvas)UI.viewportState.textContent=canvas.width+'×'+canvas.height+
      ' logici · '+Math.round(canvas.getBoundingClientRect().width)+'px visualizzati';
  }catch{UI.viewportState.textContent='Canvas non accessibile'}
}
async function loadDraftList(){
  try{
    const current=game, currentBranch=branch.id, key=draftScope();
    const rows=key?await listDrafts(key):[];
    if(game!==current||branch.id!==currentBranch)return;
    saved=rows;
    UI.draftCount.textContent=saved.length?
      saved.length+' '+(saved.length===1?'asset modificato e salvato':'asset modificati e salvati')+' in questo browser':
      'Nessuna modifica locale per questo gioco.';
  }catch(error){
    saved=[];
    UI.draftCount.textContent='Archiviazione locale non disponibile: '+
      String(error.message||error);
  }
}
// Isolated texture preview: never substitute the full game canvas for a sprite.
const isolatedPreviewImages = new Map();
function drawSelectedSprite(item){
  const canvas=byId('spritePreviewCanvas');
  const path=localURL(item?.source);
  if(!canvas||!path)return;
  const c=item.crop;
  const crop=c&&[c.sx,c.sy,c.sw,c.sh].every(Number.isFinite)&&c.sw>0&&c.sh>0?c:null;
  const key=path+':'+JSON.stringify(crop);
  function paint(img){
    if(!byId('spritePreviewCanvas')||!selectedObject||
        localURL(selectedObject.source)!==path||
        JSON.stringify(selectedObject.crop||null)!==JSON.stringify(crop))return;
    const target=byId('spritePreviewCanvas');
    const sx=crop?.sx||0,sy=crop?.sy||0;
    const sw=crop?.sw||img.naturalWidth,sh=crop?.sh||img.naturalHeight;
    if(sw<=0||sh<=0||sx<0||sy<0||sx+sw>img.naturalWidth||sy+sh>img.naturalHeight)return;
    const scale=Math.min(1,320/sw,220/sh);
    target.width=Math.max(1,Math.round(sw*scale));
    target.height=Math.max(1,Math.round(sh*scale));
    const ctx=target.getContext('2d');
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(img,sx,sy,sw,sh,0,0,target.width,target.height);
  }
  let image=isolatedPreviewImages.get(path);
  if(image?.complete&&image.naturalWidth){paint(image);return;}
  if(image)return;
  if(isolatedPreviewImages.size>80)isolatedPreviewImages.clear();
  image=new Image();
  isolatedPreviewImages.set(path,image);
  image.onload=()=>paint(image);
  image.onerror=()=>isolatedPreviewImages.delete(path);
  image.src=path;
}
function showHover(item){
  if(!item){
    UI.hoverInfo.innerHTML='<div class="empty-detail">'+
      (mode==='play'?'Passa a «Ispeziona LIVE» per evidenziare gli oggetti.':
      'Passa sopra un elemento del gioco: apparirà qui il box model.')+'</div>';
    return;
  }
  const x=Number(item.x)||0,y=Number(item.y)||0;
  const w=Number(item.w)||0,h=Number(item.h)||0;
  UI.hoverInfo.innerHTML=
    '<div class="object-name">'+esc(item.name)+'</div>'+
    '<div class="object-source">'+esc(item.source||item.tag||'Nessuna sorgente esposta')+'</div>'+
    (localURL(item.source)&&['image','dom','engine'].includes(item.type)
      ?'<div class="sprite-preview"><div class="hint">RISORSA ISOLATA'+
       (item.crop?' · frame atlas':'')+'</div><canvas id="spritePreviewCanvas" '+
       'aria-label="Anteprima isolata della risorsa"></canvas></div>'
      :item.type==='webgl-region'?'<div class="sprite-preview"><div class="hint">RITAGLIO VISIVO · NON TEXTURE</div><canvas id="webglCrop"></canvas></div>': '<p class="hint">Nessuna texture isolabile identificata per questo box.</p>')+
    '<div class="box-model"><div class="box-inner"><small>RENDER BOX · CSS PX</small>'+
      Math.round(w)+' × '+Math.round(h)+'</div></div>'+
    '<dl class="kv">'+
    '<dt>x</dt><dd>'+x.toFixed(1)+'</dd>'+
    '<dt>y</dt><dd>'+y.toFixed(1)+'</dd>'+
    '<dt>width</dt><dd>'+w.toFixed(1)+'</dd>'+
    '<dt>height</dt><dd>'+h.toFixed(1)+'</dd>'+
    '<dt>Sorgente</dt><dd>'+esc(item.type||'unknown')+'</dd></dl>'+
    (item.type==='canvas'?'<p class="hint">Il motore rende su canvas senza '+
      'esporre questo sprite: non possiamo identificarlo per nome senza un adapter dedicato.</p>':
      ['webgl-region','webgl-pending'].includes(item.type)?'<p class="hint">'+esc(item.note)+'</p>':
      item.type==='canvas-region'?'<p class="hint">'+esc(item.note)+
      ' Questa selezione evidenzia una regione reale, non una texture isolata.</p>':'');
  drawSelectedSprite(item);
  if(item.type==='webgl-region')runtime?.visualPreview?.(item,byId('webglCrop'));
  if(item.type==='webgl-region'&&pinnedRegion){
    const edit=document.createElement('div');edit.className='hint';edit.textContent='Regione fissata · modifica box CSS px';
    for(const k of ['x','y','w','h']){const label=document.createElement('label');label.textContent=k+' ';const input=document.createElement('input');input.type='number';input.value=Math.round(item[k]);input.style.width='65px';input.onchange=()=>{const v=Number(input.value);if(Number.isFinite(v)&&(k==='x'||k==='y'||v>0)){pinnedRegion={...pinnedRegion,[k]:v};applyHover(pinnedRegion);}};label.append(input);edit.append(label);}
    const release=document.createElement('button');release.type='button';release.className='button ghost block';release.textContent='Sblocca hover';release.onclick=()=>{pinnedRegion=null;if(lastPointer)applyHover(runtime.pick(lastPointer));else applyHover(null);};edit.append(release);UI.hoverInfo.append(edit);
  }
}
function applyHover(item){
  selectedObject=item;
  universalInspector?.observe(item);
  showHover(item);
  if(!item||mode!=='inspect'){
    UI.hoverBox.hidden=true;return;
  }
  const frameRect=UI.gameFrame.getBoundingClientRect();
  const host=UI.inspectSurface.getBoundingClientRect();
  const left=frameRect.left-host.left+item.x;
  const top=frameRect.top-host.top+item.y;
  if(!Number.isFinite(left+top+item.w+item.h)||item.w<1||item.h<1){
    UI.hoverBox.hidden=true;return;
  }
  Object.assign(UI.hoverBox.style,{
    left:left+'px',top:top+'px',width:item.w+'px',height:item.h+'px',
  });
  UI.hoverName.textContent=item.name+' · '+Math.round(item.w)+'×'+Math.round(item.h);
  UI.hoverBox.hidden=false;
}
function renderAssets(){
  if(!game)return;
  const kind=UI.assetKind.value,query=normalize(UI.searchAssets.value).trim();
  const assets=game.assets.filter(a=>
    (kind==='all'||kind===a.kind) &&
    (!query||normalize(a.name+' '+a.path).includes(query)));
  UI.assetGrid.innerHTML=assets.length?assets.map(a=>{
    const isImg=a.kind==='image',url=localURL(a.url);
    const thumb=isImg&&url?'<img loading="lazy" src="'+esc(url)+
      '" alt="" onerror="this.style.display=\'none\'"/>':
      '<span aria-hidden="true">'+(a.kind==='model'?'⬡':'▤')+'</span>';
    return '<button type="button" class="asset-item '+(selectedAsset?.path===a.path?
      'active':'')+'" data-asset="'+esc(a.path)+'" title="'+esc(a.path)+
      '"><span class="asset-thumb">'+thumb+'</span>'+
      '<span class="asset-name">'+esc(a.name)+'</span></button>';
  }).join(''):'<div class="empty-list">Nessuna risorsa del tipo selezionato nel mirror GitHub.</div>';
  UI.assetGrid.querySelectorAll('[data-asset]').forEach(button=>
    button.addEventListener('click',()=>selectAsset(button.dataset.asset)));
}
function selectAsset(path){
  if(!game)return;
  if(atlasAssetPath!==path)atlasWanted='';
  selectedAsset=game.assets.find(a=>a.path===path)||null;
  renderAssets();renderAssetDetails();
}
async function updateAtlasPreview(){
  if(!selectedAsset || !atlasFrames.length)return;
  const frame=atlasFrames.find(f=>f.name===UI.atlasFrameSelect.value);
  if(!frame)return;
  atlasWanted=frame.name;
  UI.atlasDimensions.textContent=
    'Rettangolo '+frame.w+'×'+frame.h+' px · x '+frame.x+', y '+frame.y+
    ' · offset '+frame.frameX+', '+frame.frameY+
    ' · dimensione logica '+frame.logicalW+'×'+frame.logicalH;
  UI.atlasWarning.textContent=frame.rotated?
    'Frame ruotato: sostituzione diretta disabilitata.':
    frame.shared.length?
      'Attenzione: stesso rettangolo usato da '+frame.shared.length+
      ' altri frame ('+frame.shared.slice(0,4).join(', ')+').':
      'Frame con rettangolo indipendente.';
  UI.atlasPatchButton.disabled=branch.locked||!!frame.rotated;
  const asset=selectedAsset,activeGame=draftScope();
  try{
    const draft=activeGame?await readDraft(activeGame,asset.path):null;
    if(selectedAsset!==asset)return;
    await previewAtlasFrame(UI.atlasPreview,asset.url,frame,draft?.blob||null);
  }catch(error){UI.atlasWarning.textContent='Anteprima: '+String(error.message||error);}
}
async function showAtlasForAsset(asset){
  const request=++atlasRequest;
  atlasMeta=findAtlasMetadata(game,asset);
  atlasFrames=[];atlasAssetPath=asset?.path||'';
  UI.atlasPanel.hidden=true;
  if(!atlasMeta)return;
  UI.atlasInfo.textContent='Leggo '+atlasMeta.name+'…';
  try{
    const frames=await loadAtlasFrames(asset,atlasMeta);
    if(request!==atlasRequest||selectedAsset!==asset)return;
    atlasFrames=frames;
    UI.atlasFrameSelect.replaceChildren(...frames.slice(0,1200).map(f=>{
      const label=f.name+' · '+f.w+'×'+f.h;
      const option=new Option(label,f.name);
      option.disabled=!!f.rotated;
      return option;
    }));
    UI.atlasFrameSelect.value=frames.some(f=>f.name===atlasWanted)?
      atlasWanted:frames[0].name;
    UI.atlasPanel.hidden=false;
    UI.atlasInfo.textContent=frames.length+' frame logici · '+
      new Set(frames.map(f=>f.rectKey)).size+' rettangoli distinti · '+
      atlasMeta.name;
    await updateAtlasPreview();
  }catch(error){
    if(request!==atlasRequest||selectedAsset!==asset)return;
    UI.atlasPanel.hidden=false;
    UI.atlasPatchButton.disabled=true;
    UI.atlasInfo.textContent='Atlas non leggibile: '+String(error.message||error);
  }
}
function renderAssetDetails(){
  if(!selectedAsset){
    UI.reskinControls.hidden=true;
    UI.atlasPanel.hidden=true;
    ++atlasRequest;atlasFrames=[];atlasMeta=null;atlasAssetPath='';
    UI.assetDetail.innerHTML='<div class="empty-detail">Seleziona una texture. '+ 
      'Potrai importare un PNG con la stessa risoluzione e provarlo nel gioco dove possibile.</div>';
    return;
  }
  const a=selectedAsset;
  const image=a.kind==='image'&&localURL(a.url);
  UI.assetDetail.innerHTML=
    '<div class="asset-preview">'+(image?
      '<img src="'+esc(image)+'" alt="'+esc(a.name)+'"/>':
      '<div class="icon">'+(a.kind==='model'?'⬡':'▤')+'</div>')+
      '</div><div class="asset-path">'+esc(a.path)+'</div>'+
    '<dl class="kv"><dt>Tipo</dt><dd>'+esc(a.kind)+'</dd>'+
    '<dt>Dimensione file</dt><dd>'+fmt(Math.round(a.bytes/1024))+' KB</dd>'+
    '<dt>Accessibilità</dt><dd>'+(image?'PNG reskin': 'Adapter richiesto')+'</dd></dl>';
  UI.reskinControls.hidden=!image;
  UI.reskinLayerState.textContent = resourceLayer.reason;
  UI.applyReskinGame.disabled = !(image && saved.some(row=>row.assetPath===a.path) && game.entry);
  UI.reskinStatus.textContent=image?
    (resourceLayer.available ?
      'Reskin 1:1: anche Canvas/WebGL che caricano questa immagine riceveranno il PNG sostitutivo al prossimo avvio. I giochi con texture già caricate richiedono «Ricarica con reskin».' :
      'Bozza esportabile. Preview Canvas2D/DOM disponibile quando rilevata; per i motori WebGL serve localhost o HTTPS e il layer risorse attivo.'):
    'I modelli 3D e i metadata non sono reskinnabili con un semplice PNG.';
  UI.reskinStatus.className='hint';
  const has=saved.some(x=>x.assetPath===a.path);
  UI.chooseReplacement.disabled=branch.locked;
  UI.restoreAsset.disabled=branch.locked||!has;
  UI.exportAsset.disabled=!has;
  UI.atlasPanel.hidden=true;
  if(image)void showAtlasForAsset(a);
  else {++atlasRequest;atlasFrames=[];atlasMeta=null;}
}
async function readDimensions(source){
  const img=new Image();
  await Promise.race([
    new Promise((resolve,reject)=>{
      img.onload=resolve;
      img.onerror=()=>reject(new Error('Immagine originale non caricabile'));
      img.src=source;
    }),
    new Promise((_,reject)=>setTimeout(()=>reject(new Error('Timeout caricamento immagine')),11000)),
  ]);
  return {width:img.naturalWidth,height:img.naturalHeight};
}
async function replaceAsset(file){
  if(!selectedAsset||!game||!file)return;
  const asset=selectedAsset,active=game,version=branch.id,key=draftScope();
  if(branch.locked||!key){log('Originale protetto: crea una variante.');return;}
  if(!/\.png$/i.test(file.name)||file.size>20*1024*1024){
    UI.reskinStatus.textContent='Carica un PNG inferiore a 20 MB.';
    UI.reskinStatus.className='hint error';return;
  }
  UI.reskinStatus.textContent='Valido dimensioni originali e PNG sostitutivo…';
  try{
    const source=localURL(asset.url);
    if(!source)throw new Error('Asset fuori dal mirror locale');
    const temporary=URL.createObjectURL(file);
    let orig,repl;
    try{
      [orig,repl]=await Promise.all([readDimensions(source),readDimensions(temporary)]);
    }finally{
      URL.revokeObjectURL(temporary);
    }
    if(orig.width!==repl.width||orig.height!==repl.height){
      throw new Error('Dimensioni differenti: originale '+orig.width+'×'+orig.height+
        ', PNG '+repl.width+'×'+repl.height+
        '. Il reskin 1:1 deve preservare la geometria.');
    }
    if(game!==active||branch.id!==version)throw Error('Versione cambiata durante importazione');
    await saveDraft(key,asset.path,file,orig);
    const invalidated = await invalidateReskinCache();
    let result={message:'Bozza salvata'};
    if(game!==active||branch.id!==version)return;
    if(runtime&&loaded)result=await runtime.swap(asset.url,file);
    await loadDraftList();
    renderAssetDetails();
    UI.reskinStatus.textContent='PNG salvato: '+result.message+
      (resourceLayer.available ?
        '. Texture sostitutiva pronta sullo stesso URL dell’originale. Premi «Ricarica con reskin» per aggiornare ogni cache del motore.' :
        '. Layer risorse non attivo: è disponibile il file esportato.')+
      (invalidated?'':' (Cache del layer in aggiornamento.)')+
      ' Gli ZIP originali non sono stati modificati.';
    UI.applyReskinGame.disabled = !active.entry;
    UI.reskinStatus.className='hint success';
    log('Reskin: '+asset.name+' · '+result.message);
  }catch(error){
    UI.reskinStatus.textContent=String(error.message||error);
    UI.reskinStatus.className='hint error';
    log('Reskin fallito: '+String(error.message||error));
  }
}
async function restoreAsset(){
  if(!game||!selectedAsset)return;
  try{
    if(branch.locked||!draftScope())return;
    await clearDraft(draftScope(),selectedAsset.path);
    await invalidateReskinCache();
    runtime?.restore(selectedAsset.url);
    await loadDraftList();renderAssetDetails();
    UI.reskinStatus.textContent='Bozza rimossa. Premi «Ricarica» per ripristinare l’originale anche nelle texture già in memoria.';
    UI.applyReskinGame.disabled=true;
    UI.reskinStatus.className='hint success';
  }catch(error){UI.reskinStatus.textContent=String(error);}
}
async function exportAsset(){
  if(!game||!selectedAsset)return;
  const key=draftScope();if(!key)return;
  const draft=await readDraft(key,selectedAsset.path);
  if(draft)downloadBlob(draft.blob,selectedAsset.name.replace(/\.[^.]+$/,'')+'-reskin.png');
}
async function exportManifest(){
  if(!game)return;
  await loadDraftList();
  downloadJSON({
    version:1,gameId:game.id,game:game.title,branch:branch.id,
    sourceRepository:catalog?.repository,createdAt:new Date().toISOString(),
    items:saved.map(x=>({asset:x.assetPath,width:x.width,height:x.height,
      bytes:x.blob?.size||0,type:x.blob?.type||'image/png',modified:x.updatedAt})),
    warning:'Le immagini restano nelle bozze IndexedDB: esportale anche singolarmente. '+
      'Il manifest non contiene i byte binari o un commit GitHub.',
  },game.id+'-reskin-drafts.json');
}
async function activateStoredDrafts(id){
  try{
    const key=draftScope(),version=branch.id;
    const drafts=key?await listDrafts(key):[];
    for(const row of drafts){
      if(!runtime||game?.id!==id||branch.id!==version)break;
      const asset=game.assets.find(a=>a.path===row.assetPath);
      if(!asset)continue;
      try{await runtime.swap(asset.url,row.blob);}
      catch(e){log('Bozza non applicabile al runtime: '+asset.name);}
    }
    await loadDraftList();
  }catch(e){log('Bozze locali non disponibili: '+String(e.message||e));}
}
function clearRuntime(){
  universalInspector?.reset();
  pinnedRegion=null;
  if(runtime){runtime.destroy();runtime=null;}
  UI.hoverBox.hidden=true;
  selectedObject=null;
  lastPointer=null;
  loaded=false;
  UI.inspectSurface.hidden=true;
  UI.gameFrame.hidden=true;
  UI.gameFrame.onload=null;
  UI.gameFrame.onerror=null;
  UI.gameFrame.removeAttribute('src');
}
async function launchGame(force=false){
  if(!game)return;
  const id=game.id,epoch=++launchId;
  clearRuntime();updateRuntime();
  const localClicker = ['idlecandyclicker2','idlecapybaraclicker','idlecapybaraclicker2',
    'idleitalianbrainrotclickerusp','idleplanetclicker2'].includes(id);
  if(localClicker && location.hostname==='127.0.0.1'){
    const target = new URL(location.href);
    target.hostname='localhost';
    target.hash='game='+encodeURIComponent(id);
    notice('Avvio Unity su localhost',
      'Questi cinque build possono bloccarsi su 127.0.0.1. La preview locale su localhost usa il CrazySDK in modalità sviluppo. Le bozze del browser restano separate tra i due indirizzi.',
      'Apri questo gioco su localhost',()=>window.open(target.href,'_blank','noopener'));
    log('Avvio Unity clicker: usa localhost per evitare il blocco rilevato.');
    return;
  }
  if(!game.entry){
    notice('Avvio impossibile', 'Manca un index.html locale nei file recuperati. '+
      'Puoi consultare il catalogo asset e i motivi di incompatibilità.');
    log('Bloccato: entrypoint assente per '+game.title);return;
  }
  if(['blocked','limited'].includes(game.status)&&!force){
    // Preview should still be attempted; adapter support and reskin grade
    // remain independent. Keep the limitation visible in the status label.
    log('Avvio HTML sperimentale per '+game.title+
      ': il motore può richiedere adapter e servizi online.');
  }
  const url=localURL(game.entry);
  if(!url){notice('Percorso non autorizzato','L’entrypoint non è nel mirror locale.');return;}
  UI.stageNotice.hidden=false;
  notice('Avvio '+game.title,'Caricamento dell’HTML locale. '+
    'Servizi online e asset mancanti potrebbero impedire il gameplay.');
  UI.gameFrame.hidden=false;
  UI.retryGame.disabled=false;
  UI.fullscreenGame.disabled=false;
  UI.gameFrame.onload=async()=>{
    if(!game||game.id!==id||epoch!==launchId)return;
    quickDiagnostics?.attachFrame();
    try{
      const doc=UI.gameFrame.contentDocument;
      if(doc?.title?.toLowerCase().includes('error response')){
        throw new Error('La pagina ha risposto con un errore HTTP');
      }
      runtime=createRuntimeInspector(UI.gameFrame,{gameId:id,engine:game.engine,log});
      runtime.attach();
      loaded=true;
      UI.stageNotice.hidden=true;
      updateMode(mode);
      log('HTML locale caricato. Verifica il gameplay: avvio NON certificato.');
      updateRuntime();
      await activateStoredDrafts(id);
    }catch(error){
      notice('Runtime non accessibile',String(error.message||error));
      log('Runtime: '+String(error.message||error));
    }
  };
  UI.gameFrame.onerror=()=>{
    if(epoch!==launchId)return;
    notice('Caricamento non riuscito','Controlla la console e gli asset locali.');
    log('Errore caricamento iframe');
  };
  const previewUrl = versionURL(url,id,branch.id);
  previewUrl.searchParams.set('night_session', String(epoch));
  // The official SDK supports local development mode on loopback.
  if(localClicker && ['localhost','127.0.0.1'].includes(location.hostname)){
    previewUrl.searchParams.set('useLocalSdk','true');
  }
  UI.gameFrame.src=previewUrl.href;
  UI.stageDiagnostic.textContent='Caricamento '+url+'…';
  window.setTimeout(()=>{
    if(epoch!==launchId||loaded||!game)return;
    log('Il gioco non ha completato il caricamento dopo 15 secondi. '+
      'Potrebbero mancare file o servizi CDN.');
  },15000);
}
async function selectGame(id){
  const next=catalog?.games.find(g=>g.id===id);
  if(!next)return;
  stopCompare();game=next;selectedAsset=null;saved=[];branch={id:'original',locked:true,name:'Originale'};
  try{branch=await prepareVersions(next.id);}catch(e){log('Versioning non disponibile: '+e.message);}
  if(game!==next)return;
  renderVersions();
  quickDiagnostics?.setGame(game.id);
  ++launchId;
  clearRuntime();
  updateMode('play');
  UI.hoverBox.hidden=true;
  UI.searchAssets.value='';
  UI.assetKind.value='all';
  updateHeader();renderGameList();renderAssets();renderAssetDetails();showHover(null);
  try{location.hash='game='+encodeURIComponent(game.id)}catch{}
  await loadDraftList();
  closeMobileList();
  void launchGame(false);
}
function updatePointer(event){
  if(!runtime||mode!=='inspect'||!loaded||pinnedRegion)return;
  const rect=UI.gameFrame.getBoundingClientRect();
  const point={x:event.clientX-rect.left,y:event.clientY-rect.top};
  if(point.x<0||point.y<0||point.x>rect.width||point.y>rect.height){
    applyHover(null);lastPointer=null;return;
  }
  lastPointer=point;
  const hit=runtime.pick(point);
  applyHover(hit);
}
function closeMobileList(){
  UI.gameSidebar.classList.remove('open');
  UI.mobileBackdrop.hidden=true;
}
function bind(){
  byId('reskinVersion').addEventListener('change',e=>void changeBranch(e.target.value));
  byId('versionFork').addEventListener('click',()=>void createBranch(false));
  byId('versionCheckpoint').addEventListener('click',()=>void createBranch(true));
  byId('versionPackage').addEventListener('click',()=>{if(game)void exportVersion(game.id,branch.id).catch(e=>log(e.message));});
  byId('versionCompare').addEventListener('click',()=>comparing?stopCompare():startCompare());
  universalInspector=mountUniversalInspector({getRuntime:()=>runtime,getGame:()=>game,onSelect:item=>{if(!loaded)return;updateMode('inspect');applyHover(item);}});
  quickDiagnostics=initializeDiagnostics({
    getGame:()=>game,
    getFrame:()=>UI.gameFrame,
    getRuntimeReport:()=>runtime?.getReport?.()||null,
    getMessages:()=>requestLog,
  });
  UI.gameList.addEventListener('keydown',e=>{
    if(e.key==='Escape')closeMobileList();
  });
  for(const key of ['searchGames','categoryFilter','statusFilter','sortGames']){
    UI[key].addEventListener(key==='searchGames'?'input':'change',renderGameList);
  }
  UI.searchAssets.addEventListener('input',renderAssets);
  UI.assetKind.addEventListener('change',renderAssets);
  UI.modePlay.addEventListener('click',()=>updateMode('play'));
  UI.modeInspect.addEventListener('click',()=>{
    if(!loaded)return;
    updateMode('inspect');updateRuntime();
  });
  UI.retryGame.addEventListener('click',()=>void launchGame(true));
  UI.fullscreenGame.addEventListener('click',()=>{
    if(document.fullscreenElement)document.exitFullscreen?.();
    else UI.gameStage.requestFullscreen?.();
  });
  UI.inspectSurface.addEventListener('pointermove',updatePointer);
  UI.inspectSurface.addEventListener('pointerdown',updatePointer);
  UI.inspectSurface.addEventListener('pointerleave',()=>{lastPointer=null;if(!pinnedRegion)applyHover(null);});
  UI.inspectSurface.addEventListener('click',()=>{
    // Click is optional. Hover always identifies a sprite first.
    if(selectedObject?.type==='webgl-region'){pinnedRegion={...selectedObject};applyHover(pinnedRegion);return;}
    const source=selectedObject?.source;
    if(!source||!game)return;
    const asset=game.assets.find(a=>localURL(a.url)===source);
    if(asset)selectAsset(asset.path);
  });
  UI.chooseReplacement.addEventListener('click',()=>UI.replacementFile.click());
  UI.replacementFile.addEventListener('change',e=>{
    void replaceAsset(e.target.files?.[0]);
    UI.replacementFile.value='';
  });
  UI.restoreAsset.addEventListener('click',()=>void restoreAsset());
  UI.exportAsset.addEventListener('click',()=>void exportAsset());
  UI.applyReskinGame.addEventListener('click',()=>void launchGame(true));
  UI.atlasFrameSelect.addEventListener('change',()=>void updateAtlasPreview());
  UI.atlasPatchButton.addEventListener('click',()=>UI.atlasPatchFile.click());
  UI.atlasPatchFile.addEventListener('change',event=>{
    const file=event.target.files?.[0];
    event.target.value='';
    void (async()=>{
      const asset=selectedAsset,currentGame=game,currentBranch=branch.id,key=draftScope();
      if(branch.locked||!key)return;
      const frame=atlasFrames.find(f=>f.name===UI.atlasFrameSelect.value);
      if(!file||!asset||!frame||!currentGame)return;
      UI.reskinStatus.className='hint';
      UI.reskinStatus.textContent='Composizione del frame nell’atlante…';
      try {
        const previous=await readDraft(key,asset.path);
        const composed=await patchAtlasFrame(asset,frame,file,previous?.blob||null);
        if(selectedAsset!==asset||game!==currentGame||branch.id!==currentBranch)return;
        atlasWanted=frame.name;
        await replaceAsset(composed);
      } catch(error){
        UI.reskinStatus.className='hint error';
        UI.reskinStatus.textContent=String(error.message||error);
      }
    })();
  });
  UI.exportManifest.addEventListener('click',()=>void exportManifest());
  UI.downloadCatalog.addEventListener('click',()=>{
    if(catalog)downloadJSON(catalog,'2night-69-games-compatibility.json');
  });
  UI.toggleList.addEventListener('click',()=>{
    UI.gameSidebar.classList.add('open');UI.mobileBackdrop.hidden=false;
  });
  UI.closeList.addEventListener('click',closeMobileList);
  UI.mobileBackdrop.addEventListener('click',closeMobileList);
  window.addEventListener('resize',()=>{if(pinnedRegion){pinnedRegion=null;applyHover(null);}if(lastPointer&&runtime&&mode==='inspect')
    applyHover(runtime.pick(lastPointer));});
  window.setInterval(()=>{if(loaded&&runtime&&game?.engine==='unity'&&mode==='inspect'&&lastPointer&&!pinnedRegion)applyHover(runtime.pick(lastPointer));},240);
  inspectorTick=window.setInterval(()=>{
    if(!runtime||!loaded)return;
    if(mode==='inspect'&&lastPointer&&!pinnedRegion)applyHover(runtime.pick(lastPointer));
    updateRuntime();
  },850);
}
async function boot(){
  bind();
  resourceLayer=await initializeAssetReskin();
  log('Reskin layer: '+resourceLayer.reason);
  try{
    const response=await fetch('./catalog.json',{cache:'no-store'});
    if(!response.ok)throw new Error('catalog.json HTTP '+response.status);
    catalog=await response.json();
    if(!Array.isArray(catalog.games)||catalog.games.length!==catalog.total)
      throw new Error('Inventario incoerente');
    populateCategories();renderCount();renderGameList();
    const hinted=decodeURIComponent(
      location.hash.replace(/^#game=/,'').replace(/^#/,''));
    const visible=filters();
    const valid=visible.find(g=>g.id===hinted);
    const preferred=valid||visible.find(g=>g.status==='experimental')||visible[0];
    if(preferred)await selectGame(preferred.id);
    log('Catalogo: '+catalog.total+' giochi. Compatibilità verificata per entrypoint, non per gameplay.');
  }catch(error){
    notice('Catalogo non disponibile',String(error.message||error)+
      '. Avvia un server HTTP dalla radice del repository: python3 -m http.server 8000');
    UI.gameCount.textContent='Errore caricamento catalogo';
    log('Catalogo: '+String(error));
  }
}
void boot();
