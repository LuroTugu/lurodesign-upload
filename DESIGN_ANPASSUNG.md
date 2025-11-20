# 🎨 Design-Anpassung - So passen Sie das UI an

## Schnelle Anpassung

### 1. Farben ändern

Öffnen Sie `design-config.css` und ändern Sie die Farben:

```css
:root {
  /* Ihre Hauptfarbe */
  --primary-color: #667eea;
  
  /* Ihre Akzentfarbe */
  --secondary-color: #764ba2;
  
  /* Gradient */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 2. Vordefinierte Themes

In `design-config.css` finden Sie bereits vordefinierte Themes:

- **Blau-Theme** (kommentiert)
- **Grün-Theme** (kommentiert)
- **Orange-Theme** (kommentiert)
- **Rot-Theme** (kommentiert)

Einfach auskommentieren und das gewünschte Theme aktivieren!

---

## Detaillierte Anpassungen

### Logo hinzufügen

1. Logo-Datei in `public/logo.png` speichern
2. In `app/page.tsx` hinzufügen:

```tsx
<div className="upload-header">
  <img src="/logo.png" alt="Logo" className="logo" />
  <h1>Datei hochladen</h1>
  ...
</div>
```

3. In `app/upload.css` Styling hinzufügen:

```css
.logo {
  max-width: 120px;
  height: auto;
  margin-bottom: 24px;
}
```

### Schriftart ändern

1. Google Fonts auswählen (z.B. Inter, Poppins, Montserrat)
2. In `app/layout.tsx` hinzufügen:

```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

3. In `app/globals.css` ändern:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Hintergrund ändern

In `app/globals.css`:

```css
body {
  /* Gradient */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Oder einfarbig */
  background: #f5f5f5;
  
  /* Oder Bild */
  background: url('/hintergrund.jpg') center/cover;
}
```

### Karten-Design anpassen

In `app/upload.css`:

```css
.upload-card {
  /* Schatten */
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
  
  /* Border */
  border: 1px solid #e5e7eb;
  
  /* Hintergrund */
  background: white;
  /* oder: background: #fafafa; */
}
```

---

## Design-Varianten

### Minimalistisch

- Weniger Schatten
- Dünnere Borders
- Mehr Weißraum
- Einfache Icons

### Modern/Bold

- Starke Schatten
- Kräftige Farben
- Große Buttons
- Animationen

### Elegant

- Sanfte Farben
- Dünne Linien
- Serifenschrift
- Subtile Animationen

---

## Responsive Anpassungen

Alle Breakpoints sind bereits definiert:

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** < 480px

Anpassungen in `app/upload.css` unter `@media` Queries.

---

## Tipps

1. **Konsistenz:** Verwenden Sie die CSS-Variablen aus `design-config.css`
2. **Kontrast:** Stellen Sie sicher, dass Text gut lesbar ist
3. **Accessibility:** Mindestens 4.5:1 Kontrastverhältnis
4. **Performance:** Optimieren Sie Bilder und verwenden Sie WebP

---

## Fragen?

- Welche Farben soll ich verwenden?
- Soll ich ein Logo integrieren?
- Welcher Stil passt zu Ihrer Framer-Website?

Sagen Sie mir einfach, was angepasst werden soll! 🎨

