import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/constant/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: `${SITE_CONFIG.name} | Premium Event & Wedding Venue in Dhaka`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.logo,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_CONFIG.name,
  "image": SITE_CONFIG.logo,
  "@id": SITE_CONFIG.url,
  "url": SITE_CONFIG.url,
  "telephone": SITE_CONFIG.contact.phone[0],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.contact.address.street,
    "addressLocality": SITE_CONFIG.contact.address.area,
    "addressRegion": SITE_CONFIG.contact.address.city,
    "addressCountry": "BD"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SITE_CONFIG.geo.latitude,
    "longitude": SITE_CONFIG.geo.longitude
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  },
  "sameAs": [
    SITE_CONFIG.socials.facebook,
    SITE_CONFIG.socials.instagram,
    SITE_CONFIG.socials.linkedin,
    SITE_CONFIG.socials.youtube
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen flex flex-col font-sans text-gray-900 bg-neutral-50 scroll-smooth">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
