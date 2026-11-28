// Pixel segmentation is a visual candidate, not an engine object or texture.
export function segmentRegion(frame, px, py){
  const {width:w,height:h,data}=frame;
  const x=Math.max(0,Math.min(w-1,Math.floor(px))),y=Math.max(0,Math.min(h-1,Math.floor(py)));
  if(!w||!h||data.length!==w*h*4)return null;
  const seed=(y*w+x)*4;
  if(data[seed+3]<16)return null;
  const max=Math.min(16000,Math.floor(w*h*.22));
  const queue=new Int32Array(max+1),seen=new Uint8Array(w*h);
  const origin=y*w+x;queue[0]=origin;seen[origin]=1;
  let head=0,tail=1,minX=x,maxX=x,minY=y,maxY=y;
  const similar=(i,j,limit)=>Math.abs(data[i]-data[j])+Math.abs(data[i+1]-data[j+1])+Math.abs(data[i+2]-data[j+2])+Math.abs(data[i+3]-data[j+3])<=limit;
  while(head<tail&&tail<=max){
    const k=queue[head++],cx=k%w,cy=Math.floor(k/w);
    minX=Math.min(minX,cx);maxX=Math.max(maxX,cx);minY=Math.min(minY,cy);maxY=Math.max(maxY,cy);
    const neighbors=[cx>0?k-1:-1,cx<w-1?k+1:-1,cy>0?k-w:-1,cy<h-1?k+w:-1];
    for(const n of neighbors){if(n<0||seen[n])continue;seen[n]=1;
      if(similar(n*4,seed,105)&&similar(n*4,k*4,64)){
        if(tail===max)return null;queue[tail++]=n;}}
  }
  const bw=maxX-minX+1,bh=maxY-minY+1;
  if(tail<8||bw<3||bh<3||bw*bh>w*h*.45)return null;
  // Bounding box only: no claim that the whole object shares the seed colour.
  return {x:minX,y:minY,w:bw,h:bh,pixels:tail};
}
export function pickWebGL(win,canvas,p){
  const transport=win?.__nightWebGLInspector;
  const r=canvas.getBoundingClientRect();
  if(!r.width||!r.height)return null;
  transport?.request(canvas);
  const frame=transport?.frame(canvas);
  const pending={type:'webgl-pending',name:'WebGL · acquisizione frame',x:p.x,y:p.y,w:0,h:0,source:'',
    note:'Frame non ancora leggibile. Nessun oggetto identificato; attendi un frame renderizzato.'};
  if(!frame)return {...pending,note:transport?pending.note:'Hook pre-avvio assente. Ricarica il gioco dal server locale.'};
  const sx=frame.width/r.width,sy=frame.height/r.height;
  const hit=segmentRegion(frame,(p.x-r.left)*sx,(p.y-r.top)*sy);
  const local=hit||{x:Math.max(0,Math.min(frame.width-1,(p.x-r.left)*sx-14)),
    y:Math.max(0,Math.min(frame.height-1,(p.y-r.top)*sy-14)),w:28,h:28};
  local.w=Math.min(local.w,frame.width-local.x);local.h=Math.min(local.h,frame.height-local.y);
  return {type:'webgl-region',name:hit?'Regione visiva · WebGL':'Area manuale · WebGL',
    source:'',x:r.left+local.x/sx,y:r.top+local.y/sy,w:local.w/sx,h:local.h/sy,
    coordinateSpace:'iframe-css',properties:{method:hit?'color-component':'local-window',pixels:hit?.pixels,
      frameAgeMs:Math.round(win.performance.now()-frame.at)},
    note:hit?'Contorno stimato dal colore del frame; non è un GameObject o una texture identificata.':'Nessun contorno affidabile: area locale regolabile, non uno sprite.'};
}
export function cropWebGL(win,canvas,item,target){
  const frame=win?.__nightWebGLInspector?.frame(canvas);
  if(!frame||!target)return false;
  const r=canvas.getBoundingClientRect();
  if(!r.width||!r.height)return false;
  const sx=frame.width/r.width,sy=frame.height/r.height;
  const x=Math.max(0,Math.floor((item.x-r.left)*sx)),y=Math.max(0,Math.floor((item.y-r.top)*sy));
  const w=Math.min(frame.width-x,Math.ceil(item.w*sx)),h=Math.min(frame.height-y,Math.ceil(item.h*sy));
  if(w<1||h<1)return false;
  const src=target.ownerDocument.createElement('canvas');src.width=frame.width;src.height=frame.height;
  const ctx=src.getContext('2d'),image=ctx.createImageData(frame.width,frame.height);
  image.data.set(frame.data);ctx.putImageData(image,0,0);
  const scale=Math.min(1,260/w,150/h);
  target.width=Math.max(1,Math.round(w*scale));target.height=Math.max(1,Math.round(h*scale));
  target.getContext('2d').drawImage(src,x,y,w,h,0,0,target.width,target.height);
  return true;
}
