/* Persistent local reskin drafts. IndexedDB stores Blobs without modifying
 * the game ZIP, original mirror files or GitHub repository.
 * This is a local draft, NOT a permanent GitHub commit. */
const NAME='2night-multigame-drafts-v1';
const STORE='patches';
let dbPromise;

function open() {
  if (dbPromise) return dbPromise;
  dbPromise=new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){
      reject(new Error('IndexedDB non disponibile in questo browser'));
      return;
    }
    const req=indexedDB.open(NAME,1);
    req.onupgradeneeded=()=>req.result.createObjectStore(STORE,{keyPath:'key'});
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error||new Error('IndexedDB non disponibile'));
  });
  return dbPromise;
}

async function transaction(mode, callback) {
  const db=await open();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,mode);
    const st=tx.objectStore(STORE);
    let value;
    try { value=callback(st); } catch(e) { reject(e);return; }
    tx.oncomplete=()=>resolve(value);
    tx.onerror=()=>reject(tx.error||new Error('Salvataggio non riuscito'));
    tx.onabort=()=>reject(tx.error||new Error('Salvataggio interrotto'));
  });
}

function key(gameId,assetPath){return gameId+':'+assetPath;}
export async function saveDraft(gameId,assetPath,blob,meta={}){
  if(!(blob instanceof Blob)||blob.size>20*1024*1024)
    throw new Error('Il file deve essere un’immagine inferiore a 20 MB');
  await transaction('readwrite',st=>st.put({
    key:key(gameId,assetPath),gameId,assetPath,blob,
    width:meta.width||0,height:meta.height||0,
    updatedAt:new Date().toISOString(),
  }));
}
export async function readDraft(gameId,assetPath){
  const db=await open();
  return new Promise((resolve,reject)=>{
    const req=db.transaction(STORE).objectStore(STORE).get(key(gameId,assetPath));
    req.onsuccess=()=>resolve(req.result||null);
    req.onerror=()=>reject(req.error);
  });
}
export async function listDrafts(gameId){
  const db=await open();
  return new Promise((resolve,reject)=>{
    const req=db.transaction(STORE).objectStore(STORE).getAll();
    req.onsuccess=()=>resolve((req.result||[]).filter(p=>p.gameId===gameId));
    req.onerror=()=>reject(req.error);
  });
}
export async function clearDraft(gameId,assetPath){
  await transaction('readwrite',st=>st.delete(key(gameId,assetPath)));
}
export async function clearGameDrafts(gameId){
  const items=await listDrafts(gameId);
  await transaction('readwrite',st=>{
    for(const row of items)st.delete(row.key);
  });
}
export function downloadBlob(blob,filename){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),6000);
}
export function downloadJSON(data,filename){
  downloadBlob(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),filename);
}

export async function copyDraftScope(from,to){
  const items=await listDrafts(from);
  await transaction('readwrite',st=>{
    for(const row of items)st.add({...row,key:key(to,row.assetPath),gameId:to});
  });
}
