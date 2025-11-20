# ⚙️ Calendly Einstellungen - Komplette Anleitung

## 🎯 Was Sie in Calendly konfigurieren müssen

---

## 📋 Schritt 1: Redirect-URL einrichten (WICHTIG!)

### 1.1 Calendly öffnen
1. Gehen Sie zu **calendly.com** und loggen Sie sich ein
2. Klicken Sie auf **"Event Types"** (oder "Veranstaltungstypen")
3. Wählen Sie Ihr Event aus (oder erstellen Sie ein neues)

### 1.2 Confirmation Page öffnen
1. Klicken Sie auf Ihr Event
2. Scrollen Sie nach unten zu **"Confirmation Page"** (Bestätigungsseite)
3. Klicken Sie darauf

### 1.3 Redirect aktivieren
1. Aktivieren Sie **"Redirect to external URL"** (Umleitung zu externer URL)
2. In das URL-Feld geben Sie ein:

```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

**Wichtig:** Ersetzen Sie `ihre-domain.de` mit Ihrer tatsächlichen Domain!

**Beispiel für localhost (nur zum Testen):**
```
http://localhost:3000?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

### 1.4 Speichern
- Klicken Sie auf **"Save"** (Speichern)

---

## 📋 Schritt 2: Webhook einrichten (OPTIONAL, aber empfohlen)

### 2.1 Webhook-Seite öffnen
1. Gehen Sie zu **Settings** (Einstellungen)
2. Klicken Sie auf **"Integrations"** (Integrationen)
3. Klicken Sie auf **"Webhooks"**

### 2.2 Webhook erstellen
1. Klicken Sie auf **"Create Webhook"** (Webhook erstellen)
2. Wählen Sie:
   - **Event:** `invitee.created` (Termin gebucht)
   - **Webhook URL:** `https://ihre-domain.de/api/calendly-webhook`
   - **Signing Key:** (optional, für Sicherheit - können Sie leer lassen)

3. Klicken Sie auf **"Create"** (Erstellen)

**Wichtig:** Ersetzen Sie `ihre-domain.de` mit Ihrer tatsächlichen Domain!

**Beispiel für localhost (nur zum Testen mit ngrok):**
```
https://abc123.ngrok.io/api/calendly-webhook
```

### 2.3 Webhook testen
- Nach der Erstellung sollten Sie eine Test-Benachrichtigung erhalten
- Prüfen Sie die Logs in Ihrem Server

---

## 📋 Schritt 3: Event Type konfigurieren

### 3.1 Event-Details
1. Gehen Sie zu **Event Types** → Ihr Event
2. Stellen Sie sicher, dass:
   - ✅ Event ist aktiviert
   - ✅ Verfügbare Zeiten sind eingestellt
   - ✅ Dauer ist festgelegt

### 3.2 Fragen hinzufügen (OPTIONAL)
Falls Sie zusätzliche Informationen sammeln möchten:

1. Gehen Sie zu **"Questions"** (Fragen)
2. Fügen Sie Fragen hinzu (z.B. "Wie sind Sie auf uns aufmerksam geworden?")
3. Diese werden dann auch im Webhook mitgesendet

---

## 📋 Schritt 4: Testen

### 4.1 Testbuchung durchführen
1. Öffnen Sie Ihre Calendly-Buchungsseite
2. Buchen Sie einen Test-Termin
3. Nach der Buchung sollten Sie automatisch zur Upload-Seite weitergeleitet werden

### 4.2 Prüfen
- ✅ Werden Sie zur Upload-Seite weitergeleitet?
- ✅ Sind Name und E-Mail automatisch ausgefüllt?
- ✅ Sehen Sie das grüne Banner "Daten wurden automatisch übernommen"?

---

## 🔧 Wichtige URLs zum Kopieren

### Für Produktion:
```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

### Webhook URL (Produktion):
```
https://ihre-domain.de/api/calendly-webhook
```

### Für lokales Testen (mit ngrok):
1. Installieren Sie ngrok: `npm install -g ngrok`
2. Starten Sie ngrok: `ngrok http 3000`
3. Verwenden Sie die ngrok-URL in Calendly

---

## ✅ Checkliste

### Redirect-URL:
- [ ] Redirect ist aktiviert
- [ ] URL enthält `invitee_email={invitee_email}`
- [ ] URL enthält `invitee_name={invitee_name}`
- [ ] URL enthält `invitee_uri={invitee_uri}` (empfohlen)
- [ ] URL enthält `event_id={event_id}` (empfohlen)
- [ ] Domain ist korrekt (nicht localhost in Produktion!)

### Webhook (Optional):
- [ ] Webhook ist erstellt
- [ ] Event ist `invitee.created`
- [ ] Webhook-URL ist korrekt
- [ ] Webhook wurde getestet

### Event Type:
- [ ] Event ist aktiviert
- [ ] Verfügbare Zeiten sind eingestellt
- [ ] Fragen sind konfiguriert (optional)

---

## 🚨 Häufige Fehler

### ❌ Fehler: "Redirect funktioniert nicht"
**Lösung:**
- Prüfen Sie, ob die URL korrekt ist
- Stellen Sie sicher, dass Platzhalter in geschweiften Klammern sind: `{invitee_email}`
- Prüfen Sie, ob die Domain erreichbar ist

### ❌ Fehler: "Felder werden nicht ausgefüllt"
**Lösung:**
- Prüfen Sie, ob die Platzhalter in der URL sind
- Prüfen Sie die Browser-Konsole auf Fehler
- Testen Sie die URL manuell mit Parametern

### ❌ Fehler: "Webhook wird nicht empfangen"
**Lösung:**
- Prüfen Sie, ob die Webhook-URL öffentlich erreichbar ist
- Für lokales Testen: Verwenden Sie ngrok
- Prüfen Sie die Calendly Webhook-Logs

---

## 📝 Beispiel-Konfiguration

### Redirect-URL (Minimal):
```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}
```

### Redirect-URL (Vollständig - Empfohlen):
```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

### Webhook-URL:
```
https://ihre-domain.de/api/calendly-webhook
```

---

## 🎯 Zusammenfassung

**Mindestens nötig:**
1. ✅ Redirect-URL mit `invitee_email` und `invitee_name`

**Empfohlen:**
1. ✅ Redirect-URL mit allen Parametern
2. ✅ Webhook für vollständige Daten

**Optional:**
1. ✅ Zusätzliche Fragen im Event
2. ✅ Webhook Signing Key für Sicherheit

---

## 🆘 Hilfe

Falls etwas nicht funktioniert:
1. Prüfen Sie die Calendly-Dokumentation
2. Testen Sie die URL manuell im Browser
3. Prüfen Sie die Server-Logs
4. Prüfen Sie die Browser-Konsole (F12)

Die Konfiguration sollte jetzt funktionieren! 🎉

