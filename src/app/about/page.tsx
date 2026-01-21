"use client";

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { motion } from 'framer-motion';
import { Award, History, Shield, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';
import { Button } from '@/components/ui/Button';
import { ChefShowcase } from '@/components/sections/ChefShowcase';

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
                            <img src="https://shimanto.x-grouprestaurant.com/uploads/cbbfc52af0557d51883d0c9d2eeaf969.jpg" alt="Our Mission" className="rounded-2xl shadow-2xl relative z-10" />
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                                        <Award size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">30+ Years Legacy</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Delivering excellence and creating memories since 1992.</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention mb-4 group-hover:bg-convention group-hover:text-white transition-colors">
                                        <Shield size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">Secured Environment</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">A homely and well-secured setting for your peace of mind.</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values / Stats Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://shimanto.x-grouprestaurant.com/uploads/0a1fa9f07cbdf936a7c69fad306091dc.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">5,000+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Events Hosted</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">32+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">1M+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Happy Guests</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">50+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Culinary Experts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chef Showcase */}
            <ChefShowcase bgVariant="white" />
        </div>
    );
}
