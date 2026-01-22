import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Service";
import dynamic from 'next/dynamic';

const UnifiedServices = dynamic(() => import("@/components/sections/UnifiedServices").then(mod => mod.UnifiedServices));
const TrustHub = dynamic(() => import("@/components/sections/TrustHub").then(mod => mod.TrustHub));
const MenuShowcase = dynamic(() => import("@/components/sections/MenuShowcase").then(mod => mod.MenuShowcase));
const Gallery = dynamic(() => import("@/components/sections/Gallery").then(mod => mod.Gallery));
const ChefShowcase = dynamic(() => import("@/components/sections/ChefShowcase").then(mod => mod.ChefShowcase));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const BookingWizard = dynamic(() => import("@/components/sections/BookingWizard").then(mod => mod.BookingWizard));
const ReservationForm = dynamic(() => import("@/components/sections/ReservationForm").then(mod => mod.ReservationForm));
const AppPromotion = dynamic(() => import("@/components/sections/AppPromotion").then(mod => mod.AppPromotion));
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constant/config";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Dhaka's Premier Wedding & Event Venue`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "url": SITE_CONFIG.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_CONFIG.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-grow">
        <Hero />
        <Services />
        <UnifiedServices />
        <TrustHub />
        <ChefShowcase bgVariant="gray" />
        <MenuShowcase />
        <Testimonials />
        <Gallery />
        <AppPromotion />
        <ReservationForm />
        <Contact />
      </main>
    </div>
  );
}
