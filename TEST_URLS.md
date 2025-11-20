# 🧪 Test-URLs für Calendly-Integration

## Schnelltest im Browser

### Test-URL 1: Mit E-Mail und Name
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann
```

### Test-URL 2: Mit allen Parametern
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann&event_id=ABC123&invitee_uri=https://api.calendly.com/invitees/DEF456
```

### Test-URL 3: Nur E-Mail
```
http://localhost:3000?invitee_email=test@beispiel.de
```

### Test-URL 4: Mit Telefonnummer (falls Calendly das mitgibt)
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann&invitee_phone=%2B49%20123%20456789
```

---

## So testen Sie:

### Option 1: Browser-Adressleiste
1. Öffnen Sie Ihren Browser
2. Kopieren Sie eine der URLs oben
3. Fügen Sie sie in die Adressleiste ein
4. Drücken Sie Enter

### Option 2: Terminal (macOS)
```bash
open "http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann"
```

### Option 3: Browser-Entwicklertools
1. Öffnen Sie http://localhost:3000
2. Öffnen Sie die Browser-Konsole (F12)
3. Führen Sie aus:
```javascript
window.location.href = "http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann"
```

---

## Was Sie sehen sollten:

✅ **Grünes Banner:** "Ihre Kontaktdaten wurden automatisch von Calendly übernommen"

✅ **Ausgefüllte Felder:**
- Name: "Max Mustermann"
- E-Mail: "test@beispiel.de"

✅ **Badge "von Calendly"** bei den Feldern

✅ **Goldene Hervorhebung** der ausgefüllten Felder

---

## Test-Szenarien:

### Szenario 1: Vollständige Daten
```
http://localhost:3000?invitee_email=max@mustermann.de&invitee_name=Max%20Mustermann&event_id=EVT123
```
**Erwartung:** Alle Felder ausgefüllt, Banner sichtbar

### Szenario 2: Nur E-Mail
```
http://localhost:3000?invitee_email=max@mustermann.de
```
**Erwartung:** E-Mail ausgefüllt, Name muss manuell eingegeben werden

### Szenario 3: Keine Parameter
```
http://localhost:3000
```
**Erwartung:** Alle Felder leer, normale Eingabe nötig

### Szenario 4: Mit Leerzeichen im Namen
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann
```
**Erwartung:** Name wird korrekt als "Max Mustermann" angezeigt

---

## Troubleshooting:

### Felder werden nicht ausgefüllt?
1. Prüfen Sie die Browser-Konsole (F12) auf Fehler
2. Prüfen Sie, ob die URL-Parameter korrekt sind
3. Prüfen Sie die Network-Tab, ob `/api/get-customer-data` aufgerufen wird

### Banner wird nicht angezeigt?
- Prüfen Sie, ob `dataFromCalendly` auf `true` gesetzt ist
- Prüfen Sie die Browser-Konsole

### Server-Fehler?
- Prüfen Sie das Terminal für Fehlermeldungen
- Stellen Sie sicher, dass der Server läuft

---

## Live-Test mit echten Calendly-Daten:

Nachdem Sie Calendly konfiguriert haben:

1. Buchung in Calendly durchführen
2. Calendly leitet automatisch weiter
3. URL enthält echte Daten
4. Formular wird automatisch ausgefüllt

---

## Nützliche Browser-Erweiterungen:

- **ModHeader** (Chrome): Zum Testen von Headers
- **Postman Interceptor**: Zum Testen von API-Calls
- **React DevTools**: Zum Debuggen der React-Komponenten

