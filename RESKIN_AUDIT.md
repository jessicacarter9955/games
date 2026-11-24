# Reskin audit v2 — post recupero CDN (24 archivi)

**Data:** 24 novembre 2026. **Fonte:** i 24 ZIP originali in `C:\Users\jessi\Downloads\Puzzles Crazygames mirror`, i loader `__NEXT_DATA__` salvati, i mirror CDN nel workspace Windows e il file `_reskin_structural_audit.json`. Nessuna build è stata validata avviandola in un browser offline.

**Risultato verificato:** analizzati **24/24 archivi**, identificati i loader di tutti e 24, recuperati **1.470 file** pertinenti ai game host, per **587.359.151 byte (~587,4 MB)**. **17/24 cartelle** contengono almeno un file, ma alcune non hanno ancora un vero runtime utilizzabile. Degli **48 URL core** dichiarati dai loader (quattro per Unity, uno per gli altri) **40** hanno un file locale corrispondente. Tutti gli **8 giochi Unity** hanno i 4 componenti core dichiarati; questo non significa scene/editabilità garantite.

**Copia locale:** `C:\Users\jessi\Downloads\_chatgpt_games_full_mirrors`. Asset mancanti trovati sui CDN sono stati salvati **solo localmente**, senza pubblicarli nel repository GitHub pubblico. Ogni gioco contiene `mirror_inventory.json` con URL, esiti e limiti; `_all_games_status.json` e `_reskin_structural_audit.json` sono gli indici aggregati.

### Metodo dei punteggi

**Semplicità teorica (0–100)** = stima della facilità di modificare la grafica senza alterare meccaniche, considerando 2D/3D, complessità interazioni, animazioni, numero di stati/schermate e accessibilità del motore. **Ispezionabilità dopo il mirror (0–100)** = disponibilità di codice, asset visivi e asset binari, presenza degli entrypoint e difficoltà di associare file a oggetti runtime. Un Unity scaricato integralmente può avere un punteggio di ispezionabilità inferiore a PixiJS con immagini separate. 

**Fattibilità attuale = 35% semplicità teorica + 65% ispezionabilità dopo il mirror (arrotondata).** 🟢 ≥75; 🟡 55–74; 🔴 <55. I voti sono **stime ingegneristiche comparative**, non misure provenienti da test di avvio/reskin E2E. La colonna «Schermate» è una **stima per fasce** (Poche/Medie/Molte), non un numero di menu effettivamente verificato.

