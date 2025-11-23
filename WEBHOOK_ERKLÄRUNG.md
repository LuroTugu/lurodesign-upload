# 🔗 Webhook - Was ist das und wofür brauchen wir es?

## 🤔 Was ist ein Webhook?

Ein **Webhook** ist wie ein **automatischer Bote**, der sofort Bescheid gibt, wenn etwas passiert.

**Einfach erklärt:**
- Calendly sendet automatisch eine Nachricht an unsere Seite
- Sobald jemand einen Termin bucht
- Mit **allen** Kundendaten

---

## 🎯 Wofür brauchen wir den Webhook?

### Ohne Webhook (nur URL-Parameter):
- ✅ Funktioniert, ABER:
- ⚠️ Calendly gibt nur **begrenzte Daten** in der URL mit
- ⚠️ Nicht alle Informationen sind verfügbar
- ⚠️ Telefonnummer fehlt oft
- ⚠️ Zusätzliche Fragen fehlen

### Mit Webhook:
- ✅ **Alle Daten** werden automatisch gespeichert
- ✅ **Vollständige Informationen:**
  - Name
  - E-Mail
  - Telefonnummer
  - Event-Name
  - Terminzeit
  - Zusätzliche Fragen (falls in Calendly konfiguriert)
- ✅ **Funktioniert auch wenn Redirect fehlschlägt**
- ✅ **Daten werden sofort nach Buchung gespeichert**

---

## 🔄 Wie funktioniert es?

### Ablauf mit Webhook:

```
1. Kunde bucht Termin bei Calendly
   ↓
2. Calendly sendet SOFORT Webhook → Unsere API
   ↓
3. Unsere API speichert ALLE Daten automatisch
   ↓
4. Kunde wird zur Upload-Seite weitergeleitet
   ↓
5. Upload-Seite ruft gespeicherte Daten ab
   ↓
6. Formular wird automatisch ausgefüllt ✅
```

### Ablauf ohne Webhook (nur URL):

```
1. Kunde bucht Termin bei Calendly
   ↓
2. Calendly leitet weiter → Upload-Seite
   ↓
3. Upload-Seite liest URL-Parameter
   ↓
4. Formular wird ausgefüllt (nur mit URL-Daten)
   ⚠️ Problem: Nicht alle Daten verfügbar!
```

---

## ✅ Vorteile des Webhooks:

### 1. Vollständige Daten
- **Mit Webhook:** Alle Informationen (Name, E-Mail, Telefon, Fragen, etc.)
- **Ohne Webhook:** Nur das, was in der URL steht

### 2. Zuverlässigkeit
- **Mit Webhook:** Funktioniert auch wenn Redirect fehlschlägt
- **Ohne Webhook:** Wenn Redirect nicht funktioniert, keine Daten

### 3. Echtzeit
- **Mit Webhook:** Daten werden sofort nach Buchung gespeichert
- **Ohne Webhook:** Daten nur verfügbar, wenn Kunde auf Upload-Seite kommt

### 4. Zusätzliche Informationen
- **Mit Webhook:** Auch Telefonnummer, Fragen, Event-Details
- **Ohne Webhook:** Nur Name und E-Mail (wenn in URL)

---

## 📋 Beispiel: Was sendet der Webhook?

### Calendly sendet automatisch:

```json
{
  "event": "invitee.created",
  "payload": {
    "invitee": {
      "name": "Max Mustermann",
      "email": "max@beispiel.de",
      "phone_number": "+49 123 456789",
      "timezone": "Europe/Berlin"
    },
    "event": {
      "name": "30 Minute Meeting",
      "start_time": "2025-11-21T22:30:00+01:00",
      "end_time": "2025-11-21T23:00:00+01:00"
    },
    "questions_and_answers": [
      {
        "question": "Wie sind Sie auf uns aufmerksam geworden?",
        "answer": "Google"
      }
    ]
  }
}
```

**Alles wird automatisch gespeichert!** ✅

---

## 🆚 Vergleich: Mit vs. Ohne Webhook

| Feature | Ohne Webhook | Mit Webhook |
|---------|--------------|-------------|
| **Name** | ✅ (wenn in URL) | ✅ Immer |
| **E-Mail** | ✅ (wenn in URL) | ✅ Immer |
| **Telefon** | ❌ Meist nicht | ✅ Immer |
| **Event-Name** | ❌ | ✅ |
| **Terminzeit** | ❌ | ✅ |
| **Zusätzliche Fragen** | ❌ | ✅ |
| **Zuverlässigkeit** | ⚠️ Abhängig von Redirect | ✅ Immer |
| **Daten-Speicherung** | ❌ Nur bei Besuch | ✅ Sofort nach Buchung |

---

## 🎯 Brauchen Sie den Webhook?

### Webhook ist OPTIONAL, aber empfohlen wenn:

- ✅ Sie **vollständige Daten** brauchen (Telefon, etc.)
- ✅ Sie **Zusatzfragen** in Calendly haben
- ✅ Sie **zuverlässig** sein möchten
- ✅ Sie **Daten speichern** möchten, auch wenn Kunde Upload-Seite nicht besucht

### Webhook ist NICHT nötig wenn:

- ✅ Nur Name und E-Mail reichen
- ✅ URL-Parameter funktionieren gut
- ✅ Sie es einfach halten möchten

---

## 🔧 Einrichtung (Optional)

Falls Sie den Webhook einrichten möchten:

1. **Calendly** → **Settings** → **Integrations** → **Webhooks**
2. **"Create Webhook"** klicken
3. **Event:** `invitee.created`
4. **Webhook URL:** `https://lurodesign.netlify.app/api/calendly-webhook`
5. **"Create"** klicken

**Das war's!** Ab jetzt werden alle Buchungen automatisch gespeichert.

---

## ✅ Zusammenfassung:

**Webhook = Automatischer Daten-Erfassung**

- ✅ **Vollständige Daten** automatisch
- ✅ **Zuverlässig** auch ohne Redirect
- ✅ **Echtzeit** - sofort nach Buchung
- ✅ **Optional** - funktioniert auch ohne

**Für Sie:** Webhook ist **empfohlen**, aber **nicht zwingend nötig**. Die Seite funktioniert auch ohne Webhook mit URL-Parametern!

---

**Haben Sie noch Fragen zum Webhook?** 🤔


