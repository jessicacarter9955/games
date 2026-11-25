/* 2Night origin-local asset substitution.
 * Works *before* engine initialization: Canvas2D, WebGL, PixiJS, Phaser,
 * Cocos, image sprites and externally loaded PNG textures receive the SAME
 * authored image URL but with the locally saved draft bytes.
 *
 * This is intentionally NOT a claim of support for compiled/embedded textures,
 * external origins, mesh UVs, encrypted archives or unmirrored game files.
 */
const DATABASE = '2night-multigame-drafts-v1';
const STORE = 'patches';
const IMAGE = /\.(?:png|jpe?g|webp|gif|avif|svg)$/i;
const safePath = path => path.startsWith('/extracted/') &&
  !path.includes('\\') && !path.includes('..');

let cache = null;
let cacheOpenedAt = 0;

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('message', event => {
  if (event.data?.type === '2NIGHT_PATCHES_CHANGED') {
    cache = null;
    cacheOpenedAt = 0;
    event.ports?.[0]?.postMessage({ok:true});
  }
});

function allPatches() {
  return new Promise(resolve => {
    let request;
    try { request = indexedDB.open(DATABASE, 1); }
    catch { resolve([]); return; }
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE))
        request.result.createObjectStore(STORE, {keyPath:'key'});
    };
    request.onerror = () => resolve([]);
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE, 'readonly');
      const query = tx.objectStore(STORE).getAll();
      query.onsuccess = () => {
        db.close();
        resolve(query.result || []);
      };
      query.onerror = () => {db.close();resolve([]);};
    };
  });
}

async function replacements() {
  const now = Date.now();
  if (cache && now-cacheOpenedAt < 8000) return cache;
  cacheOpenedAt=now;
  cache = allPatches().then(rows => {
    const map=new Map();
    for (const row of rows) {
      if (!row || !(row.blob instanceof Blob)) continue;
      const relative = typeof row.assetPath === 'string' ? row.assetPath : '';
      const key = '/' + relative.replace(/\\/g,'/');
      if (safePath(key) && IMAGE.test(key)) map.set(key,row.blob);
    }
    return map;
  });
  return cache;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  let pathname;
  try {pathname = decodeURIComponent(url.pathname);}
  catch {return;}
  if (!safePath(pathname) || !IMAGE.test(pathname)) return;
  event.respondWith((async () => {
    try {
      const patches=await replacements();
      const replacement=patches.get(pathname);
      if (replacement) {
        return new Response(replacement,{
          status:200,
          headers:{
            'Content-Type':replacement.type || 'image/png',
            'Cache-Control':'no-store',
            'X-2Night-Reskin':'local-draft',
          },
        });
      }
    } catch { /* A failed IndexedDB access must not break game loading. */ }
    return fetch(event.request);
  })());
});
