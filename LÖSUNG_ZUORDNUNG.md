# ✅ Lösung: Datei-Upload mit Kundendaten-Zuordnung

## Problem gelöst! 🎉

**Vorher:** Bei Calendly-Redirect wusste man nicht, welche Datei zu welchem Kunden gehört.

**Jetzt:** Jeder Upload wird mit vollständigen Kundendaten gespeichert und kann eindeutig zugeordnet werden!

---

## 🔧 Was wurde implementiert:

### 1. **Kundendaten-Formular**
- Name (Pflichtfeld)
- E-Mail-Adresse (Pflichtfeld)
- Telefonnummer (optional)
- **Automatische Vorausfüllung** wenn Calendly-Daten vorhanden sind

### 2. **Automatische Zuordnung**
- Calendly Event ID wird mitgespeichert (falls vorhanden)
- Alle Daten werden in JSON-Datenbank gespeichert
- Jeder Upload erhält eine eindeutige ID

### 3. **Admin-Dashboard**
- Übersicht aller Uploads unter `/admin`
- Zeigt: Datum, Kunde, E-Mail, Telefon, Datei, Größe, Calendly Event
- Download-Funktion für Dateien

---

## 📋 Workflow für Kunden:

1. **Kunde bucht Termin bei Calendly**
2. **Calendly leitet weiter** → Upload-Seite
3. **Kunde sieht Formular** (wird mit Calendly-Daten vorausgefüllt, falls vorhanden)
4. **Kunde füllt aus:**
   - Name ✓
   - E-Mail ✓
   - Telefon (optional)
5. **Kunde wählt Datei** aus
6. **Kunde klickt "Datei hochladen"**
7. **Fertig!** → Datei + Kundendaten werden gespeichert

---

## 🔍 So sehen Sie die Uploads:

### Option 1: Admin-Dashboard (Empfohlen)
```
https://ihre-domain.de/admin
```

Zeigt alle Uploads in einer Tabelle mit:
- Datum & Uhrzeit
- Kundename
- E-Mail
- Telefon
- Dateiname
- Dateigröße
- Calendly Event ID
- Download-Button

### Option 2: JSON-Datei
```
uploads/uploads-database.json
```

Enthält alle Uploads im JSON-Format:
```json
[
  {
    "id": "upload_1234567890",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "customer": {
      "name": "Max Mustermann",
      "email": "max@beispiel.de",
      "phone": "+49 123 456789"
    },
    "file": {
      "originalName": "design.pdf",
      "savedAs": "design_1234567890.pdf",
      "size": 1024000,
      "type": "application/pdf"
    },
    "calendly": {
      "eventId": "ABC123XYZ"
    }
  }
]
```

---

## 🎯 Calendly-Konfiguration:

### Schritt 1: Redirect-URL in Calendly einrichten

1. Gehen Sie zu **Calendly** → **Event Types** → Ihr Event
2. Klicken Sie auf **"Confirmation Page"**
3. Aktivieren Sie **"Redirect to external URL"**
4. URL eingeben:
   ```
   https://ihre-domain.de?event_id={event_id}&invitee_email={invitee_email}&invitee_name={invitee_name}
   ```

**Wichtig:** Calendly unterstützt diese Platzhalter:
- `{event_id}` - Event ID
- `{invitee_email}` - E-Mail des Kunden
- `{invitee_name}` - Name des Kunden

### Schritt 2: Testen

1. Testbuchung durchführen
2. Prüfen ob Redirect funktioniert
3. Prüfen ob Formular vorausgefüllt wird
4. Datei hochladen
5. In Admin-Dashboard prüfen: `/admin`

---

## 💡 Vorteile dieser Lösung:

✅ **Eindeutige Zuordnung** - Jede Datei ist einem Kunden zugeordnet  
✅ **Vollständige Daten** - Name, E-Mail, Telefon werden gespeichert  
✅ **Calendly-Integration** - Event ID wird mitgespeichert  
✅ **Einfache Verwaltung** - Admin-Dashboard zeigt alle Uploads  
✅ **Keine doppelte Eingabe** - Formular wird mit Calendly-Daten vorausgefüllt  
✅ **Sicherheit** - Validierung der E-Mail-Adresse  
✅ **Nachvollziehbarkeit** - Zeitstempel für jeden Upload  

---

## 🔒 Sicherheit (Optional):

Für Produktion können Sie hinzufügen:
- Passwort-Schutz für Admin-Dashboard
- E-Mail-Benachrichtigung bei neuem Upload
- Dateigrößen-Limits
- Dateityp-Beschränkungen

---

## 📧 E-Mail-Benachrichtigung (Optional):

Wenn Sie bei jedem Upload eine E-Mail erhalten möchten, kann ich das hinzufügen. Dann erhalten Sie automatisch:
- Kundendaten
- Dateiname
- Link zum Download

Sagen Sie mir Bescheid, wenn Sie das möchten!

