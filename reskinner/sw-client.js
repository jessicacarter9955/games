/* Native asset-reskin transport.
 * A same-origin service worker substitutes saved PNGs at GET time, including
 * WebGL and engines that cache decoded textures before the 2Night inspector
 * attaches. The user can reload the game to apply a patch in the exact
 * original request URL and with the original geometry.
 */
let registration = null;
let unavailable = '';

// Catalog and gameplay must remain usable even if a browser silently stalls
// Service Worker registration (e.g. blocked profiles or private browsing).
function withDeadline(promise, label, ms = 4500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(label + ' timeout')), ms);
    Promise.resolve(promise).then(
      value => { clearTimeout(timer); resolve(value); },
      error => { clearTimeout(timer); reject(error); },
    );
  });
}

export async function initializeAssetReskin() {
  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    unavailable='Serve localhost oppure HTTPS per sostituire le texture del motore.';
    return {available:false,reason:unavailable};
  }
  try {
    registration=await withDeadline(
      navigator.serviceWorker.register('/2night-reskin-sw.js',{
        scope:'/',updateViaCache:'none',
      }),
      'Service Worker registration');
    await withDeadline(navigator.serviceWorker.ready,
                       'Service Worker activation');
    if (!navigator.serviceWorker.controller) {
      await Promise.race([
        new Promise(resolve=>navigator.serviceWorker.addEventListener(
          'controllerchange',resolve,{once:true})),
        new Promise(resolve=>setTimeout(resolve,2500)),
      ]);
    }
    if (!registration.active) throw new Error('Service Worker non attivo');
    return {
      available:!!navigator.serviceWorker.controller,
      reason: navigator.serviceWorker.controller
        ? 'Layer PNG attivo per tutte le texture locali, anche WebGL.'
        : 'Layer attivo. Ricarica una volta la pagina per applicarlo al gioco.',
    };
  } catch(error) {
    unavailable=String(error?.message||error);
    return {available:false,reason:unavailable};
  }
}

export function assetReskinAvailable() {
  return !!navigator.serviceWorker?.controller || !!registration?.active;
}

export async function invalidateReskinCache() {
  const worker = navigator.serviceWorker?.controller || registration?.active;
  if (!worker) return false;
  return new Promise(resolve => {
    const channel=new MessageChannel();
    const timer=setTimeout(()=>{channel.port1.close();resolve(false);},2200);
    channel.port1.onmessage=()=>{
      clearTimeout(timer);channel.port1.close();resolve(true);
    };
    worker.postMessage({type:'2NIGHT_PATCHES_CHANGED'},[channel.port2]);
  });
}
