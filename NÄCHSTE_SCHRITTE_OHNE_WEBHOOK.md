# ✅ Nächste Schritte - Ohne Webhook (Einfach!)

## 🎯 Was Sie jetzt tun müssen:

---

## ✅ Schritt 1: Calendly Redirect-URL konfigurieren (WICHTIG!)

### 1.1 Calendly öffnen
1. Gehen Sie zu **calendly.com** und loggen Sie sich ein
2. Klicken Sie auf **"Event Types"** → Ihr Event

### 1.2 Confirmation Page öffnen
1. Scrollen Sie nach unten zu **"Confirmation Page"**
2. Klicken Sie darauf

### 1.3 Redirect aktivieren
1. Aktivieren Sie **"Redirect to external URL"**
2. Geben Sie diese URL ein (ersetzen Sie `lurodesign.netlify.app` falls Ihre Domain anders ist):

```
https://lurodesign.netlify.app?invitee_email={invitee_email}&invitee_full_name={invitee_full_name}&event_type_uuid={event_type_uuid}&invitee_uuid={invitee_uuid}
```

**Oder einfacher (nur wichtigste Parameter):**
```
https://lurodesign.netlify.app?invitee_email={invitee_email}&invitee_full_name={invitee_full_name}
```

3. Klicken Sie auf **"Save"**

---

## ✅ Schritt 2: Code auf GitHub pushen (Falls noch nicht geschehen)

Der Fix für `invitee_full_name` wurde bereits committed. Pushen Sie den Code:

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

**Falls Authentifizierung nötig:**
- Username: `LuroTugu`
- Password: Personal Access Token (nicht Ihr Passwort!)

---

## ✅ Schritt 3: Netlify neu deployen

Falls GitHub mit Netlify verbunden ist:
- ✅ **Automatisch:** Netlify deployt automatisch bei jedem Push

Falls nicht automatisch:
1. Gehen Sie zu **Netlify Dashboard**
2. Klicken Sie auf **"Trigger deploy"** → **"Deploy site"**

---

## ✅ Schritt 4: Testen

### 4.1 Testbuchung durchführen
1. Öffnen Sie Ihre Calendly-Buchungsseite
2. Buchen Sie einen Test-Termin
3. Nach der Buchung sollten Sie automatisch zur Upload-Seite weitergeleitet werden

### 4.2 Prüfen
- ✅ Werden Sie zur Upload-Seite weitergeleitet?
- ✅ Ist **Name** automatisch ausgefüllt? (sollte jetzt funktionieren!)
- ✅ Ist **E-Mail** automatisch ausgefüllt?
- ✅ Sehen Sie das grüne Banner "Daten wurden automatisch übernommen"?

### 4.3 Upload testen
1. Laden Sie eine Testdatei hoch
2. Prüfen Sie ob alles funktioniert
3. Prüfen Sie das Admin-Dashboard: `https://lurodesign.netlify.app/admin`

---

## ✅ Schritt 5: Admin-Dashboard prüfen

1. Gehen Sie zu: **https://lurodesign.netlify.app/admin**
2. Prüfen Sie ob der Upload angezeigt wird
3. Prüfen Sie ob alle Kundendaten korrekt sind

---

## 📋 Quick-Checkliste:

- [ ] Calendly Redirect-URL konfiguriert
- [ ] Code auf GitHub gepusht (mit Fix für `invitee_full_name`)
- [ ] Netlify neu deployed
- [ ] Testbuchung durchgeführt
- [ ] Name wird automatisch ausgefüllt ✅
- [ ] E-Mail wird automatisch ausgefüllt ✅
- [ ] Upload getestet
- [ ] Admin-Dashboard geprüft

---

## ⚠️ Wichtige Hinweise:

### Dateien-Speicherung
Auf Netlify werden Dateien im `uploads/` Verzeichnis **nicht dauerhaft gespeichert**.

**Für jetzt (Tests):** Funktioniert, aber Dateien gehen bei Neustart verloren.

**Für später (Produktion):** Cloud-Speicher einrichten (AWS S3, Cloudinary, etc.)

### Datenbank
Die JSON-Datei wird auch nicht dauerhaft gespeichert.

**Für jetzt (Tests):** Funktioniert für Tests.

**Für später (Produktion):** Externe Datenbank (MongoDB Atlas, Supabase, etc.)

---

## 🎯 Zusammenfassung:

**Ohne Webhook brauchen Sie nur:**

1. ✅ **Calendly Redirect-URL** konfigurieren
2. ✅ **Code pushen** (mit Fix)
3. ✅ **Testen**

**Das war's!** Viel einfacher als mit Webhook. 🎉

---

## 🆘 Falls etwas nicht funktioniert:

### Name wird nicht ausgefüllt:
- Prüfen Sie ob `invitee_full_name={invitee_full_name}` in der Calendly-URL ist
- Prüfen Sie die Browser-Konsole (F12)
- Testen Sie manuell: `https://lurodesign.netlify.app?invitee_full_name=Test&invitee_email=test@beispiel.de`

### Redirect funktioniert nicht:
- Prüfen Sie ob die URL korrekt ist
- Prüfen Sie ob Platzhalter in geschweiften Klammern sind: `{invitee_full_name}`
- Prüfen Sie ob Netlify neu deployed wurde

---

**Alles klar?** Sagen Sie mir, wenn Sie Hilfe bei einem der Schritte brauchen! 🚀


