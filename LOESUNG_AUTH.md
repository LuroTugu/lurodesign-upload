# 🔐 Problem: Falsche Authentifizierung

## Problem erkannt:

Git versucht sich als **"EZTransfer11"** anzumelden, aber das Repository gehört **"LuroTugu"**.

---

## ✅ Lösung: Personal Access Token verwenden

### Schritt 1: Token erstellen (2 Minuten)

1. Gehen Sie zu: **https://github.com/settings/tokens**
2. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** "Lurodesign Upload"
4. **Expiration:** 90 days (oder No expiration)
5. ✅ Aktivieren Sie: **repo** (ganz oben - "Full control of private repositories")
6. Scrollen Sie nach unten
7. Klicken Sie auf **"Generate token"**
8. **WICHTIG:** Kopieren Sie den Token sofort! (beginnt mit `ghp_...`)

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
[Fügen Sie hier den Token ein]
```

**WICHTIG:** 
- ✅ Verwenden Sie den **Token** als Passwort
- ❌ NICHT Ihr GitHub-Passwort!

---

## 🚀 Alternative: GitHub Desktop (Noch einfacher)

1. **Installieren:** https://desktop.github.com/
2. **Öffnen:** GitHub Desktop
3. **File** → **Add Local Repository**
4. Wählen Sie: `/Users/joelamanuel/Lurodesign booking`
5. **Publish repository** klicken
6. ✅ Fertig!

---

## 🔧 Credentials zurücksetzen (Falls nötig)

Falls Sie die gespeicherten Credentials löschen möchten:

```bash
# Keychain löschen
git credential-osxkeychain erase
host=github.com
protocol=https
[Drücken Sie Enter zweimal]

# Oder alle Git Credentials löschen
git config --global --unset credential.helper
```

---

## ✅ Nach erfolgreichem Upload

Ihr Code ist dann auf GitHub:
**https://github.com/LuroTugu/lurodesign-upload**

Dann können Sie:
- ✅ Auf Vercel/Netlify deployen
- ✅ Mit anderen zusammenarbeiten
- ✅ Versionen verwalten

---

**Das sollte jetzt funktionieren!** 🚀



