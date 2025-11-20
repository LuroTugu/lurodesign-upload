# Framer + Calendly Integration - Beste Lösungen

## 🎯 Problem
- Framer-Website mit Calendly-Terminbuchung
- Kunden sollen nach der Buchung Dateien hochladen können
- Calendly bietet keine Upload-Funktion

## ✅ Lösung 1: Calendly Redirect (EMPFOHLEN - Beste UX)

### Wie es funktioniert:
Nach der Calendly-Buchung werden Kunden automatisch auf die Upload-Seite weitergeleitet.

### Vorteile:
- ✅ Nahtloser Workflow für Kunden
- ✅ Automatisch nach Buchung
- ✅ Keine zusätzlichen Klicks nötig
- ✅ Professionell und integriert

### Setup-Schritte:

1. **Upload-Seite deployen** (z.B. auf Vercel):
   ```bash
   npm install
   npm run build
   vercel deploy
   ```
   → Sie erhalten eine URL wie: `https://upload-lurodesign.vercel.app`

2. **Calendly konfigurieren**:
   - Gehen Sie zu Calendly → **Event Types** → Ihr Event
   - Klicken Sie auf **"Confirmation Page"**
   - Aktivieren Sie **"Redirect to external URL"**
   - URL eingeben: 
     ```
     https://upload-lurodesign.vercel.app?event_id={event_id}&invitee_email={invitee_email}
     ```
   - Oder einfacher (ohne Parameter):
     ```
     https://upload-lurodesign.vercel.app
     ```

3. **Fertig!** 
   - Kunden buchen → werden automatisch zur Upload-Seite weitergeleitet
   - Dateien hochladen → Sie erhalten die Dateien

### Design-Anpassung:
Die Upload-Seite kann an das Framer-Design angepasst werden (Farben, Logo, etc.)

---

## ✅ Lösung 2: Embed in Framer (Wenn Redirect nicht möglich)

### Wie es funktioniert:
Die Upload-Seite wird als iframe direkt in die Framer-Website eingebettet.

### Vorteile:
- ✅ Alles auf einer Seite
- ✅ Keine Weiterleitung
- ✅ Kann auf einer separaten Framer-Seite sein

### Setup-Schritte:

1. **Upload-Seite deployen** (wie oben)

2. **In Framer einbetten**:
   - Erstellen Sie eine neue Seite in Framer (z.B. "Datei hochladen")
   - Fügen Sie ein **"Embed"** Element hinzu
   - URL eingeben: `https://upload-lurodesign.vercel.app`
   - Größe anpassen (z.B. 100% Breite, 800px Höhe)

3. **Link von Calendly**:
   - In Calendly Confirmation Page: Link zur Framer-Seite setzen
   - Oder: Link manuell in der Bestätigungs-E-Mail

### Nachteile:
- ⚠️ iframe kann auf mobilen Geräten manchmal Probleme machen
- ⚠️ Zwei separate Seiten (Calendly → Framer → Upload)

---

## ✅ Lösung 3: Subdomain (Professionellste Lösung)

### Wie es funktioniert:
Upload-Seite auf einer Subdomain (z.B. `upload.kunden-domain.de`)

### Vorteile:
- ✅ Eigene Domain
- ✅ Professioneller Eindruck
- ✅ Kann an Haupt-Website angepasst werden

### Setup-Schritte:

1. **Subdomain einrichten** (bei Ihrem Domain-Provider)
   - `upload.kunden-domain.de` → zeigt auf Vercel

2. **Vercel konfigurieren**:
   - Domain in Vercel-Projekt hinzufügen
   - DNS-Einträge konfigurieren

3. **Calendly Redirect**:
   ```
   https://upload.kunden-domain.de?event_id={event_id}&invitee_email={invitee_email}
   ```

---

## ✅ Lösung 4: Framer Custom Code (Fortgeschritten)

### Wie es funktioniert:
Upload-Funktionalität direkt in Framer mit Custom Code einbauen.

### Vorteile:
- ✅ Alles auf einer Seite
- ✅ Keine externe Seite nötig

### Nachteile:
- ⚠️ Erfordert Backend-API (z.B. Vercel Serverless Functions)
- ⚠️ Komplexer zu implementieren
- ⚠️ Framer Custom Code hat Limitierungen

### Setup:
- Upload-API auf Vercel deployen
- Custom Code in Framer einfügen
- Design in Framer nachbauen

---

## 🏆 MEINE EMPFEHLUNG: Lösung 1 (Calendly Redirect)

**Warum?**
1. ✅ Einfachste Implementierung
2. ✅ Beste User Experience (nahtloser Flow)
3. ✅ Funktioniert zuverlässig
4. ✅ Professionell
5. ✅ Keine Framer-Limitierungen

**Workflow:**
```
Kunde → Framer-Website → Calendly buchen → Automatisch Upload-Seite → Datei hochladen → Fertig!
```

---

## 🚀 Quick Start (Lösung 1)

1. **Upload-Seite deployen:**
   ```bash
   cd "/Users/joelamanuel/Lurodesign booking"
   npm install
   vercel deploy
   ```

2. **Calendly konfigurieren:**
   - Event Type → Confirmation Page
   - Redirect URL: `https://ihre-vercel-url.vercel.app`

3. **Testen:**
   - Testbuchung durchführen
   - Prüfen ob Redirect funktioniert
   - Datei hochladen testen

4. **Design anpassen** (optional):
   - Farben in `app/upload.css` ändern
   - Logo hinzufügen
   - Texte anpassen

---

## 📧 Alternative: E-Mail mit Link

Falls Redirect nicht möglich ist:
- Calendly sendet automatisch Bestätigungs-E-Mail
- In der E-Mail: Link zur Upload-Seite
- Kunden klicken auf Link → Datei hochladen

---

## 💡 Zusätzliche Features (Optional)

### 1. E-Mail-Benachrichtigung
Wenn Datei hochgeladen wird → E-Mail an Sie senden

### 2. Datei-Verwaltung
Dashboard zum Ansehen aller hochgeladenen Dateien

### 3. Cloud-Speicher
Dateien direkt in Google Drive / Dropbox speichern

### 4. Design-Anpassung
Upload-Seite im Framer-Design gestalten

---

## ❓ Fragen?

Wenn Sie Hilfe bei der Implementierung brauchen, kann ich:
- Die Upload-Seite deployen
- Design an Framer-Website anpassen
- Zusätzliche Features hinzufügen

Sagen Sie mir einfach, welche Lösung Sie bevorzugen!

