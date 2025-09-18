# RechnungsAI Backend

Express.js Backend für die RechnungsAI MVP-Anwendung.

## Setup

1. **Abhängigkeiten installieren:**
```bash
cd server
npm install
```

2. **Umgebungsvariablen konfigurieren:**
```bash
cp env.example .env
```

Bearbeiten Sie die `.env` Datei und setzen Sie:
- `JWT_SECRET`: Ein sicherer JWT-Schlüssel
- `OPENAI_API_KEY`: Ihr OpenAI API-Schlüssel
- `FRONTEND_URL`: URL des Frontends (Standard: http://localhost:5173)

3. **Datenbank initialisieren:**
```bash
npm run init-db
```

4. **Server starten:**
```bash
# Entwicklung
npm run dev

# Produktion
npm start
```

## API Endpoints

### Authentifizierung
- `POST /api/auth/register` - Benutzer registrieren
- `POST /api/auth/login` - Benutzer anmelden

### Dokumente
- `POST /api/documents/upload` - Dokument hochladen
- `GET /api/documents` - Alle Dokumente abrufen
- `GET /api/documents/:id` - Einzelnes Dokument abrufen
- `PUT /api/documents/:id` - Dokument aktualisieren
- `DELETE /api/documents/:id` - Dokument löschen
- `POST /api/documents/check-duplicates` - Duplikate prüfen

### Export
- `GET /api/documents/export/csv` - CSV-Export

### Kategorien
- `GET /api/categories` - Kategorien abrufen
- `GET /api/categories/skr` - SKR-Kategorien abrufen

### Einstellungen
- `GET /api/settings` - Einstellungen abrufen
- `PUT /api/settings` - Einstellungen aktualisieren

### Statistiken
- `GET /api/stats` - Statistiken abrufen

## Datenbank

Die Anwendung verwendet SQLite für die MVP-Phase. Die Datenbank wird automatisch erstellt und mit den Standard-SKR03-Kategorien initialisiert.

## Datei-Upload

Hochgeladene Dateien werden im `uploads/` Verzeichnis gespeichert. Unterstützte Formate:
- PDF
- JPEG
- PNG

Maximale Dateigröße: 10MB

## OCR-Verarbeitung

Die OCR-Verarbeitung erfolgt über die OpenAI Vision API. Dokumente werden automatisch verarbeitet, sobald sie hochgeladen werden.

## Sicherheit

- JWT-basierte Authentifizierung
- Passwort-Hashing mit bcrypt
- CORS-Konfiguration
- Dateityp-Validierung
- Größenbeschränkungen

