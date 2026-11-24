# Reskin audit V4 — post recupero integrale e smoke test locale

**Data:** 24 novembre 2026 · **Sorgente:** 24 ZIP, manifest/CDN recuperati con download HTTP e Chrome sulla macchina Windows · **Copia locale:** `C:\Users\jessi\Downloads\_chatgpt_games_full_mirrors`.

## Risultato verificato

- **24/24 giochi con almeno un file** dopo il recupero di Mahjongg. **1.611 file locali** per **638.847.887 byte (~638,8 MB)**. I numeri si riferiscono ai file dei domini di gameplay, non a immagini/banner del portale.
- **Mahjongg Solitaire:** dal caricamento CrazyGames sono stati recuperati **35 file** per **2.623.816 byte**, senza richieste fallite: 13 codice/config, 12 visuali e 10 audio. In uno **smoke test con server solo locale e richieste esterne bloccate**, `index.html` ha risposto HTTP 200, il browser ha creato un canvas 1080×740, non ha riportato errori HTTP/JavaScript e uno screenshot ridotto conteneva 1.691 colori distinti: **render iniziale non vuoto confermato**. Questo non equivale a verificare tutti i livelli.
- **Altri smoke test locali:** Hexa Stack (`index.html` HTTP 200, **0 canvas** durante la prova), Color Water Sort 3D (HTTP 200, **0 canvas**), Cut the Rope (HTTP 200, **0 canvas**, errore `Failed to fetch`). Durante la prova erano bloccati SDK e servizi esterni: esito **non conclusivo sulla completezza dei build**, ma la riproduzione offline non è confermata.
- **Core dei loader:** 46 dei 48 **URL che indicano file** risultano presenti localmente; i due mancanti sono gli entrypoint di Lava and Aqua e Sandtrix. Un audit grezzo rileva 46/52 includendo anche quattro riferimenti Unity a directory `StreamingAssets`, non valutabili come file. La presenza dell'entrypoint di un iframe (per esempio Park Town) **non** prova la presenza del gameplay.
- **Non collaudato:** livelli, scene opzionali, progressione, physics deterministica, acquisti/pubblicità, responsiveness, avvio indipendente da tutti gli SDK. Non considerare «completi» tutti i 24 mirror.

## Modello dei voti

**Facilità teorica 0–100:** rappresentazione 2D/3D, complessità meccanica, interazioni, scene e animazioni, e difficoltà di sostituzione degli oggetti senza alterare il gameplay.

**Ispezionabilità pratica 0–100:** asset grafici/3D separati, atlas, codice e configurazioni, binari/engine, dipendenze mancanti e risultato dell'avvio locale quando testato. **Punteggio oggi = 35% teorica + 65% ispezionabilità**, arrotondato all'intero. 🟢 ≥ 75; 🟡 55–74; 🔴 < 55. I punteggi sono **stime ingegneristiche comparative**, non valori misurati da 24 test end-to-end. Schermate = fasce **stimate** (Poche/Medie/Molte), non un conteggio verificato in runtime.

## Tabella completa

