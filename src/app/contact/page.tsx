"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Contact } from '@/components/sections/Contact';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-convention-dark opacity-90"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <MapPin size={16} className="text-gold" />
                            <span className="text-xs font-bold tracking-widest uppercase">Visit Us</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Get in Touch</h1>
                    </motion.div>
                </div>
            </section>

            {/* Reuse explicit Contact section */}
            <Contact />

            {/* Map (Placeholder) */}
            <section className="h-96 w-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                    [Google Map Integration Here]
                </div>
            </section>
        </div>
    );
}
