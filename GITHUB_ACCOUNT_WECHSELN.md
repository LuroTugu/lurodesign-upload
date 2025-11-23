# 🔄 GitHub Account wechseln - Richtiger Account verwenden

## ✅ Problem behoben!

Ich habe alle gespeicherten Credentials gelöscht. Jetzt können Sie sich mit dem richtigen Account anmelden.

---

## 🚀 Code jetzt hochladen

### Schritt 1: Token für LuroTugu erstellen

1. Gehen Sie zu: **https://github.com/settings/tokens**
2. **WICHTIG:** Stellen Sie sicher, dass Sie als **LuroTugu** eingeloggt sind!
3. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
4. **Note:** "Lurodesign Upload"
5. **Expiration:** 90 days
6. ✅ Aktivieren Sie: **repo** (ganz oben)
7. Klicken Sie auf **"Generate token"**
8. **Kopieren Sie den Token** (beginnt mit `ghp_...`)

### Schritt 2: Code hochladen

Führen Sie im Terminal aus:

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

**Wenn nach Username gefragt wird:**
```
LuroTugu
```

**Wenn nach Password gefragt wird:**
```
[Fügen Sie hier den Token ein, den Sie gerade erstellt haben]
```

**WICHTIG:** 
- ✅ Username: **LuroTugu** (nicht EZTransfer11!)
- ✅ Password: **Token** (nicht Ihr Passwort!)

---

## ✅ Prüfen Sie vorher:

### Sind Sie als LuroTugu eingeloggt?

1. Gehen Sie zu: **https://github.com**
2. Prüfen Sie oben rechts: Steht dort **"LuroTugu"**?
3. Falls nicht: Loggen Sie sich aus und als **LuroTugu** wieder ein

### Repository-Zugriff prüfen:

1. Gehen Sie zu: **https://github.com/LuroTugu/lurodesign-upload**
2. Können Sie das Repository sehen?
3. Haben Sie Schreibrechte?

---

## 🚀 Alternative: GitHub Desktop

Falls Terminal zu kompliziert ist:

1. **GitHub Desktop installieren:** https://desktop.github.com/
2. **WICHTIG:** Loggen Sie sich als **LuroTugu** ein!
3. **File** → **Add Local Repository**
4. Wählen Sie: `/Users/joelamanuel/Lurodesign booking`
5. **Publish repository** klicken
6. ✅ Fertig!

---

## 🔧 Was ich gemacht habe:

- ✅ Alte Credentials gelöscht (EZTransfer11)
- ✅ Git Config zurückgesetzt
- ✅ Keychain-Einträge gelöscht
- ✅ Credential Helper deaktiviert

Jetzt können Sie sich mit dem **richtigen Account (LuroTugu)** anmelden!

---

## ✅ Nach erfolgreichem Upload

Ihr Code ist dann auf GitHub:
**https://github.com/LuroTugu/lurodesign-upload**

---

**Jetzt sollte es mit dem richtigen Account funktionieren!** 🚀



