/* Compact, opt-in diagnostics for the 2Night game previewer.
 * The report is assembled locally. Nothing is uploaded or transmitted.
 * It never captures cookies, authorization headers or request bodies.
 */
const MAX_MESSAGES=300;
const MAX_RESOURCES=300;
const MAX_TEXT=1000;

function clean(value, max=MAX_TEXT) {
  let result='';
  try { result=typeof value==='string'?value:
    value instanceof Error?value.stack||value.message:
    JSON.stringify(value)??String(value); }
  catch { result=String(value); }
  return result
    .replace(/(Bearer\s+)[A-Za-z0-9._~+/-]+/gi,'$1[REDACTED]')
    .replace(/((?:token|secret|api[_-]?key|authorization|password|session|code)=)[^&\s]+/gi,'$1[REDACTED]')
    .replace(/(https?:\/\/[^\s?#]+)\?[^#\s)]+/gi,'$1?[query removed]')
    .slice(0,max);
}

function safeURL(raw) {
  if(!raw)return '';
  try {
    const u=new URL(raw,location.href);
    if(!['http:','https:'].includes(u.protocol))return u.protocol;
    // Query and fragment can contain account or session credentials.
    return (u.origin===location.origin?'':u.hostname)+
      u.pathname.slice(0,220);
  } catch { return clean(String(raw),220); }
}

function compactError(err) {
  if(!err)return '';
  return clean(err.stack||err.message||err,1600);
}

function downloadFile(blob,name) {
  const url=URL.createObjectURL(blob);
  const anchor=document.createElement('a');
  anchor.href=url;anchor.download=name;anchor.hidden=true;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
}

function makeFilename(id,extension) {
  const safe=(id||'game').replace(/[^a-z0-9-]/gi,'_').slice(0,60);
  return '2night-'+safe+'-'+new Date().toISOString()
    .replace(/[:.]/g,'-')+'.'+extension;
}

function mediaFrame(stream) {
  return new Promise(async(resolve,reject)=>{
    const video=document.createElement('video');
    video.muted=true;video.playsInline=true;video.srcObject=stream;
    let timer=setTimeout(()=>reject(Error('Timeout video screenshot')),9000);
    try {
      await video.play();
      if(!video.videoWidth||!video.videoHeight){
        await new Promise((res,rej)=>{
          video.onloadeddata=res;
          video.onerror=()=>rej(Error('Nessun frame video'));
          if(video.videoWidth&&video.videoHeight)res();
        });
      }
      // Let Chrome render a frame after the share picker closes.
      if(typeof video.requestVideoFrameCallback==='function'){
        await new Promise(res=>video.requestVideoFrameCallback(()=>res()));
      }else{
        await new Promise(res=>requestAnimationFrame(()=>requestAnimationFrame(res)));
      }
      clearTimeout(timer);
      resolve(video);
    }catch(e){clearTimeout(timer);reject(e);}
  });
}

async function toPNG(canvas) {
  const blob=await new Promise((resolve,reject)=>{
    try{canvas.toBlob(resolve,'image/png');}
    catch(error){reject(error);}
  });
  if(!blob||!blob.size)throw Error('Impossibile creare il PNG');
  return blob;
}

async function fallbackCanvas(frame) {
  let doc;
  try { doc=frame.contentDocument; } catch { /* cross origin */ }
  const canvases=[...(doc?.querySelectorAll('canvas')||[])]
    .filter(c=>c.width>40&&c.height>40)
    .sort((a,b)=>b.width*b.height-a.width*a.height);
  if(!canvases.length)throw Error(
    'La cattura diretta del Canvas non è disponibile. Usa Chrome e condividi questa scheda.');
  const canvas=canvases[0];
  const png=await toPNG(canvas);
  // WebGL often reads back black unless preserveDrawingBuffer is enabled.
  const context=canvas.getContext('2d');
  if(context){
    try{
      const pixels=context.getImageData(0,0,Math.min(12,canvas.width),
        Math.min(12,canvas.height)).data;
      if(!pixels.some((v,i)=>i%4!==3&&v>0))throw Error(
        'Il Canvas sembra vuoto: scegli la scheda Chrome per una cattura completa.');
    }catch(error){ if(error.name!=='SecurityError')throw error; }
  }
  return png;
}

export function initializeDiagnostics({getGame,getFrame,getCaptureFrames,getRuntimeReport,getMessages}){
  const panel=document.getElementById('quickDiagnostics');
  const copyButton=document.getElementById('copyDiagnostics');
  const shotButton=document.getElementById('captureScreenshot');
  const countNode=document.getElementById('diagErrorCount');
  const feedback=document.getElementById('diagFeedback');
  const entries=[];
  let activeWindow=null;
  let activeDocument=null;
  let disposers=[];
  let currentGame='';
  let droppedMessages=0;
  let noticeTimeout=null;

  const update=()=>{
    if(!countNode)return;
    const errors=entries.filter(e=>e.level==='error').length;
    countNode.textContent=errors?String(errors):'0';
    countNode.title=errors+' errori catturati in questa sessione';
    panel?.classList.toggle('has-errors',errors>0);
  };
  const put=(level,kind,message)=>{
    const at=new Date().toISOString();
    const value=clean(message,1600);
    const existing=entries.find(e=>e.level===level&&e.kind===kind&&e.message===value);
    if(existing){
      existing.occurrences=(existing.occurrences||1)+1;
      existing.lastSeen=at;
      return;
    }
    entries.push({at,level,kind,message:value,occurrences:1});
    if(entries.length>MAX_MESSAGES){
      // Keep the first errors (often the real root cause) plus recent failures.
      entries.splice(Math.min(24,entries.length-1),1);
      droppedMessages++;
    }
    update();
  };
  const feedbackText=(message,error=false)=>{
    if(!feedback)return;
    feedback.textContent=message;
    feedback.classList.toggle('error',error);
    if(noticeTimeout)clearTimeout(noticeTimeout);
    noticeTimeout=setTimeout(()=>{feedback.textContent='';},7000);
  };
  const onError=(event)=>{
    if(event.target && event.target!==event.currentTarget &&
      (event.target.src||event.target.href)){
      put('error','resource',safeURL(event.target.src||event.target.href));
      return;
    }
    put('error','exception',clean(event.message||'Errore JavaScript')+
      (event.filename?' at '+safeURL(event.filename)+':'+event.lineno+':'+event.colno:'')+
      (event.error?.stack?' | '+compactError(event.error):''));
  };
  const onRejection=(event)=>{
    put('error','promise',compactError(event.reason)||'Promise rejection');
  };
  window.addEventListener('error',onError,true);
  window.addEventListener('unhandledrejection',onRejection);
  const onGameDiagnostic=event=>{
    if(event.source!==getFrame()?.contentWindow)return;
    try{
      const origin=new URL(event.origin);
      if(origin.port!==location.port||
          !['127.0.0.1','localhost'].includes(origin.hostname))return;
    }catch{return;}
    const data=event.data;
    if(!data||data.type!=='2night-game-diagnostic'||
        typeof data.message!=='string'||typeof data.kind!=='string')return;
    put(data.level==='warning'?'warning':'error',
      'iframe-'+clean(data.kind,40),data.message);
  };
  window.addEventListener('message',onGameDiagnostic);

  function detachFrame() {
    for(const undo of disposers){try{undo();}catch{}}
    disposers=[];
    activeWindow=null;
    activeDocument=null;
  }

  function attachFrame() {
    const frame=getFrame();
    let win;
    try {win=frame?.contentWindow;void win?.document?.documentElement;}
    catch{return;}
    if(!win||!win.document?.documentElement)return;
    if(win===activeWindow&&win.document===activeDocument)return;
    detachFrame();
    activeWindow=win;
    activeDocument=win.document;
    const error=e=>{
      if(e.target && e.target!==win && (e.target.src||e.target.href)){
        put('error','iframe-resource',safeURL(e.target.src||e.target.href));return;
      }
      put('error','iframe-exception',clean(e.message||'Errore gioco')+
        (e.filename?' at '+safeURL(e.filename)+':'+e.lineno+':'+e.colno:'')+
        (e.error?.stack?' | '+compactError(e.error):''));
    };
    const reject=e=>put('error','iframe-promise',compactError(e.reason));
    win.addEventListener('error',error,true);
    win.addEventListener('unhandledrejection',reject);
    disposers.push(()=>{
      win.removeEventListener('error',error,true);
      win.removeEventListener('unhandledrejection',reject);
    });
    for(const level of ['error','warn']){
      try{
        const prior=win.console[level];
        if(typeof prior!=='function')continue;
        const wrapped=function(...args){
          put(level==='error'?'error':'warning',
            'iframe-console-'+level,args.map(v=>clean(v,420)).join(' '));
          return prior.apply(this,args);
        };
        win.console[level]=wrapped;
        disposers.push(()=>{
          if(win.console[level]===wrapped)win.console[level]=prior;
        });
      }catch{}
    }
    // JavaScript exceptions that occurred before iframe load may be missing:
    // HTTP errors are also read from buffered resource timing at copy time.
  }

  function setGame(id){
    currentGame=id||'';
    entries.length=0;
    droppedMessages=0;
    detachFrame();
    update();
    feedbackText('');
  }

  const frameWatch=setInterval(attachFrame,420);
  getFrame()?.addEventListener('load',attachFrame);

  function resourceErrors(win,where) {
    try {
      const errors=win.performance.getEntriesByType('resource')
        .filter(e=>Number(e.responseStatus)>=400);
      return {records:errors.slice(-MAX_RESOURCES)
        .map(e=>({source:where,status:e.responseStatus,url:safeURL(e.name)})),
        omitted:Math.max(0,errors.length-MAX_RESOURCES)};
    }catch {return {records:[],omitted:0};}
  }

  function iframeState(){
    const frame=getFrame();
    if(!frame)return {available:false};
    const state={iframe: safeURL(frame.src),loaded:!frame.hidden,
      sameOrigin:false,title:'',url:'',canvas:[],body:''};
    try {
      const doc=frame.contentDocument;
      if(!doc)return state;
      state.sameOrigin=true;
      state.title=clean(doc.title,160);
      state.url=safeURL(doc.location.href);
      state.body=clean(doc.body?.innerText||'',700);
      state.canvas=[...doc.querySelectorAll('canvas')].slice(0,8).map(c=>({
        width:c.width,height:c.height,visible:c.getBoundingClientRect().width>0,
      }));
    }catch {state.access='iframe inaccessible (cross origin)';}
    return state;
  }

  function report() {
    attachFrame();
    const game=getGame();
    let runtime=null;
    try{runtime=getRuntimeReport?.()||null;}
    catch(error){runtime={error:clean(error)};}
    // Avoid serializing engine objects / enormous graphs or raw query tokens.
    try{
      const serialized=JSON.stringify(runtime);
      runtime=serialized.length>6500?
        {excerpt:clean(serialized,6500),truncated:true}:
        JSON.parse(clean(serialized,serialized.length));
    }catch{runtime={note:'Runtime details unavailable'};}
    const child=activeWindow;
    const topResources=resourceErrors(window,'reskinner');
    const gameResources=child?resourceErrors(child,'game'):
      {records:[],omitted:0};
    const combined=[...topResources.records,...gameResources.records];
    const timings=combined.slice(-MAX_RESOURCES);
    const omittedResources=topResources.omitted+gameResources.omitted+
      Math.max(0,combined.length-MAX_RESOURCES);
    const messages=getMessages?.()||[];
    return {
      type:'2Night Reskinner diagnostic report',
      created:new Date().toISOString(),
      game:{id:game?.id||currentGame||'',title:game?.title||'',
        status:game?.status||'',engine:game?.engine||'',
        entry:safeURL(game?.entry||'')},
      location:safeURL(location.href),
      browser:clean(navigator.userAgent,220),
      iframe:iframeState(),
      runtime,
      recentReskinnerEvents:messages.slice(-35).map(m=>clean(m,400)),
      capturedErrors:entries.slice(-MAX_MESSAGES),
      droppedMessages,
      failedResourceTimings:timings,
      omittedResourceTimings:omittedResources,
      caveat:'Local HTML receives an early diagnostic bridge. Browser-internal errors, service worker failures and remote cross-origin frames may remain invisible to page JavaScript. Network timing includes only HTTP statuses exposed by the browser. No cookies, headers, tokens or request bodies included.',
    };
  }

  async function copyReport() {
    const payload=JSON.stringify(report(),null,2);
    try {
      if(!navigator.clipboard?.writeText)throw Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(payload);
      feedbackText('Diagnostica copiata: incollala qui in chat.');
    } catch {
      // Legacy fallback, still requires an immediate user click.
      const field=document.createElement('textarea');
      field.value=payload;field.setAttribute('readonly','');
      field.style.cssText='position:fixed;top:0;left:0;opacity:0;z-index:-1';
      document.body.append(field);field.select();
      let done=false;
      try{done=document.execCommand('copy');}catch{}
      field.remove();
      if(done){feedbackText('Diagnostica copiata: incollala qui in chat.');return;}
      downloadFile(new Blob([payload],{type:'application/json'}),
        makeFilename(currentGame,'json'));
      feedbackText('Appunti non disponibili: report JSON scaricato.',true);
    }
  }

  async function screenshot() {
    if(shotButton.disabled)return;
    shotButton.disabled=true;
    feedbackText('Acquisizione del solo gioco…');
    try {
      // Pass a promise to ClipboardItem synchronously in the click handler.
      // No tab sharing, no system screenshot and no local download.
      if(!navigator.clipboard?.write||!window.ClipboardItem)
        throw Error('Appunti immagine non disponibili: usa Chrome su localhost o HTTPS.');
      const captureOne=async(frame)=>{
        const win=frame?.contentWindow;
        if(!win||frame.hidden)throw Error('Avvia il gioco prima di catturarlo.');
        const doc=frame.contentDocument;
        const canvas=[...doc.querySelectorAll('canvas')].filter(c=>c.width>40&&c.height>40&&c.getBoundingClientRect().width>0)
          .sort((a,b)=>b.width*b.height-a.width*a.height)[0];
        if(!canvas)throw Error('Nessun canvas visibile: la cattura DOM non è ancora supportata.');
        if(win.__nightWebGLInspector?.capturePNG)return await win.__nightWebGLInspector.capturePNG(canvas);
        const ctx=canvas.getContext('2d');
        if(!ctx)throw Error('Cattura WebGL non disponibile: ricarica il gioco.');
        return await toPNG(canvas);
      };
      const capture=(async()=>{
        const frames=getCaptureFrames?.()||[{frame:getFrame(),label:''}];
        const pngs=await Promise.all(frames.map(v=>captureOne(v.frame)));
        if(pngs.length===1)return pngs[0];
        const images=await Promise.all(pngs.map(blob=>createImageBitmap(blob)));
        try{
          const height=Math.max(...images.map(im=>im.height)),gap=4;
          const widths=images.map(im=>Math.round(im.width*height/im.height));
          const out=document.createElement('canvas');out.width=widths.reduce((a,b)=>a+b,0)+gap*(images.length-1);out.height=height;
          const ctx=out.getContext('2d');ctx.fillStyle='#202a37';ctx.fillRect(0,0,out.width,out.height);
          let x=0;for(let i=0;i<images.length;i++){ctx.drawImage(images[i],x,0,widths[i],height);x+=widths[i]+gap;}
          return await toPNG(out);
        }finally{images.forEach(im=>im.close());}
      })();
      capture.catch(()=>{});
      await navigator.clipboard.write([new ClipboardItem({'image/png':capture})]);
      feedbackText('Screenshot del gioco copiato. Incollalo qui con Ctrl+V.');
    } catch(error) {
      feedbackText('Screenshot non copiato: '+clean(error.message||error,160),true);
    } finally {shotButton.disabled=false;}
  }

  copyButton?.addEventListener('click',()=>void copyReport());
  shotButton?.addEventListener('click',()=>void screenshot());
  update();

  return {setGame,attachFrame,report,stop(){
    clearInterval(frameWatch);
    detachFrame();
    window.removeEventListener('error',onError,true);
    window.removeEventListener('unhandledrejection',onRejection);
    window.removeEventListener('message',onGameDiagnostic);
  }};
}
