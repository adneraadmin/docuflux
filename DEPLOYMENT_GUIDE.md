# Docuflux VPS Deployment Guide

## 🚨 GitHub Actions Problem & Lösungen

### Das Problem
Die GitHub App hat keine `workflows` Berechtigung, daher können wir die `.github/workflows/deploy.yml` nicht direkt ändern. Der Workflow ist auf `main` Branch konfiguriert, aber wir nutzen `master`.

## 🔧 Lösungsoptionen

### Option 1: Manuelles Deployment (Sofort verfügbar)

**Schritt 1:** SSH-Zugang zum VPS einrichten
```bash
# Auf Ihrem lokalen Rechner
ssh-keygen -t ed25519 -f ~/.ssh/docuflux_deploy
ssh-copy-id -i ~/.ssh/docuflux_deploy.pub gf@168.231.109.89
```

**Schritt 2:** Repository auf VPS klonen
```bash
# Auf dem VPS
sudo mkdir -p /opt/docuflux
sudo chown gf:gf /opt/docuflux
cd /opt/docuflux
git clone https://github.com/adneraadmin/docuflux.git .
```

**Schritt 3:** Manual Deployment Script verwenden
```bash
# Lokal das Script herunterladen
wget https://raw.githubusercontent.com/adneraadmin/docuflux/master/manual-deploy.sh
chmod +x manual-deploy.sh

# Deployment ausführen
./manual-deploy.sh
```

### Option 2: GitHub Web-Interface (Empfohlen)

**Schritt 1:** GitHub Repository öffnen
- Gehen Sie zu: https://github.com/adneraadmin/docuflux

**Schritt 2:** Workflow-Datei bearbeiten
- Navigieren Sie zu: `.github/workflows/deploy.yml`
- Klicken Sie auf das Stift-Symbol (Edit)
- Ändern Sie Zeile 5 von:
  ```yaml
  branches: [ "main" ]
  ```
  zu:
  ```yaml
  branches: [ "master" ]
  ```
- Klicken Sie "Commit changes"

**Schritt 3:** Automatisches Deployment testen
- Jeder Push zum `master` Branch triggert nun automatisch das Deployment

### Option 3: Workflow manuell triggern

**Schritt 1:** GitHub Actions Tab öffnen
- Gehen Sie zu: https://github.com/adneraadmin/docuflux/actions

**Schritt 2:** Workflow manuell starten
- Wählen Sie "Deploy to VPS"
- Klicken Sie "Run workflow"
- Wählen Sie Branch "master"
- Klicken Sie "Run workflow"

## 🐳 Docker-Compose Setup (auf VPS)

### docker-compose.yml erstellen
```yaml
version: '3.8'

services:
  docuflux-kmu:
    build:
      context: .
      dockerfile: Dockerfile.kmu
    container_name: docuflux-kmu
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.kmu.rule=Host(\`kmu.docuflux.de\`)"
      - "traefik.http.routers.kmu.tls.certresolver=letsencrypt"

  docuflux-handwerk:
    build:
      context: .
      dockerfile: Dockerfile.handwerk
    container_name: docuflux-handwerk
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.handwerk.rule=Host(\`handwerk.docuflux.de\`)"
      - "traefik.http.routers.handwerk.tls.certresolver=letsencrypt"

  docuflux-buchhaltung:
    build:
      context: .
      dockerfile: Dockerfile.buchhaltung
    container_name: docuflux-buchhaltung
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.buchhaltung.rule=Host(\`buchhaltung.docuflux.de\`)"
      - "traefik.http.routers.buchhaltung.tls.certresolver=letsencrypt"

  docuflux-beta:
    build:
      context: .
      dockerfile: Dockerfile.beta
    container_name: docuflux-beta
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.beta.rule=Host(\`beta.docuflux.de\`)"
      - "traefik.http.routers.beta.tls.certresolver=letsencrypt"

networks:
  default:
    external:
      name: traefik
```

### Deployment-Script auf VPS (/usr/local/bin/docuflux-deploy.sh)
```bash
#!/bin/bash
set -euo pipefail

cd /opt/docuflux

echo "🚀 Starting Docuflux deployment..."

# Git pull
echo "📥 Pulling latest changes..."
git pull origin master

# Build images
echo "🐳 Building Docker images..."
docker build -f Dockerfile.kmu -t docuflux-kmu .
docker build -f Dockerfile.handwerk -t docuflux-handwerk .
docker build -f Dockerfile.buchhaltung -t docuflux-buchhaltung .
docker build -f Dockerfile.beta -t docuflux-beta .

# Restart containers
echo "🔄 Restarting containers..."
docker-compose up -d --force-recreate

# Cleanup
echo "🧹 Cleaning up..."
docker image prune -f

echo "✅ Deployment completed!"
```

## 🌐 DNS-Konfiguration

### A-Records erstellen
```
kmu.docuflux.de         A    168.231.109.89
handwerk.docuflux.de    A    168.231.109.89
buchhaltung.docuflux.de A    168.231.109.89
beta.docuflux.de        A    168.231.109.89
```

## 🔍 Troubleshooting

### Container-Status prüfen
```bash
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

### Logs anzeigen
```bash
docker logs docuflux-kmu
docker logs docuflux-handwerk
```

### Traefik-Dashboard
```
https://traefik.docuflux.de/dashboard/
```

### SSL-Zertifikate prüfen
```bash
docker exec traefik cat /acme.json | jq '.letsencrypt.Certificates[].domain'
```

## 📊 Monitoring

### Health Checks
```bash
curl -I https://kmu.docuflux.de
curl -I https://handwerk.docuflux.de
```

### Performance testen
```bash
# Lighthouse CI
npx lighthouse https://kmu.docuflux.de --output=json
```

## 🎯 Nächste Schritte

1. **DNS-Einträge** für alle Subdomains erstellen
2. **Option 2** (GitHub Web-Interface) für automatisches Deployment nutzen
3. **SSL-Zertifikate** via Traefik automatisch generieren lassen
4. **Monitoring** einrichten für Uptime-Überwachung
5. **Buchhaltung & Beta** Landing Pages fertigstellen

## 📞 Support

Bei Problemen:
- **Repository:** https://github.com/adneraadmin/docuflux
- **Issues:** GitHub Issues für Bugs
- **Dokumentation:** Dieses README

---

**Status:** 🚧 Deployment-ready, GitHub Actions Fix erforderlich
# Branch renamed to main for GitHub Actions compatibility
# Container rebuild trigger - Fri Sep 19 07:24:35 EDT 2025
