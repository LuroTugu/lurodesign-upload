# ✅ Supabase Integration testen

## 🧪 So prüfen Sie, ob alles funktioniert:

---

## 📋 Checkliste vor dem Test:

- [ ] Storage Bucket `lurodesign-uploads` in Supabase erstellt
- [ ] Environment Variables in Netlify gesetzt (alle 3)
- [ ] Netlify neu deployt (nach dem Setzen der Env Vars)

---

## 🚀 Test-Schritte:

### Schritt 1: Netlify Deploy prüfen

1. Gehen Sie zu **Netlify Dashboard** → Ihr Projekt
2. Klicken Sie auf **"Deploys"** (oben)
3. Prüfen Sie den **neuesten Deploy**:
   - ✅ Status sollte **"Published"** oder **"Ready"** sein
   - ❌ Falls **"Failed"**: Klicken Sie darauf und prüfen Sie die Fehlermeldung

### Schritt 2: Upload testen

1. Gehen Sie zu Ihrer **Upload-Seite** (z.B. `https://ihre-domain.netlify.app`)
2. Füllen Sie das Formular aus:
   - **Name:** Test Kunde
   - **E-Mail:** test@beispiel.de
   - **Telefon:** (optional)
3. Wählen Sie eine **Test-Datei** aus (z.B. ein PDF oder Bild)
4. Klicken Sie auf **"Datei hochladen"**

### Schritt 3: Erfolg prüfen

**Auf der Upload-Seite:**
- ✅ Sollte **"Datei erfolgreich zu Supabase Storage hochgeladen"** anzeigen
- ❌ Falls Fehler: Kopieren Sie die Fehlermeldung

**In Supabase Storage:**
1. Gehen Sie zu **supabase.com** → Ihr Projekt
2. Klicken Sie auf **"Storage"** (linkes Menü)
3. Klicken Sie auf **"lurodesign-uploads"** Bucket
4. Prüfen Sie ob die Datei dort ist:
   - ✅ Sollte in einem Ordner sein (z.B. `test_kunde/2025-01-21_datei.pdf`)
   - ❌ Falls nicht: Prüfen Sie die Netlify Logs

---

## 🔍 Fehler-Debugging:

### Option 1: Browser Console (Empfohlen)

1. Öffnen Sie die Upload-Seite
2. Drücken Sie **F12** (oder Rechtsklick → "Untersuchen")
3. Gehen Sie zum Tab **"Console"**
4. Versuchen Sie eine Datei hochzuladen
5. **Kopieren Sie alle Fehlermeldungen** (rot markiert)

### Option 2: Netlify Functions Logs

1. Gehen Sie zu **Netlify Dashboard** → Ihr Projekt
2. Klicken Sie auf **"Functions"** (oben)
3. Klicken Sie auf **"View logs"** oder **"Logs"**
4. Suchen Sie nach:
   - ✅ `"File uploaded to Supabase Storage"` = Erfolg!
   - ❌ `"Supabase upload error"` = Fehler (Details ansehen)

### Option 3: Netlify Deploy Logs

1. Gehen Sie zu **"Deploys"** → Neuester Deploy
2. Klicken Sie auf **"Functions"** Tab
3. Prüfen Sie die Logs für Fehlermeldungen

---

## ✅ Erfolgs-Anzeichen:

### Auf der Upload-Seite:
- ✅ Grüne Erfolgsmeldung: "Datei erfolgreich zu Supabase Storage hochgeladen"
- ✅ Keine Fehlermeldung

### In Supabase Storage:
- ✅ Datei erscheint im Bucket `lurodesign-uploads`
- ✅ Datei ist in einem Ordner (z.B. `test_kunde/`)
- ✅ Dateiname enthält Datum und Zeitstempel

### In Netlify Logs:
- ✅ `"File uploaded to Supabase Storage"` erscheint
- ✅ Keine Fehlermeldungen

---

## ❌ Häufige Fehler und Lösungen:

### Fehler: "Supabase ist nicht konfiguriert"

**Problem:** Environment Variables fehlen oder sind falsch

**Lösung:**
1. Prüfen Sie Netlify → Environment Variables
2. Stellen Sie sicher, dass alle 3 Variablen gesetzt sind:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPABASE_BUCKET_NAME`
3. Netlify neu deployen

---

### Fehler: "Bucket not found"

**Problem:** Bucket existiert nicht in Supabase

**Lösung:**
1. Gehen Sie zu Supabase Dashboard → Storage
2. Erstellen Sie den Bucket `lurodesign-uploads`
3. Stellen Sie sicher, dass er **public** ist (empfohlen)

---

### Fehler: "Invalid API key"

**Problem:** Service Role Key ist falsch

**Lösung:**
1. Gehen Sie zu Supabase Dashboard → Project Settings → API
2. Kopieren Sie den **Service Role Key** erneut
3. Aktualisieren Sie die Environment Variable in Netlify
4. Netlify neu deployen

---

### Fehler: "Permission denied"

**Problem:** Bucket ist nicht public oder Policies blockieren

**Lösung:**
1. Gehen Sie zu Supabase Dashboard → Storage
2. Klicken Sie auf den Bucket `lurodesign-uploads`
3. Stellen Sie sicher, dass **"Public bucket"** aktiviert ist
4. Oder konfigurieren Sie Storage Policies

---

## 🎯 Schnelltest:

**Einfachster Test:**
1. Upload-Seite öffnen
2. Test-Datei hochladen
3. Prüfen ob Erfolgsmeldung kommt
4. In Supabase Storage prüfen ob Datei da ist

**Falls beides ✅ = Funktioniert!**

---

## 📊 Was Sie sehen sollten:

### Erfolgreicher Upload:
```
✅ Datei erfolgreich zu Supabase Storage hochgeladen
```

### In Supabase Storage:
```
lurodesign-uploads/
  └── test_kunde/
      └── 2025-01-21_testdatei_1234567890.pdf
```

---

**Testen Sie es jetzt und sagen Sie mir, ob es funktioniert!** 🚀