| # | ZIP / gioco | Motore | Grafica* | Schermate* | File recuperati | Teorica | Mirror | **Oggi** | Semaforo | Perché questo voto |
|---:|---|---|---|---|---:|---:|---:|---:|:---:|---|
| 1 | `hexastack` | PixiJS | 2D/2.5D | Molte | 1134 | 76 | 92 | **86** | 🟢 | 766 file visuali, 277 codice/config, 88 audio; file facilmente mappabili. Penalità per stati UI, effetti e animazioni. Crawl profondo parziale. |
| 2 | `color-water-sort-3d` | PlayCanvas | 3D | Medie | 122 | 50 | 88 | **75** | 🟢 | 49 modelli, 35 file visuali, 20 audio, una scena PlayCanvas e manifest con 73 download verificati MD5; animazioni 3D rendono più impegnativo l'override. |
| 3 | `cuttherope` | JS proprietario | 2D | Medie | 16 | 65 | 65 | **65** | 🟡 | DDS, JSON degli atlas e JS reale: risorse selezionabili, ma cambi a personaggio e frame devono rispettare fisica/corde e tempi animazioni. |
| 4 | `blocks-and-that'it` | Cocos 3.8.8 | 2D | Poche | 21 | 90 | 43 | **59** | 🟡 | Griglia e meccaniche semplici; runtime e pack Cocos recuperato, ma quasi tutte le texture native sono ancora assenti. Solo una scena engine identificata. |
| 5 | `drop-merge-numbers` | Unity 2021 | 2D | Poche | 13 | 69 | 53 | **59** | 🟡 | Quattro componenti Unity recuperati, circa 55,5 MB. Facile il concept a blocchi, ma sprite e scene rimangono incorporati nei pacchetti compilati. |
| 6 | `block-puzzle-master` | Unity 6 | 2D | Poche | 5 | 67 | 53 | **58** | 🟡 | Quattro componenti core Unity recuperati, circa 57 MB; skin semplice come gameplay, meno semplice tecnicamente: asset non ancora esposti separatamente. |
| 7 | `find-differences` | Unity 2022 | 2D | Poche–medie | 5 | 62 | 54 | **57** | 🟡 | Build Unity core 4/4, circa 53 MB; coppie di immagini facili da tematizzare in teoria, ma vanno estratte dai pacchetti Unity e sincronizzate alle aree cliccabili. |
| 8 | `nuts-puzzle-sort-by-color` | Unity 2020 | 2.5D/3D | Poche–medie | 5 | 49 | 52 | **51** | 🔴 | Quattro componenti Unity recuperati, 26,3 MB; modelli e animazioni delle viti non direttamente leggibili. |
| 9 | `hexasort` | Unity 2022 | 2.5D/3D | Medie | 5 | 47 | 52 | **50** | 🔴 | Build Unity core 4/4 recuperata, 88,6 MB. Impilamento e profondità aumentano il numero di stati da verificare. |
| 10 | `watersort` | Unity 2022 | 3D | Medie | 5 | 42 | 52 | **49** | 🔴 | Quattro componenti Unity recuperati, 77,4 MB. Fluidi, contenitori, shader e animazioni più complessi di uno skin swap su sprite. |
| 11 | `PieceOfCakeMerge` | Defold / iframe | 2D | Molte | 104 | 28 | 58 | **48** | 🔴 | 104 risorse del gioco e 19 file binari compilati; 41 riferimenti aggiuntivi non recuperati. Progressione, narrativa e molte UI rendono difficile il mapping 1:1. |
| 12 | `pixelblast` | Unity 6 | Da verificare | Medie | 5 | 37 | 52 | **47** | 🔴 | Build Unity core 4/4, circa 63,1 MB. Senza estrazione dal bundle non sono verificabili la struttura grafica e la sostituibilità dei materiali. |
| 13 | `twistedtangle` | Unity 6 | 3D | Medie | 5 | 26 | 52 | **43** | 🔴 | Build Unity core 4/4, circa 78 MB; intrecci, corde, deformazioni e fisica rendono lo skinning intrinsecamente complesso. |
| 14 | `what-s-the-difference-online` | Iframe esterno | 2D | Poche–medie | 8 | 72 | 22 | **40** | 🔴 | Host esterno raggiunto e 8 file JS/HTML scaricati (0,2 MB), ma numerosi riferimenti mancanti/404 e nessuna collezione immagini di livelli verificata. |
| 15 | `goodstriplematch` | Cocos | 3D | Medie | 15 | 43 | 29 | **34** | 🔴 | Cocos e pack interno recuperati, ma solo 2 immagini e nessuna libreria concreta di modelli 3D del gameplay; 4,6 MB totali. |
| 16 | `jigpic-solitaire` | HTML5 | 2D | Poche–medie | 0 | 86 | 0 | **30** | 🔴 | Sostituzione delle immagini e dei tasselli facile in teoria; CDN del build non recuperabile dal contesto disponibile (403). |
| 17 | `mahjongg` | HTML5 | 2D/2.5D | Poche | 0 | 86 | 0 | **30** | 🔴 | Tessere e fondale generalmente adatti a uno skin swap; zero file gioco recuperati per blocco sull'endpoint. |
| 18 | `sandtrix` | HTML5 | 2D | Poche | 1 | 64 | 7 | **27** | 🔴 | Un solo script di bootstrap, 70 KB; entrypoint del gioco non recuperato. La simulazione di sabbia aggiunge sensibilità a colori e particelle. |
| 19 | `jewel academy` | HTML5 | 2D | Medie | 0 | 70 | 0 | **25** | 🔴 | Match-3 con gemme, VFX e livelli; nessun asset di gameplay corretto recuperato a causa del blocco CDN. |
| 20 | `lavaoraqua` | HTML5 | 2D | Poche–medie | 0 | 69 | 0 | **24** | 🔴 | Fisica e interazioni ambientali moderate; nessun file del build reale recuperabile. Il vecchio ZIP conteneva un file appartenente a un altro gioco. |
| 21 | `carout` | HTML5 | 2.5D/3D | Medie | 0 | 52 | 0 | **18** | 🔴 | URL del build identificato ma richiesta GET all'entrypoint HTTP 403: zero modelli, texture o codice disponibili. |
| 22 | `home-design-decorate` | HTML5 | 2D | Molte | 0 | 34 | 0 | **12** | 🔴 | Match-3 più decorazione e ambienti: molte UI e materiali. Endpoint CDN 403 e nessun asset del gioco recuperato. |
| 23 | `complex-merge-3-park-town` | Iframe esterno | 2D/2.5D | Molte | 1 | 26 | 5 | **12** | 🔴 | Solo 1 risorsa minima dell'iframe da 1,8 KB: non è il build. Merge, decorazioni, progressione e numerose schermate. |
| 24 | `find-the-cow(cat)` | HTML5: Nut Sort | n.d. | n.d. | 0 | n.d. | 0 | **0** | 🔴 | Lo ZIP apre 'nut-sort-build-the-city' e conteneva file estranei di Jewel Academy; non è una sorgente verificata di Find the Cow. Score 0 = asset corretti assenti, NON difficoltà intrinseca. |

