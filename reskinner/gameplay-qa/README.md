# Gameplay QA automatica — 69 giochi

Questo repertorio distingue i **test reali del browser** dai checkpoint di
mirroring (`reskinner/progress/`). Un gioco non supera la QA solo perché
ha un entrypoint HTML, immagini, un canvas, un loader o una schermata iniziale.

## Criterio di accettazione

Per promuovere **un singolo gioco** a `gameplayVerified: true` servono:
1. Apertura locale senza errori bloccanti.
2. Interazione Play/Start realmente eseguita (DOM o coordinata canvas
   verificata visivamente; un click generico non conta).
3. Screenshot della **scena di gioco** con contenuto effettivo (no
   splash/menu, tavolo verde vuoto, frame bianco, loader o barra bloccata).
4. Una seconda interazione di gioco (tessera, carta, parola, movimento,
   risposta o equivalente) con cambiamento coerente dello stato.
5. Assenza di asset mancanti *necessari per quella scena*, non assenza
   assoluta di tutte le richieste di analytics e ads.
6. Controllo separato di selezione asset, preview isolata e reskin live,
   prima di impostare `inspectorValidated: true`.

Il test automatico produce **evidenze da revisionare** e non assegna
mai implicitamente `gameplayVerified: true`: l'entropia dei pixel
non distingue da sola una partita da un menu animato.

## Esecuzione

Il test gira con Playwright sul PC Windows con mirror locali:

- `scripts/test_69_gameplay.py`: apertura, Play da DOM o canvas,
  screenshot prima/dopo, input di prova, errori console/HTTP,
  differenza visiva.
- `scripts/run_69_gameplay_watchdog.py`: processo isolato e limite
  di tempo per ciascuno dei 69 titoli; un crash WebGL non impedisce
  le verifiche dei successivi.
- Fonte: `http://127.0.0.1:8001/reskinner/catalog.json` sul PC.
- Risultati completi e screenshot: cartella privata
  `%USERPROFILE%\Downloads\_reskin_69_gameplay_qa_20261125\`.
- Questa prima passata **blocca i domini esterni**, per distinguere un
  mirror autonomo da un gioco che richiede SDK/CDN/backend online.
  Un fallimento in modalità offline non prova che la pagina originale
  di CrazyGames non funzioni online; per i casi dipendenti dal servizio
  serve una seconda passata controllata.

Un `*.json` versionato qui per gioco viene pubblicato con un commit
distinto; riporta solo **metadati e hash delle catture**, non le immagini
o i file originali del gioco.

## Stato iniziale del 25/11/2026

- **69 titoli** previsti, run browser `qa69_all_gameplay_20261125`.
- **7 primi giochi** registrati con singoli checkpoint QA:
  Mahjongg, Hangman, Wordmeister, Hearts Classic, Paper.io 2,
  Guess Their Answer e Hexastack.
- **0 gameplay certificati** fra i primi sette.
- Hangman, Hearts e Guess Their Answer hanno immagini dopo Play
  pressoché uniformi nel test; Hearts presenta l'eccezione
  `data is not defined`.
- Hexastack registra `Unknown error on loading CrazyGames SDK`
  con richieste esterne bloccate: non confondere questa QA offline
  con l'avvio della pagina originale online.
- Paper.io 2 registra errore di accesso alla proprietà `SDK`.
- Mahjongg e Wordmeister visualizzano elementi grafici, ma
  il test non ha dimostrato una transizione a partita vera.
- Questi esiti **non alterano i punteggi teorici di reskinnabilità**.

Proseguire con un checkpoint per gioco e, quando viene individuato un
bug correggibile, fare fix + test di regressione + commit separati.
