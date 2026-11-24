# Puzzles CrazyGames mirror

Mirror di archivi di giochi aggiunti al repository, con estrazione automatica mediante GitHub Actions.

## Come funziona

1. Carica gli archivi `.zip` nella cartella desiderata del repository e fai un `git push` su `main`.
2. Il workflow [Unpack game archives](.github/workflows/unzip.yml) cerca gli ZIP nel repository.
3. Ogni archivio `percorso/gioco.zip` viene estratto in `percorso/gioco/`, senza cancellare l'archivio originale.
4. I file estratti vengono salvati in un commit da `github-actions[bot]`.

Puoi anche avviare il workflow dalla scheda **Actions** > **Unpack game archives** > **Run workflow**.

## Protezioni e limiti

- Non sovrascrive cartelle già esistenti; lo ZIP modificato richiede una gestione manuale del vecchio output.
- Blocca gli ZIP con percorsi che escono dalla cartella, link simbolici, file speciali o payload enormi.
- Il singolo file estratto deve essere inferiore a 95 MiB. Per file più grandi serve un'altra soluzione (Git LFS / release assets).
- Gli archivi annidati vengono processati fino a tre livelli.
- Non caricare credenziali, token, chiavi o contenuti che non hai il diritto di condividere.

Questo repository è pubblico: controlla i diritti di ridistribuzione dei giochi prima di caricarli.

## Categorie aggiunte (24 novembre 2026)

I nuovi ZIP sono organizzati nelle cartelle io games/, trivia/, Word games/ e cards/.
Il workflow elabora gli ZIP di queste categorie e i vecchi ZIP nella radice.
Gli output sono salvati sotto extracted/<categoria>/<nome ZIP>/, mentre le estrazioni precedenti restano sotto extracted/<nome ZIP>/.

Per le nuove categorie, gli host del gioco vengono identificati tramite il loader della pagina CrazyGames archiviata nello ZIP. File del portale, annunci e tracker non vengono estratti. Ogni ZIP genera un manifest _game-capture-manifest.json, anche se non conteneva ancora asset del gioco. Un manifest non garantisce un mirror completo ne un gioco avviabile offline. Gli ZIP originali sono conservati.
