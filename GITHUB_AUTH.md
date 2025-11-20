# 🔐 GitHub Authentifizierung - Code hochladen

## Problem: Authentifizierung fehlt

GitHub benötigt Ihre Authentifizierung, um Code hochzuladen.

---

## 🚀 Lösung 1: GitHub CLI (Einfachste Methode)

### Schritt 1: GitHub CLI installieren

```bash
brew install gh
```

### Schritt 2: Login

```bash
gh auth login
```

Folgen Sie den Anweisungen:
- **GitHub.com** auswählen
- **HTTPS** auswählen
- **Login with a web browser** auswählen
- Browser öffnet sich → Login → Autorisiere

### Schritt 3: Code hochladen

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

---

## 🚀 Lösung 2: Personal Access Token (Alternative)

### Schritt 1: Token erstellen

1. Gehen Sie zu GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Klicken Sie auf **"Generate new token (classic)"**
3. Geben Sie einen Namen ein (z.B. "Lurodesign Upload")
4. Wählen Sie Scopes:
   - ✅ **repo** (vollständiger Zugriff auf Repositories)
5. Klicken Sie auf **"Generate token"**
6. **WICHTIG:** Kopieren Sie den Token sofort! Er wird nur einmal angezeigt.

### Schritt 2: Token verwenden

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git push -u origin main
```

Wenn nach Passwort gefragt wird:
- **Username:** Ihr GitHub Username
- **Password:** Der Token (nicht Ihr GitHub-Passwort!)

---

## 🚀 Lösung 3: SSH Key (Für dauerhafte Nutzung)

### Schritt 1: SSH Key erstellen

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Drücken Sie Enter für alle Fragen (Standard-Werte verwenden).

### Schritt 2: Key zu GitHub hinzufügen

```bash
cat ~/.ssh/id_ed25519.pub
```

Kopieren Sie den gesamten Output.

1. Gehen Sie zu GitHub → **Settings** → **SSH and GPG keys**
2. Klicken Sie auf **"New SSH key"**
3. Fügen Sie den kopierten Key ein
4. Klicken Sie auf **"Add SSH key"**

### Schritt 3: Remote auf SSH ändern

```bash
cd "/Users/joelamanuel/Lurodesign booking"
git remote set-url origin git@github.com:LuroTugu/lurodesign-upload.git
git push -u origin main
```

---

## 🚀 Lösung 4: GitHub Desktop (Sehr einfach)

1. Installieren Sie **GitHub Desktop**: desktop.github.com
2. Öffnen Sie GitHub Desktop
3. **File** → **Add Local Repository**
4. Wählen Sie: `/Users/joelamanuel/Lurodesign booking`
5. Klicken Sie auf **"Publish repository"**
6. Wählen Sie: **LuroTugu/lurodesign-upload**
7. Klicken Sie auf **"Publish repository"**

---

## ✅ Schnellste Methode: GitHub CLI

Ich kann die GitHub CLI für Sie installieren und den Login durchführen. Sagen Sie mir einfach Bescheid!

**Oder:** Verwenden Sie GitHub Desktop - das ist am einfachsten!

---

## 📝 Nach erfolgreichem Upload

Nach dem Upload können Sie:
1. ✅ Code auf GitHub sehen
2. ✅ Auf Vercel/Netlify deployen
3. ✅ Mit anderen zusammenarbeiten

**Welche Methode bevorzugen Sie?**

