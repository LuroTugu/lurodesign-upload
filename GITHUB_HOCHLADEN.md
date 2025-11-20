# 📤 Projekt auf GitHub hochladen - Schritt für Schritt

## ✅ Was bereits erledigt ist:

- ✅ Git ist initialisiert
- ✅ Alle Dateien sind committed
- ✅ Remote Repository ist hinzugefügt: `https://github.com/LuroTugu/lurodesign-upload.git`

---

## 🚀 Methode 1: GitHub Desktop (EINFACHSTE - Empfohlen)

### Schritt 1: GitHub Desktop installieren

1. Gehen Sie zu: **https://desktop.github.com/**
2. Laden Sie GitHub Desktop herunter
3. Installieren Sie die App

### Schritt 2: Repository öffnen

1. Öffnen Sie **GitHub Desktop**
2. Klicken Sie auf **"File"** → **"Add Local Repository"**
3. Wählen Sie: `/Users/joelamanuel/Lurodesign booking`
4. Klicken Sie auf **"Add repository"**

### Schritt 3: Code hochladen

1. Sie sehen alle Änderungen
2. Klicken Sie auf **"Publish repository"** (oben rechts)
3. Wählen Sie: **LuroTugu/lurodesign-upload**
4. Klicken Sie auf **"Publish repository"**
5. ✅ Fertig!

---

## 🚀 Methode 2: Personal Access Token (Terminal)

### Schritt 1: Token erstellen

1. Gehen Sie zu: **https://github.com/settings/tokens**
2. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
3. Geben Sie einen Namen ein: **"Lurodesign Upload"**
4. Wählen Sie Ablaufzeit: **90 days** (oder No expiration)
5. Aktivieren Sie diese Scopes:
   - ✅ **repo** (vollständiger Zugriff auf Repositories)
6. Scrollen Sie nach unten und klicken Sie auf **"Generate token"**
7. **WICHTIG:** Kopieren Sie den Token sofort! Er sieht aus wie: `ghp_xxxxxxxxxxxxxxxxxxxx`

### Schritt 2: Code hochladen

Öffnen Sie das Terminal und führen Sie aus:

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

Wenn nach **Username** gefragt wird:
- Geben Sie ein: `LuroTugu`

Wenn nach **Password** gefragt wird:
- Geben Sie NICHT Ihr GitHub-Passwort ein!
- Geben Sie stattdessen den **Token** ein, den Sie gerade erstellt haben

### Schritt 3: Fertig!

Der Code wird jetzt hochgeladen. Sie sehen eine Meldung wie:
```
Enumerating objects: 31, done.
Writing objects: 100% (31/31), done.
```

---

## 🚀 Methode 3: SSH Key (Für dauerhafte Nutzung)

### Schritt 1: SSH Key erstellen

```bash
ssh-keygen -t ed25519 -C "ihre-email@beispiel.de"
```

Drücken Sie **Enter** für alle Fragen (Standard-Werte verwenden).

### Schritt 2: Key anzeigen

```bash
cat ~/.ssh/id_ed25519.pub
```

Kopieren Sie den gesamten Output (beginnt mit `ssh-ed25519`).

### Schritt 3: Key zu GitHub hinzufügen

1. Gehen Sie zu: **https://github.com/settings/keys**
2. Klicken Sie auf **"New SSH key"**
3. **Title:** "MacBook Air"
4. **Key:** Fügen Sie den kopierten Key ein
5. Klicken Sie auf **"Add SSH key"**

### Schritt 4: Remote auf SSH ändern

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git remote set-url origin git@github.com:LuroTugu/lurodesign-upload.git
git push -u origin main
```

---

## ✅ Nach dem Upload

Nach erfolgreichem Upload können Sie:

1. ✅ Code auf GitHub sehen: **https://github.com/LuroTugu/lurodesign-upload**
2. ✅ Auf Vercel/Netlify deployen
3. ✅ Mit anderen zusammenarbeiten
4. ✅ Versionen verwalten

---

## 🆘 Troubleshooting

### Fehler: "Permission denied"
- **Lösung:** Sie müssen sich authentifizieren (Token oder SSH Key)

### Fehler: "Repository not found"
- **Lösung:** Prüfen Sie ob das Repository existiert und Sie Zugriff haben

### Fehler: "Authentication failed"
- **Lösung:** Verwenden Sie einen Token statt Passwort

---

## 🎯 Meine Empfehlung

**Für Sie:** **GitHub Desktop** (Methode 1)
- ✅ Sehr einfach
- ✅ Keine Terminal-Befehle
- ✅ Grafische Oberfläche
- ✅ Automatische Authentifizierung

**Falls Sie Terminal bevorzugen:** **Personal Access Token** (Methode 2)
- ✅ Schnell
- ✅ Funktioniert sofort

---

## 📝 Zusammenfassung

**Einfachste Methode:**
1. GitHub Desktop installieren
2. Repository öffnen
3. "Publish repository" klicken
4. ✅ Fertig!

**Terminal-Methode:**
1. Token erstellen auf GitHub
2. `git push -u origin main` ausführen
3. Token als Passwort eingeben
4. ✅ Fertig!

**Welche Methode möchten Sie verwenden?**

