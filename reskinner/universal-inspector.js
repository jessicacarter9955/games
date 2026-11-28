// Read-only object explorer. No speculative engine actions.
export function mountUniversalInspector({getRuntime,onSelect,getGame}){
  const root=document.getElementById('universalInspector');
  if(!root)return {reset(){},observe(){}};
  const by=id=>document.getElementById(id);
  const rows=by('uiObjectRows'), details=by('uiObjectDetails'), filter=by('uiObjectSearch'),
    summary=by('uiObjectSummary'), timeline=by('uiTimeline'), record=by('uiRecord');
  let snapshot=null,selected=null,frames=[],started=0,lastSample=0,lastKey='',recording=false;
  function render(){
    rows.replaceChildren();
    const q=filter.value.toLowerCase();
    const items=(snapshot?.objects||[]).filter(o=>[o.name,o.type,o.source].join(' ').toLowerCase().includes(q));
    summary.textContent=snapshot? snapshot.engine+' · '+items.length+' / '+snapshot.objects.length+' oggetti osservati'+(snapshot.truncated?' · DOM limitato':''):'Nessuna scansione';
    for(const o of items.slice(0,200)){
      const b=document.createElement('button');b.type='button';b.className='button ghost block';
      b.style.textAlign='left';
      b.textContent=(o.treeDepth?'· '.repeat(Math.min(o.treeDepth,8)):'')+o.name+' ['+o.type+']';
      b.onclick=()=>{
        selected=o;
        details.textContent=JSON.stringify({name:o.name,type:o.type,id:o.objectId,parent:o.parentId,source:o.source,
          coordinateSpace:o.coordinateSpace,x:o.x,y:o.y,width:o.w,height:o.h,crop:o.crop,properties:o.properties},null,2);
        if(o.coordinateSpace==='iframe-css')onSelect(o);
      };
      rows.append(b);
    }
    if(items.length>200){const p=document.createElement('p');p.textContent='Primi 200 risultati: usa la ricerca.';rows.append(p);}
  }
  function refresh(){
    try{snapshot=getRuntime()?.snapshot?.()||null;render();
      by('uiLimits').textContent=snapshot?.limitations?.join(' ')||'Avvia un gioco locale.';
    }catch(e){summary.textContent='Scansione non disponibile: '+e.message;}
  }
  function reset(){
    snapshot=null;selected=null;frames=[];recording=false;lastSample=0;lastKey='';record.textContent='● Registra hover';
    details.textContent='Seleziona un oggetto';timeline.textContent='Nessun campione';render();
  }
  function observe(item){
    if(!recording||!item)return;
    const now=performance.now();if(now-lastSample<150)return;
    const key=JSON.stringify([item.name,item.source,item.crop,item.x,item.y,item.w,item.h]);
    if(key===lastKey)return;
    lastKey=key;lastSample=now;
    frames.push({ms:Math.round(now-started),name:item.name,type:item.type,source:item.source,crop:item.crop,
      x:item.x,y:item.y,w:item.w,h:item.h,properties:item.properties});
    if(frames.length>=300){recording=false;record.textContent='● Registra hover';}
    timeline.textContent=frames.length+' campioni · '+(frames.at(-1).ms/1000).toFixed(1)+' s · '+(recording?'registrazione':'ferma');
  }
  by('uiScan').onclick=refresh;filter.oninput=render;
  record.onclick=()=>{
    if(recording){recording=false;record.textContent='● Registra hover';timeline.textContent=frames.length+' campioni · ferma';return;}
    frames=[];lastKey='';lastSample=0;started=performance.now();recording=true;record.textContent='■ Ferma';timeline.textContent='Muovi il mouse sul gioco in Ispeziona LIVE';
  };
  by('uiExport').onclick=()=>{
    const data={game:getGame()?.id,engine:snapshot?.engine,objects:snapshot?.objects||[],samples:frames};
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='2night-inspector.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  return {reset,observe};
}
