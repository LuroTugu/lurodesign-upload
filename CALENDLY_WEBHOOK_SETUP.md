# 🔗 Calendly Webhook Setup - Automatische Datenerfassung

## Problem gelöst! ✅

**Vorher:** Calendly gibt bei Redirect nur begrenzte Daten (event_id, email) mit.

**Jetzt:** Webhook empfängt **ALLE** Kundendaten automatisch, sobald ein Termin gebucht wird!

---

## 🎯 Wie es funktioniert:

1. **Kunde bucht Termin bei Calendly**
2. **Calendly sendet Webhook** → Unsere API empfängt alle Daten
3. **Daten werden gespeichert** in `uploads/calendly-bookings.json`
4. **Kunde wird zur Upload-Seite weitergeleitet**
5. **Upload-Seite ruft gespeicherte Daten ab** → Formular wird automatisch ausgefüllt
6. **Datei wird hochgeladen** → Wird mit gespeicherten Kundendaten verknüpft

---

## 📋 Setup-Schritte:

### Schritt 1: Calendly Personal Access Token erstellen

1. Gehen Sie zu **Calendly** → **Settings** → **Integrations** → **API & Webhooks**
2. Klicken Sie auf **"Token jetzt abrufen"** oder **"Create Token"**
3. Geben Sie einen Namen ein (z.B. "Lurodesign Upload System")
4. **WICHTIG:** Kopieren Sie das Token sofort! Es wird nur einmal angezeigt.

### Schritt 2: Webhook in Calendly einrichten

#### Option A: Über Calendly Web-Interface (Einfach)

1. Gehen Sie zu **Settings** → **Integrations** → **Webhooks**
2. Klicken Sie auf **"Create Webhook"**
3. Wählen Sie:
   - **Event:** `invitee.created` (Termin gebucht)
   - **Webhook URL:** `https://ihre-domain.de/api/calendly-webhook`
   - **Signing Key:** (optional, für Sicherheit)
4. Klicken Sie auf **"Create"**

#### Option B: Über Calendly API (Programmatisch)

```bash
curl -X POST https://api.calendly.com/webhook_subscriptions \
  -H "Authorization: Bearer IHR_CALENDLY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://ihre-domain.de/api/calendly-webhook",
    "events": ["invitee.created"],
    "organization": "https://api.calendly.com/organizations/IHRE_ORG_ID",
    "user": "https://api.calendly.com/users/IHRE_USER_ID"
  }'
```

**Wie finde ich meine Org/User ID?**
```bash
curl -X GET https://api.calendly.com/users/me \
  -H "Authorization: Bearer IHR_CALENDLY_TOKEN"
```

### Schritt 3: Redirect-URL in Calendly konfigurieren

1. Gehen Sie zu **Event Types** → Ihr Event → **Confirmation Page**
2. Aktivieren Sie **"Redirect to external URL"**
3. URL eingeben:
   ```
   https://ihre-domain.de?event_id={event_id}&invitee_email={invitee_email}&invitee_uri={invitee_uri}
   ```

**Wichtig:** `invitee_uri` ist am besten für die Zuordnung!

---

## 🔍 Was wird gespeichert?

Der Webhook empfängt und speichert:

```json
{
  "name": "Max Mustermann",
  "email": "max@beispiel.de",
  "phone": "+49 123 456789",
  "eventName": "Beratungstermin",
  "eventStartTime": "2024-01-15T10:00:00Z",
  "eventEndTime": "2024-01-15T11:00:00Z",
  "timezone": "Europe/Berlin",
  "calendlyEventId": "ABC123XYZ",
  "calendlyInviteeId": "DEF456UVW",
  "questionsAndAnswers": [
    {
      "question": "Wie sind Sie auf uns aufmerksam geworden?",
      "answer": "Google"
    }
  ]
}
```

---

## 🧪 Testen:

### 1. Webhook testen (mit ngrok für lokale Entwicklung)

```bash
# Installiere ngrok
npm install -g ngrok

# Starte ngrok Tunnel
ngrok http 3000

# Verwende die ngrok URL in Calendly Webhook:
# https://abc123.ngrok.io/api/calendly-webhook
```

### 2. Testbuchung durchführen

1. Buchung in Calendly durchführen
2. Prüfen ob Webhook empfangen wurde:
   - Logs im Terminal prüfen
   - `uploads/calendly-bookings.json` prüfen
3. Upload-Seite aufrufen mit Parametern
4. Prüfen ob Formular automatisch ausgefüllt wird

---

## 🔒 Sicherheit (Optional):

### Webhook Signing Key

Calendly kann Webhooks signieren. Aktivieren Sie das für zusätzliche Sicherheit:

1. In Calendly Webhook-Einstellungen: **"Signing Key"** aktivieren
2. Key kopieren
3. In `.env.local` speichern:
   ```
   CALENDLY_WEBHOOK_SIGNING_KEY=ihr_signing_key
   ```
4. In `app/api/calendly-webhook/route.ts` Validierung hinzufügen

---

## 📊 Datenbank-Struktur:

Alle Buchungen werden in `uploads/calendly-bookings.json` gespeichert:

```json
[
  {
    "eventUri": "https://api.calendly.com/scheduled_events/ABC123",
    "eventName": "Beratungstermin",
    "name": "Max Mustermann",
    "email": "max@beispiel.de",
    "phone": "+49 123 456789",
    "calendlyEventId": "ABC123",
    "calendlyInviteeId": "DEF456",
    "createdAt": "2024-01-15T09:30:00Z"
  }
]
```

---

## 🚀 Produktions-Deployment:

### Vercel:

1. Deployen Sie die Anwendung:
   ```bash
   vercel deploy --prod
   ```

2. Webhook-URL in Calendly aktualisieren:
   ```
   https://ihre-app.vercel.app/api/calendly-webhook
   ```

3. Redirect-URL in Calendly aktualisieren:
   ```
   https://ihre-app.vercel.app?event_id={event_id}&invitee_uri={invitee_uri}
   ```

---

## ✅ Vorteile dieser Lösung:

✅ **Vollständige Daten** - Alle Kundendaten werden automatisch erfasst  
✅ **Keine manuelle Eingabe nötig** - Formular wird automatisch ausgefüllt  
✅ **Echtzeit** - Daten werden sofort nach Buchung gespeichert  
✅ **Zuverlässig** - Funktioniert auch wenn Redirect fehlschlägt  
✅ **Erweiterbar** - Zusätzliche Fragen aus Calendly werden auch gespeichert  
✅ **Nachvollziehbar** - Vollständige Historie aller Buchungen  

---

## 🐛 Troubleshooting:

### Webhook wird nicht empfangen:

1. **Prüfen Sie die Webhook-URL** - Muss öffentlich erreichbar sein
2. **Prüfen Sie die Logs** - Terminal oder Vercel Logs
3. **Testen Sie mit ngrok** - Für lokale Entwicklung
4. **Prüfen Sie Calendly Webhook-Logs** - In Calendly Settings

### Daten werden nicht gefunden:

1. **Prüfen Sie `calendly-bookings.json`** - Sind Daten vorhanden?
2. **Prüfen Sie die URL-Parameter** - Werden `event_id` oder `invitee_uri` mitgegeben?
3. **Prüfen Sie die API** - `/api/get-customer-data?event_id=...` direkt testen

---

## 📞 Support:

Falls Sie Hilfe brauchen:
1. Prüfen Sie die Logs in `uploads/calendly-bookings.json`
2. Testen Sie den Webhook-Endpoint direkt
3. Prüfen Sie Calendly Webhook-Logs

Die Lösung ist jetzt vollständig implementiert! 🎉

