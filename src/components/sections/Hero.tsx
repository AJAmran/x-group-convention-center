"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/constant/config';
import Image from 'next/image';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { HERO_SLIDES } from '@/constant/constants';



export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

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
              src={HERO_SLIDES[currentSlide].bgImage}
              alt={HERO_SLIDES[currentSlide].title.replace('\n', ' ')}
              title={HERO_SLIDES[currentSlide].title.replace('\n', ' ')}
              fill
              priority={currentSlide === 0}
              className="object-cover"
              quality={90}
              sizes="100vw"
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-convention-dark/70 mix-blend-multiply"></div>
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
                <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white border border-white/30 rounded-full backdrop-blur-sm uppercase bg-convention/50">
                  {HERO_SLIDES[currentSlide].subtitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-10 font-light">
                {HERO_SLIDES[currentSlide].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={HERO_SLIDES[currentSlide].id === 1 ? '/venues' : HERO_SLIDES[currentSlide].id === 2 ? '/menu' : '/reservation'}>
                  <Button
                    className="px-8 py-4 rounded-none font-semibold flex items-center gap-3 transition-colors bg-white text-convention-dark hover:bg-gray-100"
                  >
                    {HERO_SLIDES[currentSlide].ctaPrimary} <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8 py-4 border border-white text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-3 rounded-none"
                  >
                    <PlayCircle size={20} /> {HERO_SLIDES[currentSlide].ctaSecondary}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <Button
          variant="ghost"
          onClick={prevSlide}
          className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all h-auto w-auto border-1"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="ghost"
          onClick={nextSlide}
          className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all h-auto w-auto border-1"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

    </div>
  );
};