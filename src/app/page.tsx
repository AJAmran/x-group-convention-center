import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Service";
import dynamic from 'next/dynamic';

const UnifiedServices = dynamic(() => import("@/components/sections/UnifiedServices").then(mod => mod.UnifiedServices));
const TrustHub = dynamic(() => import("@/components/sections/TrustHub").then(mod => mod.TrustHub));
const MenuShowcase = dynamic(() => import("@/components/sections/MenuShowcase").then(mod => mod.MenuShowcase));
const Gallery = dynamic(() => import("@/components/sections/Gallery").then(mod => mod.Gallery));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const BookingWizard = dynamic(() => import("@/components/sections/BookingWizard").then(mod => mod.BookingWizard));
const AppPromotion = dynamic(() => import("@/components/sections/AppPromotion").then(mod => mod.AppPromotion));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <div className="">
      <main className="flex-grow">
        <Hero />
        <Services />
        <UnifiedServices />
        <TrustHub />
        <MenuShowcase />
        <Gallery />
        <Testimonials />
        <BookingWizard />
        <AppPromotion />
        <Contact />
      </main>
    </div>
  );
}
