'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import './upload.css'

function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [calendlyData, setCalendlyData] = useState<{eventId?: string, email?: string, name?: string}>({})
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [dataFromCalendly, setDataFromCalendly] = useState(false)
  const [loadingCustomerData, setLoadingCustomerData] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Lese Calendly-Parameter aus der URL
    const eventId = searchParams.get('event_id')
    const email = searchParams.get('invitee_email')
    const name = searchParams.get('invitee_name')
    const inviteeUri = searchParams.get('invitee_uri')
    
    if (eventId || email || name || inviteeUri) {
      setCalendlyData({
        eventId: eventId || undefined,
        email: email || undefined,
        name: name || undefined,
      })
      
      // Fülle Formular mit URL-Parametern vor (Fallback)
      if (email) {
        setCustomerData(prev => ({ ...prev, email }))
        setDataFromCalendly(true)
      }
      if (name) {
        setCustomerData(prev => ({ ...prev, name }))
        setDataFromCalendly(true)
      }

      // Versuche Kundendaten von Calendly Webhook-Datenbank abzurufen
      // (falls Webhook bereits die Daten gespeichert hat)
      const fetchCustomerData = async () => {
        try {
          setLoadingCustomerData(true)
          const params = new URLSearchParams()
          if (inviteeUri) {
            params.append('invitee_uri', inviteeUri)
          } else if (email) {
            params.append('invitee_email', email)
          } else if (eventId) {
            params.append('event_id', eventId)
          }

          if (params.toString()) {
            const response = await fetch(`/api/get-customer-data?${params.toString()}`)
            const data = await response.json()
            
            if (data.customerData) {
              // Fülle Formular mit vollständigen Daten aus Webhook
              setCustomerData({
                name: data.customerData.name || '',
                email: data.customerData.email || '',
                phone: data.customerData.phone || '',
              })
              setCalendlyData(prev => ({
                ...prev,
                eventId: data.customerData.calendlyEventId || prev.eventId,
              }))
              setDataFromCalendly(true)
            }
          }
        } catch (error) {
          console.error('Error fetching customer data:', error)
          // Fallback: Verwende URL-Parameter (bereits gesetzt)
        } finally {
          setLoadingCustomerData(false)
        }
      }

      fetchCustomerData()
    } else {
      setLoadingCustomerData(false)
    }
  }, [searchParams])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadStatus('idle')
      setMessage('')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setUploadStatus('idle')
      setMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file) {
      setMessage('Bitte wählen Sie eine Datei aus')
      setUploadStatus('error')
      return
    }

    // Validiere Kundendaten
    if (!customerData.name.trim()) {
      setMessage('Bitte geben Sie Ihren Namen ein')
      setUploadStatus('error')
      return
    }

    if (!customerData.email.trim()) {
      setMessage('Bitte geben Sie Ihre E-Mail-Adresse ein')
      setUploadStatus('error')
      return
    }

    // Einfache E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(customerData.email)) {
      setMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein')
      setUploadStatus('error')
      return
    }

    setUploading(true)
    setUploadStatus('idle')
    setMessage('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('customerName', customerData.name.trim())
    formData.append('customerEmail', customerData.email.trim())
    formData.append('customerPhone', customerData.phone.trim())
    
    // Füge Calendly-Daten hinzu, falls vorhanden
    if (calendlyData.eventId) {
      formData.append('eventId', calendlyData.eventId)
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setUploadStatus('success')
        setMessage('Datei erfolgreich hochgeladen! Vielen Dank.')
        setFile(null)
        // Formular zurücksetzen
        setCustomerData({ name: '', email: '', phone: '' })
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setUploadStatus('error')
        setMessage(data.error || 'Fehler beim Hochladen der Datei')
      }
    } catch (error) {
      setUploadStatus('error')
      setMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setUploading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="upload-header">
          <h1>Datei hochladen</h1>
          <p className="subtitle">
            Vielen Dank für Ihre Terminbuchung! Bitte laden Sie hier Ihre Dateien hoch.
          </p>
          {calendlyData.email && (
            <p className="calendly-info">
              Termin für: {calendlyData.email}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          {dataFromCalendly && (
            <div className="calendly-success-banner">
              <span className="calendly-icon">✓</span>
              <span>Ihre Kontaktdaten wurden automatisch von Calendly übernommen.</span>
            </div>
          )}
          
          <div className="customer-form">
            <h3>Ihre Kontaktdaten</h3>
            <p className="form-hint">
              {dataFromCalendly 
                ? "Ihre Daten wurden automatisch von Ihrer Terminbuchung übernommen. Sie können diese bei Bedarf anpassen."
                : "Bitte füllen Sie Ihre Daten aus, damit wir die Datei Ihrem Termin zuordnen können."}
            </p>
            
            {loadingCustomerData ? (
              <div className="loading-customer-data">
                <p>Lade Ihre Daten von Calendly...</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="customer-name">
                    Name *
                    {dataFromCalendly && <span className="from-calendly-badge">von Calendly</span>}
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    value={customerData.name}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ihr vollständiger Name"
                    required
                    disabled={uploading}
                    className={dataFromCalendly && customerData.name ? 'from-calendly' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer-email">
                    E-Mail-Adresse *
                    {dataFromCalendly && <span className="from-calendly-badge">von Calendly</span>}
                  </label>
                  <input
                    type="email"
                    id="customer-email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="ihre.email@beispiel.de"
                    required
                    disabled={uploading}
                    className={dataFromCalendly && customerData.email ? 'from-calendly' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer-phone">
                    Telefonnummer (optional)
                    {dataFromCalendly && customerData.phone && <span className="from-calendly-badge">von Calendly</span>}
                  </label>
                  <input
                    type="tel"
                    id="customer-phone"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+49 123 456789"
                    disabled={uploading}
                    className={dataFromCalendly && customerData.phone ? 'from-calendly' : ''}
                  />
                </div>
              </>
            )}
          </div>

          <div className="file-upload-section">
            <h3>Datei hochladen</h3>
            <div
              className={`drop-zone ${file ? 'has-file' : ''} ${uploadStatus === 'error' ? 'error' : ''}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="file-input"
              id="file-input"
              accept="*/*"
            />
            <div className="drop-zone-content">
              {file ? (
                <>
                  <svg
                    className="file-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="file-name">{file.name}</p>
                  <p className="file-size">{formatFileSize(file.size)}</p>
                </>
              ) : (
                <>
                  <svg
                    className="upload-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="drop-zone-text">
                    Klicken Sie hier oder ziehen Sie eine Datei hierher
                  </p>
                  <p className="drop-zone-hint">
                    Unterstützte Formate: Alle Dateitypen
                  </p>
                </>
              )}
            </div>
          </div>

          {message && (
            <div className={`message ${uploadStatus}`}>
              {message}
            </div>
          )}

          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={!file || uploading || !customerData.name.trim() || !customerData.email.trim()}
          >
            {uploading ? 'Wird hochgeladen...' : 'Datei hochladen'}
          </button>
        </form>

        <div className="info-box">
          <p>
            <strong>Hinweis:</strong> Sie können diese Seite auch später aufrufen, 
            um weitere Dateien hochzuladen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function UploadPage() {
  return (
    <Suspense fallback={
      <div className="upload-container">
        <div className="upload-card">
          <div className="upload-header">
            <h1>Datei hochladen</h1>
            <p className="subtitle">Lädt...</p>
          </div>
        </div>
      </div>
    }>
      <UploadForm />
    </Suspense>
  )
}

