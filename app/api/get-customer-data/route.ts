import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// API-Endpoint zum Abrufen von Kundendaten basierend auf Calendly Event ID
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const eventId = searchParams.get('event_id')
    const inviteeEmail = searchParams.get('invitee_email')
    const inviteeUri = searchParams.get('invitee_uri')

    if (!eventId && !inviteeEmail && !inviteeUri) {
      return NextResponse.json(
        { error: 'Event ID, E-Mail oder Invitee URI erforderlich' },
        { status: 400 }
      )
    }

    const bookingsFile = path.join(process.cwd(), 'uploads', 'calendly-bookings.json')

    if (!existsSync(bookingsFile)) {
      return NextResponse.json({ customerData: null })
    }

    const data = await readFile(bookingsFile, 'utf-8')
    const bookings = JSON.parse(data)

    // Suche nach passender Buchung
    let customerData = null

    if (inviteeUri) {
      customerData = bookings.find((b: any) => b.inviteeUri === inviteeUri)
    } else if (inviteeEmail) {
      customerData = bookings.find((b: any) => 
        b.email.toLowerCase() === inviteeEmail.toLowerCase()
      )
    } else if (eventId) {
      // Suche nach neuestem Event mit dieser ID
      const matchingBookings = bookings.filter((b: any) => 
        b.calendlyEventId === eventId || 
        b.eventUri?.includes(eventId)
      )
      if (matchingBookings.length > 0) {
        // Sortiere nach Datum (neueste zuerst)
        matchingBookings.sort((a: any, b: any) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        customerData = matchingBookings[0]
      }
    }

    if (!customerData) {
      return NextResponse.json({ customerData: null })
    }

    // Gib nur relevante Daten zurück (ohne sensible Informationen)
    return NextResponse.json({
      customerData: {
        name: customerData.name,
        email: customerData.email,
        phone: customerData.phone,
        eventName: customerData.eventName,
        eventStartTime: customerData.eventStartTime,
        calendlyEventId: customerData.calendlyEventId,
      },
    })
  } catch (error) {
    console.error('Error getting customer data:', error)
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Kundendaten' },
      { status: 500 }
    )
  }
}

