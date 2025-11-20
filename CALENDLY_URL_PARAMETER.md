# 🔗 Calendly URL-Parameter - Automatische Datenerfassung

## ✅ Ja, es funktioniert automatisch!

Wenn ein Kunde von Calendly kommt und die URL Parameter enthält, werden die Felder **automatisch ausgefüllt**.

---

## 📋 Wie es funktioniert:

### 1. **Calendly Redirect-URL konfigurieren**

In Calendly → Event Type → Confirmation Page:
- "Redirect to external URL" aktivieren
- URL eingeben mit Platzhaltern:

```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}&event_id={event_id}&invitee_uri={invitee_uri}
```

### 2. **Was passiert automatisch:**

1. Kunde bucht Termin bei Calendly
2. Calendly leitet weiter → `https://ihre-domain.de?invitee_email=max@beispiel.de&invitee_name=Max%20Mustermann`
3. **Unsere Seite liest die URL-Parameter automatisch**
4. **Formular wird automatisch ausgefüllt:**
   - Name: "Max Mustermann" ✓
   - E-Mail: "max@beispiel.de" ✓
   - Telefon: (falls in URL vorhanden)
5. Kunde sieht Banner: "Daten wurden automatisch von Calendly übernommen"
6. Kunde kann direkt Datei hochladen

---

## 🧪 Testen Sie es jetzt:

### Test-URL mit Beispiel-Daten:

```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann&event_id=ABC123
```

**Oder im Browser:**
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max Mustermann
```

Die Felder sollten automatisch ausgefüllt sein!

---

## 📝 Verfügbare Calendly Platzhalter:

Calendly unterstützt diese Platzhalter in Redirect-URLs:

| Platzhalter | Beschreibung | Beispiel |
|------------|--------------|----------|
| `{invitee_email}` | E-Mail des Kunden | max@beispiel.de |
| `{invitee_name}` | Name des Kunden | Max Mustermann |
| `{event_id}` | Event ID | ABC123XYZ |
| `{invitee_uri}` | Invitee URI (am besten für Webhook) | https://api.calendly.com/... |

---

## ⚠️ Wichtiger Hinweis:

**Calendly gibt standardmäßig NICHT alle Parameter mit!**

Sie müssen in Calendly die Platzhalter explizit in die Redirect-URL einfügen:

### ❌ Funktioniert NICHT automatisch:
```
https://ihre-domain.de
```

### ✅ Funktioniert:
```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}
```

---

## 🔄 Zwei-Wege-System:

### Weg 1: URL-Parameter (Einfach, sofort)
- ✅ Funktioniert sofort
- ✅ Keine zusätzliche Konfiguration nötig
- ⚠️ Nur die Parameter, die Sie in die URL einfügen

### Weg 2: Webhook (Vollständig, empfohlen)
- ✅ Alle Daten automatisch
- ✅ Auch Telefon, zusätzliche Fragen, etc.
- ⚠️ Benötigt Webhook-Setup

**Beide funktionieren zusammen!** Die Seite versucht zuerst Webhook-Daten, dann URL-Parameter.

---

## 🎯 Empfohlene Calendly-Konfiguration:

### Redirect-URL in Calendly:

```
https://ihre-domain.de?invitee_email={invitee_email}&invitee_name={invitee_name}&invitee_uri={invitee_uri}&event_id={event_id}
```

**Warum alle Parameter?**
- `invitee_email` → Füllt E-Mail automatisch
- `invitee_name` → Füllt Name automatisch
- `invitee_uri` → Beste ID für Webhook-Zuordnung
- `event_id` → Event-Zuordnung

---

## ✅ Zusammenfassung:

**JA, es funktioniert automatisch!**

1. ✅ URL-Parameter werden automatisch gelesen
2. ✅ Formular wird automatisch ausgefüllt
3. ✅ Banner zeigt "Daten von Calendly übernommen"
4. ✅ Kunde kann direkt Datei hochladen
5. ✅ Keine manuelle Eingabe nötig

**Wichtig:** Stellen Sie sicher, dass Sie die Platzhalter in die Calendly Redirect-URL einfügen!

---

## 🧪 Jetzt testen:

Öffnen Sie diese URL im Browser:
```
http://localhost:3000?invitee_email=test@beispiel.de&invitee_name=Max%20Mustermann
```

Die Felder sollten automatisch ausgefüllt sein! 🎉

