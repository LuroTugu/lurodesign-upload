# 🔍 Fehler beim Hochladen - Debugging

## ✅ Code wurde verbessert!

Ich habe den Code angepasst, um:
- ✅ Bessere Fehlerbehandlung
- ✅ Detailliertere Fehlermeldungen
- ✅ Dateinamen-Sanitization für Cloudinary

---

## 🔍 So finden Sie den Fehler:

### Option 1: Browser Console (Empfohlen)

1. Öffnen Sie die Upload-Seite
2. Drücken Sie **F12** (oder Rechtsklick → "Untersuchen")
3. Gehen Sie zum Tab **"Console"**
4. Versuchen Sie eine Datei hochzuladen
5. **Kopieren Sie die Fehlermeldung** die erscheint

### Option 2: Netlify Logs

1. Gehen Sie zu **Netlify Dashboard** → Ihr Projekt
2. **Functions** → **Logs**
3. Suchen Sie nach **"Upload error"** oder **"Cloudinary upload error"**
4. **Kopieren Sie die Fehlermeldung**

---

## 🐛 Häufige Fehler und Lösungen:

### Fehler 1: "Cloudinary is not configured"

**Problem:** Environment Variables fehlen oder sind falsch

**Lösung:**
1. Prüfen Sie Netlify → Environment Variables
2. Stellen Sie sicher, dass alle 3 Variablen gesetzt sind:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
3. Netlify neu deployen

---

### Fehler 2: "Invalid API credentials"

**Problem:** API Keys sind falsch

**Lösung:**
1. Prüfen Sie Cloudinary Dashboard
2. Kopieren Sie die Keys erneut
3. Aktualisieren Sie Environment Variables in Netlify
4. Netlify neu deployen

---

### Fehler 3: "File too large"

**Problem:** Datei ist zu groß für Cloudinary Free Plan

**Lösung:**
- Cloudinary Free Plan: Max 10 MB pro Datei
- Größere Dateien werden lokal gespeichert (Fallback)

---

### Fehler 4: "Invalid file type"

**Problem:** Dateityp wird nicht unterstützt

**Lösung:**
- Cloudinary unterstützt die meisten Dateitypen
- Falls nicht, wird automatisch auf lokale Speicherung zurückgegriffen

---

### Fehler 5: "Name und E-Mail-Adresse sind erforderlich"

**Problem:** Formular-Felder sind leer

**Lösung:**
- Stellen Sie sicher, dass Name und E-Mail ausgefüllt sind
- Prüfen Sie ob Calendly-Daten korrekt übernommen werden

---

## 🔧 Debug-Modus aktivieren:

### In der Browser Console:

```javascript
// Aktivieren Sie detaillierte Logs
localStorage.setItem('debug', 'true')
```

### In Netlify:

1. Gehen Sie zu **Site settings** → **Environment variables**
2. Fügen Sie hinzu:
   ```
   NODE_ENV = development
   ```
3. Netlify neu deployen

---

## 📋 Checkliste:

- [ ] Environment Variables in Netlify gesetzt?
- [ ] API Keys korrekt kopiert?
- [ ] Netlify neu deployt?
- [ ] Browser Console geöffnet?
- [ ] Fehlermeldung kopiert?

---

## 🚀 Was Sie mir senden sollten:

**Bitte senden Sie mir:**
1. ✅ Die genaue Fehlermeldung (aus Browser Console oder Netlify Logs)
2. ✅ Was Sie gerade tun (Datei hochladen, etc.)
3. ✅ Welche Datei Sie hochladen (Typ, Größe)

**Dann kann ich den Fehler genau identifizieren und beheben!** 🔧

---

## 💡 Temporäre Lösung:

Falls Cloudinary nicht funktioniert:
- ✅ Der Code fällt automatisch auf lokale Speicherung zurück
- ✅ Dateien werden trotzdem gespeichert (aber temporär auf Netlify)
- ✅ Funktioniert für Tests, aber nicht für Produktion

---

**Bitte senden Sie mir die Fehlermeldung, dann kann ich helfen!** 🚀

