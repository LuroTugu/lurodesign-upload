import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Calendly Webhook Endpoint
// Empfängt Daten automatisch, wenn ein Termin gebucht wird
export async function POST(request: NextRequest) {
  try {
    const webhookData = await request.json()

    // Calendly sendet verschiedene Event-Typen
    // Wir interessieren uns für: invitee.created (Termin gebucht)
    const event = webhookData.event
    const payload = webhookData.payload

    if (event === 'invitee.created') {
      // Extrahiere Kundendaten aus Calendly Webhook
      const invitee = payload.invitee
      const eventDetails = payload.event
      const questionsAndAnswers = payload.questions_and_answers || []

      const customerData = {
        // Calendly Event Information
        eventUri: eventDetails.uri,
        eventName: eventDetails.name,
        eventStartTime: eventDetails.start_time,
        eventEndTime: eventDetails.end_time,
        
        // Kundendaten
        inviteeUri: invitee.uri,
        name: invitee.name,
        email: invitee.email,
        phone: invitee.phone_number || null,
        timezone: invitee.timezone,
        createdAt: invitee.created_at,
        
        // Zusätzliche Fragen (falls in Calendly konfiguriert)
        questionsAndAnswers: questionsAndAnswers.map((qa: any) => ({
          question: qa.question,
          answer: qa.answer,
        })),
        
        // Eindeutige ID für Zuordnung
        calendlyEventId: eventDetails.uri.split('/').pop() || null,
        calendlyInviteeId: invitee.uri.split('/').pop() || null,
      }

      // Speichere Kundendaten in Datenbank
      const dataDir = path.join(process.cwd(), 'uploads')
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true })
      }

      const bookingsFile = path.join(dataDir, 'calendly-bookings.json')
      
      // Lade bestehende Buchungen
      let bookings: any[] = []
      if (existsSync(bookingsFile)) {
        try {
          const existingData = await readFile(bookingsFile, 'utf-8')
          bookings = JSON.parse(existingData)
        } catch (error) {
          console.error('Error reading bookings file:', error)
          bookings = []
        }
      }

      // Prüfe ob Buchung bereits existiert
      const existingIndex = bookings.findIndex(
        (b: any) => b.inviteeUri === customerData.inviteeUri
      )

      if (existingIndex >= 0) {
        // Aktualisiere bestehende Buchung
        bookings[existingIndex] = customerData
      } else {
        // Füge neue Buchung hinzu
        bookings.push(customerData)
      }

      // Speichere aktualisierte Liste
      await writeFile(bookingsFile, JSON.stringify(bookings, null, 2), 'utf-8')

      console.log('Calendly booking received:', {
        name: customerData.name,
        email: customerData.email,
        eventId: customerData.calendlyEventId,
      })

      return NextResponse.json({
        success: true,
        message: 'Buchung erfolgreich gespeichert',
      })
    }

    // Andere Event-Typen (z.B. invitee.canceled)
    return NextResponse.json({
      success: true,
      message: 'Webhook empfangen',
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten des Webhooks' },
      { status: 500 }
    )
  }
}

// GET für Webhook-Verifizierung (falls nötig)
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Calendly Webhook Endpoint' })
}

