"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/constant/config';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    bgImage: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764830482/2151481477_dro0u9.jpg',
    subtitle: 'WORLD-CLASS SPACES',
    title: 'Where Grand Events\nRise to Occasion',
    desc: `Experience ${SITE_CONFIG.name}, the premier convention destination designed for seamless, sophisticated gatherings.`,
    theme: 'convention',
    ctaPrimary: 'Explore Venues',
    ctaSecondary: 'Virtual Tour'
  },
  {
    id: 2,
    bgImage: 'https://picsum.photos/id/429/1600/900',
    subtitle: 'GOURMET EXCELLENCE',
    title: 'Culinary Artistry on\nEvery Plate',
    desc: 'Award-winning chefs creating memorable dining experiences that complement your event perfectly.',
    theme: 'catering',
    ctaPrimary: 'View Menus',
    ctaSecondary: 'Meet the Chefs'
  },
  {
    id: 3,
    bgImage: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764830963/7840_nlamr1.jpg',
    subtitle: 'THE PERFECT PAIR',
    title: 'Seamless Service,\nUnforgettable Memories',
    desc: 'From the first handshake to the final toast, we integrate luxury venues with exquisite catering.',
    theme: 'unified',
    ctaPrimary: 'Plan Your Event',
    ctaSecondary: 'Watch Video'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">

      {/* Slider Container */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].bgImage}
              alt={slides[currentSlide].title.replace('\n', ' ')}
              fill
              priority={currentSlide === 0}
              className="object-cover"
              quality={90}
              sizes="100vw"
            />
          </motion.div>

          {/* Overlays */}
          <div className={`absolute inset-0 ${slides[currentSlide].theme === 'convention' ? 'bg-convention-dark/70' :
            slides[currentSlide].theme === 'catering' ? 'bg-catering-dark/70' :
              'bg-black/60'
            } mix-blend-multiply`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="max-w-5xl mx-auto md:mx-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="overflow-hidden mb-4">
                <span className={`inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white border border-white/30 rounded-full backdrop-blur-sm uppercase
                    ${slides[currentSlide].theme === 'catering' ? 'bg-catering/50' : 'bg-convention/50'}
                 `}>
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {slides[currentSlide].title}
              </h1>

              <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-10 font-light">
                {slides[currentSlide].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className={`px-8 py-4 rounded-none font-semibold flex items-center gap-3 transition-colors ${slides[currentSlide].theme === 'catering' ? 'bg-catering hover:bg-catering-dark' : 'bg-white text-convention-dark hover:bg-gray-100'
                  } ${slides[currentSlide].theme !== 'catering' ? 'text-convention-dark' : 'text-white'}`}>
                  {slides[currentSlide].ctaPrimary} <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-3">
                  <PlayCircle size={20} /> {slides[currentSlide].ctaSecondary}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button onClick={prevSlide} className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-10 md:left-24 z-20 flex gap-3 container mx-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40'}`}
          />
        ))}
      </div>

    </div>
  );
};