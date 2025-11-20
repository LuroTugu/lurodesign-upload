# Lurodesign Booking - Datei-Upload

Diese Anwendung ermöglicht es Kunden, nach einer Calendly-Terminbuchung Dateien hochzuladen.

## Installation

1. Installieren Sie die Abhängigkeiten:
```bash
npm install
```

2. Starten Sie den Development-Server:
```bash
npm run dev
```

Die Anwendung läuft dann auf [http://localhost:3000](http://localhost:3000)

## Calendly Integration

### Option 1: Redirect nach der Buchung (Empfohlen)

1. Gehen Sie zu Ihrem Calendly-Account
2. Navigieren Sie zu **Settings** → **Integrations** → **Webhooks**
3. Fügen Sie einen Webhook hinzu, der nach einer Buchung ausgelöst wird
4. Alternativ können Sie in den Calendly-Einstellungen einen **Redirect-URL** nach der Buchung einrichten:
   - Gehen Sie zu **Event Type** → **Confirmation Page**
   - Aktivieren Sie "Redirect to external URL"
   - Geben Sie ein: `https://ihre-domain.de/upload?event_id={event_id}&invitee_email={invitee_email}`

### Option 2: Manueller Link

Sie können Kunden auch direkt nach der Buchung einen Link senden:
```
https://ihre-domain.de/upload?event_id=EVENT_ID&invitee_email=EMAIL
```

Die Seite funktioniert auch ohne Parameter - Kunden können die URL einfach aufrufen.

## Funktionalitäten

- ✅ Drag & Drop Datei-Upload
- ✅ Klick zum Datei-Auswählen
- ✅ Unterstützung aller Dateitypen
- ✅ Anzeige von Dateiname und -größe
- ✅ Erfolgs-/Fehlermeldungen
- ✅ Responsive Design
- ✅ Moderne, benutzerfreundliche Oberfläche
- ✅ **Kundendaten-Formular** (Name, E-Mail, Telefon) - **WICHTIG für Zuordnung!**
- ✅ **Automatische Zuordnung** zu Calendly-Terminen
- ✅ **JSON-Datenbank** speichert alle Uploads mit Kundendaten
- ✅ **Admin-Dashboard** zum Ansehen aller Uploads (`/admin`)

## Dateien

Hochgeladene Dateien werden im `uploads/` Verzeichnis gespeichert. Jede Datei erhält einen eindeutigen Namen mit Zeitstempel.

**Wichtig:** Alle Uploads werden in `uploads/uploads-database.json` gespeichert mit:
- Kundendaten (Name, E-Mail, Telefon)
- Dateiinformationen
- Calendly Event ID (falls vorhanden)
- Zeitstempel

## Admin-Dashboard

Zum Ansehen aller Uploads mit Kundendaten:
- URL: `http://localhost:3000/admin` (oder Ihre Domain + `/admin`)
- Zeigt alle Uploads in einer übersichtlichen Tabelle
- Filterbar nach Datum, Kunde, etc.
- Download-Links zu den Dateien

## Produktions-Deployment

Für die Produktion:

1. Build erstellen:
```bash
npm run build
```

2. Server starten:
```bash
npm start
```

### Vercel Deployment (Empfohlen)

1. Installieren Sie die Vercel CLI:
```bash
npm i -g vercel
```

2. Deployen Sie die Anwendung:
```bash
vercel
```

### Wichtige Hinweise für Produktion

- Stellen Sie sicher, dass das `uploads/` Verzeichnis existiert und Schreibrechte hat
- Für größere Dateien sollten Sie einen Cloud-Speicher (z.B. AWS S3, Cloudinary) verwenden
- Implementieren Sie Dateigrößen-Limits in der API-Route
- Fügen Sie Authentifizierung hinzu, wenn nötig

## Anpassungen

### Dateigrößen-Limit hinzufügen

Bearbeiten Sie `app/api/upload/route.ts` und fügen Sie eine Größenprüfung hinzu:

```typescript
const maxSize = 10 * 1024 * 1024; // 10MB
if (file.size > maxSize) {
  return NextResponse.json(
    { error: 'Datei ist zu groß. Maximum: 10MB' },
    { status: 400 }
  )
}
```

### Cloud-Speicher Integration

Für Produktionsumgebungen sollten Sie einen Cloud-Speicher wie AWS S3 verwenden. Die Dateien werden dann nicht lokal gespeichert, sondern direkt in den Cloud-Speicher hochgeladen.

