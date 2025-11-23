# 🗄️ Supabase Storage Integration - Setup

## ✅ Integration implementiert!

Die Supabase Storage Integration ist fertig. Dateien werden jetzt direkt zu Supabase hochgeladen!

---

## 🚀 Setup-Schritte:

### Schritt 1: Storage Bucket erstellen (falls noch nicht vorhanden)

1. Gehen Sie zu **supabase.com** → Ihr Projekt
2. Klicken Sie auf **"Storage"** im linken Menü
3. Klicken Sie auf **"New bucket"**
4. Geben Sie ein:
   - **Name:** `lurodesign-uploads`
   - **Public bucket:** ✅ Ja (empfohlen für einfachen Zugriff)
5. Klicken Sie auf **"Create bucket"**

### Schritt 2: Environment Variables in Netlify setzen

1. Gehen Sie zu **Netlify Dashboard** → Ihr Projekt
2. **Site settings** → **Environment variables**
3. Klicken Sie auf **"Add a variable"**
4. Fügen Sie diese 3 Variablen hinzu:

   ```
   SUPABASE_URL = https://efpicaokuepmmquytxqh.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ
   SUPABASE_BUCKET_NAME = lurodesign-uploads
   ```

5. Klicken Sie auf **"Save"**
6. **WICHTIG:** Netlify neu deployen (oder warten bis automatisches Deploy)

---

## 📁 Ordnerstruktur in Supabase:

Dateien werden gespeichert als:
```
Supabase Storage:
  lurodesign-uploads/
    max_mustermann/
      2025-01-21_design_1234567890.pdf
      2025-01-21_logo_1234567890.png
    anna_schmidt/
      2025-01-21_briefing_1234567890.pdf
```

**Vorteile:**
- ✅ Alle Dateien eines Kunden in einem Ordner
- ✅ Sofort erkennbar, wer was hochgeladen hat
- ✅ Einfach zu finden und zu verwalten
- ✅ Öffentliche URLs für einfachen Zugriff

---

## ✅ Was funktioniert jetzt:

### Automatisch:
- ✅ Dateien werden **direkt zu Supabase Storage** hochgeladen
- ✅ **Ordnerstruktur nach Kunden** wird erstellt
- ✅ **Dateinamen mit Kundennamen** für einfache Zuordnung
- ✅ **Keine Admin-Seite nötig** - alles in Supabase
- ✅ **Öffentliche URLs** für einfachen Zugriff

### Workflow:
1. Kunde füllt Formular aus
2. Kunde wählt Datei
3. Kunde klickt "Hochladen"
4. **Datei geht direkt zu Supabase Storage** ✅
5. Sie sehen die Datei in Ihrem Supabase Storage Dashboard

---

## 🔧 Code-Installation:

```bash
npm install @supabase/supabase-js
```

**Ich habe das bereits gemacht!** ✅

---

## 📋 Checkliste:

- [x] Supabase SDK installiert
- [x] Upload-Route angepasst
- [x] Dropbox entfernt
- [ ] Storage Bucket erstellt (`lurodesign-uploads`)
- [ ] Environment Variables in Netlify gesetzt
- [ ] Netlify neu deployt
- [ ] Test-Upload durchgeführt

---

## 🎯 Nächste Schritte:

1. **Storage Bucket erstellen** (falls noch nicht vorhanden)
   - Supabase Dashboard → Storage → New bucket
   - Name: `lurodesign-uploads`
   - Public: Ja

2. **Environment Variables in Netlify setzen:**
   ```
   SUPABASE_URL = https://efpicaokuepmmquytxqh.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ
   SUPABASE_BUCKET_NAME = lurodesign-uploads
   ```

3. **Code pushen:**
   ```bash
   git add .
   git commit -m "Supabase Storage Integration hinzugefügt"
   git push
   ```

4. **Testen** - Datei hochladen und in Supabase Storage prüfen

---

## 💡 Tipps:

### Public vs. Private Bucket:

**Public Bucket (Empfohlen):**
- ✅ Öffentliche URLs für einfachen Zugriff
- ✅ Keine Authentifizierung nötig
- ✅ Einfacher zu verwenden

**Private Bucket:**
- ✅ Sicherer (nur mit Authentifizierung)
- ⚠️ Braucht Signed URLs für Zugriff

### Storage Policies:

Falls Sie später mehr Kontrolle brauchen:
- Supabase Dashboard → Storage → Policies
- Können Sie später konfigurieren

---

## 🔒 Sicherheit:

- ✅ Service Role Key nur in Environment Variables (nicht im Code)
- ✅ Key kann jederzeit in Supabase Dashboard widerrufen werden
- ✅ Bucket isoliert Ihre Dateien

---

## 📊 Kosten:

**Supabase Free Plan:**
- ✅ 1 GB Speicherplatz kostenlos
- ✅ 2 GB Bandbreite/Monat kostenlos
- ✅ Für die meisten Fälle ausreichend

---

## ✅ Zusammenfassung:

**Was Sie tun müssen:**
1. ✅ Storage Bucket erstellen (`lurodesign-uploads`)
2. ✅ Environment Variables in Netlify setzen (3 Variablen)
3. ✅ Code pushen
4. ✅ Testen

**Was automatisch passiert:**
- ✅ Dateien gehen direkt zu Supabase Storage
- ✅ Ordnerstruktur nach Kunden
- ✅ Keine Admin-Seite nötig
- ✅ Öffentliche URLs verfügbar

**Sobald Sie den Bucket erstellt haben und die Environment Variables in Netlify setzen, funktioniert alles!** 🚀

---

## 🐛 Troubleshooting:

### Fehler: "Bucket not found"

**Lösung:**
- Prüfen Sie ob Bucket `lurodesign-uploads` existiert
- Erstellen Sie den Bucket in Supabase Dashboard → Storage

### Fehler: "Invalid API key"

**Lösung:**
- Prüfen Sie ob Service Role Key korrekt ist
- Kopieren Sie den Key erneut aus Supabase Dashboard

### Fehler: "Permission denied"

**Lösung:**
- Prüfen Sie ob Bucket public ist (empfohlen)
- Oder konfigurieren Sie Storage Policies

---

**Fragen? Sagen Sie mir Bescheid!** 😊

