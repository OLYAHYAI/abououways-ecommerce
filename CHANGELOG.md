# Changelog

All notable changes to the Abououways.ma e-commerce project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-11-30

### 🎉 Initial Release

#### Added

**Frontend Features:**
- ✅ Next.js 14 frontend with full Arabic and French language support
- ✅ Bilingual toggle system with RTL (Arabic) and LTR (French) layouts
- ✅ Language context with localStorage persistence
- ✅ Comprehensive translation system (`translations.js`)
- ✅ New Abououways.ma branding and logo
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Product catalog with filtering and search
- ✅ Shopping cart functionality
- ✅ Checkout process simulation
- ✅ About page with artisan profiles
- ✅ Moroccan-inspired design theme (Red, Blue, Gold colors)

**Backend Features:**
- ✅ Strapi CMS for content management
- ✅ Product management system
- ✅ SQLite database (production-ready for PostgreSQL)
- ✅ RESTful API endpoints
- ✅ Admin panel for content management

**Automation:**
- ✅ n8n workflow integration
- ✅ Order processing automation
- ✅ Email notification system (ready for configuration)

**DevOps & Deployment:**
- ✅ Docker containerization for all services
- ✅ Docker Compose orchestration
- ✅ Automated deployment script (`deploy.sh`)
- ✅ Automated backup script (`backup.sh`)
- ✅ GitHub Actions CI/CD workflows
- ✅ Nginx reverse proxy configuration
- ✅ SSL/TLS certificate setup with Certbot
- ✅ VPS deployment documentation

**Documentation:**
- ✅ Comprehensive README.md
- ✅ GitHub setup guide (GITHUB_SETUP.md)
- ✅ VPS deployment guide (DEPLOYMENT.md)
- ✅ Quick start guide (QUICK_START_GITHUB.md)
- ✅ This changelog

**Product Categories:**
- ✅ Gandoura (القندورة) - Traditional Moroccan robes
- ✅ Authentic Leather Shoes (أحذية جلد أصيل)

#### Changed

- 🔄 Updated domain from generic "Moroccan Store" to **Abououways.ma**
- 🔄 Changed product category from "Babouche" to "Authentic Leather Shoes"
- 🔄 Updated all branding, meta tags, and contact information
- 🔄 Redesigned header with new logo and language toggle
- 🔄 Updated footer with Abououways.ma branding

#### Technical Details

**Frontend Stack:**
- Next.js 14.0.4
- React 18.2.0
- Styled Components 6.1.6
- Axios 1.6.2
- Framer Motion 10.16.16

**Backend Stack:**
- Strapi CMS
- Node.js 18+
- SQLite (development) / PostgreSQL (production ready)

**Infrastructure:**
- Docker & Docker Compose
- Nginx reverse proxy
- n8n automation platform
- Certbot for SSL certificates

**Deployment:**
- Hostinger VPS
- GitHub for version control
- GitHub Actions for CI/CD
- Automated deployment and backup scripts

---

## [Unreleased]

### Planned Features

**Phase 1 (Weeks 3-6):**
- [ ] Enhanced product catalog with advanced filtering
- [ ] Real payment gateway integration (Stripe/PayPal)
- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Improved mobile responsiveness

**Phase 2 (Weeks 7-10):**
- [ ] Virtual try-on feature (AR)
- [ ] Advanced n8n automation workflows
- [ ] Social media integration
- [ ] Newsletter subscription
- [ ] Live chat support
- [ ] Multi-currency support
- [ ] Inventory management system

**Phase 3 (Weeks 11-12):**
- [ ] Beta testing program
- [ ] Marketing campaign integration
- [ ] Performance monitoring and analytics
- [ ] SEO optimization
- [ ] A/B testing framework
- [ ] Customer feedback system

---

## Version History

### Version Numbering

- **Major version** (1.x.x): Breaking changes or major feature releases
- **Minor version** (x.1.x): New features, backward compatible
- **Patch version** (x.x.1): Bug fixes and minor improvements

### Release Schedule

- **Major releases**: Quarterly
- **Minor releases**: Monthly
- **Patch releases**: As needed

---

## Migration Guide

### From Development to Production

1. Update environment variables in `.env`
2. Switch database from SQLite to PostgreSQL
3. Configure email SMTP settings
4. Set up payment gateway credentials
5. Configure domain and SSL certificates
6. Run deployment script on VPS

See `DEPLOYMENT.md` for detailed instructions.

---

## Contributors

- **f4blox** - Initial development and deployment
- **glm agent** - Website modifications and bilingual implementation

---

## Support

For questions, issues, or feature requests:

- **Email**: info@abououways.ma
- **GitHub Issues**: https://github.com/YOUR_USERNAME/abououways-ecommerce/issues
- **Documentation**: See README.md, DEPLOYMENT.md, and GITHUB_SETUP.md

---

**Last Updated**: November 30, 2025
