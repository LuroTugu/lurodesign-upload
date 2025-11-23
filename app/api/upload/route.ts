import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

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

    // Prüfe ob Supabase konfiguriert ist
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const bucketName = process.env.SUPABASE_BUCKET_NAME || 'lurodesign-uploads'

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return NextResponse.json(
        { error: 'Supabase ist nicht konfiguriert. Bitte setzen Sie SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY in den Environment Variables.' },
        { status: 500 }
      )
    }

    // Initialisiere Supabase Client mit Service Role Key (für Backend-Uploads)
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Generiere Dateinamen MIT Kundennamen für bessere Zuordnung
    const timestamp = Date.now()
    const originalName = file.name
    const fileExtension = originalName.substring(originalName.lastIndexOf('.')) || ''
    const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName
    
    // Sanitize Kundennamen für Dateinamen (entferne Sonderzeichen)
    const sanitizedCustomerName = customerName
      .replace(/[^a-z0-9\s-]/gi, '') // Entferne Sonderzeichen
      .replace(/\s+/g, '_') // Ersetze Leerzeichen mit Unterstrich
      .toLowerCase()
    
    // Datum für bessere Organisation
    const date = new Date().toISOString().split('T')[0] // YYYY-MM-DD
    
    // Dateiname: Kundenname/Datum_Originalname_Zeitstempel.extension
    // Beispiel: max_mustermann/2025-01-21_design_1234567890.pdf
    const supabaseFilePath = `${sanitizedCustomerName}/${date}_${baseName}_${timestamp}${fileExtension}`
    
    // Konvertiere File zu ArrayBuffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload zu Supabase Storage
    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(supabaseFilePath, buffer, {
          contentType: file.type || 'application/octet-stream',
          upsert: false, // Überschreibe nicht, erstelle neue Datei
        })

      if (uploadError) {
        console.error('Supabase upload error:', {
          error: uploadError,
          message: uploadError.message,
          customer: customerName,
        })
        
        return NextResponse.json(
          { 
            error: 'Fehler beim Hochladen zu Supabase Storage',
            details: process.env.NODE_ENV === 'development' ? uploadError.message : undefined
          },
          { status: 500 }
        )
      }

      // Hole öffentliche URL (falls Bucket public ist)
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(supabaseFilePath)

      console.log('File uploaded to Supabase Storage:', {
        customer: customerName,
        fileName: originalName,
        supabasePath: uploadData.path,
        publicUrl: urlData.publicUrl,
      })

      return NextResponse.json({
        success: true,
        message: 'Datei erfolgreich zu Supabase Storage hochgeladen',
        uploadId: uploadData.id || uploadData.path,
        fileName: originalName,
        supabasePath: uploadData.path,
        publicUrl: urlData.publicUrl,
      })
    } catch (supabaseError: any) {
      console.error('Supabase upload exception:', {
        error: supabaseError?.message || supabaseError,
        customer: customerName,
      })
      
      return NextResponse.json(
        { 
          error: 'Fehler beim Hochladen zu Supabase Storage',
          details: process.env.NODE_ENV === 'development' ? supabaseError?.message : undefined
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Upload error:', {
      message: error?.message || error,
      stack: error?.stack,
      name: error?.name,
    })
    return NextResponse.json(
      { 
        error: 'Fehler beim Hochladen der Datei',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    )
  }
}
