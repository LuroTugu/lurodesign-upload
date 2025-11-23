# ✅ Environment Variables in Netlify - Einfache Anleitung

## 🎯 Für alle 3 Variablen gleich:

### Schritt 1: "Same value for all deploy contexts" wählen

1. Wählen Sie **"Same value for all deploy contexts"** (nicht "Different value...")
   - Das ist einfacher und für Ihre Anwendung ausreichend
   - Die gleichen Werte werden überall verwendet

### Schritt 2: Wert eingeben

1. Geben Sie den Wert in das **einzige Textfeld** ein
2. Klicken Sie auf **"Create variable"**

---

## 📝 Die 3 Variablen:

### Variable 1: SUPABASE_URL

1. **Key:** `SUPABASE_URL`
2. **"Same value for all deploy contexts"** wählen ✅
3. **Value:** `https://efpicaokuepmmquytxqh.supabase.co`
4. **Secret:** ✅ Ankreuzen (empfohlen)
5. **"Create variable"** klicken

---

### Variable 2: SUPABASE_SERVICE_ROLE_KEY

1. **Key:** `SUPABASE_SERVICE_ROLE_KEY`
2. **"Same value for all deploy contexts"** wählen ✅
3. **Value:** `sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ`
4. **Secret:** ✅ **UNBEDINGT ankreuzen!** (sehr wichtig!)
5. **"Create variable"** klicken

---

### Variable 3: SUPABASE_BUCKET_NAME

1. **Key:** `SUPABASE_BUCKET_NAME`
2. **"Same value for all deploy contexts"** wählen ✅
3. **Value:** `lurodesign-uploads`
4. **Secret:** ❌ Nicht ankreuzen (ist kein Geheimnis)
5. **"Create variable"** klicken

---

## ✅ Zusammenfassung:

| Key | Value | Secret? |
|-----|-------|---------|
| `SUPABASE_URL` | `https://efpicaokuepmmquytxqh.supabase.co` | ✅ Ja |
| `SUPABASE_SERVICE_ROLE_KEY` | `sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ` | ✅ Ja |
| `SUPABASE_BUCKET_NAME` | `lurodesign-uploads` | ❌ Nein |

---

## 🎯 Wichtig:

- ✅ **"Same value for all deploy contexts"** wählen (nicht "Different value...")
- ✅ Dann nur **ein** Textfeld ausfüllen
- ✅ Bei Service Role Key **unbedingt** "Secret" ankreuzen!

---

**So einfach ist es!** 🚀

