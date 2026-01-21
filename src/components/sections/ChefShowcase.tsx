"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, ArrowRight, Star, Utensils, Quote } from 'lucide-react';
import { Button } from '../ui/Button';

interface ChefShowcaseProps {
    className?: string;
    bgVariant?: 'white' | 'gray';
}

export const ChefShowcase: React.FC<ChefShowcaseProps> = ({
    className = "",
    bgVariant = 'white'
}) => {
    return (
        <section className={`py-24 relative overflow-hidden ${bgVariant === 'gray' ? 'bg-gray-50' : 'bg-white'} ${className}`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Chef Image & Quick Facts */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Image Frame with Layering */}
                            <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative">
                                {/* Main Image Container */}
                                <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white group">
                                    <img
                                        src="https://i.ibb.co.com/KcDx3rYF/Whats-App-Image-2026-01-05-at-9-08-11-AM-1.jpg"
                                        alt="Executive Chef SHAKER UII ALAM"
                                        title="Executive Chef SHAKER UII ALAM"
                                        width={1200}
                                        height={1200}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* Minimalist Border Overlay on Hover */}
                                    <div className="absolute inset-0 border-[16px] border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content & Narrative */}
                    <div className="lg:col-span-6 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-3 bg-convention/10 text-convention px-4 py-2 rounded-full mb-6">
                                <Utensils size={18} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Gastronomic Vision</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-[1.1]">
                                Guided by <br />
                                <span className="text-gold italic font-normal">Global</span> Mastery
                            </h2>

                            <div className="relative mb-10">
                                <Quote className="absolute -top-4 -left-6 text-gold/10 pointer-events-none" size={120} />
                                <p className="text-gray-600 text-xl md:text-2xl leading-relaxed italic relative z-10 border-l-4 border-gold pl-8 py-2">
                                    &quot;Our mission is to translate heritage through flavor. Every dish we serve at Shimanto is a commitment to excellence, crafted with the precision of international standards.&quot;
                                </p>
                            </div>

                            <div className="space-y-6 max-w-xl">
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Chef <span className="text-gray-950 font-bold">Shaker Uii Alam</span> leads our newly appointed culinary team, introducing a sophisticated continental menu alongside our signature traditional offerings.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    With nearly three decades of experience in high-end hospitality across major culinary hubs, his expertise ensures that your events are not just hosted, but celebrated through world-class gastronomy. At Shimanto, we don&apos;t just serve food; we create edible memories.
                                </p>
                            </div>


                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
