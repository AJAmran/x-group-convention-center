"use client";
import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { VENUES, PAGE_HEADERS } from '@/constant/constants';
import { motion } from 'framer-motion';
import { MapPin, Users, Ruler, Star } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constant/config';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function VenuesPage() {
    if (!SITE_CONFIG.hasMultipleVenues) {
        redirect('/');
    }

    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <Image
                    src={PAGE_HEADERS.venues}
                    alt="Our Venues"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <MapPin size={16} className="text-silver" />
                            <span className="text-xs font-bold tracking-widest uppercase">World Class Spaces</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Venues</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                            Discover architectural masterpieces designed to host your most significant moments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Venues Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16">
                        {VENUES.map((venue, idx) => (
                            <motion.div
                                key={venue.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2 h-96 lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src={venue.image}
                                        alt={venue.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-10">
                                        <Users size={16} className="text-convention" />
                                        <span className="text-sm font-bold">{venue.capacity} Guests</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{venue.name}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{venue.description}</p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                                                <Ruler size={18} className="text-convention" /> Size
                                            </h4>
                                            <p className="text-gray-500 text-sm ml-7">{venue.size || 'TBD'}</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                                                <Star size={18} className="text-silver" /> Type
                                            </h4>
                                            <p className="text-gray-500 text-sm ml-7">{venue.type}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link href="/reservation" className="bg-convention text-white px-8 py-3 rounded-full font-bold hover:bg-convention-dark transition shadow-lg hover:shadow-xl">
                                            Book This Venue
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-6">Not sure which space fits?</h2>
                    <p className="text-xl text-gray-400 mb-8">Our event planners can guide you to the perfect setting.</p>
                    <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        Schedule a Site Visit
                    </Link>
                </div>
            </section>
        </div>
    );
}
