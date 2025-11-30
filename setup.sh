#!/bin/bash

# Moroccan E-commerce Store Setup Script
# This script sets up the complete development environment

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "Docker and Docker Compose are installed"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js $(node -v) is installed"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p backend/data
    mkdir -p n8n/workflows
    mkdir -p logs
    
    print_success "Directories created"
}

# Install frontend dependencies
install_frontend() {
    print_status "Installing frontend dependencies..."
    
    cd frontend
    npm install
    
    print_success "Frontend dependencies installed"
    cd ..
}

# Install backend dependencies
install_backend() {
    print_status "Installing backend dependencies..."
    
    cd backend
    npm install
    
    print_success "Backend dependencies installed"
    cd ..
}

# Setup environment files
setup_environment() {
    print_status "Setting up environment files..."
    
    # Backend environment
    cat > backend/.env << EOF
NODE_ENV=development
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-super-secret-app-keys-change-in-production
API_TOKEN_SALT=your-super-secret-api-token-salt
ADMIN_JWT_SECRET=your-super-secret-admin-jwt-key-change-in-production
JWT_SECRET=your-super-secret-jwt-key-change-in-production
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=./data/app.db
EOF

    # Frontend environment
    cat > frontend/.env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

    print_success "Environment files created"
}

# Build and start Docker containers
start_docker() {
    print_status "Building and starting Docker containers..."
    
    docker-compose down
    docker-compose build
    docker-compose up -d
    
    print_success "Docker containers started"
}

# Wait for services to be ready
wait_for_services() {
    print_status "Waiting for services to be ready..."
    
    # Wait for Strapi
    print_status "Waiting for Strapi to be ready..."
    timeout=60
    while [ $timeout -gt 0 ]; do
        if curl -f http://localhost:1337/health &> /dev/null; then
            print_success "Strapi is ready"
            break
        fi
        sleep 2
        timeout=$((timeout-2))
    done
    
    if [ $timeout -le 0 ]; then
        print_warning "Strapi might not be fully ready yet"
    fi
    
    # Wait for n8n
    print_status "Waiting for n8n to be ready..."
    timeout=60
    while [ $timeout -gt 0 ]; do
        if curl -f http://localhost:5678 &> /dev/null; then
            print_success "n8n is ready"
            break
        fi
        sleep 2
        timeout=$((timeout-2))
    done
    
    if [ $timeout -le 0 ]; then
        print_warning "n8n might not be fully ready yet"
    fi
}

# Import sample data
import_data() {
    print_status "Importing sample data..."
    
    # This would typically be done through Strapi's admin interface
    # For now, we'll just note that the data is available
    print_success "Sample data is available in backend/data/products.json"
    print_status "Please visit http://localhost:1337/admin to set up Strapi and import the data"
}

# Display setup completion message
show_completion() {
    print_success "🎉 Setup completed successfully!"
    echo ""
    echo -e "${BLUE}🌐 Access Points:${NC}"
    echo -e "  Frontend (Next.js): ${GREEN}http://localhost:3000${NC}"
    echo -e "  Backend (Strapi):    ${GREEN}http://localhost:1337${NC}"
    echo -e "  Strapi Admin:        ${GREEN}http://localhost:1337/admin${NC}"
    echo -e "  n8n Automation:      ${GREEN}http://localhost:5678${NC}"
    echo ""
    echo -e "${BLUE}📋 Next Steps:${NC}"
    echo "  1. Visit http://localhost:1337/admin to set up Strapi"
    echo "  2. Create an admin account"
    echo "  3. Import sample data from backend/data/products.json"
    echo "  4. Visit http://localhost:3000 to see the store"
    echo "  5. Visit http://localhost:5678 to configure n8n workflows"
    echo ""
    echo -e "${BLUE}🔐 n8n Login:${NC}"
    echo "  Username: admin"
    echo "  Password: moroccan-store-2024"
    echo ""
    echo -e "${YELLOW}📝 Note:${NC} This is a development setup. For production, please:"
    echo "  - Change all default passwords and secrets"
    echo "  - Use proper environment variables"
    echo "  - Set up proper SSL certificates"
    echo "  - Configure proper backup strategies"
}

# Main setup function
main() {
    echo -e "${BLUE}🏪 Moroccan E-commerce Store Setup${NC}"
    echo "=================================="
    echo ""
    
    check_docker
    check_node
    create_directories
    install_frontend
    install_backend
    setup_environment
    start_docker
    wait_for_services
    import_data
    show_completion
}

# Handle script interruption
trap 'print_error "Setup interrupted"; exit 1' INT TERM

# Run main function
main "$@"