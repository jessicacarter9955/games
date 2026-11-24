# Ripresa incrementale dei mirror CDN (45 giochi)

Il report `RESKIN_AUDIT_NEW45.md` descrive 1.698 file (~958 MB) gia recuperati **sul PC**. Non significa che tutti i livelli o i file runtime siano presenti.

## Sul PC Windows con gli ZIP e i mirror esistenti

Aprire PowerShell nella cartella clonata di `jessicacarter9955/games`:

```powershell
git pull
py -m pip install playwright
py -m playwright install chromium
py scripts/recapture_cdn_playwright.py --seconds 45
```

Per visualizzare Chrome e interagire con il gioco, entrando in menu e livelli:

```powershell
py scripts/recapture_cdn_playwright.py --headed --seconds 120 --game wordmeister
```

Per recuperare un singolo titolo rimpiazzare `wordmeister` con lo slug del link CrazyGames nel report. Ripetere `--game` per piu titoli.

**Percorso predefinito:** `%USERPROFILE%\Downloads\_chatgpt_new45_cdn_mirrors`.

Il programma conserva gli asset precedenti, salva nuove risposte sotto `<slug>/hosts/<host>/...`, registra per ogni file URL, SHA-256, lunghezza, Content-Type, HTTP status e conserva un manifest `_incremental_browser_capture.json`. Il riepilogo e `_incremental_capture_summary.json`.

La cattura riguarda soltanto risorse effettivamente richieste dal browser: livelli non visitati, binari non estratti, server multiplayer e richieste condizionate possono ancora mancare. Le richieste 403/404 o non recuperate vengono segnalate, non considerate asset presenti. Il programma non tenta di aggirare protezioni o controlli di accesso, non carica alcun file sul repository pubblico e non ripubblica i contenuti di terzi.

**Importante:** non e stato eseguito sul PC remoto da questa sessione. Una verifica seria della completezza richiede eseguire la cattura e il test offline sulle sessioni di gioco rilevanti.
