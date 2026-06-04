# Nexus — SaaS Landing Page

A production-ready Next.js 15 landing page with TypeScript, App Router, and Docker deployment.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Production Build

```bash
npm run build
npm start
```

## 🐳 Docker Deployment (AWS EC2)

### Prerequisites
- Docker & Docker Compose installed on EC2
- Domain pointing to your EC2 IP
- SSL certificates in `nginx/ssl/` (fullchain.pem + privkey.pem)

### Deploy

```bash
# Clone the repo on your EC2
git clone <your-repo>
cd saas-landing

# Add SSL certs
mkdir -p nginx/ssl
# Copy fullchain.pem and privkey.pem into nginx/ssl/

# Update domain in nginx/nginx.conf
# Replace yourdomain.com with your actual domain

# Build and run
docker-compose up -d --build

# Check logs
docker-compose logs -f
```

### EC2 Security Group
Open ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)

## 📁 Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       └── Contact.tsx
├── globals.css
├── layout.tsx
└── page.tsx
nginx/
├── nginx.conf
Dockerfile
docker-compose.yml
```

## 🎨 Design System

- **Font**: Syne (display) + DM Sans (body)
- **Theme**: Dark, deep navy background
- **Accent**: Indigo/violet gradient
- **Cards**: Glass-morphism with hover animations
