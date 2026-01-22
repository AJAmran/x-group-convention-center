"use client";

import React from 'react';
import Image from 'next/image';
import { Utensils, Quote } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';

interface ChefShowcaseProps {
    className?: string;
    bgVariant?: 'white' | 'gray';
}

export const ChefShowcase: React.FC<ChefShowcaseProps> = ({
    className = "",
    bgVariant = 'white'
}) => {
    const { chef } = SITE_CONFIG;

    return (
        <section className={`py-24 relative overflow-hidden ${bgVariant === 'gray' ? 'bg-gray-50' : 'bg-white'} ${className}`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-silver/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Chef Image & Quick Facts */}
                    <div className="lg:col-span-6">
                        <div className="relative group">
                            {/* Image Frame with Layering */}
                            <div className="absolute -inset-4 bg-silver/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative">
                                {/* Main Image Container */}
                                <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white group">
                                    <Image
                                        src={chef.image}
                                        alt={`${chef.role} ${chef.name}`}
                                        title={`${chef.role} ${chef.name}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />

                                    {/* Minimalist Border Overlay on Hover */}
                                    <div className="absolute inset-0 border-[16px] border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content & Narrative */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-3 bg-convention/10 text-convention px-4 py-2 rounded-full mb-6">
                                <Utensils size={18} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Gastronomic Vision</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-[1.1]">
                                Guided by <br />
                                <span className="text-silver italic font-normal">Global</span> Mastery
                            </h2>

                            <div className="relative mb-10">
                                <Quote className="absolute -top-4 -left-6 text-silver/10 pointer-events-none" size={120} />
                                <p className="text-gray-600 text-xl md:text-2xl leading-relaxed italic relative z-10 border-l-4 border-silver pl-8 py-2">
                                    &quot;{chef.quote}&quot;
                                </p>
                            </div>

                            <div className="space-y-6 max-w-xl">
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    {chef.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
