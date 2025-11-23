# 🔧 Environment Variables in Netlify setzen

## 📍 Schritt-für-Schritt Anleitung

### Schritt 1: Netlify Dashboard öffnen

1. Gehen Sie zu **netlify.com**
2. Loggen Sie sich ein
3. Klicken Sie auf Ihr Projekt (z.B. "lurodesign-upload" oder ähnlich)

### Schritt 2: Zu Environment Variables navigieren

1. Klicken Sie oben auf **"Site settings"** (oder "Site configuration")
2. Scrollen Sie im linken Menü nach unten
3. Klicken Sie auf **"Environment variables"** (unter "Build & deploy")

### Schritt 3: Environment Variables hinzufügen

1. Klicken Sie auf **"Add a variable"** (oder "Add environment variable")
2. Fügen Sie **eine Variable nach der anderen** hinzu:

#### Variable 1:
- **Key:** `SUPABASE_URL`
- **Value:** `https://efpicaokuepmmquytxqh.supabase.co`
- Klicken Sie auf **"Save"**

#### Variable 2:
- **Key:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** `sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ`
- Klicken Sie auf **"Save"**

#### Variable 3:
- **Key:** `SUPABASE_BUCKET_NAME`
- **Value:** `lurodesign-uploads`
- Klicken Sie auf **"Save"**

### Schritt 4: Netlify neu deployen

**WICHTIG:** Nach dem Setzen der Environment Variables müssen Sie neu deployen!

**Option A: Automatisch (empfohlen)**
- Netlify deployt automatisch, wenn Sie Code zu GitHub pushen
- Pushen Sie einfach Ihren Code:
  ```bash
  git add .
  git commit -m "Supabase Integration"
  git push
  ```

**Option B: Manuell**
1. Gehen Sie zu **"Deploys"** im Netlify Dashboard
2. Klicken Sie auf **"Trigger deploy"** → **"Deploy site"**

---

## ✅ Prüfen ob es funktioniert

### Nach dem Deploy:

1. Gehen Sie zu **"Deploys"** im Netlify Dashboard
2. Klicken Sie auf den neuesten Deploy
3. Prüfen Sie die **"Functions"** Logs
4. Suchen Sie nach Fehlern oder Erfolgsmeldungen

### Testen:

1. Gehen Sie zu Ihrer Upload-Seite
2. Laden Sie eine Test-Datei hoch
3. Prüfen Sie ob die Datei in Supabase Storage erscheint

---

## 📋 Zusammenfassung der Environment Variables

```
SUPABASE_URL = https://efpicaokuepmmquytxqh.supabase.co
SUPABASE_SERVICE_ROLE_KEY = sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ
SUPABASE_BUCKET_NAME = lurodesign-uploads
```

---

## 🎯 Wo genau im Netlify Dashboard?

```
Netlify Dashboard
  └── Ihr Projekt
      └── Site settings (oben rechts)
          └── Environment variables (linkes Menü, unter "Build & deploy")
              └── Add a variable (Button)
```

---

## ⚠️ Wichtig:

- ✅ **Keine Leerzeichen** um das `=` Zeichen
- ✅ **Exakte Schreibweise** der Variablennamen (groß/klein beachten)
- ✅ **Nach dem Setzen:** Netlify neu deployen!
- ✅ **Service Role Key:** Sicher aufbewahren, nicht teilen!

---

## 🔒 Sicherheit:

- ✅ Environment Variables sind **nicht öffentlich sichtbar**
- ✅ Nur in Netlify Dashboard sichtbar (für Sie)
- ✅ Werden beim Build verwendet, aber nicht im Code committet

---

**Fragen? Sagen Sie mir Bescheid!** 😊

