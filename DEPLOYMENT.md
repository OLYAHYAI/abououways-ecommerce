# Deployment Guide for Abououways.ma

## 🚀 VPS Deployment to Hostinger

This guide will help you deploy the Abououways.ma e-commerce website to your Hostinger VPS with n8n integration.

---

## 📋 Prerequisites

- Hostinger VPS with SSH access
- Domain: **Abououways.ma** pointed to your VPS IP
- Node.js 18+ installed on VPS
- Docker and Docker Compose installed on VPS
- Git installed on VPS
- GitHub account with repository access

---

## 🔧 Initial VPS Setup

### 1. Connect to Your VPS

```bash
ssh root@your-vps-ip
# Or use your Hostinger credentials
```

### 2. Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Git
sudo apt install -y git

# Install Nginx (for reverse proxy)
sudo apt install -y nginx

# Install Certbot (for SSL)
sudo apt install -y certbot python3-certbot-nginx
```

### 3. Create Application Directory

```bash
# Create directory for the application
sudo mkdir -p /var/www/abououways
sudo chown -R $USER:$USER /var/www/abououways
cd /var/www/abououways
```

---

## 📦 GitHub Repository Setup

### 1. Create GitHub Repository

On your local machine:

```bash
# Navigate to project directory
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Abououways.ma e-commerce website with bilingual support"

# Create repository on GitHub (via web interface or gh CLI)
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/abououways-ecommerce.git
git push -u origin main
```

### 2. Clone Repository on VPS

On your VPS:

```bash
cd /var/www/abououways
git clone https://github.com/YOUR_USERNAME/abououways-ecommerce.git .

# Or use SSH if you have keys set up
git clone git@github.com:YOUR_USERNAME/abououways-ecommerce.git .
```

---

## 🔐 Environment Configuration

### 1. Create Environment Files

Create `.env` file in the root directory:

```bash
cat > .env << 'EOF'
# Node Environment
NODE_ENV=production

# Frontend Configuration
NEXT_PUBLIC_API_URL=https://api.abououways.ma
NEXT_PUBLIC_SITE_URL=https://abououways.ma

# Backend Configuration (Strapi)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your-super-secret-jwt-key-change-this
ADMIN_JWT_SECRET=your-super-secret-admin-jwt-key-change-this
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3
API_TOKEN_SALT=your-api-token-salt

# n8n Configuration
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your-secure-password
N8N_HOST=n8n.abououways.ma
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://n8n.abououways.ma/

# Email Configuration (for n8n)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=info@abououways.ma
SMTP_PASSWORD=your-email-password
SMTP_FROM=info@abououways.ma

# Database (if using PostgreSQL instead of SQLite)
# DATABASE_CLIENT=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=abououways_db
# DATABASE_USERNAME=abououways_user
# DATABASE_PASSWORD=your-database-password
EOF
```

**⚠️ IMPORTANT**: Change all secret keys and passwords!

### 2. Generate Secret Keys

```bash
# Generate random secrets
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## 🐳 Docker Deployment

### 1. Build and Start Services

```bash
# Build and start all services
docker-compose up -d --build

# Check if services are running
docker-compose ps

# View logs
docker-compose logs -f
```

### 2. Verify Services

- Frontend: http://your-vps-ip:3000
- Backend (Strapi): http://your-vps-ip:1337
- n8n: http://your-vps-ip:5678

---

## 🌐 Nginx Configuration

### 1. Create Nginx Configuration for Main Site

```bash
sudo nano /etc/nginx/sites-available/abououways.ma
```

Add the following configuration:

```nginx
# Frontend - Main Website
server {
    listen 80;
    server_name abououways.ma www.abououways.ma;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Backend API - Strapi
server {
    listen 80;
    server_name api.abououways.ma;

    client_max_body_size 50M;

    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# n8n Automation
server {
    listen 80;
    server_name n8n.abououways.ma;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 2. Enable Site and Restart Nginx

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/abououways.ma /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## 🔒 SSL Certificate Setup

### 1. Install SSL Certificates

```bash
# Install certificates for all domains
sudo certbot --nginx -d abououways.ma -d www.abououways.ma -d api.abououways.ma -d n8n.abououways.ma

# Follow the prompts and select option 2 to redirect HTTP to HTTPS
```

### 2. Auto-Renewal Setup

```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Certbot automatically sets up a cron job for renewal
```

---

## 🔄 Deployment Workflow

### Method 1: Manual Deployment

```bash
# On VPS
cd /var/www/abououways

# Pull latest changes
git pull origin main

# Rebuild and restart services
docker-compose down
docker-compose up -d --build

