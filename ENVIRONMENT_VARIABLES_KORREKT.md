# ✅ Environment Variables richtig setzen

## ⚠️ Wichtig: Key vs. Value

**Key** = Variablenname (z.B. `SUPABASE_URL`)  
**Value** = Der tatsächliche Wert (z.B. `https://efpicaokuepmmquytxqh.supabase.co`)

---

## 📝 Schritt-für-Schritt:

### Variable 1: SUPABASE_URL

1. **Key-Feld:** Geben Sie ein: `SUPABASE_URL`
   - Nur Buchstaben, Zahlen und Unterstriche!
   - Keine Punkte, keine Leerzeichen!

2. **Value-Feld:** Geben Sie ein: `https://efpicaokuepmmquytxqh.supabase.co`
   - Das ist die komplette URL!

3. **Secret:** ✅ Ankreuzen (empfohlen, da es eine URL ist)

4. Klicken Sie auf **"Save"**

---

### Variable 2: SUPABASE_SERVICE_ROLE_KEY

1. **Key-Feld:** Geben Sie ein: `SUPABASE_SERVICE_ROLE_KEY`
   - Nur Buchstaben, Zahlen und Unterstriche!

2. **Value-Feld:** Geben Sie ein: `sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ`
   - Das ist der komplette Service Role Key!

3. **Secret:** ✅ **UNBEDINGT ankreuzen!** (sehr wichtig, da es ein geheimer Key ist)

4. Klicken Sie auf **"Save"**

---

### Variable 3: SUPABASE_BUCKET_NAME

1. **Key-Feld:** Geben Sie ein: `SUPABASE_BUCKET_NAME`
   - Nur Buchstaben, Zahlen und Unterstriche!

2. **Value-Feld:** Geben Sie ein: `lurodesign-uploads`
   - Das ist der Bucket-Name!

3. **Secret:** ❌ Nicht ankreuzen (ist kein Geheimnis)

4. Klicken Sie auf **"Save"**

---

## ✅ Zusammenfassung:

| Key (Variablenname) | Value (Wert) |
|---------------------|--------------|
| `SUPABASE_URL` | `https://efpicaokuepmmquytxqh.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | `sb_secret_4BSr0V3kWXf1Lts_R-sTJw_axjxODCQ` |
| `SUPABASE_BUCKET_NAME` | `lurodesign-uploads` |

---

## 🎯 Wichtig:

- ✅ **Key** = Nur Buchstaben, Zahlen, Unterstriche (z.B. `SUPABASE_URL`)
- ✅ **Value** = Der tatsächliche Wert (z.B. die URL oder der Key)
- ✅ **Secret** = Bei Service Role Key UNBEDINGT ankreuzen!

---

**Jetzt sollte es funktionieren!** 🚀

