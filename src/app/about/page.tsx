"use client";

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { motion } from 'framer-motion';
import { ChefHat, Award, Users, History } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/restaurant-hall-with-lots-table_140725-6309_wx2fva.avif')] bg-cover bg-center opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <History size={16} className="text-gold" />
                            <span className="text-xs font-bold tracking-widest uppercase">Our Story</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Legacy of Excellence</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                            Redefining hospitality in Bangladesh through architectural grandeur and culinary mastery since {SITE_CONFIG.startYear}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/empty-conference-room-generative-ai_587448-1943_dxuzhp.avif" alt="Our Mission" className="rounded-2xl shadow-2xl relative z-10" />
                            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-convention/10 rounded-2xl -z-0"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-convention font-bold tracking-widest text-sm uppercase">Our Mission</span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2 mb-6">Welcome to {SITE_CONFIG.name}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {SITE_CONFIG.about.mission}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {SITE_CONFIG.about.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {SITE_CONFIG.about.recentAddition} <br /> The Trade Licence number # {SITE_CONFIG.tradeLicense}.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Award className="text-gold mb-2" size={24} />
                                    <h4 className="font-bold text-gray-900">Award Winning</h4>
                                    <p className="text-sm text-gray-500">Recognized as Dhaka&apos;s Best Venue 2024</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Users className="text-catering mb-2" size={24} />
                                    <h4 className="font-bold text-gray-900">Expert Team</h4>
                                    <p className="text-sm text-gray-500">200+ Hospitality Professionals</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Snippet */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <ChefHat size={48} className="text-gray-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Guided by Culinary Masters</h2>
                    <p className="text-gray-600 mb-12">
                        Our kitchen is led by Executive Chef Rahman, whose 20 years of experience across Europe and Asia brings a unique fusion approach to our catering.
                    </p>
                    <button className="text-convention font-bold hover:underline">Meet Our Full Team &rarr;</button>
                </div>
            </section>
        </div>
    );
}