| # | Gioco / ZIP | Motore | Render | Schermate* | File | Teorica | Ispezionabilità | **Oggi** | 🚦 | Motivazione |
|---:|---|---|---|---|---:|---:|---:|---:|:---:|---|
| 1 | `mahjongg` | HTML5, canvas 2D | 2D | Poche | 35 | 86 | 94 | **91** | 🟢 | 12 file visuali, 13 codice/config e 10 audio; 35 richieste locali riuscite, canvas 1080×740 e screenshot non vuoto offline. Mancano test di livelli e controlli |
| 2 | `hexastack` | PixiJS | 2D/2.5D | Molte | 1134 | 75 | 86 | **82** | 🟢 | 766 file visuali, 277 codice/config e 88 audio: ottimo mapping sprite/texture. Il test offline apre HTML ma non crea un canvas; dipendenza di sessione esterna |
| 3 | `color-water-sort-3d` | PlayCanvas | 3D | Medie | 122 | 50 | 82 | **71** | 🟡 | 49 modelli, 35 immagini, 20 audio; manifest e modelli ben identificabili. Nel test offline l'entrypoint apre senza canvas per dipendenza SDK: animazioni e fluidi 3D impegnativi |
| 4 | `cuttherope` | JS + atlas DDS | 2D | Medie | 16 | 65 | 62 | **63** | 🟡 | 5 immagini/atlas DDS e 8 file codice/config. Stato animato e fisica delle corde complicano la sostituzione; smoke offline senza canvas e con errore fetch |
| 5 | `blocks-and-that'it` | Cocos 3.8.8 | 2D | Poche | 21 | 90 | 43 | **59** | 🟡 | Griglia e pochi oggetti semplici da ritexturizzare. Mirror con config/runtime Cocos e una sola immagine: mancano molti texture asset nativi |
| 6 | `nut-sort-build-the-city` | Defold | 2D/2.5D | Medie–molte | 16 | 43 | 67 | **59** | 🟡 | 16 file / ~18 MB; browser ha caricato WASM, ARCD, ARCI e projectc. Reskin gravato da dati compilati, ordinamento pezzi e progressione città; sostituisce il vecchio ZIP find-the-cow(cat) |
| 7 | `drop-merge-numbers` | Unity 2021 | 2D | Poche | 13 | 69 | 53 | **59** | 🟡 | ~55,5 MB e componenti Unity scaricati: meccaniche numeriche semplici, ma sprite/scene sono impacchettati e non ispezionati |
| 8 | `block-puzzle-master` | Unity 6 | 2D | Poche | 5 | 67 | 53 | **58** | 🟡 | ~57 MB di Unity; gameplay a griglia teoricamente semplice. Texture ancora all'interno di pacchetti binari e senza prova di avvio offline |
| 9 | `find-differences` | Unity 2022 | 2D | Poche–medie | 5 | 62 | 54 | **57** | 🟡 | ~53 MB del build Unity disponibili. Cambiare immagini richiede preservare regioni cliccabili e risolvere l'estrazione dai binari |
| 10 | `carout` | Unity/Playgama | 2.5D/3D | Medie | 10 | 50 | 57 | **55** | 🟡 | 10 file / 20,9 MB ottenuti con il browser ufficiale, inclusi dati Unity. Auto e percorsi animati; non collaudati livelli o menu offline |
| 11 | `nuts-puzzle-sort-by-color` | Unity 2020 | 2.5D/3D | Poche–medie | 55 | 49 | 54 | **52** | 🔴 | 55 file, molti config/codice aggiuntivi e core Unity; modelli, movimenti delle viti e texture ancora soprattutto nei binari |
| 12 | `hexasort` | Unity 2022 | 2.5D/3D | Medie | 5 | 47 | 52 | **50** | 🔴 | ~88,6 MB di core Unity. Pile esagonali, profondità e selezione: più stati rispetto a un puzzle 2D semplice |
| 13 | `watersort` | Unity 2022 | 3D | Medie | 5 | 42 | 52 | **49** | 🔴 | ~77,4 MB di core Unity; liquidi, shader e movimenti dei bicchieri da mappare negli archivi |
| 14 | `PieceOfCakeMerge` | Defold / iframe | 2D | Molte | 104 | 28 | 58 | **48** | 🔴 | 104 file, 19 binari e 81 file codice/config; archivi Defold, molte schermate e progressione. Numerose dipendenze non recuperate |
| 15 | `jigpic-solitaire` | HTML5 | 2D | Poche–medie | 6 | 86 | 27 | **48** | 🔴 | 6 file / 3,3 MB, prevalentemente codice: gioco semplice da tematizzare per immagini, ma il set visivo dei livelli non è verificato |
| 16 | `pixelblast` | Unity 6 | Da verificare | Medie | 5 | 37 | 52 | **47** | 🔴 | ~63,1 MB e file core Unity; struttura delle risorse grafiche interna ancora da estrarre/identificare |
| 17 | `twistedtangle` | Unity 6 | 3D | Medie | 5 | 26 | 52 | **43** | 🔴 | ~78 MB di Unity; intrecci delle corde, deformazioni continue e fisica complicano il mapping dei materiali |
| 18 | `what-s-the-difference-online` | HTML/iframe | 2D | Poche–medie | 8 | 72 | 22 | **40** | 🔴 | 8 file codice e circa 0,2 MB. Semplice sostituire coppie di immagini, ma i dati dei livelli e le immagini non sono disponibili nel mirror |
| 19 | `goodstriplematch` | Cocos | 3D | Medie | 25 | 43 | 35 | **38** | 🔴 | 25 file, 4 immagini, 6 binari e 14 codice/config. Recupero migliorato rispetto ai 15 file precedenti, ma modelli 3D e materiali incompleti |
| 20 | `jewel academy` | HTML5 | 2D | Medie | 8 | 70 | 20 | **38** | 🔴 | 8 file codice (~4,2 MB) catturati dal player, senza immagini di gemme separatamente visibili; match-3 con animazioni ed effetti |
| 21 | `lavaoraqua` | HTML5 | 2D | Poche–medie | 1 | 69 | 7 | **29** | 🔴 | Solo un file visuale (~0,4 MB) nella struttura verificata; manca ancora l'entrypoint e il gameplay completo |
| 22 | `sandtrix` | HTML5 | 2D | Poche | 1 | 64 | 7 | **27** | 🔴 | Solo uno script bootstrap (~70 KB); codice e simulazione della sabbia non recuperati in forma utilizzabile |
| 23 | `home-design-decorate` | HTML5/Unity launcher | 2D/2.5D | Molte | 5 | 34 | 17 | **23** | 🔴 | 5 file / ~0,8 MB: solo loader/script; numerosi ambienti, decorazioni, stato e progressione non disponibili |
| 24 | `complex-merge-3-park-town` | Iframe | 2D/2.5D | Molte | 1 | 26 | 5 | **12** | 🔴 | Un file wrapper da 1,8 KB: praticamente nessun asset di gioco. Molte scene, oggetti decorativi e progressione |

