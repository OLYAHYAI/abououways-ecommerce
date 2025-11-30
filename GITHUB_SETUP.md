# GitHub Setup Guide for Abououways.ma

This guide will help you set up GitHub for your e-commerce website, enabling version control, collaboration, and automated deployments.

---

## 📋 Table of Contents

1. [Create GitHub Repository](#create-github-repository)
2. [Initial Commit and Push](#initial-commit-and-push)
3. [Configure GitHub Secrets](#configure-github-secrets)
4. [Set Up SSH Keys](#set-up-ssh-keys)
5. [GitHub Actions CI/CD](#github-actions-cicd)
6. [Branch Strategy](#branch-strategy)
7. [Collaboration Workflow](#collaboration-workflow)
8. [Backup Strategy](#backup-strategy)

---

## 🚀 Create GitHub Repository

### Option 1: Using GitHub Web Interface

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click** the "+" icon in the top right corner
4. **Select** "New repository"
5. **Fill in the details**:
   - **Repository name**: `abououways-ecommerce`
   - **Description**: `E-commerce website for Abououways.ma - Traditional Moroccan Gandoura and Leather Shoes`
   - **Visibility**: Choose **Private** (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. **Click** "Create repository"

### Option 2: Using GitHub CLI

```bash
# Install GitHub CLI (if not already installed)
# For Ubuntu/Debian:
sudo apt install gh

# For macOS:
brew install gh

# Authenticate
gh auth login

# Create repository
gh repo create abououways-ecommerce --private --description "E-commerce website for Abououways.ma"
```

---

## 📤 Initial Commit and Push

### 1. Verify Git is Initialized

```bash
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website

# Check git status
git status
```

### 2. Review Files to be Committed

```bash
# See what will be committed
git status

# Review .gitignore to ensure sensitive files are excluded
cat .gitignore
```

### 3. Add All Files

```bash
# Add all files
git add .

# Verify what's staged
git status
```

### 4. Create Initial Commit

```bash
# Create commit with descriptive message
git commit -m "Initial commit: Abououways.ma e-commerce website

- Bilingual support (Arabic/French)
- Next.js frontend with RTL/LTR support
- Strapi CMS backend
- n8n automation integration
- Docker deployment configuration
- Product categories: Gandoura and Leather Shoes
- New branding and logo for Abououways.ma"
```

### 5. Add Remote Repository

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/abououways-ecommerce.git

# Verify remote
git remote -v
```

### 6. Push to GitHub

```bash
# Push to main branch
git push -u origin main
```

**If you encounter authentication issues**, you may need to use a Personal Access Token (PAT):

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use the token as your password when pushing

**Or use SSH** (recommended - see [Set Up SSH Keys](#set-up-ssh-keys))

---

## 🔐 Configure GitHub Secrets

For automated deployments, you need to configure secrets in your GitHub repository.

### 1. Navigate to Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**

### 2. Add Required Secrets

Add the following secrets:

#### VPS_SSH_KEY
- **Name**: `VPS_SSH_KEY`
- **Value**: Your private SSH key (see [Set Up SSH Keys](#set-up-ssh-keys))

#### VPS_HOST
- **Name**: `VPS_HOST`
- **Value**: Your VPS IP address or hostname (e.g., `123.456.789.012` or `vps.abououways.ma`)

#### VPS_USER
- **Name**: `VPS_USER`
- **Value**: Your VPS username (e.g., `root` or `abououways`)

#### VPS_PATH
- **Name**: `VPS_PATH`
- **Value**: Path to your project on VPS (e.g., `/var/www/abououways`)

---

## 🔑 Set Up SSH Keys

SSH keys allow secure, password-less authentication between your local machine, GitHub, and your VPS.

### 1. Generate SSH Key Pair (if you don't have one)

**On your local machine**:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "info@abououways.ma" -f ~/.ssh/abououways_vps

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to SSH agent
ssh-add ~/.ssh/abououways_vps
```

### 2. Add Public Key to VPS

```bash
# Copy public key to VPS
ssh-copy-id -i ~/.ssh/abououways_vps.pub root@YOUR_VPS_IP

# Or manually:
cat ~/.ssh/abououways_vps.pub
# Then paste the output into /root/.ssh/authorized_keys on your VPS
```

### 3. Add Public Key to GitHub

```bash
# Display public key
cat ~/.ssh/abououways_vps.pub
```

1. Copy the output
2. Go to GitHub Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste the public key
5. Give it a title (e.g., "Abououways Development Machine")
6. Click "Add SSH key"

### 4. Update Git Remote to Use SSH

```bash
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website

# Change remote URL to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/abououways-ecommerce.git

# Verify
git remote -v
```

### 5. Add Private Key to GitHub Secrets

```bash
# Display private key
cat ~/.ssh/abououways_vps
```

Copy the entire output (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`) and add it as the `VPS_SSH_KEY` secret in GitHub.

---

## 🤖 GitHub Actions CI/CD

Your repository now includes two GitHub Actions workflows:

### 1. Test and Build Workflow (`.github/workflows/test.yml`)

**Triggers**: On pull requests to `main` and pushes to `develop`

**Actions**:
- Tests frontend build
- Tests backend setup
- Tests Docker image builds

**Purpose**: Ensures code quality before merging

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)

**Triggers**: On pushes to `main` branch or manual trigger

**Actions**:
- Connects to VPS via SSH
- Pulls latest code
- Runs deployment script
- Restarts services

**Purpose**: Automates deployment to production

### Manual Deployment Trigger

You can manually trigger a deployment:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to VPS** workflow
4. Click **Run workflow**
5. Select branch and click **Run workflow**

---

## 🌿 Branch Strategy

### Recommended Branch Structure

```
main (production)
  ↑
develop (staging)
  ↑
feature/* (new features)
bugfix/* (bug fixes)
hotfix/* (urgent production fixes)
```

### Create Branches

```bash
# Create and switch to develop branch
git checkout -b develop
git push -u origin develop

# Create feature branch
git checkout -b feature/new-payment-gateway
git push -u origin feature/new-payment-gateway

# Create bugfix branch
git checkout -b bugfix/cart-calculation
git push -u origin bugfix/cart-calculation
```

### Branch Protection Rules

1. Go to repository **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
5. Click **Create**

---

## 👥 Collaboration Workflow

### For Team Members

#### 1. Clone Repository

```bash
git clone git@github.com:YOUR_USERNAME/abououways-ecommerce.git
cd abououways-ecommerce
```

#### 2. Create Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/add-wishlist
```

#### 3. Make Changes and Commit

```bash
# Make your changes
# ...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add wishlist feature

- Add wishlist page
- Add wishlist context
- Add wishlist icon to header
- Add product to wishlist functionality"
```

#### 4. Push and Create Pull Request

```bash
# Push to GitHub
git push -u origin feature/add-wishlist
```

Then on GitHub:
1. Go to repository
2. Click **Pull requests** → **New pull request**
3. Select your branch
4. Fill in description
5. Click **Create pull request**

#### 5. Code Review and Merge

- Team members review the code
- Make requested changes if needed
- Once approved, merge to `develop` or `main`

---

## 💾 Backup Strategy

### Three-Tier Backup System

#### 1. **GitHub (Code Backup)**

Your code is automatically backed up on GitHub with full version history.

```bash
# View commit history
git log --oneline

# Restore to previous version if needed
git checkout <commit-hash>
```

#### 2. **VPS Local Backups**

Automated daily backups on your VPS (configured in `backup.sh`):

```bash
# On VPS
cd /var/www/abououways
./backup.sh

# Backups stored in: /var/backups/abououways
```

#### 3. **GitHub Backup Repository** (Optional)

Create a separate private repository for data backups:

```bash
# On VPS
gh repo create abououways-backups --private

# Clone backup repo
git clone git@github.com:YOUR_USERNAME/abououways-backups.git /var/backups/abououways-git

# Add to cron for automated backup
crontab -e

# Add this line (daily at 3 AM):
0 3 * * * cd /var/backups/abououways-git && cp -r /var/backups/abououways/* . && git add . && git commit -m "Backup $(date +\%Y\%m\%d)" && git push origin main
```

---

## 🔄 Daily Workflow

### On Your Local Machine

```bash
# 1. Start your day - update local repository
cd /home/f4blox/Desktop/Gemini/opencode/ecom_website
git checkout main
git pull origin main

# 2. Create feature branch for your work
git checkout -b feature/update-product-images

# 3. Make changes to files
# ... edit files ...

# 4. Test locally
cd frontend
npm run dev

# 5. Commit changes
git add .
git commit -m "Update product images with higher resolution"

# 6. Push to GitHub
git push -u origin feature/update-product-images

# 7. Create Pull Request on GitHub
# ... or merge directly to main if you're working alone ...

# 8. Deployment happens automatically via GitHub Actions
# Or manually trigger deployment from GitHub Actions tab
```

### Quick Updates (Direct to Main)

If you're working alone and want to push directly:

```bash
# Make changes
git add .
git commit -m "Update homepage hero image"
git push origin main

# GitHub Actions will automatically deploy to VPS
```

---

## 🛠️ Useful Git Commands

### Check Status

```bash
# See current status
git status

# See commit history
git log --oneline --graph --all

# See changes
git diff
```

### Undo Changes

```bash
# Discard changes in working directory
git checkout -- <file>

# Unstage file
git reset HEAD <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Sync with Remote

```bash
# Fetch changes from remote
git fetch origin

# Pull changes from remote
git pull origin main

# Push changes to remote
git push origin main
```

### Branch Management

```bash
# List branches
git branch -a

# Switch branch
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <new-branch>

# Delete branch
git branch -d <branch-name>

# Delete remote branch
git push origin --delete <branch-name>
```

---

## 🔍 Troubleshooting

### Authentication Failed

**Problem**: `fatal: Authentication failed`

**Solution**:
```bash
# Use SSH instead of HTTPS
git remote set-url origin git@github.com:YOUR_USERNAME/abououways-ecommerce.git

# Or use Personal Access Token
# Generate token at: https://github.com/settings/tokens
```

### Push Rejected

**Problem**: `! [rejected] main -> main (fetch first)`

**Solution**:
```bash
# Pull changes first
git pull origin main --rebase

# Then push
git push origin main
```

### Merge Conflicts

**Problem**: Merge conflicts when pulling

**Solution**:
```bash
# See conflicted files
git status

# Edit files to resolve conflicts
# Look for <<<<<<< HEAD markers

# After resolving
git add <resolved-files>
git commit -m "Resolve merge conflicts"
```

### Large Files

**Problem**: `remote: error: File is too large`

**Solution**:
```bash
# Add to .gitignore
echo "large-file.zip" >> .gitignore

# Remove from git (keep local copy)
git rm --cached large-file.zip

# Commit
git commit -m "Remove large file from git"
```

---

## 📊 Repository Statistics

View your repository statistics:

```bash
# Number of commits
git rev-list --count main

# Contributors
git shortlog -sn

# Files changed
git diff --stat main..develop

# Repository size
git count-objects -vH
```

---

## 🎯 Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Good Commit Messages**: Be descriptive
3. **Pull Before Push**: Always pull latest changes before pushing
4. **Use Branches**: Don't work directly on main
5. **Review Code**: Use pull requests for code review
6. **Keep .gitignore Updated**: Don't commit sensitive files
7. **Tag Releases**: Use git tags for version releases
8. **Document Changes**: Update README and documentation

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example**:
```bash
git commit -m "feat: Add French language support

- Create LanguageContext for language switching
- Add translations.js with French translations
- Update all components to use translations
- Add language toggle button in header

Closes #123"
```

---

## 📞 Support

- **GitHub Issues**: https://github.com/YOUR_USERNAME/abououways-ecommerce/issues
- **Email**: info@abououways.ma
- **Documentation**: See README.md and DEPLOYMENT.md

---

## ✅ Setup Checklist

- [ ] GitHub repository created
- [ ] Initial commit pushed
- [ ] SSH keys configured
- [ ] GitHub secrets added
- [ ] Branch protection rules set
- [ ] GitHub Actions workflows tested
- [ ] Team members added (if applicable)
- [ ] Backup strategy implemented
- [ ] Documentation reviewed

---

**Last Updated**: November 30, 2025
**Version**: 1.0.0
