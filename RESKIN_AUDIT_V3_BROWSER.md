# Reskin audit v3 — dopo la cattura dei CDN nel browser

**24 novembre 2026 · Nuovo snapshot forense locale · Voti provvisori (non 24 build offline complete)**

L'origine è `C:\Users\jessi\Downloads\Puzzles Crazygames mirror` con 24 ZIP. I 24 giochi sono stati cercati sulle pagine ufficiali CrazyGames e i loader attuali confrontati con i file ZIP: **24/24 pagine HTTP 200 e nessun loader cambiato**. Il primo crawler HTTP aveva recuperato 17 mirror non vuoti; il successivo Chrome/Playwright ha identificato i file di Car OUT!, Nut Sort, Home Design, Jewel Academy, Jigpic e Lava and Aqua. **L'audit locale più recente rileva 23/24 cartelle con almeno un file, 634.921.037 byte totali (~634,9 MB), e 8 giochi Unity con quattro file core per loader.** Lo script browser per i 24 titoli è stato avviato e l'audit è uno snapshot, non una certificazione di finalizzazione.

**Correzione:** `find-the-cow(cat).zip` è il mirror di **Nut Sort: Build the City** (Defold): l'HTML nello ZIP e la pagina attuale identificano entrambi `nut-sort-build-the-city`. Il vecchio voto **0 per Find the Cow era un errore** e viene sostituito dalla riga Nut Sort.

**Punteggio:** per comparabilità con v2 uso *35% facilità intrinseca* (render 2D/3D, meccaniche, numero stimato di schermate/stati, animazioni) e *65% ispezionabilità con i file davvero disponibili* (asset separati, pack/binari, scene e loader). 0–100, più alto = reskinning più conveniente oggi. 🟢 >=75, 🟡 55–74, 🔴 <55. I conteggi non provano che il gioco si avvii offline o che tutte le scene siano presenti. Schermate: **Poche/Medie/Molte sono stime per fascia**, non enumerazione in runtime.

| # | Gioco / ZIP | Motore e render | Schermate* | File locali | Teorica | Mirror | **Oggi** | Semaforo | Motivazione concreta |
|---:|---|---|---|---:|---:|---:|---:|:---:|---|
| 1 | `hexastack` | PixiJS, 2D/2.5D | Molte | 1134 | 75 | 92 | **86** | 🟢 | 766 immagini; 88 audio; 277 codice/config; molte risorse separate e sostituibili; UI, effects e timeline non banali |
| 2 | `color-water-sort-3d` | PlayCanvas, 3D | Medie | 122 | 50 | 88 | **75** | 🟢 | 49 modelli, 35 immagini, 20 audio; scene/GLB e materiali identificabili; animazioni 3D complesse |
| 3 | `cuttherope` | JS/atlas DDS, 2D | Medie | 16 | 65 | 65 | **65** | 🟡 | 5 immagini DDS, atlas JSON, JS; atlas e codice catturati, ma fisica della corda e sincronizzazione frame |
| 4 | `blocks-and-that'it` | Cocos 3.8.8, 2D | Poche | 21 | 90 | 43 | **59** | 🟡 | asset config/pack Cocos, circa 1 immagine separata; meccanica semplice, texture native perlopiù assenti |
| 5 | `drop-merge-numbers` | Unity 2021, 2D | Poche | 13 | 69 | 53 | **59** | 🟡 | 4/4 core Unity, 55,5 MB; puzzle semplice ma sprite impacchettati in Unity |
| 6 | `nut-sort-build-the-city` | Defold, 2D/2.5D | Medie–molte | 16 | 43 | 67 | **59** | 🟡 | WASM + archivi ARCD/ARCI e projectc; build Defold effettivamente richiesto dal player; reskin complicato da archivi compilati e metagioco di città |
| 7 | `block-puzzle-master` | Unity 6, 2D | Poche | 5 | 67 | 53 | **58** | 🟡 | 4/4 core Unity, 57 MB; puzzle di blocchi semplice ma texture da estrarre da binari |
| 8 | `find-differences` | Unity 2022, 2D | Poche–medie | 5 | 62 | 54 | **57** | 🟡 | 4/4 core Unity, 53 MB; immagini nei bundle Unity; regioni cliccabili da preservare |
| 9 | `carout` | Unity/Playgama, 2.5D/3D | Medie | 10 | 50 | 56 | **54** | 🔴 | build .unityweb e script Player dal browser; loader ottenuto solo via browser; file di gioco presenti ma non verificati per livelli/stati |
| 10 | `nuts-puzzle-sort-by-color` | Unity 2020, 2.5D/3D | Poche–medie | 5 | 49 | 52 | **51** | 🔴 | 4/4 core Unity, 26,3 MB; animazioni viti e asset binari |
| 11 | `hexasort` | Unity 2022, 2.5D/3D | Medie | 5 | 47 | 52 | **50** | 🔴 | 4/4 core Unity, 88,6 MB; pile/profondità e Unity binario |
| 12 | `watersort` | Unity 2022, 3D | Medie | 5 | 42 | 52 | **49** | 🔴 | 4/4 core Unity, 77,4 MB; liquidi, shader e modelli nei binari |
| 13 | `jigpic-solitaire` | HTML5, 2D | Poche–medie | 6 | 86 | 27 | **48** | 🔴 | 6 file iniziali, 3,3 MB; materiale ancora scarso; facile come meccaniche, capture delle immagini non dimostrata |
| 14 | `PieceOfCakeMerge` | Defold/iframe, 2D | Molte | 104 | 28 | 58 | **48** | 🔴 | archivi compilati; 41 richieste statiche non riuscite; progressione/ambienti complessi, download parziale |
| 15 | `pixelblast` | Unity 6, da verificare | Medie | 5 | 37 | 52 | **47** | 🔴 | 4/4 core Unity, 63,1 MB; risorse 3D/2D non ispezionate nei pacchetti |
| 16 | `twistedtangle` | Unity 6, 3D | Medie | 5 | 26 | 52 | **43** | 🔴 | 4/4 core Unity, 78 MB; corde deformabili e fisica impegnativa |
| 17 | `what-s-the-difference-online` | HTML/iframe, 2D | Poche–medie | 8 | 72 | 22 | **40** | 🔴 | 8 file JS/HTML, richieste dinamiche mancanti; pagine presenti ma coppie d'immagini e livelli non recuperati |
| 18 | `jewel academy` | HTML5, 2D | Medie | 8 | 70 | 20 | **38** | 🔴 | 8 file JS/CSS avvio, 4,2 MB; match-3 e VFX; asset visuali di livelli non verificati |
| 19 | `goodstriplematch` | Cocos, 3D | Medie | 15 | 43 | 29 | **34** | 🔴 | script Cocos e pack JSON, 2 immagini; modelli/texture del gameplay quasi assenti |
| 20 | `mahjongg` | HTML5, 2D/2.5D | Poche | 0 | 86 | 0 | **30** | 🔴 | nessun file gameplay; pagina ufficiale 200; browser non ha avviato richieste game-host nel test |
| 21 | `lavaoraqua` | HTML5, 2D | Poche–medie | 1 | 69 | 6 | **28** | 🔴 | 1 immagine rilevata (audit ~0,4 MB); game host raggiunto, ma entrypoint e bundle assenti; dati locali in evoluzione |
| 22 | `sandtrix` | HTML5, 2D | Poche | 1 | 64 | 7 | **27** | 🔴 | un bootstrap da 70 KB; simulazione sabbia; entrypoint mancante |
| 23 | `home-design-decorate` | Unity/Playgama, 2D/2.5D | Molte | 5 | 34 | 17 | **23** | 🔴 | 5 file loader/script, 0,8 MB; core ancora parziale; decorazioni, schermi, progressione |
| 24 | `complex-merge-3-park-town` | Iframe esterno, 2D/2.5D | Molte | 1 | 26 | 5 | **12** | 🔴 | solo risposta minima iframe 1,8 KB; build assente, numerosi ambienti UI e progressione |

