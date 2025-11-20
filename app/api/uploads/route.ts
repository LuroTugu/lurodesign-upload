import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// GET Route zum Abrufen aller Uploads (für Admin-Dashboard)
export async function GET(request: NextRequest) {
  try {
    const uploadsDir = path.join(process.cwd(), 'uploads')
    const databaseFile = path.join(uploadsDir, 'uploads-database.json')

    if (!existsSync(databaseFile)) {
      return NextResponse.json({ uploads: [] })
    }

    const data = await readFile(databaseFile, 'utf-8')
    const uploads = JSON.parse(data)

    // Sortiere nach Datum (neueste zuerst)
    uploads.sort((a: any, b: any) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    return NextResponse.json({ uploads })
  } catch (error) {
    console.error('Error reading uploads:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Uploads' },
      { status: 500 }
    )
  }
}

