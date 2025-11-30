# 🚀 Quick Start: GitHub & VPS Deployment

**Get your Abououways.ma website from local development to production in 5 steps!**

---

## ⚡ Super Quick Setup (5 Minutes)

### Step 1: Create GitHub Repository (1 min)

```bash
# Option A: Using GitHub CLI (fastest)
gh auth login
gh repo create abououways-ecommerce --private --description "Abououways.ma E-commerce"

# Option B: Use GitHub web interface
# Go to https://github.com/new
```

### Step 2: Push Your Code (1 min)

```bash
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/abououways-ecommerce.git

# Push code
git push -u origin main
```

### Step 3: Set Up VPS (2 min)

```bash
# SSH into your Hostinger VPS
ssh root@YOUR_VPS_IP

# Clone repository
cd /var/www
git clone https://github.com/YOUR_USERNAME/abououways-ecommerce.git abououways
cd abououways

# Create .env file (copy from .env.example or create new)
nano .env
# Add your configuration (see DEPLOYMENT.md for details)

# Start services
docker-compose up -d --build
```

### Step 4: Configure Domain (1 min)

```bash
# On VPS - Set up Nginx
sudo nano /etc/nginx/sites-available/abououways.ma
# Copy configuration from DEPLOYMENT.md

# Enable site
sudo ln -s /etc/nginx/sites-available/abououways.ma /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL
sudo certbot --nginx -d abououways.ma -d www.abououways.ma
```

### Step 5: Test Everything (30 sec)

```bash
# Visit your website
https://abououways.ma

# Check services
docker-compose ps
```

**🎉 Done! Your website is live!**

---

## 📋 Daily Workflow

### Making Changes

```bash
# 1. Edit files locally
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website
# ... make your changes ...

# 2. Commit and push
git add .
git commit -m "Update product images"
git push origin main

# 3. Deploy to VPS
ssh root@YOUR_VPS_IP
cd /var/www/abououways
./deploy.sh
```

**Or use GitHub Actions for automatic deployment!**

---

## 🔧 Essential Commands

### Local Development

```bash
# Start development server
cd frontend
npm run dev

# Build for production
npm run build
```

### VPS Management

```bash
# Deploy latest changes
./deploy.sh

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Create backup
./backup.sh
```

### Git Commands

```bash
# Check status
git status

# Pull latest changes
git pull origin main

# Push changes
git add .
git commit -m "Your message"
git push origin main
```

---

## 🆘 Quick Troubleshooting

### Can't push to GitHub?

```bash
# Use SSH instead
git remote set-url origin git@github.com:YOUR_USERNAME/abououways-ecommerce.git
```

### Services not starting on VPS?

```bash
# Check logs
docker-compose logs

# Rebuild
docker-compose down
docker-compose up -d --build
```

### Website not accessible?

```bash
# Check Nginx
sudo nginx -t
sudo systemctl status nginx

# Check firewall
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

---

## 📚 Full Documentation

- **GitHub Setup**: See `GITHUB_SETUP.md`
- **VPS Deployment**: See `DEPLOYMENT.md`
- **Project Info**: See `README.md`

---

## 🎯 Next Steps

1. ✅ Set up automated backups (see DEPLOYMENT.md)
2. ✅ Configure GitHub Actions for auto-deployment
3. ✅ Add team members to repository
4. ✅ Set up monitoring and alerts
5. ✅ Configure email notifications

---

**Need Help?** 
- 📧 Email: info@abououways.ma
- 📖 Docs: Check GITHUB_SETUP.md and DEPLOYMENT.md
- 🐛 Issues: https://github.com/YOUR_USERNAME/abououways-ecommerce/issues

---

**Last Updated**: November 30, 2025
