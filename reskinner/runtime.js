/* 2Night game-agnostic browser inspector.
 * Only reports objects actually exposed by an engine or DOM/Canvas2D draw
 * calls. WebGL/Unity/PlayCanvas scenes require a game-specific adapter.
 * Never claims pixels to be a named sprite without source evidence.
 */
import { resolveGameAdapter } from './adapters.js';
const MAX_DRAWS = 650;
const MAX_TREE_NODES = 1800;

function finite(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}
function normPath(source) {
  if (!source || typeof source !== 'string') return '';
  try {
    const url = new URL(source, location.href);
    if (url.origin !== location.origin) return '';
    return decodeURIComponent(url.pathname);
  } catch { return ''; }
}
function labelPath(src) {
  return src.split('/').at(-1)?.split('?')[0] || 'Element';
}
function box(x, y, w, h) {
  return { x: finite(x), y: finite(y), w: finite(w), h: finite(h) };
}
function within(r, p) {
  return r && p.x >= r.x && p.y >= r.y && p.x <= r.x + r.w && p.y <= r.y + r.h;
}
function matrixBox(x, y, w, h, matrix) {
  const m = matrix || { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  const corners = [[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([px,py]) =>
    ({ x: m.a*px+m.c*py+m.e, y: m.b*px+m.d*py+m.f }));
  const xs = corners.map(c=>c.x), ys = corners.map(c=>c.y);
  const left = Math.min(...xs), top = Math.min(...ys);
  return box(left, top, Math.max(...xs)-left, Math.max(...ys)-top);
}
function matrixProperties(m){
  return m ? {a:m.a,b:m.b,c:m.c,d:m.d,e:m.e,f:m.f} : null;
}
function cssBox(rect, frameRect) {
  return box(rect.left-frameRect.left, rect.top-frameRect.top, rect.width, rect.height);
}

export function createRuntimeInspector(frame, options = {}) {
  let win = null;
  let doc = null;
  let canvas = null;
  let frameRect = null;
  let gameId = options.gameId || '';
  const gameAdapter = resolveGameAdapter(gameId);
  const overrides = new Map();        // local path -> decoded HTMLImageElement
  const blobs = new Map();            // local path -> object URL, owned by caller
  const objectIds = new WeakMap();
  let nextObjectId=0;
  const identify = object => {if(!objectIds.has(object))objectIds.set(object,++nextObjectId);return objectIds.get(object);};
  const state = { draws: [], lastDraw: 0, lastClear: 0, samples: 0, patched: false,
    engine: 'unknown', errors: [], scene: [], sceneUpdated: 0 };

  const emit = (...args) => options.log?.(...args);
  const observeCanvas = () => {
    try { canvas = doc?.querySelector('canvas') || null; } catch { canvas = null; }
    return canvas;
  };
  const engineType = () => {
    if (!win || !doc) return 'unknown';
    if (win.PIXI || win.app?.renderer?.type) return 'pixi';
    if (win.Phaser || win.game?.scene?.scenes) return 'phaser';
    if (win.cc || win.cclegacy) return 'cocos';
    if (win.pc || win.app?.graphicsDevice) return 'playcanvas';
    if (doc.querySelector('canvas[data-engine*="unity"],#unity-canvas')) return 'unity';
    return observeCanvas() ? 'canvas' : 'dom';
  };
  function refreshRuntime() {
    // A mirrored game may navigate to a remote host after iframe load.
    // Recheck same-origin access on EVERY report; the saved WindowProxy can
    // become cross-origin even though attach() initially succeeded.
    try {
      const currentDoc = frame?.contentDocument;
      if (!currentDoc) throw new Error('Iframe non accessibile (origine diversa)');
      void currentDoc.documentElement;
      win = frame.contentWindow;
      doc = currentDoc;
    } catch {
      if (state.engine !== 'cross-origin') {
        emit('Runtime aggiornato: ' + state.engine + ' → cross-origin');
      }
      win = null;
      doc = null;
      canvas = null;
      state.engine = 'cross-origin';
      state.patched = false;
      state.scene = [];
      state.draws = [];
      return;
    }
    let next = 'unknown';
    try {
      next = gameAdapter?.engine || engineType();
    } catch (error) {
      const message = 'Runtime non accessibile: ' + String(error);
      if (state.errors.at(-1) !== message) state.errors.push(message);
    }
    if (next !== state.engine) {
      const previous = state.engine;
      state.engine = next;
      emit('Runtime aggiornato: ' + previous + ' → ' + next);
    }
    observeCanvas();
  }
  function frameScale(targetCanvas) {
    const cr = targetCanvas.getBoundingClientRect();
    return { rect: cr, x: cr.width / Math.max(1,targetCanvas.width),
      y: cr.height / Math.max(1,targetCanvas.height) };
  }
  function drawToViewport(record) {
    if (!record.canvas || !record.canvas.isConnected) return null;
    const s = frameScale(record.canvas);
    const b = record.bounds;
    return { ...record, x: s.rect.left + b.x*s.x,
      y: s.rect.top + b.y*s.y, w: b.w*s.x, h: b.h*s.y };
  }
  function instrumentCanvas2D() {
    if (!win?.CanvasRenderingContext2D || win.__2nightGenericDrawHooks) return;
    const proto = win.CanvasRenderingContext2D.prototype;
    const oldDraw = proto.drawImage, oldClear = proto.clearRect, oldText = proto.fillText;
    const inspectorState = state;
    const overridesMap = overrides;
    proto.drawImage = function(source, ...args) {
      const original = source?.currentSrc || source?.src || source?.resource?.url || '';
      const src = normPath(original);
      const replacement = src && overridesMap.get(src);
      const drawSource = replacement?.complete && replacement.naturalWidth
        ? replacement : source;
      // Actual drawImage args: (image, dx, dy), (image, dx, dy, dw, dh),
      // or (image, sx, sy, sw, sh, dx, dy, dw, dh).
      const crop = args.length === 8 && args.slice(0,4).every(Number.isFinite)
        ? { sx:args[0], sy:args[1], sw:args[2], sh:args[3] } : null;
      const dx = args.length === 8 ? args[4] : args[0];
      const dy = args.length === 8 ? args[5] : args[1];
      const dw = args.length === 8 ? args[6] : args.length === 4 ?
        args[2] : finite(source?.naturalWidth || source?.width);
      const dh = args.length === 8 ? args[7] : args.length === 4 ?
        args[3] : finite(source?.naturalHeight || source?.height);
      if (Number.isFinite(dx) && Number.isFinite(dy) && finite(dw)>0 && finite(dh)>0) {
        try {
          const bounds = matrixBox(dx,dy,dw,dh,this.getTransform?.());
          if (bounds.w>0 && bounds.h>0 && bounds.w*bounds.h<30e6) {
            const signature = src + ':' +
              [bounds.x,bounds.y,bounds.w,bounds.h,
               ...(crop?[crop.sx,crop.sy,crop.sw,crop.sh]:[])]
                .map(n=>Math.round(n)).join(':');
            // Keep the last observed sprite while animation is paused, but
            // prefer the most recent position when the frame keeps rendering.
            const oldIndex = inspectorState.draws.findIndex(e=>e.signature===signature);
            if (oldIndex>=0) inspectorState.draws.splice(oldIndex,1);
            inspectorState.draws.push({ type:'image', name:labelPath(src),
              source:src, crop, bounds, canvas:this.canvas, signature,
              renderAt:performance.now(), properties:{opacity:this.globalAlpha, transform:matrixProperties(this.getTransform?.()), composite:this.globalCompositeOperation}, replaced:!!replacement });
            if (inspectorState.draws.length>MAX_DRAWS) inspectorState.draws.shift();
            inspectorState.lastDraw = performance.now();
            inspectorState.samples++;
          }
        } catch { /* Never interfere with the game renderer. */ }
      }
      return oldDraw.call(this,drawSource,...args);
    };
    proto.clearRect = function(x,y,w,h) {
      // A full-canvas clear indicates a new frame. Avoid stale boxes.
      if (x<=0 && y<=0 && w>=this.canvas.width && h>=this.canvas.height) {
        inspectorState.draws = inspectorState.draws.filter(d=>d.canvas!==this.canvas);
        inspectorState.lastClear = performance.now();
      }
      return oldClear.call(this,x,y,w,h);
    };
    proto.fillText = function(text,x,y,maxWidth) {
      try {
        const metrics = this.measureText(String(text));
        const width = maxWidth && maxWidth<metrics.width?maxWidth:metrics.width;
        const height = (metrics.actualBoundingBoxAscent || 14) +
          (metrics.actualBoundingBoxDescent || 4);
        const bounds = matrixBox(x,y-height,width,height,this.getTransform?.());
        const signature = 'text:'+String(text)+':'+Math.round(x)+':'+Math.round(y);
        const oldIndex = inspectorState.draws.findIndex(e=>e.signature===signature);
        if(oldIndex>=0) inspectorState.draws.splice(oldIndex,1);
        inspectorState.draws.push({type:'text',name:String(text).slice(0,120),
          source:'Canvas2D.fillText',bounds,canvas:this.canvas,signature,
          properties:{font:this.font,align:this.textAlign,baseline:this.textBaseline,opacity:this.globalAlpha,transform:matrixProperties(this.getTransform?.())},
          renderAt:performance.now()});
        if(inspectorState.draws.length>MAX_DRAWS)inspectorState.draws.shift();
      } catch { /* no impact on game text */ }
      return oldText.call(this,text,x,y,...(maxWidth===undefined?[]:[maxWidth]));
    };
    win.__2nightGenericDrawHooks = true;
    state.patched=true;
    emit('Canvas2D: chiamate drawImage/fillText intercettate');
  }

  function traverseObjects(root) {
    const seen = new WeakSet();
    const result = [];
    let nodes = 0;
    function walk(node, depth, parentId = null) {
      if (!node || typeof node !== 'object' || seen.has(node) || depth > 18 ||
        nodes++ > MAX_TREE_NODES || node.visible === false) return;
      seen.add(node);
      const objectId=identify(node);
      try {
        let r = null, source = '';
        if (typeof node.getBounds === 'function') {
          const bounds = node.getBounds();
          if (bounds && Number.isFinite(bounds.x) && Number.isFinite(bounds.width))
            r = box(bounds.x,bounds.y,bounds.width,bounds.height);
        } else if (Number.isFinite(node.x) && Number.isFinite(node.y) &&
                   Number.isFinite(node.width) && Number.isFinite(node.height)) {
          r = box(node.x,node.y,node.width,node.height);
        }
        source = node.texture?.baseTexture?.resource?.url ||
          node.texture?.source?.resource?.url ||
          node.texture?.key || node.spriteFrame?.name || node.name || '';
        const named = node.name || node.texture?.textureCacheIds?.[0] || source ||
          node.constructor?.name || 'Object';
        if (r && r.w>1 && r.h>1 && r.w*r.h<25e6) {
          result.push({type:'engine',name:String(named).slice(0,120),
            source:String(source), ...r, engine:state.engine,
            treeDepth:depth, objectId,parentId, coordinateSpace:'engine-native',
            properties:{x:node.x,y:node.y,rotation:node.rotation,angle:node.angle,scaleX:node.scaleX??node.scale?.x,scaleY:node.scaleY??node.scale?.y,opacity:node.alpha,depth:node.depth,zIndex:node.zIndex,text:typeof node.text==='string'?node.text.slice(0,500):undefined},
            renderAt:performance.now()});
        }
      } catch { /* skip nodes with broken getters */ }
      try {
        const children = node.children || node.list || node._children || node.members || node.getChildren?.();
        if(Array.isArray(children))children.forEach(child=>walk(child,depth+1,objectId));
      }catch{}
    }
    walk(root,0);
    return result;
  }
  function engineScene() {
    if (!win) return [];
    try {
      if (state.engine==='pixi') {
        const stage = win.app?.stage || win.game?.app?.stage ||
          win.PIXI?.Application?.shared?.stage;
        return stage?traverseObjects(stage):[];
      }
      if (state.engine==='phaser') {
        const scenes = win.game?.scene?.scenes || [];
        return scenes.flatMap(scene=>traverseObjects(scene?.children));
      }
      if (state.engine==='cocos') {
        const stage = win.cc?.director?.getScene?.() ||
          win.cclegacy?.director?.getScene?.();
        return stage?traverseObjects(stage):[];
      }
    }catch(e){state.errors.push(String(e).slice(0,180));}
    return [];
  }
  function domProperties(element){
    try {
      const s=win.getComputedStyle(element);
      return {opacity:s.opacity,transform:s.transform,zIndex:s.zIndex,
        position:s.position,font:s.font,color:s.color,
        text:element.children.length===0?String(element.textContent||'').slice(0,500):undefined};
    }catch{return {};}
  }
  function snapshot(){
    refreshRuntime();
    if(!doc||!win)return {engine:state.engine,objects:[],limitations:['Iframe non accessibile']};
    const dom=[];
    const walker=doc.createTreeWalker(doc.body||doc.documentElement,1);
    let node=walker.currentNode,visited=0;
    while(node&&visited++<MAX_TREE_NODES){
      try{
        const r=node.getBoundingClientRect(),style=win.getComputedStyle(node);
        if(r.width>0&&r.height>0&&style.visibility!=='hidden'&&style.display!=='none'&&
           !['SCRIPT','STYLE','HEAD'].includes(node.tagName)){
          dom.push({type:'dom',name:node.id||node.tagName.toLowerCase(),objectId:identify(node),
            parentId:node.parentElement?identify(node.parentElement):null,
            source:normPath(node.currentSrc||node.src||''),...cssBox(r,{left:0,top:0}),
            properties:domProperties(node),coordinateSpace:'iframe-css'});
        }
      }catch{}
      node=walker.nextNode();
    }
    state.scene=engineScene();
    const draws=state.draws.map(drawToViewport).filter(Boolean).map((d,i)=>{
      const {canvas,bounds,...safe}=d;
      return {...safe,objectId:'draw-'+d.signature,coordinateSpace:'iframe-css',drawOrder:i};
    });
    const limitations=['Canvas2D: chiamate osservate, non gerarchia semantica.',
      'Coordinate engine-native: non convertite se camera/viewport non noti.',
      'Unity/WebGL privato: nessuna identificazione di sprite senza adapter.'];
    return {engine:state.engine,objects:[...dom,...state.scene,...draws],limitations,truncated:!!node};
  }
  function pickDOM(p) {
    if (!doc) return null;
    const element = doc.elementFromPoint(p.x,p.y);
    if (!element || element.tagName==='CANVAS' ||
        ['HTML','BODY','SCRIPT','STYLE'].includes(element.tagName)) return null;
    const r = element.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    let background='';
    try { background=win.getComputedStyle(element).backgroundImage || ''; }
    catch { /* not every node is styled */ }
    const source = element.currentSrc || element.src ||
      background.match(/url\(["']?([^"')]+)/)?.[1] || '';
    return {type:'dom',name:element.getAttribute('aria-label') ||
      element.alt || element.id || element.tagName.toLowerCase(),
      source:normPath(source), tag:element.tagName.toLowerCase(),
      element,objectId:identify(element),properties:domProperties(element),...cssBox(r,{left:0,top:0})};
  }
  function pick(point) {
    if (!win||!doc) return null;
    refreshRuntime();
    try {
      if (gameAdapter?.pick) {
        const item=gameAdapter.pick({win,doc,gameId,point,options});
        if (item) return item;
      }
    } catch (error) { state.errors.push('adapter.pick: '+String(error)); }
    const p={x:finite(point.x),y:finite(point.y)};
    const dom = pickDOM(p);
    if(dom)return dom;
    state.scene = engineScene();
    try {
      if (gameAdapter?.scan) {
        const objects=gameAdapter.scan({win,doc,gameId,point:p});
        if(Array.isArray(objects))state.scene.unshift(...objects.filter(Boolean));
      }
    } catch (error) { state.errors.push('adapter.scan: '+String(error)); }
    state.sceneUpdated=performance.now();
    const named = state.scene.filter(item=>within(item,p));
    if(named.length)return named.at(-1);
    const draws = state.draws.map(drawToViewport).filter(Boolean).filter(item=>within(item,p));
    if(draws.length)return draws.at(-1);
    // This is an honest canvas fallback: no sprite name inferred.
    const c=observeCanvas(), cr=c?.getBoundingClientRect();
    if(cr&&within(box(cr.x,cr.y,cr.width,cr.height),p)) {
      // Hexastack's Pixi display tree is bundled privately. An inspectable
      // pixel region is still useful, but must NOT be mislabeled as a sprite,
      // and must never guess a texture URL from its colour or position.
      if(gameId==='hexastack'){
        const size=Math.min(72,cr.width,cr.height);
        const x=Math.max(cr.left,Math.min(p.x-size/2,cr.right-size));
        const y=Math.max(cr.top,Math.min(p.y-size/2,cr.bottom-size));
        return {type:'canvas-region',
          name:'Area Canvas '+Math.round(size)+'×'+Math.round(size)+' (non sprite)',
          source:'',x,y,w:size,h:size,engine:state.engine,
          note:'Solo area pixel: questo motore non espone la gerarchia Pixi. La risorsa texture originale va selezionata dalla galleria.'};
      }
      return{type:'canvas',name:state.engine==='canvas'?'Canvas (sprite non identificato)':
        'Renderer '+state.engine,source:'',...cssBox(cr,{left:0,top:0}),
        note:'Per riconoscere questo oggetto servirebbe un adapter di rendering per il motore.'};
    }
    return null;
  }
  function getReport() {
    refreshRuntime();
    const n=observeCanvas();
    return {engine:state.engine,canvas:!!n,drawCalls:state.samples,
      knownDraws:state.draws.length,engineObjects:state.scene.length,
      patched:state.patched,errors:state.errors.slice(-3)};
  }
  async function swap(assetPath,blob) {
    if(!win||!doc)throw new Error('Gioco non avviato');
    try {
      if (gameAdapter?.swap) {
        const result=await gameAdapter.swap({win,doc,gameId,assetPath,blob});
        if(result?.ok) return result;
      }
    } catch(error) { state.errors.push('adapter.swap: '+String(error)); }
    const src=normPath(assetPath);
    if(!src)throw new Error('Puoi modificare solo asset presenti nell’origine locale');
    const url=URL.createObjectURL(blob);
    const image=new win.Image();
    try {
      await new Promise((resolve,reject)=>{
        image.onload=resolve;
        image.onerror=()=>reject(new Error('PNG sostitutivo non leggibile'));
        image.src=url;
      });
      const old=blobs.get(src);
      overrides.set(src,image);
      blobs.set(src,url);
      if(old) URL.revokeObjectURL(old);
      let updatedDOM=0;
      for(const el of doc.querySelectorAll('img, picture img, [style]')){
        const original=el.getAttribute('data-2night-original') ||
          el.currentSrc || el.src || '';
        const bg=el.style?.backgroundImage || '';
        if(normPath(original)===src && el.tagName==='IMG'){
          if(!el.dataset.nightOriginal)el.dataset.nightOriginal=original;
          el.src=url; updatedDOM++;
        }else if(bg && normPath(bg.match(/url\(["']?([^"')]+)/)?.[1])===src){
          el.style.backgroundImage='url("'+url+'")';updatedDOM++;
        }
      }
      return {ok:true,updatedDOM,interceptedCanvas2D:state.patched,
        message:updatedDOM || state.patched?'Preview applicata in locale':
        'PNG salvato, ma il motore non espone ancora un adapter per sostituirlo live'};
    }catch(error){URL.revokeObjectURL(url);throw error;}
  }
  function restore(assetPath) {
    const src=normPath(assetPath);
    overrides.delete(src);
    const old=blobs.get(src);
    blobs.delete(src);
    if(old)URL.revokeObjectURL(old);
    for(const el of doc?.querySelectorAll('img[data-night-original]')||[]){
      if(normPath(el.dataset.nightOriginal)===src){
        el.src=el.dataset.nightOriginal;
        delete el.dataset.nightOriginal;
      }
    }
  }
  function attach() {
    try {
      win=frame?.contentWindow;
      doc=frame?.contentDocument;
      frameRect=frame?.getBoundingClientRect();
      if(!win||!doc)throw new Error('Iframe non accessibile (origine diversa)');
      state.engine=gameAdapter?.engine || engineType();
      if(gameAdapter?.attach) {
        try { gameAdapter.attach({win,doc,gameId,frame}); }
        catch(e) {state.errors.push('adapter.attach: '+String(e));}
      }
      instrumentCanvas2D();
      emit('Runtime collegato: '+state.engine);
      return getReport();
    }catch(e){
      state.errors.push(String(e));
      emit('Runtime non collegabile: '+String(e));
      return getReport();
    }
  }
  function destroy() {
    try {gameAdapter?.dispose?.({win,doc,gameId});}
    catch(e) {state.errors.push('adapter.dispose: '+String(e));}
    for(const url of blobs.values())URL.revokeObjectURL(url);
    blobs.clear();overrides.clear();
    // No unpatch: the iframe is discarded on game change, so the patch dies.
    win=null;doc=null;canvas=null;state.draws.length=0;
  }
  return {attach,pick,getReport,snapshot,swap,restore,destroy};
}
