/* Generic 1:1 texture-atlas editor for games with inspectable metadata.
 * Sparrow XML, TexturePacker/Cocos plist, libGDX .atlas. An animation's
 * sequencing remains controlled by the original engine; we only replace
 * pixels at the exact coordinates the compiled runtime already references.
 */
const int = (value, fallback=0) =>
  value === null || value === undefined || value === '' ? fallback :
    Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : fallback;
const tuple = value => (String(value||'').match(/-?\d+/g)||[]).map(Number);
const clean = name => name.replace(/\\/g,'/').split('/').at(-1);
const stem = name => clean(name).replace(/\.[^.]+$/,'').toLowerCase();

export function findAtlasMetadata(game, asset) {
  if (!game || !asset || !/\.png$/i.test(asset.name)) return null;
  const base=stem(asset.name);
  const dir=asset.path.slice(0,asset.path.lastIndexOf('/')+1);
  return game.assets.find(a=>a.kind==='atlas' && a.path.startsWith(dir) &&
    stem(a.name)===base && /\.(xml|plist|atlas)$/i.test(a.extension)) || null;
}

function sparrow(text) {
  const xml=new DOMParser().parseFromString(text,'application/xml');
  if (xml.querySelector('parsererror')) throw new Error('XML atlas non valido');
  const frames=[];
  for (const node of xml.querySelectorAll('SubTexture, subtexture')) {
    const v=name=>node.getAttribute(name);
    const name=v('name')||'';
    const x=int(v('x')), y=int(v('y'));
    const w=int(v('width')), h=int(v('height'));
    if (!name || w<=0 || h<=0) continue;
    frames.push({name,x,y,w,h,rotated:false,
      frameX:int(v('frameX')),frameY:int(v('frameY')),
      logicalW:int(v('frameWidth'),w),logicalH:int(v('frameHeight'),h)});
  }
  return frames;
}

function dictionary(dict,key) {
  if (!dict) return null;
  const children=Array.from(dict.children);
  for(let i=0;i<children.length-1;i++)
    if(children[i].tagName==='key' && children[i].textContent===key)
      return children[i+1];
  return null;
}

function cocosPlist(text) {
  const xml=new DOMParser().parseFromString(text,'application/xml');
  if(xml.querySelector('parsererror'))throw new Error('Plist XML non valido');
  const root=xml.querySelector('plist > dict');
  const framesDict=dictionary(root,'frames');
  if(!framesDict)return [];
  const nodes=Array.from(framesDict.children);
  const frames=[];
  for(let i=0;i<nodes.length-1;i++){
    if(nodes[i].tagName!=='key'||nodes[i+1].tagName!=='dict')continue;
    const entry=nodes[i+1],name=nodes[i].textContent||'';
    const rectValue=dictionary(entry,'frame') || dictionary(entry,'textureRect');
    const values=tuple(rectValue?.textContent);
    if(values.length<4)continue;
    const [x,y,w,h]=values;
    const rotated=dictionary(entry,'rotated')?.tagName==='true' ||
      dictionary(entry,'textureRotated')?.tagName==='true';
    const bounds=tuple(dictionary(entry,'sourceSize')?.textContent);
    const offset=tuple(dictionary(entry,'offset')?.textContent);
    frames.push({name,x,y,w,h,rotated,frameX:offset[0]||0,
      frameY:offset[1]||0,logicalW:bounds[0]||w,logicalH:bounds[1]||h});
  }
  return frames;
}

function libgdx(text,imageName) {
  const rows=text.split(/\r?\n/).map(line=>line.trimEnd());
  const output=[];
  let page='',item=null;
  for(let i=0;i<rows.length;i++){
    const line=rows[i].trim();
    if(!line){item=null;continue}
    if (/\.(png|jpg|webp)$/i.test(line)) {page=clean(line);item=null;continue}
    const matched=line.match(/^([a-zA-Z]+)\s*:\s*(.*)$/);
    if(!matched){
      if(page.toLowerCase()===imageName.toLowerCase()){
        item={name:line,x:0,y:0,w:0,h:0,rotated:false,
          frameX:0,frameY:0,logicalW:0,logicalH:0};
        output.push(item);
      }else item=null;
      continue;
    }
    if(!item)continue;
    const key=matched[1].toLowerCase(),vals=tuple(matched[2]);
    if(key==='xy' && vals.length>=2) {item.x=vals[0];item.y=vals[1]}
    if(key==='size' && vals.length>=2) {
      item.w=vals[0];item.h=vals[1];
      item.logicalW=vals[0];item.logicalH=vals[1];
    }
    if(key==='orig' && vals.length>=2) {
      item.logicalW=vals[0];item.logicalH=vals[1];
    }
    if(key==='offset' && vals.length>=2) {
      item.frameX=vals[0];item.frameY=vals[1];
    }
    if(key==='rotate')item.rotated=matched[2].trim().toLowerCase()==='true';
  }
  return output.filter(item=>item.w>0&&item.h>0);
}

