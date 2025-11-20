'use client'

import { useState, useEffect } from 'react'
import './admin.css'

interface UploadRecord {
  id: string
  timestamp: string
  customer: {
    name: string
    email: string
    phone: string | null
  }
  file: {
    originalName: string
    savedAs: string
    size: number
    type: string
  }
  calendly: {
    eventId: string | null
  }
}

export default function AdminDashboard() {
  const [uploads, setUploads] = useState<UploadRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadUploads()
  }, [])

  const loadUploads = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/uploads')
      const data = await response.json()
      
      if (response.ok) {
        setUploads(data.uploads || [])
      } else {
        setError('Fehler beim Laden der Uploads')
      }
    } catch (err) {
      setError('Fehler beim Laden der Uploads')
    } finally {
      setLoading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const downloadFile = (savedAs: string, originalName: string) => {
    // In Produktion: Link zu Datei-Download-Endpoint
    window.open(`/api/download/${savedAs}`, '_blank')
  }

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-card">
          <h1>Upload-Verwaltung</h1>
          <p>Lädt...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div className="admin-header">
          <h1>Upload-Verwaltung</h1>
          <button onClick={loadUploads} className="refresh-button">
            Aktualisieren
          </button>
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        {uploads.length === 0 ? (
          <div className="empty-state">
            <p>Noch keine Uploads vorhanden.</p>
          </div>
        ) : (
          <>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-label">Gesamt:</span>
                <span className="stat-value">{uploads.length}</span>
              </div>
            </div>

            <div className="uploads-table">
              <table>
                <thead>
                  <tr>
                    <th>Datum & Uhrzeit</th>
                    <th>Kunde</th>
                    <th>E-Mail</th>
                    <th>Telefon</th>
                    <th>Datei</th>
                    <th>Größe</th>
                    <th>Calendly Event</th>
                    <th>Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {uploads.map((upload) => (
                    <tr key={upload.id}>
                      <td>{formatDate(upload.timestamp)}</td>
                      <td><strong>{upload.customer.name}</strong></td>
                      <td>{upload.customer.email}</td>
                      <td>{upload.customer.phone || '-'}</td>
                      <td>{upload.file.originalName}</td>
                      <td>{formatFileSize(upload.file.size)}</td>
                      <td>
                        {upload.calendly.eventId ? (
                          <span className="event-badge">✓</span>
                        ) : (
                          <span className="event-badge no-event">-</span>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => downloadFile(upload.file.savedAs, upload.file.originalName)}
                          className="download-button"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

