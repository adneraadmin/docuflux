#!/bin/bash

# Manual Deployment Script für Docuflux VPS
# Führt die gleichen Schritte aus wie GitHub Actions

set -euo pipefail

echo "🚀 Starting Docuflux Manual Deployment..."

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

echo -e "${BLUE}📋 Deployment Configuration:${NC}"
echo -e "  Host: ${VPS_HOST}"
echo -e "  User: ${VPS_USER}"
echo -e "  Path: ${DEPLOY_PATH}"
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
run_ssh "cd ${DEPLOY_PATH} && git pull origin master"
echo -e "${GREEN}✅ Repository updated${NC}"

# 3. Docker Images neu bauen
echo -e "${YELLOW}🐳 Building Docker images...${NC}"
run_ssh "cd ${DEPLOY_PATH} && docker build -f Dockerfile.kmu -t docuflux-kmu ."
run_ssh "cd ${DEPLOY_PATH} && docker build -f Dockerfile.handwerk -t docuflux-handwerk ."
run_ssh "cd ${DEPLOY_PATH} && docker build -f Dockerfile.buchhaltung -t docuflux-buchhaltung ."
run_ssh "cd ${DEPLOY_PATH} && docker build -f Dockerfile.beta -t docuflux-beta ."
echo -e "${GREEN}✅ Docker images built${NC}"

# 4. Container neu starten
echo -e "${YELLOW}🔄 Restarting containers...${NC}"
run_ssh "cd ${DEPLOY_PATH} && docker-compose up -d --force-recreate"
echo -e "${GREEN}✅ Containers restarted${NC}"

# 5. Alte Images aufräumen
echo -e "${YELLOW}🧹 Cleaning up old images...${NC}"
run_ssh "docker image prune -f"
echo -e "${GREEN}✅ Cleanup completed${NC}"

# 6. Deployment-Status prüfen
echo -e "${YELLOW}🔍 Checking deployment status...${NC}"
run_ssh "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}' | grep docuflux || echo 'No docuflux containers running'"

echo ""
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}📍 Your domains should now be live:${NC}"
echo -e "  • https://kmu.docuflux.de"
echo -e "  • https://handwerk.docuflux.de"
echo -e "  • https://buchhaltung.docuflux.de"
echo -e "  • https://beta.docuflux.de"
echo ""
echo -e "${YELLOW}💡 To run this script:${NC}"
echo -e "  chmod +x manual-deploy.sh"
echo -e "  ./manual-deploy.sh"
