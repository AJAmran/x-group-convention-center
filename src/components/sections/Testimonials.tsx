"use client";

import React, { useState } from 'react';
import { Star, Quote, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/constant/constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-convention font-bold tracking-widest text-sm uppercase">Client Stories</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Memorable Experiences</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
            <button onClick={prevSlide} className="p-2 md:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-convention hover:scale-110 transition-all">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
            <button onClick={nextSlide} className="p-2 md:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-convention hover:scale-110 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative border border-gray-100"
              >
                <div className="absolute top-6 right-8 text-gold/20">
                  <Quote size={80} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center relative z-10">
                  {/* Image Column */}
                  <div className="flex flex-col items-center text-center md:text-left gap-4">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-convention to-gold">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.clientName}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-inner"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                        <div className="flex text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" className="text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="text-center md:text-left">
                    <p className="text-gray-600 italic leading-relaxed text-lg md:text-xl mb-6">
                      &quot;{currentTestimonial.quote}&quot;
                    </p>

                    <div>
                      <h4 className="font-serif font-bold text-2xl text-gray-900">{currentTestimonial.clientName}</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-4">
                        {currentTestimonial.role} {currentTestimonial.company && <span className="text-gold">• {currentTestimonial.company}</span>}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 mt-2">
                      <div className="bg-catering/10 p-1.5 rounded-full text-catering">
                        <Utensils size={14} />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                        <span className="text-[10px] text-gray-400 uppercase font-bold">Paired Menu:</span>
                        <span className="text-sm font-bold text-gray-700">{currentTestimonial.pairedMenu}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-convention' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};