#!/bin/bash

# Backup Script for Abououways.ma
# This script creates backups of the database and important files

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration
BACKUP_DIR="/var/backups/abououways"
PROJECT_DIR="/var/www/abououways"
DATE=$(date +%Y%m%d_%H%M%S)
LOG_FILE="/var/log/abououways-backup.log"

# Create backup directory
mkdir -p "$BACKUP_DIR"

log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

log "💾 Starting backup process..."

# Navigate to project directory
cd "$PROJECT_DIR" || error "Project directory not found"

# Backup Strapi database
log "📦 Backing up Strapi database..."
if docker-compose ps backend | grep -q "Up"; then
    docker-compose exec -T backend tar czf - /app/.tmp > "$BACKUP_DIR/strapi_db_$DATE.tar.gz" || error "Strapi backup failed"
    log "Strapi database backed up: strapi_db_$DATE.tar.gz"
else
    log "⚠️  Backend service not running, skipping Strapi backup"
fi

# Backup n8n data
log "📦 Backing up n8n data..."
if docker-compose ps n8n | grep -q "Up"; then
    docker-compose exec -T n8n tar czf - /home/node/.n8n > "$BACKUP_DIR/n8n_data_$DATE.tar.gz" || error "n8n backup failed"
    log "n8n data backed up: n8n_data_$DATE.tar.gz"
else
    log "⚠️  n8n service not running, skipping n8n backup"
fi

# Backup environment files
log "📦 Backing up environment files..."
tar czf "$BACKUP_DIR/env_files_$DATE.tar.gz" .env docker-compose.yml 2>/dev/null || log "⚠️  Some environment files not found"

# Backup uploaded files (if any)
if [ -d "backend/public/uploads" ]; then
    log "📦 Backing up uploaded files..."
    tar czf "$BACKUP_DIR/uploads_$DATE.tar.gz" backend/public/uploads || log "⚠️  Upload backup failed"
fi

# Create a manifest file
log "📝 Creating backup manifest..."
cat > "$BACKUP_DIR/manifest_$DATE.txt" << EOF
Backup Date: $(date)
Backup Location: $BACKUP_DIR
Project Directory: $PROJECT_DIR

Files Backed Up:
- strapi_db_$DATE.tar.gz
- n8n_data_$DATE.tar.gz
- env_files_$DATE.tar.gz
- uploads_$DATE.tar.gz (if exists)

Git Commit: $(git rev-parse HEAD)
Git Branch: $(git rev-parse --abbrev-ref HEAD)

Docker Images:
$(docker-compose images)

Service Status:
$(docker-compose ps)
EOF

# Calculate backup sizes
log "📊 Backup sizes:"
du -h "$BACKUP_DIR"/*_$DATE.* 2>/dev/null | while read size file; do
    log "   $(basename "$file"): $size"
done

# Keep only last 7 days of backups
log "🗑️  Removing backups older than 7 days..."
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +7 -delete
find "$BACKUP_DIR" -name "manifest_*.txt" -mtime +7 -delete

# Count remaining backups
BACKUP_COUNT=$(ls -1 "$BACKUP_DIR"/strapi_db_*.tar.gz 2>/dev/null | wc -l)
log "📦 Total backups retained: $BACKUP_COUNT"

log "✅ Backup completed successfully!"
log "Backup location: $BACKUP_DIR"

exit 0
