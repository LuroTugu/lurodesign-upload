# ⚡ Schnellstart: Code auf GitHub hochladen

## 🎯 Die 3 einfachsten Methoden:

---

## 1️⃣ GitHub Desktop (EMPFOHLEN - Am einfachsten)

### Was Sie tun müssen:

1. **GitHub Desktop installieren:**
   - Gehen Sie zu: https://desktop.github.com/
   - Laden Sie die App herunter und installieren Sie sie

2. **Repository öffnen:**
   - Öffnen Sie GitHub Desktop
   - **File** → **Add Local Repository**
   - Wählen Sie: `/Users/joelamanuel/Lurodesign booking`
   - Klicken Sie auf **Add**

3. **Code hochladen:**
   - Klicken Sie auf **"Publish repository"** (oben rechts)
   - Repository: `LuroTugu/lurodesign-upload`
   - Klicken Sie auf **"Publish repository"**
   - ✅ Fertig!

**Das war's!** Keine Terminal-Befehle nötig.

---

## 2️⃣ Personal Access Token (Terminal)

### Schritt 1: Token erstellen (2 Minuten)

1. Gehen Sie zu: **https://github.com/settings/tokens**
2. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** "Lurodesign Upload"
4. **Expiration:** 90 days
5. ✅ Aktivieren Sie: **repo**
6. Klicken Sie auf **"Generate token"**
7. **Kopieren Sie den Token** (beginnt mit `ghp_...`)

### Schritt 2: Code hochladen

Führen Sie im Terminal aus:

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

**Wenn nach Username gefragt wird:** `LuroTugu`  
**Wenn nach Password gefragt wird:** **Den Token einfügen** (nicht Ihr Passwort!)

✅ Fertig!

---

## 3️⃣ SSH Key (Für dauerhafte Nutzung)

Falls Sie öfter Code hochladen möchten, ist SSH Key am besten.

**Anleitung:** Siehe `GITHUB_HOCHLADEN.md`

---

## 🎯 Meine Empfehlung für Sie:

**GitHub Desktop** (Methode 1)
- ✅ Sehr einfach
- ✅ Keine Terminal-Befehle
- ✅ Funktioniert sofort

**Oder** **Personal Access Token** (Methode 2)
- ✅ Schnell
- ✅ Funktioniert im Terminal

---

## ✅ Nach dem Upload

Ihr Code ist dann auf GitHub verfügbar unter:
**https://github.com/LuroTugu/lurodesign-upload**

Dann können Sie:
- ✅ Auf Vercel/Netlify deployen
- ✅ Mit anderen zusammenarbeiten
- ✅ Versionen verwalten

---

**Welche Methode möchten Sie verwenden?**



