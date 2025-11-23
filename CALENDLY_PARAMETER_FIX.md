# 🔧 Calendly Parameter-Fix - Name wird jetzt erkannt

## ✅ Problem behoben!

Calendly sendet `invitee_full_name` statt `invitee_name`. Die Seite wurde angepasst, um beide zu unterstützen.

---

## 📋 Was wurde geändert:

Die Seite liest jetzt **alle möglichen Calendly-Parameter**:

1. **Name:**
   - `invitee_name` (Standard)
   - `invitee_full_name` ✅ (wird jetzt auch gelesen!)
   - `invitee_first_name` + `invitee_last_name` (kombiniert)

2. **E-Mail:**
   - `invitee_email` ✅

3. **Event ID:**
   - `event_id`
   - `event_type_uuid` ✅ (wird jetzt auch gelesen!)

4. **Invitee ID:**
   - `invitee_uri`
   - `invitee_uuid` ✅ (wird jetzt auch gelesen!)

---

## 🧪 Testen Sie es jetzt:

Öffnen Sie diese URL im Browser (mit Ihren echten Daten):

```
https://lurodesign.netlify.app?invitee_full_name=jdnvdnj&invitee_email=jdnvdnj@gmx.de
```

**Erwartung:**
- ✅ Name: "jdnvdnj" sollte ausgefüllt sein
- ✅ E-Mail: "jdnvdnj@gmx.de" sollte ausgefüllt sein
- ✅ Grünes Banner sollte erscheinen

---

## 📝 Calendly URL-Format:

Calendly sendet verschiedene Parameter-Formate. Die Seite unterstützt jetzt:

**Format 1 (Standard):**
```
?invitee_email=...&invitee_name=...
```

**Format 2 (Ihr Format):**
```
?invitee_email=...&invitee_full_name=...&event_type_uuid=...&invitee_uuid=...
```

**Format 3 (Mit Vor- und Nachname):**
```
?invitee_email=...&invitee_first_name=...&invitee_last_name=...
```

**Alle werden jetzt unterstützt!** ✅

---

## ✅ Nach dem Update:

1. **Code auf GitHub pushen** (falls noch nicht geschehen)
2. **Netlify neu deployen** (automatisch, wenn GitHub verbunden ist)
3. **Testen** mit Ihrer Calendly-URL

---

## 🚀 Deployment:

Falls Sie auf Netlify deployed haben:

1. **Automatisch:** Wenn GitHub verbunden ist, wird automatisch neu deployed
2. **Manuell:** In Netlify Dashboard → "Trigger deploy" → "Deploy site"

---

## ✅ Zusammenfassung:

- ✅ `invitee_full_name` wird jetzt erkannt
- ✅ `event_type_uuid` wird jetzt erkannt
- ✅ `invitee_uuid` wird jetzt erkannt
- ✅ Alle Calendly-Formate werden unterstützt

**Der Name sollte jetzt automatisch ausgefüllt werden!** 🎉


