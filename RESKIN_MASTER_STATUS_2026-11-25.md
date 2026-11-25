# Stato unico — 69 giochi, mirror, reskinner e piano di verifica

**Aggiornato:** 25 novembre 2026 · **Repository:** [`jessicacarter9955/games`](https://github.com/jessicacarter9955/games) · **Branch di sviluppo:** `feat/multigame-reskinner`

> Documento di handoff operativo. Distingue **fatti verificati**, **stime storiche** e **richieste/bug da risolvere**. Non attribuisce un test positivo a un gioco solo perché ha asset, entrypoint o HTTP 200. Non modifica il progetto di produzione `2night`.

## 1. Ambito e stato verificato

- Il progetto multi-game reskinner va sviluppato **nel branch separato di `jessicacarter9955/games`**, non nel progetto `2night`.
- Catalogo: **69 titoli**, divisi in **24 puzzle** e **45 titoli** nelle categorie Word games, cards, io games e trivia. I vecchi audit sono `RESKIN_AUDIT_V4.md` (24) e `RESKIN_AUDIT_NEW45.md` (45).
- Vecchi snapshot dei mirror Windows (24/11): **24/24** cartelle con file, **1.611 file / ~638,8 MB** per il primo gruppo; **45/45** con file, **1.698 file / ~958 MB** per il secondo. Sono inventari di quel momento, non la prova che ogni gioco giri.
- Aggiornamento operativo documentato il 25/11 in `reskinner/README.md`: **69/69** root mappate via mirror locale Windows, **52 entrypoint HTML**, **2.123 immagini aggiuntive**, **44 giochi con immagini + entrypoint**. Classificazione di runtime *con overlay Windows*: **24 2D sperimentali, 6 3D limitati, 38 bloccati, 1 senza entrypoint HTML**. La versione con soli asset GitHub mostrava una classificazione diversa (**8 / 6 / 38 / 17**): **non mescolare i due ambienti**.
- La procedura Windows corretta è `py scripts/serve_local_mirrors.py --port 8000` dalla root del repository, dopo il checkout del branch, poi `http://127.0.0.1:8000/reskinner/`. L'overlay usa i mirror nei Downloads sul PC senza pubblicarli sul repository.
- Il catalogo `reskinner/catalog.json` comprende 69 voci e registra `score`, `screensEstimate`, engine, presenza entrypoint e stato; quei dati si riferiscono al catalogo generato, non a 69 sessioni di gameplay validate.

### Cosa funziona nell'implementazione, secondo i test registrati

- Selettore/catalogo multi-gioco, preview con iframe di HTML locale, inspector DOM/CSS/Canvas2D e alcuni oggetti engine esposti globalmente.
- Galleria asset, PNG sostitutivo a **dimensioni identiche**, draft salvati in IndexedDB, esportazione immagini e manifest; Service Worker sulla root che sostituisce risposte immagine su **stesso URL**, utile anche per il caricamento texture GPU; ricaricamento del gioco con la skin.
- Atlas: parser/metadati **Sparrow XML, Cocos plist, libGDX .atlas** e sostituzione di un ritaglio senza spostare coordinate UV; frame ruotati non supportati; rettangoli condivisi richiedono attenzione.
- Test tecnico precedente: intercezione Service Worker su PNG rossa→blu; asset Wordmeister `166×61` intercettato con header `X-2Night-Reskin=local-draft`. **Non prova** che una partita e tutte le scene siano giocabili né che il singolo frame sia modificabile in qualsiasi motore.

## 2. Ultimi test manuali dell'interfaccia e bug aperti

| Gioco | Osservazione dell'utente (25/11) | Da verificare / azione |
|---|---|---|
| Mahjongg | La prima schermata appare; dopo **Play** il gameplay non si vede | Catturare richieste nuove, errori JS, cambio scena, canvas/WebGL e asset caricati solo dopo Play. **Non segnare test completo.** |
| Hangman | Schermo **bianco** | Confrontare loader, asset di avvio, errori console, route, script e origin |
| Wordmeister | **Funziona** nell'uso manuale riferito | Usare come baseline; verificare inspector, swap 1:1, schermate successive e persistenza |
| Hearts: Classic | **Non va** | Diagnosi boot, dipendenze e runtime; non declassare automaticamente la reskinnabilità teorica |
| Paper.io 2 | Area gioco **nera**, ma visibili icone di settings | Separare layer UI e canvas/WebGL/scene di gameplay, controllare SDK/runtime |
| Guess Their Answer | Loading bar arriva quasi alla fine e poi si blocca | Individuare fase finale dell'inizializzazione, richieste pendenti, WebGL, SDK e errori |
| Hexastack e altri titoli | Sospetto bisogno di **adapter dedicato** | Implementare adapter concreto **solo dopo** analisi del vero runtime e delle scene; verificare `attach/scan/pick/swap/dispose` |
| Cubes 2048 Royale | L'inspector sembra trovare `div` e box ma sidebar/preview **non isolano** gli elementi | Correggere selezione ↔ oggetto ↔ risorsa, evidenziazione, crop e preview isolata; distinguere overlay DOM da frame Canvas/WebGL |

La tabella sopra rappresenta **osservazioni manuali e interventi da fare**, non patch già completate.

## 3. Regole richieste per il punteggio e la tabella

**Criterio principale:** facilità/qualità del **reskinning reale degli asset** + **numero e varietà di schermate/stati**. Motore, 3D, shader, animazioni non banali, binari opachi e logiche complesse incidono sulla difficoltà; mancanza di avvio offline, dipendenze online e asset mancanti devono essere **colonne diagnostiche separate**, non motivi automatici per dimezzare il voto.

- Conservare **tutti i 69 giochi** nella classifica: tecnologia/motore, numero file, schermate (conteggio *misurato* se disponibile; altrimenti fascia *stimata*), punteggio e **motivazione dettagliata**, semaforo.
- Non chiamare una **fascia** ("Poche/Medie/Molte") "numero di schermate verificato". Quando possibile navigare stati reali: splash/menu, gameplay, pausa, settings, game over, eventuali level select/shop/progressione. Registrare **conteggio verificato** a parte.
- Separare **fattibilità reskin** (voto / semaforo) da **avviabilità locale**, **completezza mirror**, **ispezione oggetti** e **qualità preview**. Un titolo può essere tecnicamente facile da reskinnare anche se oggi il mirror ha una dipendenza da recuperare.
- Esempio specifico: **Cubes 2048 Royale** nella classifica del 24/11 è **81 🟢**, con 127 file e 51 alla metrica "teoria". Un successivo **81 → 52 🔴** per **1 asset mancante** non è giustificato dai soli fatti indicati. **Ripristinare 81 come riferimento storico** finché non esiste una motivazione quantitativa verificata del nuovo valore. Il `51` non è un conteggio di schermate.
- Per gli stati colorati non far sparire i precedenti verdi per un cambio di criterio non spiegato: rendere espliciti **voto precedente → voto nuovo**, motivo e evidenza.
- **Non ricalcolare falsamente** tutti i 69 voti in questo documento: i valori qui sotto sono **i voti storici originali** dei due audit del 24/11, preservati per un successivo re-audit misurabile.

## 4. Classifica consolidata — 69 giochi (punteggi storici, non rivalutati)

**Legenda:** `File mirror` = numero di file osservati nel rispettivo audit del 24/11, **non** file nel checkout GitHub attuale. `Schermate` = fascia stimata, non misurata. `Teoria`, `Inspect`, `Voto` = stime dei report precedenti (formula storica 35% / 65%, non ancora il nuovo criterio richiesto). I semafori rispecchiano i voti storici e **non** l'esito di smoke test. I link CrazyGames inclusi nella parte 45 provengono dall'audit originario.

| # | Categoria | Gioco | Motore | Grafica | Schermate stimate | File mirror | Teoria | Inspect | Voto storico | 🚦 | Motivazione storica |
|---:|---|---|---|---|---|---:|---:|---:|---:|:---:|---|
| 1 | Puzzles | [Mahjongg Solitaire](https://www.crazygames.com/game/mahjongg-solitaire) (`mahjongg`) | HTML5, canvas 2D | 2D | Poche | 35 | 86 | 94 | **91** | 🟢 | 12 file visuali, 13 codice/config e 10 audio; 35 richieste locali riuscite, canvas 1080×740 e screenshot non vuoto offline. Mancano test di livelli e controlli |
| 2 | Puzzles | [Hexa Stack](https://www.crazygames.com/game/hexa-stack) (`hexastack`) | PixiJS | 2D/2.5D | Molte | 1134 | 75 | 86 | **82** | 🟢 | 766 file visuali, 277 codice/config e 88 audio: ottimo mapping sprite/texture. Il test offline apre HTML ma non crea un canvas; dipendenza di sessione esterna |
| 3 | Puzzles | [Color Water Sort 3D](https://www.crazygames.com/game/color-water-sort-3d) (`color-water-sort-3d`) | PlayCanvas | 3D | Medie | 122 | 50 | 82 | **71** | 🟡 | 49 modelli, 35 immagini, 20 audio; manifest e modelli ben identificabili. Nel test offline l'entrypoint apre senza canvas per dipendenza SDK: animazioni e fluidi 3D impegnativi |
| 4 | Puzzles | [Cut the Rope](https://www.crazygames.com/game/cut-the-rope-ebx) (`cuttherope`) | JS + atlas DDS | 2D | Medie | 16 | 65 | 62 | **63** | 🟡 | 5 immagini/atlas DDS e 8 file codice/config. Stato animato e fisica delle corde complicano la sostituzione; smoke offline senza canvas e con errore fetch |
| 5 | Puzzles | [Blocks and that’s it](https://www.crazygames.com/game/block-tour-kfz) (`blocks-and-that'it`) | Cocos 3.8.8 | 2D | Poche | 21 | 90 | 43 | **59** | 🟡 | Griglia e pochi oggetti semplici da ritexturizzare. Mirror con config/runtime Cocos e una sola immagine: mancano molti texture asset nativi |
| 6 | Puzzles | [Nut Sort: Build the City](https://www.crazygames.com/game/nut-sort-build-the-city) (`nut-sort-build-the-city`) | Defold | 2D/2.5D | Medie–molte | 16 | 43 | 67 | **59** | 🟡 | 16 file / ~18 MB; browser ha caricato WASM, ARCD, ARCI e projectc. Reskin gravato da dati compilati, ordinamento pezzi e progressione città; sostituisce il vecchio ZIP find-the-cow(cat) |
| 7 | Puzzles | [Drop & Merge the Numbers](https://www.crazygames.com/game/drop-merge-the-numbers) (`drop-merge-numbers`) | Unity 2021 | 2D | Poche | 13 | 69 | 53 | **59** | 🟡 | ~55,5 MB e componenti Unity scaricati: meccaniche numeriche semplici, ma sprite/scene sono impacchettati e non ispezionati |
| 8 | Puzzles | [Block Blaster](https://www.crazygames.com/game/block-puzzle-master) (`block-puzzle-master`) | Unity 6 | 2D | Poche | 5 | 67 | 53 | **58** | 🟡 | ~57 MB di Unity; gameplay a griglia teoricamente semplice. Texture ancora all'interno di pacchetti binari e senza prova di avvio offline |
| 9 | Puzzles | [Find It - Find The Differences](https://www.crazygames.com/game/find-it---find-the-differences) (`find-differences`) | Unity 2022 | 2D | Poche–medie | 5 | 62 | 54 | **57** | 🟡 | ~53 MB del build Unity disponibili. Cambiare immagini richiede preservare regioni cliccabili e risolvere l'estrazione dai binari |
| 10 | Puzzles | [Car OUT! Jam Parking Puzzle](https://www.crazygames.com/game/car-out-jam-parking-puzzle) (`carout`) | Unity/Playgama | 2.5D/3D | Medie | 10 | 50 | 57 | **55** | 🟡 | 10 file / 20,9 MB ottenuti con il browser ufficiale, inclusi dati Unity. Auto e percorsi animati; non collaudati livelli o menu offline |
| 11 | Puzzles | [Nuts Puzzle: Sort By Color](https://www.crazygames.com/game/nuts-puzzle-sort-by-color) (`nuts-puzzle-sort-by-color`) | Unity 2020 | 2.5D/3D | Poche–medie | 55 | 49 | 54 | **52** | 🔴 | 55 file, molti config/codice aggiuntivi e core Unity; modelli, movimenti delle viti e texture ancora soprattutto nei binari |
| 12 | Puzzles | [Hexa Sort](https://www.crazygames.com/game/hexa-sort) (`hexasort`) | Unity 2022 | 2.5D/3D | Medie | 5 | 47 | 52 | **50** | 🔴 | ~88,6 MB di core Unity. Pile esagonali, profondità e selezione: più stati rispetto a un puzzle 2D semplice |
| 13 | Puzzles | [Cups - Water Sort Puzzle](https://www.crazygames.com/game/cups---water-sort-puzzle) (`watersort`) | Unity 2022 | 3D | Medie | 5 | 42 | 52 | **49** | 🔴 | ~77,4 MB di core Unity; liquidi, shader e movimenti dei bicchieri da mappare negli archivi |
| 14 | Puzzles | [Piece of Cake: Merge and Bake](https://www.crazygames.com/game/piece-of-cake-merge-and-bake) (`PieceOfCakeMerge`) | Defold / iframe | 2D | Molte | 104 | 28 | 58 | **48** | 🔴 | 104 file, 19 binari e 81 file codice/config; archivi Defold, molte schermate e progressione. Numerose dipendenze non recuperate |
| 15 | Puzzles | [Jigpic Solitaire](https://www.crazygames.com/game/jigpic-solitaire) (`jigpic-solitaire`) | HTML5 | 2D | Poche–medie | 6 | 86 | 27 | **48** | 🔴 | 6 file / 3,3 MB, prevalentemente codice: gioco semplice da tematizzare per immagini, ma il set visivo dei livelli non è verificato |
| 16 | Puzzles | [Pixel Blast](https://www.crazygames.com/game/pixel-blast) (`pixelblast`) | Unity 6 | Da verificare | Medie | 5 | 37 | 52 | **47** | 🔴 | ~63,1 MB e file core Unity; struttura delle risorse grafiche interna ancora da estrarre/identificare |
| 17 | Puzzles | [Twisted Tangle](https://www.crazygames.com/game/twisted-tangle-nmt) (`twistedtangle`) | Unity 6 | 3D | Medie | 5 | 26 | 52 | **43** | 🔴 | ~78 MB di Unity; intrecci delle corde, deformazioni continue e fisica complicano il mapping dei materiali |
| 18 | Puzzles | [What's The Difference?](https://www.crazygames.com/game/what-s-the-difference-online) (`what-s-the-difference-online`) | HTML/iframe | 2D | Poche–medie | 8 | 72 | 22 | **40** | 🔴 | 8 file codice e circa 0,2 MB. Semplice sostituire coppie di immagini, ma i dati dei livelli e le immagini non sono disponibili nel mirror |
| 19 | Puzzles | [Goods Triple Match 3D](https://www.crazygames.com/game/goods-triple-match-3d) (`goodstriplematch`) | Cocos | 3D | Medie | 25 | 43 | 35 | **38** | 🔴 | 25 file, 4 immagini, 6 binari e 14 codice/config. Recupero migliorato rispetto ai 15 file precedenti, ma modelli 3D e materiali incompleti |
| 20 | Puzzles | [Jewel Academy](https://www.crazygames.com/game/jewel-academy) (`jewel academy`) | HTML5 | 2D | Medie | 8 | 70 | 20 | **38** | 🔴 | 8 file codice (~4,2 MB) catturati dal player, senza immagini di gemme separatamente visibili; match-3 con animazioni ed effetti |
| 21 | Puzzles | [Lava and Aqua](https://www.crazygames.com/game/lava-and-aqua) (`lavaoraqua`) | HTML5 | 2D | Poche–medie | 1 | 69 | 7 | **29** | 🔴 | Solo un file visuale (~0,4 MB) nella struttura verificata; manca ancora l'entrypoint e il gameplay completo |
| 22 | Puzzles | [Sandtrix](https://www.crazygames.com/game/sandtrix) (`sandtrix`) | HTML5 | 2D | Poche | 1 | 64 | 7 | **27** | 🔴 | Solo uno script bootstrap (~70 KB); codice e simulazione della sabbia non recuperati in forma utilizzabile |
| 23 | Puzzles | [Home Design: Decorate House](https://www.crazygames.com/game/home-design---decorate-house) (`home-design-decorate`) | HTML5/Unity launcher | 2D/2.5D | Molte | 5 | 34 | 17 | **23** | 🔴 | 5 file / ~0,8 MB: solo loader/script; numerosi ambienti, decorazioni, stato e progressione non disponibili |
| 24 | Puzzles | [Park Town](https://www.crazygames.com/game/park-town) (`complex-merge-3-park-town`) | Iframe | 2D/2.5D | Molte | 1 | 26 | 5 | **12** | 🔴 | Un file wrapper da 1,8 KB: praticamente nessun asset di gioco. Molte scene, oggetti decorativi e progressione |
| 25 | Word games | [Hangman](https://www.crazygames.com/game/hangman-cfc) | html5 | 2D | Poche | 67 | 96 | 87 | **90** | 🟢 | Lettere, disegno e sfondo quasi statici; ottimo per un primo reskin 2D e test di viewport. Mirror: 61 visuali, 0 modelli, 4 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 26 | Word games | [Wordmeister](https://www.crazygames.com/game/wordmeister) | html5 | 2D | Poche–medie | 65 | 88 | 90 | **89** | 🟢 | Tabellone stile Scrabble, lettere, font e pulsanti facilmente mappabili se codice/asset sono esposti. Mirror: 50 visuali, 0 modelli, 3 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; primo rendering canvas locale verificato senza rete esterna. |
| 27 | cards | [Hearts: Classic](https://www.crazygames.com/game/hearts-classic) | html5 | 2D | Poche | 57 | 88 | 82 | **84** | 🟢 | Carte e tavolo 2D con pochi stati visivi; logica dei turni relativamente isolabile dalla grafica. Mirror: 38 visuali, 0 modelli, 3 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 28 | io games | [Paper.io 2](https://www.crazygames.com/game/paper-io-2) | html5 | 2D | Medie | 42 | 77 | 87 | **84** | 🟢 | Skin a colore, scie e superfici 2D relativamente facili; partite competitive e aggiornamenti della mappa. Mirror: 35 visuali, 0 modelli, 5 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 29 | trivia | [Guess Their Answer](https://www.crazygames.com/game/guess-their-answer) | html5 | 3D (59 modelli GLB) | Medie | 127 | 54 | 97 | **82** | 🟢 | Quiz competitivo con risposte, avversari e avanzamento; possibili scene e personaggi animati. Mirror: 33 visuali, 59 modelli, 30 codice/config, 2 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 30 | io games | [Cubes 2048 Royale](https://www.crazygames.com/game/cubes-2048-royale) | html5 | 2.5D/3D | Medie | 127 | 51 | 97 | **81** | 🟢 | Materiali e cubi duplicabili, ma arena, numeri dinamici e combattimento online rendono più complesso il mapping. Mirror: 31 visuali, 52 modelli, 22 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato. |
| 31 | cards | [Spades](https://www.crazygames.com/game/spades) | html5 | 2D | Poche–medie | 42 | 84 | 80 | **81** | 🟢 | Mazzo di carte e tavolo standard, con animazioni limitate; gestione delle prese e dell'IA da rispettare. Mirror: 37 visuali, 0 modelli, 3 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato. |
| 32 | Word games | [Words of Wonders](https://www.crazygames.com/game/words-of-wonders) | html5 | 2D | Molte | 37 | 76 | 80 | **79** | 🟢 | Cruciverba, sfondi e progressione di livello; più schermi e materiali rispetto a Wordmeister. Mirror: 24 visuali, 0 modelli, 10 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato. |
| 33 | trivia | [Trivia Crack](https://www.crazygames.com/game/trivia-crack) | html5 | 2D | Medie | 39 | 77 | 78 | **78** | 🟢 | Ruota, categorie e schermate delle domande ripetibili; più animazioni e dati quiz da rispettare. Mirror: 27 visuali, 0 modelli, 10 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 34 | cards | [Las Vegas Poker](https://www.crazygames.com/game/las-vegas-poker) | html5 | 2D/2.5D | Medie–molte | 65 | 68 | 80 | **76** | 🟢 | Mazzo, chip e tavolo, ma puntate, vincite e possibili stati sociali/economici aumentano le schermate. Mirror: 34 visuali, 0 modelli, 11 codice/config, 0 binari. Molti sprite e file codice; gameplay offline non verificato; smoke test offline non conclusivo. |
| 35 | io games | [Uno Online](https://www.crazygames.com/game/uno-online) | html5 | 2D | Medie | 18 | 80 | 71 | **74** | 🟡 | Mazzo e tavolo facili da cambiare, ma turni, interazioni, stati delle carte e multiplayer complicano il test. Mirror: 1 visuali, 0 modelli, 15 codice/config, 0 binari. Mapping asset-scena e completezza da verificare; smoke test offline non conclusivo. |
| 36 | Word games | [Word Search](https://www.crazygames.com/game/word-search-lyg) | html5 | 2D | Poche | 10 | 95 | 63 | **74** | 🟡 | Griglia di lettere e evidenziazioni: grafica, stati e meccaniche molto semplici. Mirror: 1 visuali, 0 modelli, 9 codice/config, 0 binari. Mapping asset-scena e completezza da verificare. |
| 37 | cards | [Gin Rummy Online](https://www.crazygames.com/game/gin-rummy-online) | iframe | 2D | Poche–medie | 34 | 82 | 67 | **72** | 🟡 | Mazzo e tavolo ricorrenti, punteggio e sequenze di turni da preservare; iframe esterno. Mirror: 14 visuali, 0 modelli, 14 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 38 | cards | [Domino Duel](https://www.crazygames.com/game/domino-duel-uit) | html5 | 2D/2.5D | Medie | 53 | 76 | 68 | **71** | 🟡 | Tessere domino e tavolo facilmente sostituibili; rotazioni, turni e animazioni da preservare. Mirror: 0 visuali, 0 modelli, 51 codice/config, 0 binari. Codice/loader presente ma poche texture separate; smoke test offline non conclusivo. |
| 39 | cards | [Foono Online Multiplayer](https://www.crazygames.com/game/foono-online-multiplayer-card-game) | iframe | 2D | Medie | 62 | 72 | 67 | **69** | 🟡 | Mazzo di carte colorato, ma tanti effetti e turni online; codice su host di terzi. Mirror: 38 visuali, 0 modelli, 16 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 40 | trivia | [Millionaire Quiz](https://www.crazygames.com/game/millionaire-quiz) | html5 | 2D | Poche | 13 | 94 | 56 | **69** | 🟡 | UI di domande e opzioni quasi statica, facile da ricolorare preservando testi e stati di risposta. Mirror: 6 visuali, 0 modelli, 3 codice/config, 0 binari. Mapping asset-scena e completezza da verificare; smoke test offline non conclusivo. |
| 41 | Word games | [Wording](https://www.crazygames.com/game/wording) | html5 | 2D | Poche | 10 | 90 | 57 | **69** | 🟡 | UI testuale e riquadri quasi statici; sostituzione di colori, font e texture relativamente diretta. Mirror: 0 visuali, 0 modelli, 4 codice/config, 0 binari. Codice/loader presente ma poche texture separate; smoke test offline non conclusivo. |
| 42 | cards | [Spider Solitaire](https://www.crazygames.com/game/spider-solitaire-fuw) | unity6 | 2D | Poche–medie | 5 | 90 | 57 | **69** | 🟡 | Mazzi di carte e tableau semplici, ma sprite e layout sono impacchettati in Unity 6. Mirror: 0 visuali, 0 modelli, 2 codice/config, 3 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria. |
| 43 | trivia | [Google Feud](https://www.crazygames.com/game/google-feud) | html5 | 2D | Poche | 2 | 93 | 56 | **69** | 🟡 | Input testuale e pannelli di risposte quasi statici; pochi elementi visivi, ma dati e risposte da preservare. Mirror: 1 visuali, 0 modelli, 1 codice/config, 0 binari. Mapping asset-scena e completezza da verificare. |
| 44 | cards | [Social Solitaire](https://www.crazygames.com/game/social-solitaire) | html5 | 2D | Molte | 7 | 72 | 63 | **66** | 🟡 | Solitaire con varianti e funzioni social; interfacce, badge e progressione oltre alle carte. Mirror: 1 visuali, 0 modelli, 5 codice/config, 0 binari. Mapping asset-scena e completezza da verificare. |
| 45 | Word games | [Death Note Type](https://www.crazygames.com/game/death-note-type) | ruffle | 2D | Poche | 1 | 86 | 55 | **66** | 🟡 | Gameplay di digitazione con poche schermate e grafica semplice; gli elementi sono in Flash SWF compilato. Mirror: 0 visuali, 0 modelli, 0 codice/config, 1 binari. Grafica all'interno di Flash SWF compilato. |
| 46 | io games | [TileMan.io](https://www.crazygames.com/game/tileman-io) | iframe | 2D | Poche–medie | 101 | 80 | 57 | **65** | 🟡 | Griglia, territori e colori semplici; lo stato multiplayer e la colorazione runtime vanno mantenuti. Mirror: 28 visuali, 0 modelli, 69 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 47 | Word games | [Word Wipe](https://www.crazygames.com/game/word-wipe) | html5 | 2D | Poche | 4 | 91 | 48 | **63** | 🟡 | Griglia di lettere e selezioni visive; meccanica semplice ma richiede preservare eventi e animazioni delle tessere. Mirror: 0 visuali, 0 modelli, 3 codice/config, 0 binari. Codice/loader presente ma poche texture separate; smoke test offline non conclusivo. |
| 48 | trivia | [World Geography: Flags and Capitals](https://www.crazygames.com/game/world-geography-flags-and-capitals) | unity6 | 2D | Medie | 8 | 80 | 52 | **62** | 🟡 | Bandiere e UI testuale semplici, ma numerosissimi contenuti paese e build Unity impacchettata. Mirror: 0 visuali, 0 modelli, 2 codice/config, 6 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria; alcuni core dichiarati mancanti. |
| 49 | io games | [EvoWars.io](https://www.crazygames.com/game/evowarsio) | iframe | 2D | Molte | 91 | 48 | 67 | **60** | 🟡 | Molte evoluzioni di personaggi, skin e attacchi; animazioni e server multiplayer aumentano la superficie da modificare. Mirror: 77 visuali, 0 modelli, 14 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 50 | io games | [Agar.io](https://www.crazygames.com/game/agario) | iframe | 2D | Medie | 67 | 66 | 57 | **60** | 🟡 | Cerchi e skin vettoriali semplici; collisioni, lobby e progressione dipendono da un server multiplayer. Mirror: 35 visuali, 0 modelli, 24 codice/config, 2 binari. Iframe e dipendenze online da verificare. |
| 51 | trivia | [Logo Quiz: Game World Trivia](https://www.crazygames.com/game/logo-quiz-game-world-trivia) | unity6 | 2D | Medie–molte | 8 | 76 | 52 | **60** | 🟡 | Molti loghi e livelli, semplici per immagine ma difficili da estrarre e collegare al dataset di risposte. Mirror: 0 visuali, 0 modelli, 2 codice/config, 6 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria; alcuni core dichiarati mancanti. |
| 52 | cards | [Classic Card Games Collection](https://www.crazygames.com/game/classic-card-games-collection) | unity2022 | 2D | Molte | 5 | 67 | 57 | **60** | 🟡 | Mazzi e tavoli semplici, ma raccolta di molti giochi con regole e schermate differenti. Mirror: 0 visuali, 0 modelli, 2 codice/config, 3 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria. |
| 53 | trivia | [MemeBattle: What's That Meme?](https://www.crazygames.com/game/memebattle-what-s-that-meme) | unity2022 | 2D/3D da verificare | Medie | 5 | 64 | 57 | **59** | 🟡 | Contenuti meme e UI ripetibili; transizioni, punteggi e animazioni gestite dalla build Unity. Mirror: 0 visuali, 0 modelli, 2 codice/config, 3 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria. |
| 54 | io games | [Diep.io](https://www.crazygames.com/game/diepio) | iframe | 2D | Molte | 82 | 57 | 59 | **58** | 🟡 | Tank e proiettili spesso geometrici, ma classi, upgrade, animazioni e rete creano molti stati distinti. Mirror: 76 visuali, 0 modelli, 5 codice/config, 1 binari. Iframe e dipendenze online da verificare. |
| 55 | io games | [Hexanaut.io](https://www.crazygames.com/game/hexanaut-io) | iframe | 2D | Medie | 44 | 74 | 49 | **58** | 🟡 | Territori e tracce 2D facili da tematizzare, ma rete, rivali e stati della mappa non sono statici. Mirror: 38 visuali, 0 modelli, 5 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 56 | trivia | [Soccer Europe Quiz](https://www.crazygames.com/game/soccer-europe-quiz) | unity6 | 2D/3D da verificare | Medie | 9 | 69 | 52 | **58** | 🟡 | Quiz e loghi di squadre/bandiere facili da tematizzare; progressione e contenuti nei pacchetti Unity. Mirror: 0 visuali, 0 modelli, 3 codice/config, 6 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria; alcuni core dichiarati mancanti. |
| 57 | trivia | [ToT or Trivia](https://www.crazygames.com/game/tot-or-trivia) | 5.6.x | 2D | Poche–medie | 6 | 78 | 47 | **58** | 🟡 | Domande e scelte con pochi oggetti grafici; runtime Unity legacy può ostacolare l'editing. Mirror: 0 visuali, 0 modelli, 3 codice/config, 3 binari. Codice/loader presente ma poche texture separate. |
| 58 | trivia | [Paint the Flag](https://www.crazygames.com/game/paint-the-flag) | unity2021 | 2.5D/3D | Medie | 5 | 57 | 57 | **57** | 🟡 | Bandiere e colori semplici, ma disegno, shader e numerosi asset nazionali in una build Unity. Mirror: 0 visuali, 0 modelli, 2 codice/config, 3 binari. Sprite e scene nei bundle Unity; estrazione dedicata necessaria. |
| 59 | io games | [Survev](https://www.crazygames.com/game/survev) | iframe | 2D | Molte | 69 | 34 | 67 | **55** | 🟡 | Battle royale con mondo, armi, personaggi, loot e molte animazioni; forte dipendenza multiplayer. Mirror: 56 visuali, 0 modelli, 12 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 60 | cards | [DUO With Friends](https://www.crazygames.com/game/duo-with-friends) | iframe | 2D | Medie | 7 | 72 | 43 | **53** | 🔴 | Carte e tavolo standardizzabili; turnazione multiplayer e iframe esterno aggiungono complessità. Mirror: 1 visuali, 0 modelli, 3 codice/config, 3 binari. Iframe e dipendenze online da verificare. |
| 61 | trivia | [OpenGuessr](https://www.crazygames.com/game/openguessr) | iframe | 2D + panorami 360° | Medie | 196 | 38 | 59 | **52** | 🔴 | Interfaccia geografica relativamente semplice; panorami, mappe e dataset da servizi esterni. Mirror: 67 visuali, 0 modelli, 118 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 62 | Word games | [Crocword](https://www.crazygames.com/game/crocword) | iframe | 2D | Medie | 3 | 80 | 37 | **52** | 🔴 | Cruciverba e ruota delle lettere, con progressione e ricompense; editabilità dipendente dall'iframe esterno. Mirror: 0 visuali, 0 modelli, 2 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 63 | io games | [Gulper.io](https://www.crazygames.com/game/gulper-io) | iframe | 2D | Medie | 20 | 73 | 39 | **51** | 🔴 | Serpenti luminosi e fondali relativamente semplici; movimento multiplayer e particelle richiedono sincronizzazione. Mirror: 3 visuali, 0 modelli, 5 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 64 | io games | [Holey.io Battle Royale](https://www.crazygames.com/game/holey-io-battle-royale) | html5 | 2.5D/3D | Medie | 4 | 44 | 55 | **51** | 🔴 | Arena, buche, oggetti e fisica competitiva; materiali e sprite di scena difficili da separare. Mirror: 0 visuali, 0 modelli, 4 codice/config, 0 binari. Codice/loader presente ma poche texture separate. |
| 65 | io games | [Cubes 2048.io](https://www.crazygames.com/game/cubes-2048-io) | html5 | 2.5D/3D | Medie | 3 | 56 | 48 | **51** | 🔴 | Cubi numerati abbastanza standard; profondità, movimento dell'arena e collisioni multiplayer complicano gli stati. Mirror: 0 visuali, 0 modelli, 3 codice/config, 0 binari. Codice/loader presente ma poche texture separate. |
| 66 | Word games | [Kitty Scramble](https://www.crazygames.com/game/kitty-scramble) | iframe | 2D | Medie–molte | 3 | 77 | 37 | **51** | 🔴 | Tessere di lettere e schermate ricorrenti; progressione, animazioni e iframe esterno complessi. Mirror: 0 visuali, 0 modelli, 2 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 67 | cards | [Kings and Queens Solitaire TriPeaks](https://www.crazygames.com/game/kings-and-queens-solitaire-tripeaks) | iframe | 2D | Molte | 3 | 72 | 37 | **49** | 🔴 | Carte facilmente scambiabili, ma molti livelli, progressione, animazioni e ricompense. Mirror: 0 visuali, 0 modelli, 2 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 68 | Word games | [WorldGuessr](https://www.crazygames.com/game/worldguessr) | iframe | 2D + panorami 360° | Medie | 71 | 36 | 49 | **44** | 🔴 | Panorami Street View e mappe esterne dominano l'esperienza; reskin limitato alla UI senza il backend. Mirror: 34 visuali, 0 modelli, 26 codice/config, 0 binari. Iframe e dipendenze online da verificare. |
| 69 | io games | [Snake.io](https://www.crazygames.com/game/snake-io) | iframe | 2D | Medie | 1 | 68 | 0 | **24** | 🔴 | Corpi di serpente e palette modificabili; segmentazione, effetti e stati competitivi da preservare. Mirror: 0 visuali, 0 modelli, 0 codice/config, 0 binari. Iframe e dipendenze online da verificare; alcuni core dichiarati mancanti. |

## 5. Gap tecnici e strategia adapter

1. **Boot e navigazione:** avviare davvero splash → Play → gioco → pausa/settings → eventuali livelli/stati successivi, con log richieste/network/console e screenshot per ogni stato; niente "verde runtime" basato sul solo loader.
2. **Inspector visuale:** all'hover/click mostrare outline nel canvas corretto, nome/id, coordinate, z-index/layer, dimensioni, resource URL/hash/atlas frame; nella sidebar fornire **preview ritagliata isolata**, non l'intero canvas o semplice box padre. Gestire hit-test, zoom e coordinate responsive.
3. **Mapping e skin:** collegare DOM/Canvas2D/PixiJS/Phaser/Cocos/PlayCanvas ai veri asset; consentire sostituzione non distruttiva, export/import e rollback; tenere distinti elementi generati proceduralmente.
4. **Adapter per engine:** partire da giochi 2D verificabili (Wordmeister come controllo, Mahjongg/Hangman da diagnosticare). Poi adapter PixiJS per Hexastack, PlayCanvas per GLB/mesh/material, Unity/Defold/Flash solo dopo estrazione e verifica appropriata. Per complessi 3D, shader, skinning, animazione, multiplayer: **limitato/rosso/grigio** se non verificabile.
5. **Recupero asset:** usare il browser del gioco originale con sessioni lecite e seguire le richieste per stato; integrare manifest, hash, errori HTTP, asset opzionali/critici. Per ciascun titolo pubblicare **numero/identità file mancanti** e impatto concreto, senza penali automatiche sproporzionate.
6. **Test ripetibili:** per ogni gioco annotare `boot`, `menu`, `gameplay`, `otherScreens`, `inspector`, `resourceMapping`, `replacementPreview`, `export`, `knownMissing` e note/URL di origine; segnare *pass/fail/not tested*. Distinguere screenshot/render da test effettivo di interazione.
7. **Catalogo comparativo:** calcolare nuovi score e motivazioni solo dopo il re-audit; conservare variazioni e segnalare esplicitamente quali giochi erano verdi in precedenza.

## 6. Origini, file di lavoro e link richiesti

- Snapshot audit 24 puzzle: [`RESKIN_AUDIT_V4.md`](RESKIN_AUDIT_V4.md).
- Snapshot audit 45 titoli con link ufficiali CrazyGames: [`RESKIN_AUDIT_NEW45.md`](RESKIN_AUDIT_NEW45.md).
- Reskinner, percorso Windows, copertura e limiti: [`reskinner/README.md`](reskinner/README.md), [`reskinner/catalog.json`](reskinner/catalog.json), [`reskinner/adapters.js`](reskinner/adapters.js).
- Mirror browser vecchi: [`MIRROR_RECOVERY_BROWSER_2026-11-24.md`](MIRROR_RECOVERY_BROWSER_2026-11-24.md); recapture nuovi: [`MIRROR_RECAPTURE_RUNBOOK.md`](MIRROR_RECAPTURE_RUNBOOK.md).
- Repository privato del bridge Windows discusso nelle sessioni precedenti: **`chat-local-bridge`**, da verificare nuovamente prima di inviare comandi. Non presumere che sia online.
- **Link originali CrazyGames:** **69/69 URL associati**, con 45 già nell'audit, 1 aggiunto dalla prima lista, 2 forniti dall'utente e 21 trovati con ricerca sul portale. I **103 URL estranei** restano esclusi. Vedi §6.1. Verifica del runtime `carout` ancora necessaria per divergenza fra descrizione del portale e audit.
- I mirror proprietari sono stati conservati **localmente sul PC**; il fatto che un asset sia scaricabile non autorizza a ripubblicarlo su un repository pubblico.

### 6.1 Repertorio completo URL CrazyGames — 25 novembre 2026

**69/69 URL originali associati ai giochi del catalogo:** 45 già presenti dalla lista originale, 1 ulteriore (`goodstriplematch`) dalla stessa lista, 2 forniti direttamente dall'utente il 25/11 e 21 ricercati su CrazyGames. I **103 URL estranei** della lista originale rimangono esclusi. Il collegamento è all'**originale sul portale**, non al CDN, e **non prova** che il gioco locale si avvii o che tutti i suoi asset siano stati recuperati. Nessuna partita end-to-end è stata verificata da questa operazione.

**Omonimie risolte con host e motori:** `blocks-and-that'it` è **Blocks and that’s it** ma lo slug è `block-tour-kfz` (host del mirror e Cocos). `block-puzzle-master` è oggi **Block Blaster** ma lo slug resta `block-puzzle-master` (host e Unity 6). `find-differences` è **Find It - Find The Differences** (host `find-it---find-the-differences.game-files.crazygames.com` e Unity 2022), **non** *Find Differences: Spot 'Em All* o *Find The Difference*. `watersort` è **Cups - Water Sort Puzzle** (`cups---water-sort-puzzle` nel mirror e Unity 2022). `complex-merge-3-park-town` è **Park Town**.

**Corrispondenza da verificare più a fondo:** `carout` ha un URL CrazyGames pertinente per nome e gameplay, ma il portale attuale indica HTML5 mentre l'audit locale parla di Unity/Playgama. Questo è un **disallineamento tecnico segnalato**, non motivo per inventare un altro link; verificare il gioco effettivo nel mirror/cattura originale prima di considerare l'engine certificato.

#### 24 puzzle

| # classifica | ID/cartella progetto | Nome e link CrazyGames | Provenienza della corrispondenza |
|---:|---|---|---|
| 1 | `mahjongg` | [Mahjongg Solitaire](https://www.crazygames.com/game/mahjongg-solitaire) | Utente |
| 2 | `hexastack` | [Hexa Stack](https://www.crazygames.com/game/hexa-stack) | Utente |
| 3 | `color-water-sort-3d` | [Color Water Sort 3D](https://www.crazygames.com/game/color-water-sort-3d) | Web |
| 4 | `cuttherope` | [Cut the Rope](https://www.crazygames.com/game/cut-the-rope-ebx) | Web + mirror |
| 5 | `blocks-and-that'it` | [Blocks and that’s it](https://www.crazygames.com/game/block-tour-kfz) | Web + mirror |
| 6 | `nut-sort-build-the-city` | [Nut Sort: Build the City](https://www.crazygames.com/game/nut-sort-build-the-city) | Web + audit |
| 7 | `drop-merge-numbers` | [Drop & Merge the Numbers](https://www.crazygames.com/game/drop-merge-the-numbers) | Web + Unity 2021 |
| 8 | `block-puzzle-master` | [Block Blaster](https://www.crazygames.com/game/block-puzzle-master) | Web + mirror, Unity 6 |
| 9 | `find-differences` | [Find It - Find The Differences](https://www.crazygames.com/game/find-it---find-the-differences) | Web + mirror, Unity 2022 |
| 10 | `carout` | [Car OUT! Jam Parking Puzzle](https://www.crazygames.com/game/car-out-jam-parking-puzzle) | Web; runtime da riconfermare |
| 11 | `nuts-puzzle-sort-by-color` | [Nuts Puzzle: Sort By Color](https://www.crazygames.com/game/nuts-puzzle-sort-by-color) | Web + Unity 2020 |
| 12 | `hexasort` | [Hexa Sort](https://www.crazygames.com/game/hexa-sort) | Web + Unity 2022 |
| 13 | `watersort` | [Cups - Water Sort Puzzle](https://www.crazygames.com/game/cups---water-sort-puzzle) | Web + mirror, Unity 2022 |
| 14 | `PieceOfCakeMerge` | [Piece of Cake: Merge and Bake](https://www.crazygames.com/game/piece-of-cake-merge-and-bake) | Web + iframe |
| 15 | `jigpic-solitaire` | [Jigpic Solitaire](https://www.crazygames.com/game/jigpic-solitaire) | Web |
| 16 | `pixelblast` | [Pixel Blast](https://www.crazygames.com/game/pixel-blast) | Web + Unity 6 |
| 17 | `twistedtangle` | [Twisted Tangle](https://www.crazygames.com/game/twisted-tangle-nmt) | Web + Unity 6 |
| 18 | `what-s-the-difference-online` | [What's The Difference?](https://www.crazygames.com/game/what-s-the-difference-online) | Web + iframe |
| 19 | `goodstriplematch` | [Goods Triple Match 3D](https://www.crazygames.com/game/goods-triple-match-3d) | Lista precedente + mirror |
| 20 | `jewel academy` | [Jewel Academy](https://www.crazygames.com/game/jewel-academy) | Web |
| 21 | `lavaoraqua` | [Lava and Aqua](https://www.crazygames.com/game/lava-and-aqua) | Web |
| 22 | `sandtrix` | [Sandtrix](https://www.crazygames.com/game/sandtrix) | Web |
| 23 | `home-design-decorate` | [Home Design: Decorate House](https://www.crazygames.com/game/home-design---decorate-house) | Web |
| 24 | `complex-merge-3-park-town` | [Park Town](https://www.crazygames.com/game/park-town) | Web + audit |

#### 45 giochi delle altre categorie

| # classifica | Categoria | Nome e link CrazyGames | Provenienza |
|---:|---|---|---|
| 25 | Word games | [Hangman](https://www.crazygames.com/game/hangman-cfc) | Lista utente precedente |
| 26 | Word games | [Wordmeister](https://www.crazygames.com/game/wordmeister) | Lista utente precedente |
| 27 | cards | [Hearts: Classic](https://www.crazygames.com/game/hearts-classic) | Lista utente precedente |
| 28 | io games | [Paper.io 2](https://www.crazygames.com/game/paper-io-2) | Lista utente precedente |
| 29 | trivia | [Guess Their Answer](https://www.crazygames.com/game/guess-their-answer) | Lista utente precedente |
| 30 | io games | [Cubes 2048 Royale](https://www.crazygames.com/game/cubes-2048-royale) | Lista utente precedente |
| 31 | cards | [Spades](https://www.crazygames.com/game/spades) | Lista utente precedente |
| 32 | Word games | [Words of Wonders](https://www.crazygames.com/game/words-of-wonders) | Lista utente precedente |
| 33 | trivia | [Trivia Crack](https://www.crazygames.com/game/trivia-crack) | Lista utente precedente |
| 34 | cards | [Las Vegas Poker](https://www.crazygames.com/game/las-vegas-poker) | Lista utente precedente |
| 35 | io games | [Uno Online](https://www.crazygames.com/game/uno-online) | Lista utente precedente |
| 36 | Word games | [Word Search](https://www.crazygames.com/game/word-search-lyg) | Lista utente precedente |
| 37 | cards | [Gin Rummy Online](https://www.crazygames.com/game/gin-rummy-online) | Lista utente precedente |
| 38 | cards | [Domino Duel](https://www.crazygames.com/game/domino-duel-uit) | Lista utente precedente |
| 39 | cards | [Foono Online Multiplayer](https://www.crazygames.com/game/foono-online-multiplayer-card-game) | Lista utente precedente |
| 40 | trivia | [Millionaire Quiz](https://www.crazygames.com/game/millionaire-quiz) | Lista utente precedente |
| 41 | Word games | [Wording](https://www.crazygames.com/game/wording) | Lista utente precedente |
| 42 | cards | [Spider Solitaire](https://www.crazygames.com/game/spider-solitaire-fuw) | Lista utente precedente |
| 43 | trivia | [Google Feud](https://www.crazygames.com/game/google-feud) | Lista utente precedente |
| 44 | cards | [Social Solitaire](https://www.crazygames.com/game/social-solitaire) | Lista utente precedente |
| 45 | Word games | [Death Note Type](https://www.crazygames.com/game/death-note-type) | Lista utente precedente |
| 46 | io games | [TileMan.io](https://www.crazygames.com/game/tileman-io) | Lista utente precedente |
| 47 | Word games | [Word Wipe](https://www.crazygames.com/game/word-wipe) | Lista utente precedente |
| 48 | trivia | [World Geography: Flags and Capitals](https://www.crazygames.com/game/world-geography-flags-and-capitals) | Lista utente precedente |
| 49 | io games | [EvoWars.io](https://www.crazygames.com/game/evowarsio) | Lista utente precedente |
| 50 | io games | [Agar.io](https://www.crazygames.com/game/agario) | Lista utente precedente |
| 51 | trivia | [Logo Quiz: Game World Trivia](https://www.crazygames.com/game/logo-quiz-game-world-trivia) | Lista utente precedente |
| 52 | cards | [Classic Card Games Collection](https://www.crazygames.com/game/classic-card-games-collection) | Lista utente precedente |
| 53 | trivia | [MemeBattle: What's That Meme?](https://www.crazygames.com/game/memebattle-what-s-that-meme) | Lista utente precedente |
| 54 | io games | [Diep.io](https://www.crazygames.com/game/diepio) | Lista utente precedente |
| 55 | io games | [Hexanaut.io](https://www.crazygames.com/game/hexanaut-io) | Lista utente precedente |
| 56 | trivia | [Soccer Europe Quiz](https://www.crazygames.com/game/soccer-europe-quiz) | Lista utente precedente |
| 57 | trivia | [ToT or Trivia](https://www.crazygames.com/game/tot-or-trivia) | Lista utente precedente |
| 58 | trivia | [Paint the Flag](https://www.crazygames.com/game/paint-the-flag) | Lista utente precedente |
| 59 | io games | [Survev](https://www.crazygames.com/game/survev) | Lista utente precedente |
| 60 | cards | [DUO With Friends](https://www.crazygames.com/game/duo-with-friends) | Lista utente precedente |
| 61 | trivia | [OpenGuessr](https://www.crazygames.com/game/openguessr) | Lista utente precedente |
| 62 | Word games | [Crocword](https://www.crazygames.com/game/crocword) | Lista utente precedente |
| 63 | io games | [Gulper.io](https://www.crazygames.com/game/gulper-io) | Lista utente precedente |
| 64 | io games | [Holey.io Battle Royale](https://www.crazygames.com/game/holey-io-battle-royale) | Lista utente precedente |
| 65 | io games | [Cubes 2048.io](https://www.crazygames.com/game/cubes-2048-io) | Lista utente precedente |
| 66 | Word games | [Kitty Scramble](https://www.crazygames.com/game/kitty-scramble) | Lista utente precedente |
| 67 | cards | [Kings and Queens Solitaire TriPeaks](https://www.crazygames.com/game/kings-and-queens-solitaire-tripeaks) | Lista utente precedente |
| 68 | Word games | [WorldGuessr](https://www.crazygames.com/game/worldguessr) | Lista utente precedente |
| 69 | io games | [Snake.io](https://www.crazygames.com/game/snake-io) | Lista utente precedente |

**URL ancora da chiedere:** nessuno, per l'inventario corrente dei 69 giochi. Eventuali titoli aggiunti in futuro richiedono una nuova riconciliazione. Per il recupero CDN e i test reali dell'inspector usare questi URL come origini, non confonderli con i file locali già scaricati.

## 7. Criteri per dichiarare un gioco "completo"

Un titolo è **validato end-to-end** solo se avvia almeno un ciclo di gameplay reale, attraversa le schermate pertinenti, l'inspector individua l'elemento reale, ne mostra l'asset singolo, una skin 1:1 viene applicata al gioco senza rompere layout/animazioni, ed è possibile salvarla/esportarla/ripristinarla. Tutto il resto è **parziale**, anche se ZIP, network log o entrypoint sono presenti.

## 8. Stato di questo documento

Il documento conserva gli audit e i voti storici e ora registra anche le **correzioni tecniche effettuate il 25/11**. Le metriche statiche non sono una verifica completa di 69 giochi; il completamento richiede i controlli end-to-end della sezione 7.


## 9. Interventi verificati il 25/11/2026: URL, mirror sicuro e sprite inspector

### URL e coerenza mapping

- `reskinner/original-urls.json`: **69 URL canonici per 69 ID catalogo**, con nessun duplicato. `scripts/test_original_url_mapping.py` eseguito sul bridge Windows con esito positivo.
- La riconciliazione degli URL **contro le righe del deep-audit dei mirror del PC** (`_mirror_69_deep_audit_20261125.json`) ha prodotto **69 same / 0 mismatch / 0 senza match**. È coerenza con lo storico, **non** prova che il gioco remoto e quello locale abbiano stessi build o comportamento; Carout rimane da confrontare empiricamente.

### Primo aggiornamento inspector, provato nel browser

- `reskinner/runtime.js`: conserva il rettangolo `sx, sy, sw, sh` delle chiamate Canvas2D `drawImage` oltre al box di rendering; evita di unire frame di atlas diversi alla medesima firma.
- `reskinner/app.js` e `styles.css`: sidebar con **canvas di anteprima isolata della risorsa esatta/ritaglio**, distinguendo oggetti con e senza texture identificata, senza fare passare l'intero canvas per uno sprite.
- **Test Playwright su Wordmeister Windows, porta 8000:** selezione `main_title.png`; sidebar `RISORSA ISOLATA · frame atlas`, preview `320×110` con pixel e nessun `pageerror`. Test atlas isolato su 3 frame: PASS. Questo **non** valida Pixi/PlayCanvas/Unity né la navigazione fra tutte le scene.
- Test script Windows corretto perché una vecchia procedura sovrascriveva i file JS con snapshot storici; ora il test non esegue quel downgrade. La sincronizzazione dei nuovi script è stata fatta usando un commit immutabile per evitare cache branch stale.

### Audit dei file spuri e ricattura incrementale

- Lo storico audit locale resta **69 giochi / 4.710 file / ~1,78 GB**, con 20 titoli che hanno riferimenti HTML non risolti e 26 da approfondire. Queste sono cifre precedenti all'ultima passata, non un indice di completamento del gameplay.
- Una prima nuova passata **non filtrata** aveva registrato molte immagini di catalogo e pubblicità dai domini `imgs.crazygames.com` e `builds.crazygames.com`; il conteggio iniziale `Mahjongg +297 file` era **fuorviante** e non deve essere letto come +297 risorse di gioco.
- La pulizia reversibile `scripts/quarantine_portal_reskin_captures.py` ha spostato sul PC **2.289 file, 92.098.767 byte** da manifest incrementali con host estranei in `_reskin_69_portal_quarantine_20261125`, conservando verifiche SHA e senza cancellare gli originali. Nessun file di gioco viene caricato su GitHub.
- La nuova `scripts/recapture_69_gameplay.py` usa **host di gameplay specifici e verificati nell'audit**. Su 3 giochi di controllo (Mahjongg, Hexastack, Color Water Sort 3D): **+3 file pertinenti, 233.130 byte, 0 download error**. Questi tre smoke test verificano il **filtro/trasporto**, non l'avvio completo.
- Avviata una ricattura filtrata estesa ai 69 titoli; l'esito finale, il numero di risorse nuove realmente utili e i test Play/inspector per singolo titolo devono essere **verificati dai risultati locali**, non dedotti dal semplice avvio dello script.

### Diagnosi browser locale mirata

Un controllo Playwright sul server Windows `127.0.0.1:8000` ha distinto **iframe HTML caricato** da **render/gameplay reale**:

| Titolo | Riscontro concreto | Implicazione |
|---|---|---|
| Mahjongg | Documento `Mahjongg Solitaire`, canvas `816×391`, motore `pixi`, nessun errore JS nel boot | Menu iniziale renderizzato; **Play → gameplay** non ancora certificato |
| Hexastack | Documento `Hex-production`, canvas `2671×1280` creato dopo il load | Runtime inizialmente rilevato come `dom`; **patch** per aggiornare lo stato dinamicamente. Test successivo: `runtime=canvas`, 1 canvas, PASS |
| Hangman | Iframe aperto ma **0 canvas, 0 immagini, body vuoto**, nessun pageerror visibile | Il solo HTTP/HTML non equivale ad avvio; approfondire file/SDK/loader |
| Wordmeister | Canvas `960×540`, 15 draw tracciati, nessun pageerror | Baseline di comparazione per runtime e texture inspector |
| Hearts: Classic | Canvas tecnico `300×150` con CSS `0×0`, errore JS **`data is not defined`** | Blocco runtime concreto da risolvere (dati di inizializzazione), non ridurre il punteggio teorico |
| Paper.io 2 | Canvas visibile, errori JS ripetuti **`Cannot read properties of undefined (reading 'skinList')`** | Analizzare inizializzazione gioco, ordine delle dipendenze e selettore skin |
| Guess Their Answer / Cubes 2048 Royale | App mostra `3D · adapter richiesto` senza avviare l'HTML in automatico | Il test passivo non ha tentato il gameplay; richiede attivazione sperimentale e adapter engine |

**Non chiamare questi errori risolti.** L'inspector ora riconosce anche un canvas nato dopo il load, ma l'avvio completo e la selezione di sprite 3D/Pixi richiedono test separati e correzioni specifiche.

### Problemi ancora aperti

1. Portare ciascun titolo da `HTML locale` a un **ciclo gameplay reale** (menu → Play → gioco → settings/pause → livello successivo) e acquisire gli asset caricati in ciascuno stato.
2. Gestire engines e giochi senza risorse separabili (`Unity/Defold/iframe/3D`) e scrivere adapter veri su evidenza del runtime; per Hexastack/Pixi e Cubes 2048 Royale verificare la scena e la texture reale prima di chiamare uno sprite isolato.
3. Correggere i blocchi già riferiti: Mahjongg dopo Play, Hangman bianco, Hearts non avviato, Paper.io 2 nero, Guess Their Answer loader finale, e box DIV di Cubes 2048 Royale non corrispondenti a texture isolate.
4. Rigenerare il catalogo dinamico e riavviare il server locale **dopo** la nuova cattura per rendere visibili i nuovi file; nessuna ricattura da sola garantisce la riproduzione offline.
