/* Per-game reskin branches. Original has no patch scope. */
import {listDrafts,copyDraftScope,downloadJSON} from './storage.js';
const KEY='2night-reskin-versions-v1';
const original={id:'original',name:'Originale',parent:null,locked:true};
function read(){return JSON.parse(localStorage.getItem(KEY)||'{}');}
function write(data){localStorage.setItem(KEY,JSON.stringify(data));}
export function scope(game,id){return id==='original'?null:id==='legacy'?game:game+'@'+id;}
export function versions(game){return [original,...(read()[game]?.branches||[])];}
export function activeVersion(game){const id=read()[game]?.active||'original';return versions(game).find(v=>v.id===id)||original;}
export function selectVersion(game,id){
  if(!versions(game).some(v=>v.id===id))throw Error('Versione sconosciuta');
  const data=read();data[game]??={branches:[]};data[game].active=id;write(data);
}
export async function prepareVersions(game){
  const data=read();data[game]??={branches:[],active:'original'};
  const item=data[game];
  if(!item.branches.some(v=>v.id==='legacy')&&(await listDrafts(game)).length)
    item.branches.push({id:'legacy',name:'Bozze precedenti',parent:'original',locked:true});
  if(game==='idlecandyclicker2'&&!item.branches.some(v=>v.id==='candy-test'))
    item.branches.push({id:'candy-test',name:'Candy · Reskin 01',parent:'original',locked:false});
  write(data);
  return activeVersion(game);
}
export async function forkVersion(game,parent,name,locked=false){
  if(!versions(game).some(v=>v.id===parent))throw Error('Parent non valido');
  const label=String(name||'').trim().slice(0,80);
  if(!label)throw Error('Inserisci un nome');
  const id=crypto.randomUUID();
  const from=scope(game,parent),to=scope(game,id);
  if(from)await copyDraftScope(from,to);
  const data=read();data[game]??={branches:[]};
  data[game].branches.push({id,name:label,parent,locked,createdAt:new Date().toISOString()});
  data[game].active=id;write(data);
  return id;
}
function inheritedCandyVariant(game,id){
  if(game!=='idlecandyclicker2'||id==='original')return false;
  const all=versions(game),seen=new Set();
  while(id&&!seen.has(id)){
    if(id==='candy-test')return true;
    seen.add(id);id=all.find(v=>v.id===id)?.parent;
  }
  return false;
}
export function versionURL(entry,game,id){
  const url=new URL(entry,location.origin);
  // Separate generated launcher changes the Unity data URL, not the original.
  if(inheritedCandyVariant(game,id)&&url.pathname.endsWith('/_reskin_local_bootstrap/index.html')){
    url.pathname=url.pathname.replace(/index\.html$/,'index.candy-reskin-01.html');
  }
  url.searchParams.set('night_game',game);
  url.searchParams.set('night_variant',id);
  return url;
}
export async function exportVersion(game,id){
  const branch=versions(game).find(v=>v.id===id);
  if(!branch)throw Error('Versione sconosciuta');
  const key=scope(game,id),rows=key?await listDrafts(key):[];
  const assets=await Promise.all(rows.map(async r=>{
    const data=await new Promise((resolve,reject)=>{
      const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(r.blob);
    });
    return {assetPath:r.assetPath,width:r.width,height:r.height,updatedAt:r.updatedAt,data};
  }));
  downloadJSON({schema:1,gameId:game,branch,ancestry:versions(game),binaryVariant:inheritedCandyVariant(game,id)?'candy-test':null,assets},game+'-'+id+'.reskin.json');
}
