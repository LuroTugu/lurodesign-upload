# ⚡ Schnell-Deployment auf Vercel

## 🚀 Option 1: Über Vercel Website (EMPFOHLEN - Einfachste Methode)

### Schritt 1: Code auf GitHub hochladen

```bash
cd "/Users/joelamanuel/Lurodesign booking"

# Git initialisieren
git init
git add .
git commit -m "Initial commit"

# GitHub Repository erstellen (auf github.com) und dann:
git remote add origin https://github.com/IHR-USERNAME/IHR-REPO.git
git push -u origin main
```

### Schritt 2: Vercel Deployment

1. Gehen Sie zu **vercel.com** und loggen Sie sich ein (mit GitHub)
2. Klicken Sie auf **"Add New..."** → **"Project"**
3. Wählen Sie Ihr GitHub Repository
4. Klicken Sie auf **"Import"**
5. Klicken Sie auf **"Deploy"**
6. ✅ Fertig! Sie erhalten eine URL wie: `https://lurodesign-upload.vercel.app`

---

## 🚀 Option 2: Über Vercel CLI (Schnell)

### Schritt 1: Vercel CLI installieren

```bash
npm install -g vercel
```

### Schritt 2: Login

```bash
vercel login
```

### Schritt 3: Deploy

```bash
cd "/Users/joelamanuel/Lurodesign booking"
vercel
```

Folgen Sie den Anweisungen:
- Set up and deploy? **Y**
- Which scope? (Ihr Account)
- Link to existing project? **N**
- Project name? (Enter für Standard)
- Directory? **./** (Enter)
- Override settings? **N**

### Schritt 4: Produktion

```bash
vercel --prod
```

---

## 📋 Nach dem Deployment

### 1. Vercel-URL erhalten

Sie erhalten eine URL wie:
```
https://lurodesign-upload-abc123.vercel.app
```

### 2. Calendly konfigurieren

In Calendly → Event Types → Confirmation Page:

**Redirect URL:**
```
https://lurodesign-upload-abc123.vercel.app?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

**Webhook URL (Optional):**
```
https://lurodesign-upload-abc123.vercel.app/api/calendly-webhook
```

### 3. Testen

1. Testbuchung in Calendly
2. Prüfen ob alles funktioniert

---

## ⚠️ Wichtiger Hinweis

**Dateien-Speicherung:** Auf Vercel werden Dateien im `uploads/` Verzeichnis **nicht dauerhaft gespeichert**!

Für Produktion sollten Sie später einen Cloud-Speicher (AWS S3, Cloudinary) verwenden.

**Für jetzt:** Funktioniert für Tests, aber Dateien gehen bei Neustart verloren.

---

## ✅ Checkliste

- [ ] Code auf GitHub
- [ ] Vercel Account erstellt
- [ ] Projekt deployed
- [ ] URL erhalten
- [ ] Calendly konfiguriert
- [ ] Getestet

---

## 🆘 Hilfe

Falls Probleme:
1. Prüfen Sie die Vercel-Logs
2. Prüfen Sie die Build-Logs
3. Prüfen Sie ob alle Dependencies installiert sind

**Fertig!** 🎉

