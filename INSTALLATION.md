# 🚀 Installation & Start auf localhost

## Node.js installieren

### Option 1: Homebrew (Empfohlen für macOS)

```bash
# Homebrew installieren (falls noch nicht vorhanden)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js installieren
brew install node
```

### Option 2: Offizieller Installer

1. Gehen Sie zu: https://nodejs.org/
2. Laden Sie die LTS-Version herunter
3. Installieren Sie den Installer
4. Terminal neu starten

### Option 3: NVM (Node Version Manager)

```bash
# NVM installieren
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Terminal neu starten oder:
source ~/.zshrc

# Node.js installieren
nvm install --lts
nvm use --lts
```

---

## Projekt starten

Nach der Installation von Node.js:

```bash
# 1. In das Projektverzeichnis wechseln
cd "/Users/joelamanuel/Lurodesign booking"

# 2. Dependencies installieren
npm install

# 3. Development Server starten
npm run dev
```

Die Anwendung läuft dann auf: **http://localhost:3000**

---

## Schnellstart (wenn Node.js bereits installiert ist)

```bash
cd "/Users/joelamanuel/Lurodesign booking"
npm install
npm run dev
```

---

## Troubleshooting

### "command not found: npm"
- Node.js ist nicht installiert → Siehe oben
- Terminal neu starten nach Installation

### "EACCES: permission denied"
```bash
sudo chown -R $(whoami) ~/.npm
```

### Port 3000 bereits belegt
```bash
# Anderen Port verwenden
PORT=3001 npm run dev
```

---

## Alternative: Vorschau ohne Node.js

Falls Sie Node.js nicht installieren möchten, können Sie die `preview.html` direkt im Browser öffnen:

```bash
open preview.html
```

**Hinweis:** Die Vorschau hat keine Backend-Funktionalität (kein echter Upload).

