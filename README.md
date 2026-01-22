# X-Group Convention Center Management System

A premium, high-performance multi-tenant web application platform designed for the X-Group Convention Centers portfolio. Built with **Next.js 14/15**, **TypeScript**, and **Tailwind CSS**, this system provides a sophisticated digital storefront and reservation engine for luxury event venues.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## 🏢 Project Overview

This platform is engineered to serve multiple convention centers within the X-Group portfolio through a centralized configuration-driven architecture. The current primary implementation is for **Shimanto Convention Center**.

### 🌟 Key Features

*   **Premium Design System**: A state-of-the-art "Silver & Slate" aesthetic focused on luxury, clarity, and visual excellence.
*   **Dynamic Venue Management**: Intelligent handling of single-venue vs. multi-venue centers via `SITE_CONFIG`.
*   **Legacy-Compatible Backend Structure**: Menu data and reservation flows are architected based on previous successful production systems to ensure seamless backend integration.
*   **High-Volume Catering Engine**: Specialized logic for handling complex menu packages (e.g., 601-607 series) with dynamic add-ons.
*   **Interactive Booking Wizard**: A multi-step reservation system optimized for high conversion rates.
*   **Performance First**: 
    *   **Dynamic Imports**: Below-the-fold components are lazy-loaded for minimal bundle delivery.
    *   **Next.js Image Optimization**: Automated image resizing and delivery via optimized remote patterns.
    *   **Static Generation**: Pre-rendered pages for instant loading and SEO dominance.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Selective/Premium transitions)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Schema**: [JSON-LD](https://json-ld.org/) for Rich Snippet SEO

## ⚙️ Configuration & Scaling

To deploy this system for a new convention center, only two files require modification:

1.  **`src/constant/config.ts`**: Manage site metadata, contact details, trade licenses, and the `hasMultipleVenues` toggle.
2.  **`src/constant/constants.ts`**: Manage branch-specific Menu items, Gallery assets, and Page Header images (`PAGE_HEADERS`).

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```text
src/
├── app/                    # Next.js App Router (Routing & Pages)
├── components/
│   ├── layout/            # Navigation, Footer, Mobile Menus
│   ├── sections/          # Modular page components (TrustHub, ChefShowcase, etc.)
│   └── ui/                # Atomic UI units (Buttons, Cards, Modals)
├── constant/               # Centralized Data (CRITICAL for scaling)
├── lib/                    # Shared utilities and helpers
└── types/                  # Global TypeScript interfaces
```

## 🔗 Developer Notes for Backend Integration

*   **Reservation API**: The frontend is prepared to send structured booking data. Connect `ReservationForm.tsx` to your existing reservation processing endpoints.
*   **Menu Synchronization**: Menu categories and items in `constants.ts` are modeled after the previous website. You can replace these constants with an API fetch in a state management store or server component.
*   **Image Management**: Use the `PAGE_HEADERS` constant in `constants.ts` to swap background assets across the site globally.

## 🌐 SEO & Accessibility

*   ✅ **Semantic HTML5**: Native elements used throughout for accessibility.
*   ✅ **Schema.org**: Structured data implemented for Local Business and Event Venue.
*   ✅ **Metadata API**: Dynamic Title and Meta descriptions for every route.
*   ✅ **Core Web Vitals**: Optimized for LCP and CLS targets.

---

**Developed for X-Group Convention Centers Portfolio**
