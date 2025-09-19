#!/bin/bash

# Single Container Deployment Script für Docuflux VPS
# Verwendet einen einzigen Nginx-Container für alle Domains

set -euo pipefail

echo "🚀 Starting Docuflux Single Container Deployment..."

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Konfiguration
VPS_HOST="168.231.109.89"
VPS_USER="gf"
VPS_PORT="22"
DEPLOY_PATH="/opt/docuflux"
SSH_KEY_PATH="~/.ssh/id_ed25519"

echo -e "${BLUE}📋 Single Container Deployment Configuration:${NC}"
echo -e "  Host: ${VPS_HOST}"
echo -e "  User: ${VPS_USER}"
echo -e "  Path: ${DEPLOY_PATH}"
echo -e "  Strategy: Single Nginx Container"
echo ""

# Funktion für SSH-Befehle
run_ssh() {
    ssh -p ${VPS_PORT} \
        -i ${SSH_KEY_PATH} \
        -o UserKnownHostsFile=~/.ssh/known_hosts \
        -o StrictHostKeyChecking=yes \
        ${VPS_USER}@${VPS_HOST} "$1"
}

# 1. SSH-Verbindung testen
echo -e "${YELLOW}🔐 Testing SSH connectivity...${NC}"
if run_ssh "echo 'SSH connection successful' && whoami"; then
    echo -e "${GREEN}✅ SSH connection OK${NC}"
else
    echo -e "${RED}❌ SSH connection failed${NC}"
    exit 1
fi

# 2. Repository auf VPS aktualisieren
echo -e "${YELLOW}📥 Updating repository on VPS...${NC}"
run_ssh "cd ${DEPLOY_PATH} && git pull origin main"
echo -e "${GREEN}✅ Repository updated${NC}"

# 3. Alte Container stoppen und entfernen
echo -e "${YELLOW}🛑 Stopping old containers...${NC}"
run_ssh "cd ${DEPLOY_PATH} && docker-compose down || true"
run_ssh "cd ${DEPLOY_PATH} && docker stop docuflux-kmu docuflux-handwerk docuflux-buchhaltung docuflux-beta || true"
run_ssh "cd ${DEPLOY_PATH} && docker rm docuflux-kmu docuflux-handwerk docuflux-buchhaltung docuflux-beta || true"
echo -e "${GREEN}✅ Old containers stopped${NC}"

# 4. Single Container Image bauen
echo -e "${YELLOW}🐳 Building single container image...${NC}"
run_ssh "cd ${DEPLOY_PATH} && docker build -f Dockerfile.all -t docuflux-all ."
echo -e "${GREEN}✅ Single container image built${NC}"

# 5. Single Container starten
echo -e "${YELLOW}🔄 Starting single container...${NC}"
run_ssh "cd ${DEPLOY_PATH} && docker-compose -f docker-compose-single.yml up -d"
echo -e "${GREEN}✅ Single container started${NC}"

# 6. Alte Images aufräumen
echo -e "${YELLOW}🧹 Cleaning up old images...${NC}"
run_ssh "docker image prune -f"
echo -e "${GREEN}✅ Cleanup completed${NC}"

# 7. Container-Status prüfen
echo -e "${YELLOW}🔍 Checking container status...${NC}"
run_ssh "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}' | grep docuflux || echo 'Container status:'"
run_ssh "docker logs docuflux-all --tail 10 || true"

echo ""
echo -e "${GREEN}🎉 Single Container Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}📍 All domains should now be served by one container:${NC}"
echo -e "  • https://kmu.docuflux.de"
echo -e "  • https://handwerk.docuflux.de"
echo -e "  • https://buchhaltung.docuflux.de"
echo -e "  • https://beta.docuflux.de"
echo ""
echo -e "${YELLOW}💡 Advantages of single container approach:${NC}"
echo -e "  • Simpler deployment and management"
echo -e "  • No container orchestration issues"
echo -e "  • Domain-based routing via nginx"
echo -e "  • Easier debugging and monitoring"
