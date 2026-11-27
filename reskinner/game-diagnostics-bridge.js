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