## Classi di recupero: non confondere «presente» e «completo»

- **Molti file grafici separati:** Hexa Stack (766 immagini + 88 audio) e Color Water Sort 3D (35 immagini + 49 GLB). Sono i candidati più immediati per un inspector di sprite/materiali. Hexa Stack ha ancora dipendenze statiche non esaustivamente verificate.
- **Core Unity presenti, asset interni da estrarre:** Block Puzzle Master, Drop & Merge, Find Differences, Hexa Sort, Nuts Puzzle, Pixel Blast, Twisted Tangle, Cups Water Sort. I quattro file del loader **non** equivalgono a scene e texture editabili e non sono stati testati offline.
- **Engine HTML/Cocos/Defold con dipendenze parziali:** Cut the Rope, Blocks, Goods Triple Match, Piece of Cake, Nut Sort e Car OUT! hanno componenti utilizzabili per analisi ma non tutti i livelli certificati.
- **Bootstrap o mirror poveri:** Home Design, Jewel Academy, Jigpic, Lava and Aqua, Sandtrix, What's the Difference, Park Town.
- **Nessun file gameplay recuperato:** Mahjongg Solitaire, nonostante il sito CrazyGames sia raggiungibile. Richiede una nuova acquisizione/test manuale in una sessione player che effettivamente avvii il gioco.

## Raccomandazione tecnica

**1. Hexa Stack** per il primo inspector PixiJS con texture, transform, layer e timeline; **2. Color Water Sort 3D** per PlayCanvas/GLB e mapping mesh→materiale→animazione; **3. Cut the Rope** per atlas DDS e fisica. **Nut Sort**, correttamente identificato, diventa un caso Defold per provare l'ispezione di archivi compilati e stato 2D.

## Cartelle e verifiche

Mirror: `C:\Users\jessi\Downloads\_chatgpt_games_full_mirrors`.

Log di riproduzione attraverso Chrome: `_browser_capture_20261124\*.json`; audit forense: `_forensic_mirror_audit_20261124.json`; dati del loader dal sito ufficiale: `_official_page_comparison.json`. Tutti i file del gioco recuperati sono **solo sul PC**, non in questo repository pubblico.

**Test non ancora eseguiti:** gameplay completo offline, progressione livelli, flussi di acquisto/video e SDK, dipendenze runtime caricate soltanto in scene avanzate e regression dei reskin. Un voto più alto misura opportunità tecnica, non licenza di ridistribuzione.
