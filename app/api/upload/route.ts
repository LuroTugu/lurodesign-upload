import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const eventId = formData.get('eventId') as string | null
    const customerName = formData.get('customerName') as string | null
    const customerEmail = formData.get('customerEmail') as string | null
    const customerPhone = formData.get('customerPhone') as string | null

    if (!file) {
      return NextResponse.json(
        { error: 'Keine Datei gefunden' },
        { status: 400 }
      )
    }

    if (!customerName || !customerEmail) {
      return NextResponse.json(
        { error: 'Name und E-Mail-Adresse sind erforderlich' },
        { status: 400 }
      )
    }

    // Erstelle uploads Verzeichnis falls es nicht existiert
    const uploadsDir = path.join(process.cwd(), 'uploads')
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true })
    }

    // Generiere einen eindeutigen Dateinamen
    const timestamp = Date.now()
    const originalName = file.name
    const fileExtension = path.extname(originalName)
    const baseName = path.basename(originalName, fileExtension)
    const sanitizedName = baseName.replace(/[^a-z0-9]/gi, '_').toLowerCase()
    const fileName = `${sanitizedName}_${timestamp}${fileExtension}`
    const filePath = path.join(uploadsDir, fileName)

    // Konvertiere File zu Buffer und speichere
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await writeFile(filePath, buffer)

    // Speichere Upload-Informationen in JSON-Datei für Zuordnung
    const databaseFile = path.join(uploadsDir, 'uploads-database.json')
    
    const uploadRecord = {
      id: `upload_${timestamp}`,
      timestamp: new Date().toISOString(),
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone || null,
      },
      file: {
        originalName: originalName,
        savedAs: fileName,
        size: file.size,
        type: file.type,
      },
      calendly: {
        eventId: eventId || null,
      },
    }

    // Lade bestehende Uploads oder erstelle neue Liste
    let uploads: typeof uploadRecord[] = []
    if (existsSync(databaseFile)) {
      try {
        const existingData = await readFile(databaseFile, 'utf-8')
        uploads = JSON.parse(existingData)
      } catch (error) {
        console.error('Error reading database file:', error)
        uploads = []
      }
    }

    // Füge neuen Upload hinzu
    uploads.push(uploadRecord)

    // Speichere aktualisierte Liste
    await writeFile(databaseFile, JSON.stringify(uploads, null, 2), 'utf-8')

    console.log('File uploaded and saved:', {
      id: uploadRecord.id,
      customer: uploadRecord.customer.name,
      email: uploadRecord.customer.email,
      fileName: originalName,
    })

    return NextResponse.json({
      success: true,
      message: 'Datei erfolgreich hochgeladen',
      uploadId: uploadRecord.id,
      fileName: originalName,
      savedAs: fileName,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Hochladen der Datei' },
      { status: 500 }
    )
  }
}

