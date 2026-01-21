"use client";

import { PACKAGES, ADDITIONAL_ITEMS } from '@/constant/constants';
import { Navigation } from '@/components/layout/Navigation';
import { ChefHat, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function MenuPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/rich-dinner-tables-covered-with-blue-clothes-sparkling-glass_8353-799_etqpuv.avif')] bg-cover bg-center opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <ChefHat size={16} className="text-gold" />
                            <span className="text-xs font-bold tracking-widest uppercase">The Culinary Collection</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Menu</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                            From grand galas to intimate gatherings, explore our curated packages designed to delight every palate.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PACKAGES.map((pkg, idx) => (
                            <Card
                                key={pkg.id}
                                className="overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
                                animate={true}
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        title={pkg.name}
                                        width={pkg.width || 800}
                                        height={pkg.height || 600}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-white font-serif text-lg font-bold">{pkg.style}</span>
                                            <span className="bg-convention text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                                ৳{pkg.pricePerHead}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-convention transition-colors mb-4">{pkg.name}</h3>
                                    <ul className="space-y-3">
                                        {pkg.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                <Check size={16} className="text-convention mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 pt-0 mt-auto">
                                    <Link href="/reservation" className="w-full">
                                        <Button variant="primary" fullWidth className="py-4 font-bold rounded-xl">
                                            Book This Package
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Items */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-convention/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold font-bold tracking-widest text-xs uppercase mb-3 block">Tailored For Your Celebration</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Signature Add-ons & Traditional Delicacies</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Transform your event into a <strong>Royal Feast</strong> with our exclusive selection of premium Bangladeshi delicacies. From grand Whole Roasts to exquisite desserts, perfectly curated to elevate your wedding or corporate gathering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-2">
                        {ADDITIONAL_ITEMS.map((item, idx) => (
                            <div key={item.id} className="group flex items-end justify-between py-5 border-b border-gray-100 hover:border-convention/30 transition-colors">
                                <div className="flex-1 pr-4">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="text-lg font-serif font-medium text-gray-800 group-hover:text-convention transition-colors">
                                            {item.name}
                                        </h4>
                                        {item.price > 1000 && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-full">Premium</span>
                                        )}
                                    </div>
                                    {/* <span className="text-xs text-gray-300 font-mono">Item {item.id}</span> */}
                                </div>

                                {/* Dotted Leader */}
                                <div className="hidden sm:block flex-1 border-b border-dotted border-gray-300 mx-2 mb-2 relative -top-1 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                <div className="text-right flex-shrink-0">
                                    <div className="flex flex-col items-end">
                                        <span className="text-xl font-bold text-gray-900 block group-hover:text-convention transition-colors">৳{item.price.toLocaleString()}</span>
                                        {item.unit && <span className="text-xs text-gray-400 italic block mt-0.5">{item.unit === 'whole' ? 'per whole' : item.unit}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-block bg-neutral-50 px-6 py-4 rounded-xl border border-neutral-100 text-sm text-gray-500">
                            <p className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                <span className="font-bold text-gray-700">Note:</span>
                                <span>15% VAT Extra on all prices</span>
                                <span className="hidden sm:inline text-gray-300">|</span>
                                <span>Dietary symbols available upon request</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
