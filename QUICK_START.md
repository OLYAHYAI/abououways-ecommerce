# 🚀 Quick Start Guide - Moroccan E-commerce Store

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop)
- **Git** - [Download here](https://git-scm.com/)

## ⚡ Quick Setup (5 minutes)

### Option 1: Automated Setup (Recommended)

```bash
# Clone or navigate to the project directory
cd ecom_website

# Run the automated setup script
./setup.sh
```

The script will:
- ✅ Check all prerequisites
- ✅ Install all dependencies
- ✅ Set up environment files
- ✅ Start all services with Docker
- ✅ Wait for services to be ready

### Option 2: Manual Setup

#### Step 1: Install Dependencies

```bash
# Frontend dependencies
cd frontend
npm install
cd ..

# Backend dependencies
cd backend
npm install
cd ..
```

#### Step 2: Start Services with Docker

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps
```

#### Step 3: Wait for Services

Wait 2-3 minutes for all services to start up completely.

## 🌐 Access Points

Once setup is complete, you can access:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | Next.js e-commerce store |
| **Backend API** | http://localhost:1337 | Strapi CMS API |
| **Strapi Admin** | http://localhost:1337/admin | Content management |
| **n8n Automation** | http://localhost:5678 | Workflow automation |

## 🔐 Default Credentials

### n8n Login
- **Username:** `admin`
- **Password:** `moroccan-store-2024`

### Strapi Admin
- Create your own admin account on first visit

## 📝 Initial Configuration

### 1. Set Up Strapi

1. Visit http://localhost:1337/admin
2. Create your admin account
3. Configure content types (Products, Artisans, Categories)
4. Import sample data from `backend/data/products.json`

### 2. Configure n8n Workflows

1. Visit http://localhost:5678
2. Login with the credentials above
3. Import the order processing workflow from `n8n/workflows/order-processing.json`
4. Test the workflow with sample data

### 3. Test the Store

1. Visit http://localhost:3000
2. Browse products
3. Add items to cart
4. Complete a test order
5. Check n8n for workflow execution

## 🛠️ Development Commands

### Frontend (Next.js)
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linting
```

### Backend (Strapi)
```bash
cd backend
npm run develop      # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Docker Services
```bash
docker-compose up -d          # Start all services
docker-compose down           # Stop all services
docker-compose logs -f        # View logs
docker-compose ps             # Check status
```

## 📊 Sample Data

The store includes sample data for:

- **6 Products:** Qandouras and نعال
- **6 Artisans:** Traditional Moroccan craftsmen
- **2 Categories:** Product categories

All data is in Arabic with RTL support.

## 🎨 Features Included

### ✅ Week 1-2 Foundation Features
- [x] Next.js frontend with Arabic RTL support
- [x] Strapi CMS backend
- [x] Product catalog with Arabic content
- [x] Shopping cart functionality
- [x] Order processing simulation
- [x] Moroccan-inspired design
- [x] Mobile responsive layout
- [x] n8n workflow integration

### 🔄 n8n Automation Workflows
- [x] Order validation
- [x] Inventory checking
- [x] Customer notifications
- [x] Artisan notifications
- [x] Analytics updates
- [x] Order logging

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
lsof -i :3000  # or 1337, 5678

# Kill the process
kill -9 <PID>
```

#### Docker Issues
```bash
# Reset Docker
docker-compose down -v
docker system prune -f
docker-compose up -d
```

#### Node Modules Issues
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Strapi Database Issues
```bash
# Reset Strapi database
cd backend
rm -rf data/.tmp
npm run develop
```

### Getting Help

1. Check the logs: `docker-compose logs -f`
2. Verify all services are running: `docker-compose ps`
3. Check browser console for frontend errors
4. Check network tab for API errors

## 📚 Next Steps

### For Production Deployment

1. **Security:**
   - Change all default passwords
   - Use environment variables for secrets
   - Enable HTTPS/SSL

2. **Performance:**
   - Optimize images
   - Enable caching
   - Use CDN for static assets

3. **Monitoring:**
   - Set up error tracking
   - Monitor performance
   - Set up backups

### Future Features (Weeks 3-12)

- Enhanced product catalog
- Real payment integration
- AR try-on feature
- Social media integration
- Advanced analytics
- Mobile app

## 📞 Support

If you encounter any issues:

1. Check this guide first
2. Review the logs
3. Check the main README.md
4. Create an issue with details

---

**🎉 Enjoy your Moroccan e-commerce store!**