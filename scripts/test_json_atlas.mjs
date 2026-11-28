// Network-free checks: node scripts/test_json_atlas.mjs
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../reskinner/atlas.js',import.meta.url),'utf8');
const {parseJsonAtlas,findAtlasMetadata}=await import(
  'data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const packed=JSON.stringify({'0':'test.png;128,64;RGBA8888\n0;0,0;16,16\n1;16,0;16,16;1\n2;120,0;16,16\n3;20,20;4,4;0'});
assert.deepEqual(parseJsonAtlas(packed,'test.png').map(x=>x.name),['0','3']);
assert.equal(parseJsonAtlas(packed,'wrong.png').length,0);
const standard={meta:{image:'sheet.png',size:{w:100,h:100}},frames:{
  one:{frame:{x:0,y:0,w:20,h:20}},
  two:{frame:{x:20,y:20,w:20,h:20},rotated:true},
  bad:{frame:{x:90,y:90,w:20,h:20}}
}};
const frames=parseJsonAtlas(JSON.stringify(standard),'sheet.png');
assert.equal(frames.length,2);
assert.equal(frames[1].rotated,true);
assert.equal(parseJsonAtlas(JSON.stringify(standard),'wrong.png').length,0);
const image={name:'sheet.png',path:'local-mirror/game/host/sheet.png'};
const meta={kind:'atlas',extension:'.json',name:'hash.json',
  path:'local-mirror/game/host/hash.json',atlasTexture:image.path};
assert.equal(findAtlasMetadata({assets:[meta]},image),meta);
assert.equal(findAtlasMetadata({assets:[meta,{...meta,name:'ambiguous.json'}]},image),null);
assert.equal(findAtlasMetadata({assets:[{...meta,atlasTexture:'other/sheet.png'}]},image),null);
console.log('PASS: exact metadata, ambiguity, bounds, packed and standard JSON');
