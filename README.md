# Shimanto Convention Center

A modern, high-performance web application for Shimanto Convention Center - a premier event venue in Dhaka, Bangladesh. Built with Next.js 16, featuring stunning animations, optimized performance, and a centralized content management system.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff69b4?style=flat-square)

## ✨ Features

### 🎯 Core Functionality
- **Multi-Page Application**: Home, About, Venues, Menu, Gallery, Contact
- **Interactive Booking Wizard**: Step-by-step event booking with AI chat integration
- **Dynamic Menu Showcase**: Comprehensive catering packages (601-607) with add-ons
- **Image Gallery**: Lightbox-enabled photo gallery with smooth transitions
- **Client Testimonials**: Interactive slider showcasing customer reviews

### 🚀 Performance Optimizations
- **Dynamic Imports**: Below-the-fold components lazy-loaded for 30-40% smaller initial bundle
- **Next.js Image Optimization**: Automatic image optimization with Cloudinary integration
- **Static Site Generation**: All pages pre-rendered for lightning-fast loads
- **Optimized Fonts**: Local font optimization with Next.js font system

### 🎨 UI/UX Excellence
- **Framer Motion Animations**: Smooth, hardware-accelerated animations throughout
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Page Transitions**: Seamless navigation with fade transitions
- **Scroll Animations**: Elements animate into view as users scroll
- **Interactive Components**: Hover effects, micro-interactions, and dynamic states

### 🛠️ Developer Experience
- **TypeScript**: Full type safety across the application
- **Centralized Config**: Single source of truth for site content (`src/constant/config.ts`)
- **Component Architecture**: Atomic design with reusable UI components
- **Code Formatting**: Prettier configuration for consistent code style
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and semantic HTML

## 📋 Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd x-group-convention-center

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
x-group-convention-center/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── gallery/           # Gallery page
│   │   ├── menu/              # Menu page
│   │   ├── venues/            # Venues page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── template.tsx       # Page transitions
│   │   ├── robots.ts          # SEO robots config
│   │   └── sitemap.ts         # SEO sitemap
│   ├── components/
│   │   ├── layout/            # Layout components (Navigation, Footer)
│   │   ├── sections/          # Page sections (Hero, Services, etc.)
│   │   └── ui/                # Reusable UI components
│   ├── constant/
│   │   ├── config.ts          # Centralized site configuration
│   │   └── constants.ts       # Data constants (venues, menus, etc.)
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/                     # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### UI Components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging

### Image Optimization
- **Next.js Image** - Automatic image optimization
- **Cloudinary** - Cloud-based image hosting

## 🔧 Configuration

### Site Content Management

All site-specific content is centralized in `src/constant/config.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Shimanto Convention Center",
  shortName: "SHIMANTO",
  contact: {
    phone: ["01755636268", "01755636321"],
    email: "shimanto@x-grouprestaurant.com",
    address: { /* ... */ }
  },
  // ... more configuration
};
```

To adapt this application for another convention center, simply update this configuration file.

### Image Domains

External image domains are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'picsum.photos' }
  ]
}
```

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slider, services, menu showcase, gallery preview |
| About | `/about` | Company history, mission, team information |
| Venues | `/venues` | Detailed venue listings with capacity and features |
| Menu | `/menu` | Complete catering packages and add-ons |
| Gallery | `/gallery` | Full photo gallery with lightbox |
| Contact | `/contact` | Contact form and location information |

## 🎯 Key Features Explained

### Dynamic Imports
Below-the-fold components are lazy-loaded to improve initial page load:

```typescript
const Gallery = dynamic(() => import("@/components/sections/Gallery")
  .then(mod => mod.Gallery));
```

### Centralized Content
All site content managed through a single configuration file for easy multi-site deployment.

### Image Optimization
All images use Next.js Image component with automatic optimization, lazy loading, and responsive sizing.

### Animations
Scroll-triggered animations using Framer Motion with `whileInView` for performance.

## 🌐 SEO

- ✅ Meta tags (title, description, Open Graph)
- ✅ Semantic HTML structure
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Optimized images with alt text
- ✅ Fast page loads (Core Web Vitals optimized)

## 📄 License

This project is proprietary software for Shimanto Convention Center.

## 🤝 Contributing

This is a private project. For inquiries, please contact the development team.

## 📞 Support

For technical support or questions:
- **Email**: shimanto@x-grouprestaurant.com
- **Phone**: 01755636268, 01755636321

---

**Built with ❤️ for Shimanto Convention Center**
