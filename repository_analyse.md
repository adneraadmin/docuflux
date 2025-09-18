# Repository-Analyse für docuflux Konsolidierung

## Übersicht der 3 bestehenden Repositories

### 1. rechnungsai-platform
**Pfad:** `/home/ubuntu/rechnungsai-platform`
**Status:** Hauptrepository mit gemischten Formaten

**Wichtige Inhalte:**
- `docs/strategy/brand-guidelines.rtf` - Brand Guidelines
- `docs/marketing/` - Marketing-Dokumente (RTF + MD gemischt)
- `docs/marketing/docuflux_brand_strategie.rtf` - Neue docuflux Strategie
- `docs/marketing/docuflux_logo_*` - Logo-Konzepte und Bewertungen
- `docs/marketing/rechnungsai_*` - RechnungsAI spezifische Dokumente
- `apps/` - Landing Page Anwendungen
- `assets/` - Logo-Assets und Bilder

**Probleme:**
- RTF-Dateien im Root-Verzeichnis (CHANGELOG.rtf, README.rtf, etc.)
- Gemischte Formate (RTF + MD)
- Unorganisierte Struktur
- Doppelte/widersprüchliche Inhalte

### 2. rechnungsai-marketing
**Pfad:** `/home/ubuntu/rechnungsai-marketing`
**Status:** Marketing-fokussiertes Repository

**Wichtige Inhalte:**
- `business-strategy-final/` - Geschäftsstrategie (MD-Format)
- `marketing-strategy/` - Marketing-Strategien
- `docx-exports/` - DOCX-Exporte aller Dokumente
- `landing-pages/` - Landing Page Konzepte
- Umfassende Buyer Personas und Zielgruppenanalysen

**Probleme:**
- Alles noch auf "RechnungsAI" branding
- Hauptsächlich MD-Format statt RTF
- Redundante DOCX-Exporte

### 3. HandwerkstoolsRechnung
**Pfad:** `/home/ubuntu/HandwerkstoolsRechnung`
**Status:** Technisches Repository

**Wichtige Inhalte:**
- `MVP-SETUP.md` - Setup-Anleitung
- `UPGRADE_GUIDE.md` - Upgrade-Leitfaden
- `server/` - Server-Dokumentation
- Technische Implementierungsdetails

**Probleme:**
- Veraltetes "HandwerkstoolsRechnung" branding
- Rein technisch, wenig strategischer Inhalt

## Konsolidierungsplan

### Zielstruktur für docuflux Repository:
```
docuflux/
├── README.rtf (Repository-Guide)
├── docs/
│   ├── strategie/
│   │   ├── brand_guidelines.rtf
│   │   ├── geschaeftsstrategie.rtf
│   │   └── plattform_vision.rtf
│   ├── marketing/
│   │   ├── marketing_strategie.rtf
│   │   ├── zielgruppen_analyse.rtf
│   │   ├── buyer_personas.rtf
│   │   └── content_strategie.rtf
│   ├── produkte/
│   │   ├── rechnungsai/
│   │   │   ├── produktstrategie.rtf
│   │   │   ├── landing_page_konzept.rtf
│   │   │   └── funnel_strategie.rtf
│   │   └── roadmap_weitere_module.rtf
│   └── technik/
│       ├── implementierung.rtf
│       ├── setup_guide.rtf
│       └── upgrade_guide.rtf
├── assets/
│   ├── logos/
│   └── bilder/
└── apps/ (falls benötigt)
```

### Konvertierungsaufgaben:
1. **Branding-Konvertierung:** Alle "RechnungsAI", "HandwerkstoolsRechnung" → "docuflux"
2. **Format-Konvertierung:** Alle MD/DOCX → RTF
3. **Inhalts-Konsolidierung:** Duplikate entfernen, Widersprüche auflösen
4. **Struktur-Reorganisation:** Logische Verzeichnisstruktur
5. **Namenskonvention:** Konsistente deutsche Dateinamen

## Nächste Schritte:
1. Inhalte analysieren und kategorisieren
2. Branding und Inhalte konvertieren
3. RTF-Dokumente erstellen
4. Repository strukturieren
5. GitHub Repository erstellen und pushen
