/* 2Night game-agnostic browser inspector.
 * Only reports objects actually exposed by an engine or DOM/Canvas2D draw
 * calls. WebGL/Unity/PlayCanvas scenes require a game-specific adapter.
 * Never claims pixels to be a named sprite without source evidence.
 */
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
function cssBox(rect, frameRect) {
  return box(rect.left-frameRect.left, rect.top-frameRect.top, rect.width, rect.height);
}

export function createRuntimeInspector(frame, options = {}) {
  let win = null;
  let doc = null;
  let canvas = null;
  let frameRect = null;
  let gameId = options.gameId || '';
  const overrides = new Map();        // local path -> decoded HTMLImageElement
  const blobs = new Map();            // local path -> object URL, owned by caller
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
              [bounds.x,bounds.y,bounds.w,bounds.h].map(n=>Math.round(n)).join(':');
            // Keep the last observed sprite while animation is paused, but
            // prefer the most recent position when the frame keeps rendering.
            const oldIndex = inspectorState.draws.findIndex(e=>e.signature===signature);
            if (oldIndex>=0) inspectorState.draws.splice(oldIndex,1);
            inspectorState.draws.push({ type:'image', name:labelPath(src),
              source:src, bounds, canvas:this.canvas, signature,
              renderAt:performance.now(), replaced:!!replacement });
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
    function walk(node, depth) {
      if (!node || typeof node !== 'object' || seen.has(node) || depth > 18 ||
        nodes++ > MAX_TREE_NODES || node.visible === false) return;
      seen.add(node);
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
            treeDepth:depth, renderAt:performance.now()});
        }
      } catch { /* skip nodes with broken getters */ }
      const children = node.children || node.list || node._children ||
        node.members || node.getChildren?.();
      if (Array.isArray(children)) children.forEach(child=>walk(child,depth+1));
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
      element,...cssBox(r,{left:0,top:0})};
  }
  function pick(point) {
    if (!win||!doc) return null;
    const p={x:finite(point.x),y:finite(point.y)};
    const dom = pickDOM(p);
    if(dom)return dom;
    state.scene = engineScene();
    state.sceneUpdated=performance.now();
    const named = state.scene.filter(item=>within(item,p));
    if(named.length)return named.at(-1);
    const draws = state.draws.map(drawToViewport).filter(Boolean).filter(item=>within(item,p));
    if(draws.length)return draws.at(-1);
    // This is an honest canvas fallback: no sprite name inferred.
    const c=observeCanvas(), cr=c?.getBoundingClientRect();
    if(cr&&within(box(cr.x,cr.y,cr.width,cr.height),p)) {
      return{type:'canvas',name:state.engine==='canvas'?'Canvas (sprite non identificato)':
        'Renderer '+state.engine,source:'',...cssBox(cr,{left:0,top:0}),
        note:'Per riconoscere questo oggetto servirebbe un adapter di rendering per il motore.'};
    }
    return null;
  }
  function getReport() {
    const n=observeCanvas();
    return {engine:state.engine,canvas:!!n,drawCalls:state.samples,
      knownDraws:state.draws.length,engineObjects:state.scene.length,
      patched:state.patched,errors:state.errors.slice(-3)};
  }
  async function swap(assetPath,blob) {
    if(!win||!doc)throw new Error('Gioco non avviato');
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
      state.engine=engineType();
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
    for(const url of blobs.values())URL.revokeObjectURL(url);
    blobs.clear();overrides.clear();
    // No unpatch: the iframe is discarded on game change, so the patch dies.
    win=null;doc=null;canvas=null;state.draws.length=0;
  }
  return {attach,pick,getReport,swap,restore,destroy};
}