### Interpretazione della classifica

1. **Hexa Stack:** asset graficamente editabili e motore PixiJS; nella copia locale risultano **766 file visuali, 277 di codice/configurazione e 88 audio**. **1134 file totali**; il crawler profondo si è fermato prima di esaurire tutte le dipendenze, quindi non è certificata la completezza.
2. **Color Water Sort 3D:** PlayCanvas, **49 modelli** e **35 texture/immagini**, 20 audio; download dal manifest con 73/73 hash MD5 verificati nel passaggio precedente. Ottimo candidato per l'inspector 3D, ma più difficile da skinning 2D.
3. **Cut the Rope:** buon esperimento per texture DDS + atlas JSON con vincoli di fisica e animazione.
4. **Blocks and That's It:** rimane tra i più semplici come meccaniche, ma l'archivio/mirror ha appena **1 immagine (loading GIF)** e pack/config Cocos; le **texture native dei blocchi** non sono recuperate in modo completo. Non trattarlo come asset-complete.
5. **Otto build Unity:** tutti i loader, data, framework e wasm core sono presenti localmente, anche dove lo ZIP aveva solo un HTML. Per il reskin vanno ancora estratti sprite/materiali/scene dai file binari e testata la compatibilità dei modificatori.
6. **Defold/Piece of Cake:** conservati 104 file, inclusi archivi compilati; molte risorse dinamiche non sono state recuperate (41 richieste fallite). La complessità intrinseca resta elevata.
7. **CDN bloccati o non completi:** Car OUT!, Home Design, Jewel Academy, Jigpic, Lava and Aqua e Mahjongg hanno 0 file di gioco nel mirror, e Sandtrix ha solo un bootstrap. Il blocco (HTTP 403/404) non può essere risolto inventando file mancanti.
8. **Etichetta errata:** `find-the-cow(cat).zip` contiene la pagina `nut-sort-build-the-city`, non Find the Cow; non usare questo ZIP come prova per il titolo indicato nel nome.

### Cosa è stato testato / non testato

**Confermato:** presenza del vero loader; richieste CDN effettuate; copia per host del gioco con limiti di sicurezza; lettura dei manifest, presenza dei componenti core, conteggio di immagini/modelli/audio; controlli MD5 espliciti per i 73 file PlayCanvas recuperati nella prova precedente.

**Non ancora verificato:** riproduzione offline completa di tutte le scene, dipendenze richieste soltanto durante gameplay avanzato, loader SDK compatibili al di fuori di CrazyGames, scene Unity realmente editabili, viewport mobile e il mapping 1:1 degli oggetti ai file sorgenti. Non definire questi 24 giochi «tutti completi» o «tutti eseguibili».

### Scelta operativa per il reskinner

**MVP:** Hexa Stack con inspector PixiJS per texture/sprite/frame e timeline dello stato. **Secondo adapter:** PlayCanvas su Color Water Sort 3D per modello→materiale→animazione; **terzo test:** Cut the Rope per atlanti DDS e sincronizzazione degli sprite con la fisica. **Sfida successiva:** Unity per estrazione/mapping di asset impacchettati. Prima di distribuire file originali, verificare licenze e diritti sui contenuti dei rispettivi editori.
