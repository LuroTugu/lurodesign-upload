# 🚀 Vercel Deployment - Schritt für Schritt

## Voraussetzungen

- ✅ Node.js installiert (bereits erledigt)
- ✅ Projekt läuft lokal (bereits erledigt)
- ✅ GitHub Account (kostenlos)

---

## 📋 Schritt 1: Projekt auf GitHub hochladen

### 1.1 GitHub Repository erstellen

1. Gehen Sie zu **github.com** und loggen Sie sich ein
2. Klicken Sie auf **"New repository"** (Neues Repository)
3. Geben Sie einen Namen ein (z.B. `lurodesign-upload`)
4. Wählen Sie **"Private"** (oder Public, je nach Wunsch)
5. Klicken Sie auf **"Create repository"**

### 1.2 Code auf GitHub hochladen

**Option A: Über GitHub Desktop (Einfach)**
1. Installieren Sie GitHub Desktop
2. Öffnen Sie GitHub Desktop
3. File → Add Local Repository
4. Wählen Sie Ihr Projektverzeichnis
5. Commit & Push

**Option B: Über Terminal (Schnell)**
```bash
cd "/Users/joelamanuel/Lurodesign booking"

# Git initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Lurodesign Upload System"

# GitHub Repository hinzufügen (ersetzen Sie USERNAME und REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Code hochladen
git push -u origin main
```

---

## 📋 Schritt 2: Vercel Account erstellen

1. Gehen Sie zu **vercel.com**
2. Klicken Sie auf **"Sign Up"**
3. Wählen Sie **"Continue with GitHub"**
4. Autorisiere Vercel auf GitHub

---

## 📋 Schritt 3: Projekt auf Vercel deployen

### 3.1 Projekt importieren

1. In Vercel Dashboard: Klicken Sie auf **"Add New..."** → **"Project"**
2. Wählen Sie Ihr GitHub Repository aus
3. Klicken Sie auf **"Import"**

### 3.2 Konfiguration

Vercel erkennt automatisch Next.js! Sie müssen nur:

1. **Project Name:** (kann so bleiben oder ändern)
2. **Framework Preset:** Next.js (automatisch erkannt)
3. **Root Directory:** `./` (Standard)
4. **Build Command:** `npm run build` (automatisch)
5. **Output Directory:** `.next` (automatisch)

### 3.3 Environment Variables (Optional)

Falls Sie später Umgebungsvariablen brauchen:
- Klicken Sie auf **"Environment Variables"**
- Fügen Sie Variablen hinzu (z.B. für API Keys)

### 3.4 Deploy!

1. Klicken Sie auf **"Deploy"**
2. Warten Sie 1-2 Minuten
3. ✅ Fertig!

---

## 📋 Schritt 4: Domain erhalten

Nach dem Deployment erhalten Sie automatisch:

**Beispiel-URL:**
```
https://lurodesign-upload.vercel.app
```

Oder mit Custom Domain (später möglich):
```
https://upload.lurodesign.de
```

---

## 📋 Schritt 5: Calendly konfigurieren

### 5.1 Redirect-URL in Calendly

1. Gehen Sie zu Calendly → Event Types → Ihr Event
2. Confirmation Page → Redirect to external URL
3. URL eingeben:

```
https://lurodesign-upload.vercel.app?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

**Wichtig:** Ersetzen Sie `lurodesign-upload.vercel.app` mit Ihrer tatsächlichen Vercel-URL!

### 5.2 Webhook-URL (Optional)

```
https://lurodesign-upload.vercel.app/api/calendly-webhook
```

---

## 📋 Schritt 6: Testen

1. Testbuchung in Calendly durchführen
2. Prüfen ob Redirect funktioniert
3. Prüfen ob Upload funktioniert
4. Prüfen ob Daten korrekt gespeichert werden

---

## 🔧 Wichtige Hinweise

### Dateien-Speicherung

**Achtung:** Auf Vercel werden Dateien im `uploads/` Verzeichnis **nicht dauerhaft gespeichert**!

**Lösung:** Für Produktion sollten Sie einen Cloud-Speicher verwenden:
- AWS S3
- Cloudinary
- Google Cloud Storage

**Für jetzt (Test):** Funktioniert, aber Dateien gehen bei Neustart verloren.

### Datenbank

Die JSON-Datei (`uploads-database.json`) wird auch nicht dauerhaft gespeichert.

**Lösung:** Für Produktion:
- Vercel Postgres
- MongoDB Atlas
- Supabase

**Für jetzt (Test):** Funktioniert für Tests.

---

## 🎯 Schnell-Deployment (Terminal)

Falls Sie die Vercel CLI bevorzugen:

```bash
# Vercel CLI installieren
npm install -g vercel

# Im Projektverzeichnis
cd "/Users/joelamanuel/Lurodesign booking"

# Login
vercel login

# Deploy
vercel

# Für Produktion
vercel --prod
```

---

## ✅ Checkliste

- [ ] GitHub Repository erstellt
- [ ] Code auf GitHub hochgeladen
- [ ] Vercel Account erstellt
- [ ] Projekt auf Vercel importiert
- [ ] Deployment erfolgreich
- [ ] Vercel-URL erhalten
- [ ] Calendly Redirect-URL konfiguriert
- [ ] Testbuchung durchgeführt
- [ ] Alles funktioniert!

---

## 🆘 Troubleshooting

### Fehler: "Build failed"
- Prüfen Sie die Build-Logs in Vercel
- Stellen Sie sicher, dass alle Dependencies in `package.json` sind
- Prüfen Sie auf TypeScript-Fehler

### Fehler: "Upload funktioniert nicht"
- Prüfen Sie die Vercel-Logs
- Prüfen Sie ob das `uploads/` Verzeichnis erstellt wird
- Für Produktion: Cloud-Speicher einrichten

### Fehler: "Calendly Redirect funktioniert nicht"
- Prüfen Sie ob die URL korrekt ist
- Prüfen Sie ob Platzhalter in geschweiften Klammern sind
- Testen Sie die URL manuell im Browser

---

## 📝 Nächste Schritte (Optional)

1. **Custom Domain hinzufügen**
   - In Vercel: Settings → Domains
   - Ihre Domain hinzufügen
   - DNS-Einträge konfigurieren

2. **Cloud-Speicher einrichten**
   - AWS S3 oder Cloudinary
   - API-Route anpassen

3. **Datenbank einrichten**
   - Vercel Postgres
   - JSON-Datei durch Datenbank ersetzen

4. **E-Mail-Benachrichtigungen**
   - Bei Upload E-Mail senden
   - Resend oder SendGrid verwenden

---

## 🎉 Fertig!

Nach dem Deployment haben Sie:
- ✅ Öffentliche URL für Calendly
- ✅ Automatische Datenerfassung
- ✅ Datei-Upload funktioniert
- ✅ Admin-Dashboard verfügbar

Die Anwendung ist jetzt live! 🚀

