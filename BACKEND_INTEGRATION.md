# 🔧 Backend-Integration - Externes Backend einrichten

## ✅ Cloudinary entfernt!

Alle Cloudinary-Abhängigkeiten wurden entfernt. Der Code ist jetzt bereit für ein externes Backend.

---

## 🎯 Aktueller Status:

### Was funktioniert jetzt:
- ✅ Datei-Upload zu lokalem `/tmp` Verzeichnis (temporär)
- ✅ Kundendaten werden in JSON-Datei gespeichert
- ✅ Admin-Dashboard zeigt alle Uploads
- ✅ Dateien werden mit Kundennamen gespeichert

### ⚠️ Einschränkungen:
- ⚠️ Auf Netlify/Vercel: Dateien in `/tmp` gehen bei Neustart verloren
- ⚠️ Nicht für Produktion geeignet ohne externes Backend

---

## 🚀 Externes Backend integrieren:

### Option 1: Eigener Server (Node.js/Express)

**Vorteile:**
- ✅ Volle Kontrolle
- ✅ Dauerhafte Speicherung
- ✅ Eigene Logik

**Was Sie brauchen:**
1. Server mit Node.js/Express
2. Datei-Speicherung (z.B. lokales Verzeichnis oder Cloud Storage)
3. API-Endpoint für Uploads

**Code-Anpassung:**
```typescript
// In app/api/upload/route.ts
// Statt lokal zu speichern, senden Sie die Datei an Ihr Backend:

const response = await fetch('https://ihr-backend.com/api/upload', {
  method: 'POST',
  body: formData,
  headers: {
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`
  }
})
```

---

### Option 2: Cloud Storage (AWS S3, Google Cloud Storage, etc.)

**Vorteile:**
- ✅ Skalierbar
- ✅ Dauerhafte Speicherung
- ✅ CDN inklusive

**Was Sie brauchen:**
1. Cloud Storage Account
2. API Keys
3. SDK installieren (z.B. `@aws-sdk/client-s3`)

**Code-Anpassung:**
```typescript
// Beispiel mit AWS S3:
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

await s3Client.send(new PutObjectCommand({
  Bucket: process.env.AWS_BUCKET_NAME,
  Key: fileName,
  Body: buffer,
}))
```

---

### Option 3: Datenbank + File Storage

**Vorteile:**
- ✅ Strukturierte Daten
- ✅ Einfache Abfragen
- ✅ Skalierbar

**Was Sie brauchen:**
1. Datenbank (MongoDB, PostgreSQL, etc.)
2. File Storage (S3, Cloud Storage, etc.)
3. Backend-API

**Beispiel-Struktur:**
```typescript
// Upload zu Storage + Metadaten in Datenbank
const fileUrl = await uploadToStorage(file, fileName)
await saveToDatabase({
  customer: { name, email, phone },
  file: { url: fileUrl, originalName, size },
  calendly: { eventId },
})
```

---

## 📋 Was Sie anpassen müssen:

### 1. Upload-Route anpassen (`app/api/upload/route.ts`)

**Aktuell:**
```typescript
// Lokale Speicherung
await writeFile(filePath, buffer)
```

**Mit externem Backend:**
```typescript
// An Ihr Backend senden
const response = await fetch('https://ihr-backend.com/api/upload', {
  method: 'POST',
  body: formData,
})
```

---

### 2. Admin-Dashboard anpassen (`app/admin/page.tsx`)

**Aktuell:**
```typescript
// Lädt aus lokaler JSON-Datei
const response = await fetch('/api/uploads')
```

**Mit externem Backend:**
```typescript
// Lädt aus Backend-API
const response = await fetch('https://ihr-backend.com/api/uploads', {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
```

---

### 3. Download-Route erstellen (`app/api/download/route.ts`)

**Neu erstellen:**
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  // Datei von Backend/Storage abrufen
  const fileUrl = await getFileUrlFromBackend(params.filename)
  return NextResponse.redirect(fileUrl)
}
```

---

## 🔧 Beispiel-Integration:

### Mit Express-Backend:

**Backend (Express):**
```javascript
const express = require('express')
const multer = require('multer')
const app = express()

const upload = multer({ dest: 'uploads/' })

app.post('/api/upload', upload.single('file'), (req, res) => {
  const { customerName, customerEmail, customerPhone, eventId } = req.body
  const file = req.file
  
  // Speichere in Datenbank
  // ...
  
  res.json({ success: true, fileUrl: `/uploads/${file.filename}` })
})
```

**Frontend (Next.js):**
```typescript
// In app/api/upload/route.ts
const response = await fetch(`${process.env.BACKEND_URL}/api/upload`, {
  method: 'POST',
  body: formData,
})
```

---

## 📝 Environment Variables:

Fügen Sie in Netlify hinzu:
```
BACKEND_URL=https://ihr-backend.com
BACKEND_API_KEY=ihr-api-key
```

---

## ✅ Checkliste:

- [ ] Backend-Server eingerichtet
- [ ] Upload-Endpoint erstellt
- [ ] File Storage konfiguriert
- [ ] API Keys gesetzt
- [ ] Code angepasst
- [ ] Getestet

---

## 🚀 Nächste Schritte:

1. **Entscheiden Sie sich für ein Backend:**
   - Eigener Server?
   - Cloud Storage?
   - Datenbank + Storage?

2. **Code anpassen:**
   - Upload-Route
   - Admin-Dashboard
   - Download-Route

3. **Testen:**
   - Upload funktioniert?
   - Dateien werden gespeichert?
   - Admin-Dashboard zeigt Uploads?

---

**Welches Backend möchten Sie verwenden?** Ich kann Ihnen beim Integrieren helfen! 🚀

