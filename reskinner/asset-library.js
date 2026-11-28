// Global library is independent from gameplay and reskin draft storage.
const KEY = '2night.globalAssetReviews.v1';
const PAGE = 60;
const categories = ['Background','Personaggi','Pulsanti','Icone','UI','Effetti','Sprite',
  'Atlanti','Audio','Video','Font','Modelli 3D','Codice','Dati','Da classificare'];
const rules = [
  ['Background', /(?:^|[\/_. -])(backgrounds?|bg|backdrop|bgs)(?:$|[\/_. -])/i],
  ['Personaggi', /(?:character|avatar|player|enemy|hero|npc|monster|portrait)/i],
  ['Pulsanti', /(?:button|(?:^|[\/_. -])btn(?:$|[\/_. -]))/i],
  ['Icone', /(?:icon|favicon|badge)/i],
  ['Effetti', /(?:particle|explosion|spark|effect|(?:^|[\/_. -])vfx(?:$|[\/_. -]))/i],
  ['Sprite', /(?:sprite|tileset|tilemap)/i],
  ['UI', /(?:\/ui\/|\/hud\/|menu|panel|dialog|popup|interface|logo)/i],
];
export function classify(asset) {
  const fixed = {atlas:'Atlanti', audio:'Audio', video:'Video', font:'Font',
    model:'Modelli 3D', code:'Codice', data:'Dati'};
  if (fixed[asset.kind]) return {category:fixed[asset.kind], confidence:1};
  const name = asset.name || '';
  const tail = String(asset.path || '').split('/').slice(-3).join('/');
  const nameMatch = rules.find(([,re])=>re.test(name));
  if (nameMatch) return {category:nameMatch[0], confidence:.85};
  const pathMatch = rules.find(([,re])=>re.test(tail));
  return pathMatch ? {category:pathMatch[0],confidence:.65} :
    {category:'Da classificare',confidence:0};
}
const id = a => JSON.stringify([a.gameId,a.path]);
const el = (tag, text, parent) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (parent) parent.append(node);
  return node;
};
function validReview(x) {
  return x && categories.includes(x.category) && Array.isArray(x.tags) &&
    x.tags.every(t=>typeof t==='string'&&t.length<=120) && x.tags.length<=50 &&
    ['confirmed','corrected'].includes(x.status);
}
function readReviews() {
  const parsed = JSON.parse(localStorage.getItem(KEY)||'{}');
  if (!parsed || typeof parsed!=='object'||Array.isArray(parsed)) throw Error('Archivio revisioni non valido');
  return Object.fromEntries(Object.entries(parsed).filter(([k,v])=>validReview(v)));
}
function safeURL(raw) {
  try {
    const u = new URL(raw,location.origin);
    return u.origin===location.origin && /^\/(extracted|local-mirror)\//.test(u.pathname)
      ? u.href : null;
  } catch { return null; }
}
function downloadJSON(value, name) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'}));
  const a = el('a'); a.href=url; a.download=name; a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function mountLibrary(trigger) {
  const d=el('dialog',undefined,document.body); d.className='global-library';
  const header=el('header',undefined,d);
  el('h2','Global Asset Manager',header);
  const close=el('button','Chiudi ×',header); close.type='button';
  close.onclick=()=>d.close();
  const message=el('p','',d); message.setAttribute('role','status');
  const toolbar=el('div',undefined,d); toolbar.className='ga-toolbar';
  const search=el('input',undefined,toolbar); search.type='search';
  search.placeholder='Cerca nome, percorso, tag'; search.setAttribute('aria-label','Cerca asset');
  const filters={};
  for(const [key,label] of Object.entries({gameId:'Gioco',gameCategory:'Categoria gioco',kind:'Tipo',
    category:'Categoria asset',extension:'Estensione',status:'Revisione',duplicates:'Duplicati'})){
    const field=el('label',label,toolbar);
    filters[key]=el('select',undefined,field);
  }
  const actions=el('div',undefined,d); actions.className='ga-actions';
  const rescan=el('button','Aggiorna inventario',actions);
  const dedup=el('button','Cerca duplicati SHA-256',actions);
  const exportButton=el('button','Esporta revisioni JSON',actions);
  const importButton=el('button','Importa revisioni JSON',actions);
  const file=el('input',undefined,actions); file.type='file'; file.accept='.json,application/json'; file.hidden=true;
  const bulk=el('div',undefined,d); bulk.className='ga-actions';
  const all=el('button','Seleziona pagina',bulk);
  const clear=el('button','Deseleziona tutto',bulk);
  const bulkCategory=el('select',undefined,bulk); bulkCategory.setAttribute('aria-label','Categoria da applicare');
  for (const c of categories) {const o=el('option',c,bulkCategory);o.value=c;}
  const apply=el('button','Applica categoria ai selezionati',bulk);
  const confirm=el('button','Conferma selezionati',bulk);
  const count=el('p','',d);
  const grid=el('div',undefined,d); grid.className='ga-grid';
  const pager=el('div',undefined,d); pager.className='ga-actions';
  const prev=el('button','← Precedente',pager);
  const pageText=el('span','',pager);
  const next=el('button','Successiva →',pager);
  let rows=[], reviews={}, selected=new Set(), page=0, dedupScanned=false, busy=false;
  let coverage='', errorCount=0, storageOK=true;
  function loadReviews() {
    try{reviews=readReviews();storageOK=true;}
    catch(e){storageOK=false;message.textContent='Revisioni non leggibili: '+e.message;}
  }
  const effective=a=>reviews[id(a)]||{...a.auto,tags:[],status:'pending'};
  function choices(select,items) {
    const old=select.value; select.replaceChildren();
    const any=el('option','Tutti',select);any.value='';
    for(const [value,label] of items){const o=el('option',label,select);o.value=value;}
    if([...select.options].some(o=>o.value===old))select.value=old;
  }
  function populate() {
    for(const key of ['gameId','gameCategory','kind','extension']){
      const m=new Map(rows.map(a=>[a[key],key==='gameId'?a.gameTitle:a[key]]));
      choices(filters[key],[...m].filter(([v])=>v).sort((a,b)=>String(a[1]).localeCompare(String(b[1]))));
    }
    choices(filters.category,categories.map(c=>[c,c]));
    choices(filters.status,[['pending','Da verificare'],['confirmed','Confermato'],['corrected','Corretto']]);
    choices(filters.duplicates,[['yes','Duplicati esatti'],['no','Senza duplicati rilevati']]);
    filters.duplicates.disabled=!dedupScanned;
    if(!dedupScanned) filters.duplicates.value='';
  }
  function matches() {
    const q=search.value.trim().toLowerCase();
    return rows.filter(a=>{
      const r=effective(a);
      return (!q||[a.name,a.path,a.gameTitle,r.category,...r.tags].join(' ').toLowerCase().includes(q)) &&
        ['gameId','gameCategory','kind','extension'].every(k=>!filters[k].value||a[k]===filters[k].value) &&
        (!filters.category.value||r.category===filters.category.value) &&
        (!filters.status.value||r.status===filters.status.value) &&
        (!filters.duplicates.value||(filters.duplicates.value==='yes')===Boolean(a.duplicateHash));
    });
  }
  function store(changes) {
    try {
      const current=readReviews();
      const merged={...current,...changes};
      localStorage.setItem(KEY,JSON.stringify(merged));
      reviews=merged;storageOK=true;
      message.textContent=coverage+' · Revisioni salvate nel browser.';
      render();
    } catch(e){message.textContent='Salvataggio non riuscito: '+e.message;}
  }
  function review(a,category,tags){
    return {category,tags,status:category===a.auto.category?'confirmed':'corrected',
      updatedAt:new Date().toISOString()};
  }
  function preview(a, card) {
    const url=safeURL(a.url), box=el('div',undefined,card);box.className='ga-preview';
    if(!url){el('span','URL non disponibile',box);return;}
    if(a.kind==='image'){
      const image=el('img',undefined,box);image.loading='lazy';image.alt=a.name;image.src=url;
      image.onerror=()=>{box.replaceChildren();el('span','Anteprima non disponibile',box);};
    }else if(['audio','video'].includes(a.kind)){
      const media=el(a.kind,undefined,box);media.controls=true;media.preload='none';media.src=url;
    }else if(a.kind==='font'&&/\.(ttf|otf|woff2?)$/i.test(a.name)){
      const b=el('button','Anteprima font',box);b.onclick=async()=>{
        try{
          const face=new FontFace('ga-preview-'+Math.random().toString(36).slice(2),'url('+JSON.stringify(url)+')');
          await face.load();document.fonts.add(face);
          b.textContent='Aa Bb 0123';b.style.fontFamily=face.family;
        }catch{b.textContent='Font non leggibile';}
      };
    }else el('span',a.kind.toUpperCase(),box);
  }
  function render(){
    const filtered=matches(), totalPages=Math.max(1,Math.ceil(filtered.length/PAGE));
    page=Math.min(page,totalPages-1);
    const visible=filtered.slice(page*PAGE,(page+1)*PAGE);
    count.textContent=filtered.length+' / '+rows.length+' asset · '+rows.filter(a=>effective(a).status!=='pending').length+
      ' revisionati · '+selected.size+' selezionati'+(errorCount?' · '+errorCount+' errori scansione':'');
    grid.replaceChildren();
    for(const a of visible){
      const r=effective(a), card=el('article',undefined,grid);card.className='ga-card';
      const pick=el('label',undefined,card), check=el('input',undefined,pick);
      check.type='checkbox';check.checked=selected.has(id(a));
      el('span',a.gameTitle,pick);
      check.onchange=()=>{if(check.checked)selected.add(id(a));else selected.delete(id(a));render();};
      preview(a,card);el('strong',a.name,card);
      el('small',a.kind+' · '+Number(a.bytes||0).toLocaleString('it-IT')+' B · '+a.license,card);
      const path=el('small',a.path,card);path.className='ga-path';path.title=a.path;
      el('small','Proposta: '+a.auto.category+' · '+Math.round(a.auto.confidence*100)+'% (euristica)',card);
      if(a.duplicateCount)el('small','Duplicati esatti: '+a.duplicateCount+' · '+a.duplicateHash.slice(0,12),card);
      const category=el('select',undefined,card);category.setAttribute('aria-label','Categoria '+a.name);
      for(const c of categories){const o=el('option',c,category);o.value=c;}
      category.value=r.category;
      const tags=el('input',undefined,card);tags.placeholder='Tag separati da virgola';tags.value=r.tags.join(', ');
      tags.setAttribute('aria-label','Tag '+a.name);
      const save=el('button',r.status==='pending'?'Conferma / correggi':'Salva revisione',card);
      save.onclick=()=>store({[id(a)]:review(a,category.value,tags.value.split(',').map(t=>t.trim().slice(0,120)).filter(Boolean).slice(0,50))});
      el('small',r.status==='pending'?'Da verificare':r.status==='confirmed'?'Confermato':'Corretto',card);
      const url=safeURL(a.url);
      if(url){const link=el('a','Scarica originale',card);link.href=url;link.download=a.name;}
    }
    pageText.textContent='Pagina '+(page+1)+' / '+totalPages;
    prev.disabled=page===0;next.disabled=page>=totalPages-1;
    apply.disabled=confirm.disabled=selected.size===0;
  }
  async function scan(withDedup=false){
    if(busy)return;busy=true;rescan.disabled=dedup.disabled=true;
    message.textContent=withDedup?'Confronto SHA-256 dei file con dimensione uguale…':'Caricamento inventario…';
    try {
      let data;
      const response=await fetch('./asset-library.json'+(withDedup?'?dedup=1':''),{cache:'no-store'});
      if(response.ok) data=await response.json();
      else if(response.status===404){
        if(withDedup)throw Error('Deduplicazione disponibile solo con il server dei mirror aggiornato.');
        const fallback=await fetch('./catalog.json',{cache:'no-store'});
        if(!fallback.ok)throw Error('Catalogo non disponibile');
        const catalog=await fallback.json();
        data={totalGames:catalog.games.length,assets:catalog.games.flatMap(g=>(g.assets||[]).map(a=>({...a,
          gameId:g.id,gameTitle:g.title,gameCategory:g.category,license:a.license||'unknown'}))),dedupScanned:false,limited:true};
      }else throw Error('HTTP '+response.status);
      if(!Array.isArray(data.assets))throw Error('Inventario non valido');
      rows=data.assets.map(a=>({...a,auto:classify(a)}));
      dedupScanned=Boolean(data.dedupScanned);errorCount=data.errors?.length||0;
      coverage=data.totalGames+' giochi nel catalogo · '+new Set(rows.map(a=>a.gameId)).size+
        ' con asset'+(data.limited?' · inventario statico limitato':' · scansione file locali')+
        (dedupScanned?' · SHA-256 completato':' · duplicati non ancora calcolati');
      selected=new Set([...selected].filter(k=>rows.some(a=>id(a)===k)));
      populate();page=0;render();message.textContent=coverage;
      if(!storageOK)message.textContent+=' · Archivio revisioni non leggibile.';
    }catch(e){message.textContent=e.message;}finally{busy=false;rescan.disabled=dedup.disabled=false;}
  }
  search.oninput=()=>{page=0;render();};
  Object.values(filters).forEach(s=>s.onchange=()=>{page=0;render();});
  prev.onclick=()=>{page--;render();};next.onclick=()=>{page++;render();};
  all.onclick=()=>{matches().slice(page*PAGE,(page+1)*PAGE).forEach(a=>selected.add(id(a)));render();};
  clear.onclick=()=>{selected.clear();render();};
  const bulkReview=category=>{const changes={};for(const a of rows)if(selected.has(id(a))){
    const r=effective(a);changes[id(a)]=review(a,category||r.category,r.tags);
  }store(changes);};
  apply.onclick=()=>bulkReview(bulkCategory.value);confirm.onclick=()=>bulkReview(null);
  rescan.onclick=()=>scan();dedup.onclick=()=>scan(true);
  exportButton.onclick=()=>{try{downloadJSON({schemaVersion:1,reviews:readReviews()},'2night-asset-reviews.json');}catch(e){message.textContent=e.message;}};
  importButton.onclick=()=>file.click();
  file.onchange=async()=>{try{
    const data=JSON.parse(await file.files[0].text());
    if(data.schemaVersion!==1||!data.reviews||typeof data.reviews!=='object'||Array.isArray(data.reviews)||
      !Object.values(data.reviews).every(validReview))throw Error('Formato revisioni non valido');
    const current=readReviews();const incoming=Object.fromEntries(Object.entries(data.reviews).filter(([k])=>!Object.hasOwn(current,k)));
    store(incoming);
  }catch(e){message.textContent=e.message;}finally{file.value='';}};
  trigger.onclick=()=>{loadReviews();d.showModal();if(!rows.length)scan();else render();};
  window.addEventListener('storage',e=>{if(e.key===KEY){loadReviews();if(d.open)render();}});
}
const trigger=document.getElementById('globalAssetManager');
if(trigger)mountLibrary(trigger);
