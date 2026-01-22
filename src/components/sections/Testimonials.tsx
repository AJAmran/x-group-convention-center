"use client";

import React, { useState } from 'react';
import { Star, Quote, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/constant/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

import Image from 'next/image';

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
        <SectionHeader
          subtitle="Client Stories"
          title="Memorable Experiences"
          theme="convention"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-convention hover:scale-110 transition-all border-none"
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-convention hover:scale-110 transition-all border-none"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          <div className="overflow-hidden px-4 md:px-0">
            <AnimatePresence mode="wait">
              <Card
                key={currentIndex}
                animate={true}
                hoverEffect={false}
                className="p-8 md:p-12 shadow-2xl relative border-none"
              >
                <div className="absolute top-6 right-8 text-gold/20">
                  <Quote size={80} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center relative z-10">
                  {/* Image Column */}
                  <div className="flex flex-col items-center text-center md:text-left gap-4">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-convention to-gold">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                          <Image
                            src={currentTestimonial.image || ''}
                            alt={currentTestimonial.clientName}
                            title={currentTestimonial.clientName}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 96px, 128px"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                        <div className="flex text-silver">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" className="text-silver" />
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
              </Card>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <Button
                key={idx}
                variant="ghost"
                onClick={() => setCurrentIndex(idx)}
                className={`p-0 min-w-0 h-2 rounded-full transition-all duration-300 border-none hover:bg-transparent ${idx === currentIndex ? 'w-8 bg-convention' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};