"use client";

import React, { useState } from 'react';

import { ArrowRight, Users, Utensils, Star } from 'lucide-react';
import { PACKAGES, VENUES } from '@/constant/constants';

export const UnifiedServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'venue' | 'catering'>('venue');

  return (
    <section id="venues" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-catering font-bold tracking-widest text-sm uppercase">Seamless Integration</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">
            Curated Spaces & Plates
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you need a grand ballroom for 1000 or an intimate garden for 50, we pair the perfect environment with exquisite culinary journeys.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('venue')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'venue'
                  ? 'bg-convention text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Event Spaces
            </button>
            <button
              onClick={() => setActiveTab('catering')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'catering'
                  ? 'bg-catering text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Culinary Experiences
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'venue' ? (
            VENUES.map((venue) => {
              const suggestedPkg = PACKAGES.find(p => p.id === venue.suggestedMenuId);
              return (
                <div key={venue.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative animate-in fade-in zoom-in duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-convention-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Users size={12} /> {venue.capacity} Guests
                  </div>

                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-convention/0 group-hover:bg-convention/20 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-convention transition-colors">{venue.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">{venue.description}</p>

                    {/* Suggestion Box */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 flex items-center gap-1">
                        <Star size={12} className="text-gold" /> Perfect Pairing
                      </p>
                      <p className="text-sm font-medium text-catering-dark">{suggestedPkg?.name}</p>
                    </div>

                    <button className="w-full mt-6 py-3 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 group-hover:border-convention group-hover:text-convention transition-all">
                      View Floor Plan
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            PACKAGES.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-in fade-in zoom-in duration-500">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-catering text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  ${pkg.pricePerHead} / head
                </div>

                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  {/* Abstract Pattern or Image */}
                  <img src={`https://picsum.photos/seed/${pkg.id}/800/600`} alt={pkg.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-serif text-2xl font-bold">{pkg.name}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-catering/10 flex items-center justify-center text-catering">
                        <Utensils size={16} />
                      </div>
                      <span>{pkg.style} Service</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark">
                        <Star size={16} className="text-gold" />
                      </div>
                      <span>Chef Consultation Included</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-white border-2 border-catering text-catering font-bold rounded-lg hover:bg-catering hover:text-white transition-all flex items-center justify-center gap-2">
                    View Full Menu <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <button className="text-gray-500 hover:text-convention font-medium text-sm border-b border-gray-300 pb-1 hover:border-convention transition-all">
            Download Full Brochure (PDF)
          </button>
        </div>

      </div>
    </section>
  );
};