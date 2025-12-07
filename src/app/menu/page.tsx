"use client";

import { PACKAGES, ADDITIONAL_ITEMS } from '@/constant/constants';
import { Navigation } from '@/components/layout/Navigation';
import { ChefHat, Check } from 'lucide-react';
import { motion } from 'framer-motion';

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
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
                            >
                                <div className="p-8 pb-4 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-catering transition-colors">{pkg.name}</h3>
                                        {pkg.style && (
                                            <span className="px-2 py-1 bg-catering/10 text-catering text-[10px] font-bold rounded uppercase">{pkg.style}</span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-3xl font-bold text-gray-900">৳{pkg.pricePerHead}</span>
                                        <span className="text-sm text-gray-400 font-medium">/ per person</span>
                                    </div>
                                    <div className="h-px w-full bg-gray-100 mb-6"></div>
                                    <ul className="space-y-3">
                                        {pkg.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 pt-0 mt-auto">
                                    <button className="w-full py-4 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-2">
                                        Book This Package
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Items */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-gray-900">A La Carte Additions</h2>
                        <p className="text-gray-500 mt-2">Enhance your package with these premium selections</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {ADDITIONAL_ITEMS.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-100 group hover:bg-gray-50 px-4 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono text-gray-300">#{item.id}</span>
                                    <span className="font-medium text-gray-800">{item.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-catering">৳{item.price}</span>
                                    {item.unit && <span className="text-xs text-gray-400 block">{item.unit}</span>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-500 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <p><strong>Note:</strong> 15% VAT Extra on all prices. D=Dairy, N=Nut, S=Sea fish, V=Vegetarian, H=Healthy options available upon request.</p>
                    </div>

                </div>
            </section>
        </div>
    );
}
