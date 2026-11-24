# Recupero CDN via browser — verifica del 24 novembre 2026

## Perché questa seconda passata

Il primo downloader HTTP riportava numerosi game host con HTTP 403 e sette mirror vuoti. La semplice assenza di file non dimostrava che il gioco fosse irraggiungibile: una richiesta ordinaria, avviata dalla pagina CrazyGames tramite Chrome, è riuscita a ottenere i contenuti dei medesimi host.

Tutte le **24 pagine CrazyGames correnti** hanno restituito HTTP 200 e la configurazione del loader corrente coincideva con quella conservata nei rispettivi ZIP originali (24/24 senza modifiche degli URL). Questo però **non** prova l'avviabilità offline.

## Nuovi file effettivamente recuperati con Chrome/Playwright

| ZIP originale | Gioco identificato | File locali dopo la cattura verificata | Dimensione locale approssimata | Verifica |
|---|---|---:|---:|---|
| `carout.zip` | Car OUT! Jam Parking Puzzle | 10 | ~20,9 MB | Le richieste game host osservate hanno restituito HTTP 200. Include build Unity/Playgama e JS. |
| `find-the-cow(cat).zip` | **Nut Sort: Build the City** | 16 | ~18,0 MB | Il browser ha caricato risorse Defold (WASM, `dmloader.js`, `game*.arcd`, `game0.arci`, `game0.projectc`). |
| `home-design-decorate.zip` | Home Design: Decorate House | 5 | ~0,8 MB | Loader ed alcuni script; **molte risorse ancora non verificate**. |
| `jewel academy.zip` | Jewel Academy | 7 | ~4,2 MB | File acquisiti dal game host durante la sessione Playwright, HTTP 200. |
| `jigpic-solitaire.zip` | Jigpic Solitaire | 2 | ~34 KB | Solo parte delle risorse di avvio; **non completo**. |

**Correzione di identificazione:** lo ZIP `find-the-cow(cat).zip` contiene la pagina di `nut-sort-build-the-city`, non Find the Cow. Per il mirror recuperato tramite Chrome la cartella canonica è `nut-sort-build-the-city`; il nome originale dello ZIP resta conservato come provenienza.

A partire dall'audit precedente con 17 mirror non vuoti, questi cinque titoli portano a **22/24 cartelle per gioco con almeno un file locale**, salvo modifiche o esecuzioni successive. Tale numero riguarda la **presenza di file**, non la completezza del mirror.

## Limiti e verifiche successive

- Nessuno dei 24 giochi è stato certificato come replica offline completa di tutte le scene, livelli e dipendenze dinamiche.
- La sessione di cattura Chrome/Playwright per tutti e 24 i giochi è stata avviata sul PC Jessica. Al suo ultimo avanzamento verificato aveva elaborato cinque titoli; i comandi ChatLocalBridge successivi non avevano ancora ricevuto risposta. **Non considerare confermati gli altri 19 risultati senza rileggere il manifest finale.**
- Le pagine possono mostrare la finestra iniziale di preferenze privacy; non è stato forzato alcun consenso pubblicitario.
- Non tentare di aggirare sitelock, controlli d'accesso o sistemi di protezione. Conservare gli asset recuperati per analisi locale, senza ripubblicare contenuti proprietari non autorizzati.
- File locali su Windows: `C:\Users\jessi\Downloads\_chatgpt_games_full_mirrors`; log e capture manifest: `_browser_capture_20261124`, `_official_page_comparison.json`.
- La classifica precedente in `RESKIN_AUDIT.md` **non incorpora ancora questi cinque recuperi**: va ricalcolata solo dopo la lettura dell'audit strutturale aggiornato.

## Metodo riproducibile

1. Aprire `https://www.crazygames.com/game/<slug>` con Chrome in un contesto browser isolato.
2. Osservare e salvare esclusivamente le risposte di risorsa dei domini del gioco; non catturare annunci, tracker o dati di profilo.
3. Salvare gli asset con percorsi relativi sicuri sotto `<mirror>/hosts/<game-host>/...`; non riutilizzare percorsi assoluti provenienti da URL.
4. Salvare dimensioni, hash SHA-256, tipo di contenuto e stato HTTP; confrontare i manifest del motore (Unity, PlayCanvas, Defold, Cocos, PixiJS).
5. Verificare scena iniziale, schermate aggiuntive e assenza di richieste di gioco mancanti, quindi aggiornare la classifica e i punteggi con livello di confidenza distinto.
