# Reskin audit — 24 CrazyGames puzzle captures

**Data:** 24 novembre 2026. **Sorgente:** 24 ZIP in `C:\Users\jessi\Downloads\Puzzles Crazygames mirror`, commit `9915d9b`, con `extracted/` prodotto dal workflow. **Scala:** 0–100, maggiore = più fattibile. Queste sono **stime ingegneristiche** (nessun collaudo di tutti i 24 giochi in runtime).

**Metodologia:** punteggio pratico = 35% facilità intrinseca del gioco + 65% disponibilità/ispezionabilità dei file catturati; lo scenario richiede preservare le meccaniche e mappare asset, stato e schermate 1:1. Numero di schermate = classe stimata dalle meccaniche e dai nomi dei file, non conteggio misurato. I file «gioco» sono esclusivamente quelli sui domini di gameplay pertinenti, NON il totale ZIP (portale e ads inclusi). Semaforo: 🟢≥75; 🟡55–74; 🔴<55.

| # | Gioco (ZIP) | Render* | Schermate* | File gioco | Intrinseca | Pratica | Stato | Criticità principale |
|---:|---|---|---|---:|---:|---:|:---:|---|
| 1 | `hexastack.zip` | 2D/2.5D | Molte | 249 | 75 | **82** | 🟢 | PixiJS; 64 AVIF, 44 OGG e interfacce/eventi: molte animazioni e stati |
| 2 | `blocks-and-that'it.zip` | 2D | Poche | 20 | 90 | **69** | 🟡 | Puzzle a griglia; Cocos Creator catturato, ma le texture paiono parziali |
| 3 | `color-water-sort-3d.zip` | 3D | Medie | 46 | 48 | **66** | 🟡 | PlayCanvas; 25 GLB con animazioni di inclinazione, atlas e config |
| 4 | `cuttherope.zip` | 2D | Medie | 16 | 57 | **61** | 🟡 | Motore JS, DDS+JSON atlas; animazioni personaggio e fisica della corda |
| 5 | `PieceOfCakeMerge.zip` | 2D | Molte | 104 | 27 | **56** | 🟡 | Defold; archivi ARCD/ARCI + WASM; molti schermi, progression e narrativa |
| 6 | `goodstriplematch.zip` | 3D | Medie | 14 | 41 | **40** | 🔴 | Cocos, codice di avvio ma asset 3D non completi nel mirror |
| 7 | `find-differences.zip` | 2D | Poche–medie | 2 | 97 | **36** | 🔴 | Due HTML bootstrap; mancano immagini e logiche del gioco |
| 8 | `block-puzzle-master.zip` | 2D | Poche | 1 | 95 | **35** | 🔴 | Solo HTML game-frame; niente asset grafici catturati |
| 9 | `drop-merge-numbers.zip` | 2D | Poche | 2 | 94 | **35** | 🔴 | Due HTML bootstrap; la meccanica 2048 è semplice da tematizzare |
| 10 | `what-s-the-difference-online.zip` | 2D | Poche–medie | 0 | 96 | **34** | 🔴 | Le coppie immagini sarebbero il principale asset, ma sono assenti |
| 11 | `jigpic-solitaire.zip` | 2D | Poche–medie | 0 | 87 | **30** | 🔴 | Grafica principale per livello, griglia e transizioni; gameplay assente |
| 12 | `mahjongg.zip` | 2D/2.5D | Poche | 0 | 86 | **30** | 🔴 | Set tessere, fondo e HUD; mancano asset gioco |
| 13 | `nuts-puzzle-sort-by-color.zip` | 2.5D | Poche–medie | 1 | 76 | **28** | 🔴 | Solo bootstrap; svitamento/sort e animazioni 3D-like |
| 14 | `find-the-cow(cat).zip` | 2D | Poche–medie | 0 | 78 | **27** | 🔴 | 79 file di Jewel Academy non pertinenti; nessun asset affidabile del gioco |
| 15 | `hexasort.zip` | 2.5D/3D | Medie | 1 | 70 | **26** | 🔴 | Bootstrap soltanto; tile impilate, selezione e transizioni |
| 16 | `lavaoraqua.zip` | 2D | Poche–medie | 0 | 70 | **25** | 🔴 | Il solo file del game host appartiene a Goods Triple Match 3D |
| 17 | `jewel academy.zip` | 2D | Medie | 0 | 68 | **24** | 🔴 | Match-3 con tile/VFX e livelli; gameplay non catturato in questo ZIP |
| 18 | `sandtrix.zip` | 2D | Poche | 1 | 65 | **24** | 🔴 | Bootstrap soltanto; simulazione particellare della sabbia |
| 19 | `watersort.zip` | 2.5D/3D | Medie | 2 | 61 | **23** | 🔴 | Due HTML bootstrap; fluidi e shop/skin non catturati |
| 20 | `pixelblast.zip` | 2D/3D? | Medie | 1 | 60 | **22** | 🔴 | Solo bootstrap; grafica/engine effettivi non verificabili dal mirror |
| 21 | `carout.zip` | 2.5D/3D | Medie | 0 | 51 | **18** | 🔴 | Auto, percorsi e incastri; nessun game payload |
| 22 | `twistedtangle.zip` | 3D | Medie | 2 | 42 | **17** | 🔴 | Due HTML bootstrap; corde 3D, intrecci e interazioni continue |
| 23 | `home-design-decorate.zip` | 2D | Molte | 0 | 35 | **12** | 🔴 | Match-3 + decorazione + progressione, molti temi e menu |
| 24 | `complex-merge-3-park-town.zip` | 2D/2.5D | Molte | 0 | 25 | **9** | 🔴 | Match-3 + costruzione parco; file MP3 è di Sandtrix, non del gioco |

