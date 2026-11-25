# Checkpoint incrementali per gioco

Questa cartella registra **un file JSON versionato e un commit distinto per ogni gioco
per cui e' stato osservato un risultato di mirroring**, cosi' la diagnosi non dipende
dall'ultima riga del log di una passata lunga.

## Significato degli stati

- `stage: mirror_capture_pass` indica che una sessione browser ha terminato
  la raccolta delle risposte osservabili per quel gioco.
- `stats.newFiles`, `stats.existingFiles` e `stats.failedRequests` sono
  **contatori della specifica passata**, non un inventario completo e non
  attestano che ogni asset sia presente.
- `completedGameplay: false` e `inspectorValidated: false` non vanno mai
  trasformati in `true` senza uno smoke test reale del gameplay e un test
  esplicito inspector / preview / sostituzione skin.
- Un gioco segnato in questa directory **non e' automaticamente terminato**.

## Regola di salvataggio

Per ogni gioco, dopo un intervento:
1. Salvare il risultato locale del test/mirror e i dettagli di errore.
2. Creare o aggiornare solo `reskinner/progress/<game-id>.json`, piu' gli
   eventuali file del reskinner modificati per quel gioco.
3. Effettuare **commit e push sul branch feat/multigame-reskinner**, separati
   per ogni gioco, verificando il commit remoto prima di indicare successo.
4. Procedere al gioco successivo anche se un titolo richiede una nuova passata;
   registrare il fallimento e tornare sul titolo dopo.

**Non committare asset, archivi di terzi, log contenenti credenziali o copie dei
mirror originali nel repository pubblico.** Gli originali restano nelle cartelle
locali Windows; per proteggerli da perdita del disco serve una copia di backup
separata, con diritti e destinazione appropriati.

## Stato iniziale 25 novembre 2026

I primi **23 checkpoint `mirror_capture_pass`** sono stati pubblicati con
23 commit GitHub distinti dalla passata `reskin69_filtered_full_20261125`.
La passata era ancora segnalata `running` ma non avanzava nei log oltre
`homedesigndecorate`; completamento degli altri 46 **non confermato**.
Nessun checkpoint prova un test end-to-end.
