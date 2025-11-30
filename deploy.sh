#!/bin/bash

# Deployment Script for Abououways.ma
# This script automates the deployment process on the VPS

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/var/www/abououways"
BACKUP_DIR="/var/backups/abououways"
LOG_FILE="/var/log/abououways-deploy.log"

# Functions
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Check if running as root or with sudo
if [ "$EUID" -eq 0 ]; then 
    warning "Running as root. Consider using a non-root user with sudo privileges."
fi

# Start deployment
log "🚀 Starting deployment for Abououways.ma..."

# Navigate to project directory
if [ ! -d "$PROJECT_DIR" ]; then
    error "Project directory not found: $PROJECT_DIR"
fi

cd "$PROJECT_DIR" || error "Failed to navigate to project directory"

# Create backup before deployment
log "💾 Creating backup before deployment..."
mkdir -p "$BACKUP_DIR"
BACKUP_NAME="backup_$(date +%Y%m%d_%H%M%S).tar.gz"

if docker-compose ps | grep -q "Up"; then
    docker-compose exec -T backend tar czf - /app/.tmp > "$BACKUP_DIR/$BACKUP_NAME" 2>/dev/null || warning "Backup creation failed"
    log "Backup created: $BACKUP_DIR/$BACKUP_NAME"
else
    warning "Services not running, skipping backup"
fi

# Pull latest changes from GitHub
log "📥 Pulling latest changes from GitHub..."
git fetch origin
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
log "Current branch: $CURRENT_BRANCH"

if git pull origin "$CURRENT_BRANCH"; then
    log "Successfully pulled latest changes"
else
    error "Failed to pull changes from GitHub"
fi

# Check if docker-compose.yml exists
if [ ! -f "docker-compose.yml" ]; then
    error "docker-compose.yml not found"
fi

# Stop services gracefully
log "🛑 Stopping services..."
docker-compose down || warning "Failed to stop some services"

# Build and start services
log "🐳 Building and starting Docker containers..."
if docker-compose up -d --build; then
    log "Docker containers started successfully"
else
    error "Failed to start Docker containers"
fi

# Wait for services to be healthy
log "⏳ Waiting for services to start..."
sleep 15

# Check service status
log "✅ Checking service status..."
docker-compose ps

# Verify services are running
FRONTEND_STATUS=$(docker-compose ps frontend | grep -c "Up" || echo "0")
BACKEND_STATUS=$(docker-compose ps backend | grep -c "Up" || echo "0")

if [ "$FRONTEND_STATUS" -eq 0 ]; then
    error "Frontend service failed to start"
fi

if [ "$BACKEND_STATUS" -eq 0 ]; then
    error "Backend service failed to start"
fi

# Test frontend endpoint
log "🔍 Testing frontend endpoint..."
if curl -f -s -o /dev/null http://localhost:3000; then
    log "Frontend is responding"
else
    warning "Frontend is not responding on port 3000"
fi

# Test backend endpoint
log "🔍 Testing backend endpoint..."
if curl -f -s -o /dev/null http://localhost:1337; then
    log "Backend is responding"
else
    warning "Backend is not responding on port 1337"
fi

# Reload Nginx
if command -v nginx &> /dev/null; then
    log "🔄 Reloading Nginx..."
    sudo systemctl reload nginx || warning "Failed to reload Nginx"
fi

# Clean up old Docker images
log "🧹 Cleaning up old Docker images..."
docker image prune -f || warning "Failed to clean up Docker images"

# Keep only last 7 backups
log "🗑️  Removing old backups (keeping last 7)..."
cd "$BACKUP_DIR" || warning "Backup directory not found"
ls -t backup_*.tar.gz 2>/dev/null | tail -n +8 | xargs -r rm -f

# Display deployment summary
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "🎉 Deployment completed successfully!"
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log ""
log "📊 Service URLs:"
log "   Frontend:  https://abououways.ma"
log "   Backend:   https://api.abououways.ma"
log "   n8n:       https://n8n.abououways.ma"
log ""
log "📝 Logs:"
log "   Deployment: $LOG_FILE"
log "   Docker:     docker-compose logs -f"
log ""
log "💾 Backup:"
log "   Location:   $BACKUP_DIR/$BACKUP_NAME"
log ""
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

exit 0