## Interpretazione

- **Primo candidato concreto:** Hexa Stack, codice PixiJS più 64 immagini AVIF, 44 file audio e numerosi script UI/VFX. Per l'inspector 1:1 modellare scene e transizioni, e agganciare le texture alle istanze Pixi e ai frame, non alle singole immagini soltanto.
- **Miglior puzzle concettualmente semplice tra quelli con codice catturato:** Blocks and That's It (Cocos Creator). Prima serve confermare e integrare il bundle di texture non presente nel mirror.
- **Miglior caso studio 3D:** Color Water Sort 3D (PlayCanvas, 25 GLB). È adatto a testare asset→mesh→materiali→animazione→stato, compresi tilt/rotazioni, ma richiede un inspector 3D più ricco.
- **Miglior caso studio per sprite atlas e sincronizzazione fisica:** Cut the Rope (DDS + JSON). La sostituzione deve rispettare coordinate UV, frame e fisica, non solamente la forma visibile in una schermata.
- **Da evitare per un MVP:** Piece of Cake (Defold binario e storia/eventi), Park Town, Home Design, Twisted Tangle, salvo recupero runtime e infrastruttura.

## Problema strutturale dei mirror

Nella maggior parte degli ZIP dominano HTML/JS e immagini di `www.crazygames.com`, `builds.crazygames.com`, `imgs.crazygames.com` e domini pubblicitari. I numeri totali di file (fino a 848 nello ZIP) **non rappresentano la complessità grafica del gioco**. Esempi di contaminazione: `find-the-cow(cat).zip` contiene 79 asset del game host di Jewel Academy; `complex-merge-3-park-town.zip` contiene un MP3 proveniente da Sandtrix; `lavaoraqua.zip` contiene un file .bin di Goods Triple Match 3D. La pipeline GitHub Actions aggiornata filtra questi host estranei e crea un manifest per ogni gioco. Anche un manifest con più file **non dimostra** che il gioco sia eseguibile offline.

## Architettura raccomandata per reskin 1:1

1. **Recuperare il vero build**, non semplicemente il mirror della pagina. Verificare dependency graph, fetch XHR, loader, file hash, segnature di versione, e mappatura di asset con provenienza.
2. **Adapter per engine:** PixiJS (sprite, Container, Texture, BaseTexture, texture frames); PlayCanvas (Entity, MeshInstance, material, Animation), Cocos (Node, SpriteFrame, atlas), Defold (archives, texture mapping, scene state), engine JS specifici.
3. **Inspector runtime:** timestamp + scene/stato + object ID + parent/layer/z-index + transform + UV/frame + asset URI/hash + animation clip/frame + rendering mode.
4. **State capture:** riprodurre input e RNG seed, level data, timers, score, tutorial, physics tick e callback di animazione; salvarli per ogni checkpoint/elemento ispezionato.
5. **Skin pack**: mapping versionato `game/build/scene/state/object/asset/frame` verso file sostitutivi, con override graduati (singolo frame, atlas, texture completa, materiale, UI) e validazione aspect/UV/dimensioni.
6. **Verifica fedeltà:** screenshot e pixel diff su frame deterministici, regression per interazioni/animazioni e rilevazione asset non coperti. La prova finale è il gameplay funzionante, non il solo caricamento del primo frame.

*Indicazioni grafiche e di numero schermate dove la cattura non contiene il gioco sono ipotesi coerenti con il genere, non attestazioni del motore. Il punteggio non riguarda i diritti di ridistribuzione dei contenuti.*
