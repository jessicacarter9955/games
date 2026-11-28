/* Runs only in locally served game HTML, before its own scripts. */
(()=>{
  if(window.__nightGameDiagnostics)return;
  window.__nightGameDiagnostics=true;
  let sent=0;
  const limit=300;
  const safe=value=>{
    let text='';
    try{text=value instanceof Error?value.stack||value.message:
      typeof value==='string'?value:JSON.stringify(value)??String(value);}
    catch{text=String(value);}
    return text.replace(/(Bearer\s+)[A-Za-z0-9._~+/-]+/gi,'$1[REDACTED]')
      .replace(/((?:token|secret|api[_-]?key|authorization|password|session|code)=)[^&\s]+/gi,'$1[REDACTED]')
      .replace(/(https?:\/\/[^\s?#]+)\?[^#\s)]+/gi,'$1?[query removed]')
      .slice(0,1600);
  };
  const url=value=>{
    try{const u=new URL(value,location.href);
      return (u.origin===location.origin?'':u.hostname)+u.pathname.slice(0,240);
    }catch{return safe(value).slice(0,240);}
  };
  const emit=(level,kind,message)=>{
    if(window.parent===window)return;
    if(sent>=limit){
      if(sent===limit){
        sent++;
        try{window.parent.postMessage({type:'2night-game-diagnostic',
          level:'warning',kind:'capture-limit',
          message:'Game diagnostic bridge reached 300 events; later events omitted.'},'*');}catch{}
      }
      return;
    }
    sent++;
    try{window.parent.postMessage({type:'2night-game-diagnostic',
      level,kind,message:safe(message),page:url(location.href)},'*');}catch{}
  };
  window.addEventListener('error',event=>{
    const resource=event.target?.src||event.target?.href;
    if(resource){emit('error','resource',url(resource));return;}
    emit('error','exception',(event.message||'JavaScript error')+
      (event.filename?' at '+url(event.filename)+':'+event.lineno+':'+event.colno:'')+
      (event.error?.stack?' | '+event.error.stack:''));
  },true);
  window.addEventListener('unhandledrejection',event=>
    emit('error','promise',event.reason||'Unhandled promise rejection'));
  for(const level of ['error','warn']){
    try{
      const original=console[level];
      console[level]=function(...args){
        emit(level==='error'?'error':'warning','console-'+level,
          args.map(safe).join(' '));
        return original.apply(this,args);
      };
    }catch{}
  }
  try{
    const original=window.fetch;
    if(typeof original==='function')window.fetch=function(...args){
      const target=args[0]?.url||args[0];
      return original.apply(this,args).then(response=>{
        if(response.status>=400)emit('error','fetch-http',
          response.status+' '+url(response.url||target));
        return response;
      },error=>{
        emit('error','fetch-network',url(target)+' '+safe(error));
        throw error;
      });
    };
  }catch{}
  try{
    const original=XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open=function(method,target,...rest){
      this.addEventListener('loadend',()=>{
        if(this.status>=400)emit('error','xhr-http',
          this.status+' '+url(this.responseURL||target));
      },{once:true});
      this.addEventListener('error',()=>
        emit('error','xhr-network',url(this.responseURL||target)),{once:true});
      return original.call(this,method,target,...rest);
    };
  }catch{}
  try{
    new PerformanceObserver(list=>{
      for(const entry of list.getEntries()){
        if(Number(entry.responseStatus)>=400)emit('error','network-http',
          entry.responseStatus+' '+url(entry.name));
      }
    }).observe({type:'resource',buffered:true});
  }catch{}
})();


// WebGL inspection transport: only read frames when explicitly requested by Inspector.
// Never change render state, shaders, preserveDrawingBuffer or publisher SDK.
(()=>{
  if(window.__nightWebGLInspector)return;
  const states=new WeakMap(), contexts=new Set();
  const MAX_TEXTURES=1200;
  let pending=null, captured=null, lastCapture=0, active=false, scratch=null, pngRequest=null;
  function state(gl){
    let s=states.get(gl);
    if(!s){s={gl,unit:0,bindings:new Map(),textures:new Map(),drawCalls:0};
      states.set(gl,s);contexts.add(s);}
    return s;
  }
  function wrap(proto,name,after){
    const desc=Object.getOwnPropertyDescriptor(proto,name);
    if(typeof desc?.value!=='function')return;
    const original=desc.value;
    try{Object.defineProperty(proto,name,{...desc,value:function(...args){
      const result=original.apply(this,args);
      try{after(this,args,result);}catch{}
      return result;
    }});}catch{}
  }
  function bound(s,target){
    // Cube faces are bound via TEXTURE_CUBE_MAP, not individual faces.
    return s.bindings.get(s.unit+':'+(target>=34069&&target<=34074?34067:target));
  }
  function upload(gl,args,kind){
    const s=state(gl),tex=bound(s,args[0]);
    if(!tex)return;
    let info=s.textures.get(tex);
    if(!info){if(s.textures.size>=MAX_TEXTURES)return;
      info={id:'gltex-'+s.textures.size+'-'+(++serial),uploads:0};s.textures.set(tex,info);}
    info.uploads++;info.target=args[0];info.method=kind;
    if(kind==='texImage2D'||kind==='compressedTexImage2D'||kind==='texStorage2D'){
      const src=kind==='texImage2D'&&args.length===6?args[5]:null;
      const w=src?.videoWidth||src?.naturalWidth||src?.width||
        (kind==='texStorage2D'?args[3]:args.length>=8?args[3]:undefined);
      const h=src?.videoHeight||src?.naturalHeight||src?.height||
        (kind==='texStorage2D'?args[4]:args.length>=8?args[4]:undefined);
      if(Number.isFinite(w)&&w>0)info.width=w;
      if(Number.isFinite(h)&&h>0)info.height=h;
      const url=src?.currentSrc||src?.src;
      if(typeof url==='string'){try{const u=new URL(url,location.href);
        if(u.origin===location.origin)info.source=u.pathname;}catch{}}
      info.format=kind==='texStorage2D'?args[2]:args[2];
    }
  }
  let serial=0;
  const prototypes=[window.WebGLRenderingContext?.prototype,window.WebGL2RenderingContext?.prototype].filter(Boolean);
  for(const proto of prototypes){
    wrap(proto,'activeTexture',(gl,a)=>{state(gl).unit=a[0]-33984;});
    wrap(proto,'bindTexture',(gl,a)=>{const s=state(gl);s.bindings.set(s.unit+':'+a[0],a[1]);});
    wrap(proto,'deleteTexture',(gl,a)=>{const s=state(gl);s.textures.delete(a[0]);
      for(const [key,value] of s.bindings)if(value===a[0])s.bindings.delete(key);});
    for(const method of ['texImage2D','texSubImage2D','compressedTexImage2D','texStorage2D'])
      wrap(proto,method,(gl,a)=>upload(gl,a,method));
    for(const method of ['drawArrays','drawElements','drawArraysInstanced','drawElementsInstanced','drawRangeElements'])
      wrap(proto,method,(gl)=>{if(active)state(gl).drawCalls++;});
  }
  function capture(){
    if(!active||!pending||performance.now()-lastCapture<160)return;
    const c=pending;
    if(!c.isConnected||!c.width||!c.height){pending=null;return;}
    lastCapture=performance.now();
    try{
      const scale=Math.min(1,480/Math.max(c.width,c.height));
      const w=Math.max(1,Math.round(c.width*scale)),h=Math.max(1,Math.round(c.height*scale));
      scratch ||= document.createElement('canvas');
      if(scratch.width!==w)scratch.width=w;if(scratch.height!==h)scratch.height=h;
      const ctx=scratch.getContext('2d',{willReadFrequently:true});
      ctx.clearRect(0,0,w,h);ctx.drawImage(c,0,0,w,h);
      const image=ctx.getImageData(0,0,w,h);
      // A cleared or unavailable WebGL backbuffer must not produce fake objects.
      let varied=false;const p=image.data;
      for(let i=4;i<p.length;i+=Math.max(4,Math.floor(p.length/256/4)*4)){
        if(Math.abs(p[i]-p[0])+Math.abs(p[i+1]-p[1])+Math.abs(p[i+2]-p[2])+Math.abs(p[i+3]-p[3])>24){varied=true;break;}
      }
      if(varied){captured={canvas:c,width:w,height:h,data:p,at:performance.now()};pending=null;}
    }catch{pending=null;}
  }
  function captureFullPNG(){
    if(!pngRequest)return;
    const req=pngRequest,c=req.canvas;
    if(!c.isConnected||!c.width||!c.height)return;
    try{
      const out=document.createElement('canvas');out.width=c.width;out.height=c.height;
      const ctx=out.getContext('2d',{willReadFrequently:true});ctx.drawImage(c,0,0);
      const p=ctx.getImageData(0,0,out.width,out.height).data;
      let varied=false;
      for(let i=4;i<p.length;i+=Math.max(4,Math.floor(p.length/512/4)*4)){
        if(Math.abs(p[i]-p[0])+Math.abs(p[i+1]-p[1])+Math.abs(p[i+2]-p[2])+Math.abs(p[i+3]-p[3])>24){varied=true;break;}
      }
      if(!varied)return;
      pngRequest=null;clearTimeout(req.timer);
      out.toBlob(blob=>blob?req.resolve(blob):req.reject(Error('PNG non disponibile')),'image/png');
    }catch(e){pngRequest=null;clearTimeout(req.timer);req.reject(e);}
  }
  // Capture after the game's RAF callback, before the compositor clears the backbuffer.
  const raf=window.requestAnimationFrame;
  if(typeof raf==='function')window.requestAnimationFrame=function(callback){
    return raf.call(this,function(time){try{return callback.call(this,time);}finally{if(pending)capture();if(pngRequest)captureFullPNG();}});
  };
  window.__nightWebGLInspector={
    capturePNG(canvas){return new Promise((resolve,reject)=>{
      if(pngRequest){reject(Error('Cattura già in corso'));return;}
      const req={canvas,resolve,reject,timer:setTimeout(()=>{if(pngRequest===req)pngRequest=null;reject(Error('Nessun frame renderizzato leggibile'));},4000)};
      pngRequest=req;captureFullPNG();
    });},
    setActive(value){active=!!value;if(!active){pending=null;captured=null;}},
    request(canvas){if(active&&canvas&&(!captured||captured.canvas!==canvas||performance.now()-captured.at>180)){
      pending=canvas;
      // Fallback for games with a preserved buffer or non-RAF renderer.
      if(!captured)capture();
    }},
    frame(canvas){return captured?.canvas===canvas&&performance.now()-captured.at<1500?captured:null;},
    report(){const textures=[];let drawCalls=0;
      for(const s of contexts){if(!s.gl.canvas?.isConnected)continue;drawCalls+=s.drawCalls;
        for(const t of s.textures.values())if(textures.length<MAX_TEXTURES)textures.push({...t});}
      return {contexts:[...contexts].filter(s=>s.gl.canvas?.isConnected).length,drawCalls,textures};}
  };
})();