## Cosa scegliere ora

**Primo MVP da eseguire e reskinnare localmente: Mahjongg Solitaire.** La sua combinazione di asset grafici/atlas, meccaniche a tessere 2D e **render iniziale offline osservato** riduce sensibilmente il rischio di partire da una build che mostra soltanto un loader.

**Secondo: Hexa Stack**, se la priorità è l'inspector PixiJS con texture individuali, animazioni e moltissimi stati UI; il mirror è ricco ma l'avvio standalone deve ancora risolvere la dipendenza dalla sessione.

**Terzo: Color Water Sort 3D** per un adapter PlayCanvas su modelli/mesh/materiali e animazioni GLB. Il mirror offre 49 modelli; la verifica offline iniziale non è riuscita a creare un canvas.

**Da rimandare:** Unity (prima studiare contenuti interni ai bundle e tool di mapping), Park Town (solo wrapper), Lava and Aqua e Sandtrix (entrypoint mancante), e i giochi HTML5 con set di immagini di livello non dimostrato.

## Evidenze replicabili

- Inventario aggregato: `_reskin_reaudit_after_browser.json`.
- Cattura Mahjongg: `mahjongg\_browser_recovery_final.json` e directory `mahjongg\hosts\mahjongg-solitaire.game-files.crazygames.com\mahjongg-solitaire\4\`.
- Smoke tests: `_offline_smoke_report.json`, con blocco esplicito delle richieste esterne.
- Snapshot della seconda passata: `_browser_capture_20261124\_browser_capture_summary.json`.
- Rapporto precedente: [V3 browser](RESKIN_AUDIT_V3_BROWSER.md), che non include i 35 file Mahjongg né il nuovo smoke test.

I file originali sono conservati soltanto sul PC per analisi locale: **non sono stati aggiunti al repo GitHub pubblico**. La capacità tecnica di scaricare un asset non stabilisce il diritto a redistribuirlo.
