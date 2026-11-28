/* Per-game inspector registry.
 * Games can expose richer semantics than the generic DOM/Canvas2D hooks.
 * Register adapters here without modifying the shared game-switcher UI.
 *
 * Example future adapter:
 * registerGameAdapter('wordmeister', {
 *   id: 'wordmeister',
 *   engine: 'custom',
 *   attach({win, doc, game}) {...},
 *   scan({win, doc, game}) {
 *     // Return ONLY real scene objects:
 *     // [{name:'Tile A', x:100,y:200,w:48,h:48, source:'/extracted/...png'}]
 *     return [];
 *   },
 *   async swap({win, doc, assetPath, blob}) {...},
 *   dispose() {...}
 * });
 */
const adapters=new Map();

export function registerGameAdapter(gameId,adapter){
  if(typeof gameId!=='string'||!gameId||
     !adapter||typeof adapter!=='object') {
    throw new TypeError('Game adapter non valido');
  }
  const known=['attach','scan','pick','swap','dispose'];
  for(const key of known){
    if(adapter[key]!==undefined&&typeof adapter[key]!=='function')
      throw new TypeError('Adapter '+key+' deve essere una funzione');
  }
  adapters.set(gameId,adapter);
}
export function resolveGameAdapter(gameId){
  return adapters.get(gameId)||null;
}
export function availableGameAdapters(){
  return Array.from(adapters.keys());
}