export async function loadAtlasFrames(asset,meta) {
  const response=await fetch(meta.url,{cache:'no-store'});
  if(!response.ok)throw new Error('Metadata atlas HTTP '+response.status);
  const text=await response.text();
  let frames;
  if(meta.extension==='.plist')frames=cocosPlist(text);
  else if(meta.extension==='.atlas')frames=libgdx(text,asset.name);
  else frames=sparrow(text);
  if(!frames.length)throw new Error('Metadati senza frame riconosciuti');
  const rects=new Map();
  for(const frame of frames){
    frame.rectKey=[frame.x,frame.y,frame.w,frame.h].join(':');
    const names=rects.get(frame.rectKey)||[];
    names.push(frame.name);rects.set(frame.rectKey,names);
  }
  for(const frame of frames) {
    frame.shared=(rects.get(frame.rectKey)||[]).filter(x=>x!==frame.name);
  }
  return frames;
}

async function imageFrom(blobOrUrl) {
  const src=blobOrUrl instanceof Blob ? URL.createObjectURL(blobOrUrl) : blobOrUrl;
  try{
    const img=new Image();
    await new Promise((resolve,reject)=>{
      img.onload=resolve;
      img.onerror=()=>reject(new Error('Texture non leggibile'));
      img.src=src;
    });
    return img;
  }finally{
    if(blobOrUrl instanceof Blob)URL.revokeObjectURL(src);
  }
}

export async function previewAtlasFrame(canvas,sourceURL,frame,sourceBlob=null) {
  const img=await imageFrom(sourceBlob||sourceURL);
  const ctx=canvas.getContext('2d');
  canvas.width=96;canvas.height=96;
  ctx.clearRect(0,0,96,96);
  if(frame.x<0||frame.y<0||frame.x+frame.w>img.width||
     frame.y+frame.h>img.height)return false;
  const scale=Math.min(88/frame.w,88/frame.h);
  const w=frame.w*scale,h=frame.h*scale;
  ctx.imageSmoothingEnabled=false;
  ctx.drawImage(img,frame.x,frame.y,frame.w,frame.h,
    (96-w)/2,(96-h)/2,w,h);
  return true;
}

export async function patchAtlasFrame(asset,frame,replacement,baseBlob=null) {
  if(frame.rotated)throw new Error(
    'Frame ruotato nell’atlante: richiede un adapter specifico.');
  if(!replacement||!/^image\/png$/.test(replacement.type))
    throw new Error('Carica un PNG del singolo frame.');
  if(replacement.size>8*1024*1024)
    throw new Error('Il frame supera 8 MB.');
  const [base,patch]=await Promise.all([
    imageFrom(baseBlob||asset.url),imageFrom(replacement),
  ]);
  if(patch.width!==frame.w||patch.height!==frame.h)
    throw new Error('Frame richiesto '+frame.w+'×'+frame.h+
      ' px; PNG caricato '+patch.width+'×'+patch.height+' px.');
  if(base.width*base.height>48_000_000)
    throw new Error('Atlas troppo grande per modifica sicura in browser.');
  if(frame.x<0||frame.y<0||frame.x+frame.w>base.width||
     frame.y+frame.h>base.height)
    throw new Error('Rettangolo frame fuori dall’atlante.');
  const canvas=document.createElement('canvas');
  canvas.width=base.width;canvas.height=base.height;
  const ctx=canvas.getContext('2d');
  if(!ctx)throw new Error('Canvas 2D non disponibile');
  ctx.drawImage(base,0,0);
  ctx.clearRect(frame.x,frame.y,frame.w,frame.h);
  ctx.drawImage(patch,frame.x,frame.y);
  const out=await new Promise((resolve,reject)=>
    canvas.toBlob(blob=>blob?resolve(blob):
      reject(new Error('Esportazione atlante fallita')),'image/png'));
  canvas.width=0;canvas.height=0;
  return new File([out],asset.name,{type:'image/png'});
}