# Or without downtime
docker-compose up -d --build --no-deps frontend backend
```

### Method 2: Automated Deployment Script

Create a deployment script:

```bash
nano /var/www/abououways/deploy.sh
```

Add the following:

```bash
#!/bin/bash

set -e

echo "🚀 Starting deployment for Abououways.ma..."

# Navigate to project directory
cd /var/www/abououways

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Rebuild and restart services
echo "🐳 Rebuilding Docker containers..."
docker-compose down
docker-compose up -d --build

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 10

# Check service status
echo "✅ Checking service status..."
docker-compose ps

echo "🎉 Deployment complete!"
echo "Frontend: https://abououways.ma"
echo "Backend: https://api.abououways.ma"
echo "n8n: https://n8n.abououways.ma"
```

Make it executable:

```bash
chmod +x /var/www/abououways/deploy.sh
```

Run deployment:

```bash
./deploy.sh
```

---

## 📤 Pushing Changes from Local to VPS

### Workflow:

1. **Make changes locally** in `/home/f4blox/Desktop/Gemini/opencode/ecom_website`

2. **Commit and push to GitHub**:
   ```bash
   cd /home/f4blox/Desktop/Gemini/opencode/ecom_website
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. **Deploy on VPS**:
   ```bash
   ssh root@your-vps-ip
   cd /var/www/abououways
   ./deploy.sh
   ```

---

## 🔍 Monitoring and Logs

### View Docker Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f n8n
```

### View Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### Check Service Status

```bash
# Docker services
docker-compose ps

# Nginx
sudo systemctl status nginx

# System resources
htop
```

---

## 🛠️ Troubleshooting

### Services Not Starting

```bash
# Check Docker logs
docker-compose logs

# Restart services
docker-compose restart

# Rebuild from scratch
docker-compose down -v
docker-compose up -d --build
```

### Port Already in Use

```bash
# Check what's using the port
sudo lsof -i :3000
sudo lsof -i :1337
sudo lsof -i :5678

# Kill the process
sudo kill -9 <PID>
```

### Nginx Configuration Issues

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Renew certificates manually
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

---

## 🔄 Backup Strategy

### 1. Database Backup

```bash
# Create backup script
cat > /var/www/abououways/backup.sh << 'EOF'
#!/bin/bash

BACKUP_DIR="/var/backups/abououways"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup Strapi database
docker-compose exec -T backend tar czf - /app/.tmp > $BACKUP_DIR/strapi_db_$DATE.tar.gz

# Backup n8n data
docker-compose exec -T n8n tar czf - /home/node/.n8n > $BACKUP_DIR/n8n_data_$DATE.tar.gz

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /var/www/abououways/backup.sh
```

### 2. Automated Backups with Cron

```bash
# Edit crontab
crontab -e

# Add daily backup at 2 AM
0 2 * * * /var/www/abououways/backup.sh >> /var/log/abououways-backup.log 2>&1
```

### 3. GitHub as Third Backup

Your code is automatically backed up on GitHub. For data:

```bash
# Backup to GitHub (create a private repo for backups)
git clone https://github.com/YOUR_USERNAME/abououways-backups.git /var/backups/abououways-git
cp -r /var/backups/abououways/* /var/backups/abououways-git/
cd /var/backups/abououways-git
git add .
git commit -m "Backup $(date +%Y%m%d_%H%M%S)"
git push origin main
```

---

## 📊 Performance Optimization

### 1. Enable Gzip Compression in Nginx

Add to your Nginx configuration:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

### 2. Enable Caching

```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. Monitor Resources

```bash
# Install monitoring tools
sudo apt install -y htop iotop nethogs

# Monitor in real-time
htop
```

---

## 🔐 Security Best Practices

1. **Firewall Configuration**:
   ```bash
   sudo ufw allow 22/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

2. **Disable Root Login**:
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart sshd
   ```

3. **Regular Updates**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Use Strong Passwords** for all services

5. **Enable n8n Basic Auth** (already configured in .env)

---

## 📞 Support

- **Email**: info@abououways.ma
- **Website**: https://abououways.ma
- **GitHub Issues**: https://github.com/YOUR_USERNAME/abououways-ecommerce/issues

---

## ✅ Deployment Checklist

- [ ] VPS set up with required software
- [ ] Domain DNS configured
- [ ] GitHub repository created and cloned
- [ ] Environment variables configured
- [ ] Docker services running
- [ ] Nginx configured and running
- [ ] SSL certificates installed
- [ ] Backup system configured
- [ ] Monitoring set up
- [ ] Security hardening complete
- [ ] Test all functionality
- [ ] Document any custom configurations

---

**Last Updated**: November 30, 2025
**Version**: 1.0.0
