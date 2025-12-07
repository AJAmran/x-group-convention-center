"use client";

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { GALLERY_ITEMS } from '@/constant/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ZoomIn, X } from 'lucide-react';

export default function GalleryPage() {
    const [filter, setFilter] = useState<'all' | 'event' | 'culinary'>('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredItems = filter === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.type === filter);

    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/wedding-bread-served-plate-with-greenery-stands-plates_8353-547_uljxap.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <ImageIcon size={16} className="text-gold" />
                            <span className="text-xs font-bold tracking-widest uppercase">The Collection</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Gallery</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                            A visual journey through our most memorable events and exquisite creations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filter */}
                    <div className="flex justify-center gap-2 mb-12">
                        {['all', 'event', 'culinary'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f as 'all' | 'event' | 'culinary')}
                                className={`px-8 py-2 rounded-full text-sm font-bold transition-all capitalize ${filter === f ? 'bg-convention text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {f === 'all' ? 'Show All' : f === 'event' ? 'Events' : 'Culinary'}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    key={item.id}
                                    className="group relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden cursor-pointer shadow-md"
                                    onClick={() => setSelectedImage(item.image)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                            <ZoomIn className="text-white" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-xs text-gold font-bold uppercase mb-1">{item.category}</p>
                                        <h3 className="text-white font-serif font-bold text-lg">{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition p-2 bg-white/10 rounded-full" onClick={() => setSelectedImage(null)}>
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={selectedImage}
                            alt="Full View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
