import { ReservationForm } from "@/components/sections/ReservationForm";
import { Navigation } from "@/components/layout/Navigation";
import { PAGE_HEADERS } from "@/constant/constants";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Book Your Event | Shimanto Convention Center",
    description: "Reserve your date and plan your perfect event at Shimanto Convention Center.",
};

export default function ReservationPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Page Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <Image
                    src={PAGE_HEADERS.reservation}
                    alt="Reservation"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                        <Calendar size={16} className="text-silver" />
                        <span className="text-xs font-bold tracking-widest uppercase">Book Your Date</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Reservation</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Secure your perfect space. Experience seamless planning and world-class service.
                    </p>
                </div>
            </section>

            <ReservationForm />
        </div>
    );
}
