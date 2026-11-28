import assert from 'node:assert/strict';
import fs from 'node:fs';
const source=fs.readFileSync(new URL('../reskinner/webgl-inspector.js',import.meta.url),'utf8');
const {segmentRegion}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const width=100,height=80,data=new Uint8ClampedArray(width*height*4);
for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const i=(y*width+x)*4;data[i+3]=255;
  if(x>=20&&x<40&&y>=25&&y<40){data[i]=240;data[i+1]=180;}
}
assert.deepEqual(segmentRegion({width,height,data},25,30),{x:20,y:25,w:20,h:15,pixels:300});
assert.equal(segmentRegion({width,height,data},5,5),null);
assert.equal(segmentRegion({width,height,data:new Uint8ClampedArray(data.length)},25,30),null);
console.log('WebGL visual segmentation: 3 tests passed');
