"use client";

import React, { useState } from 'react';

import { ArrowRight, Users, Utensils, Star, CheckCircle, Maximize } from 'lucide-react';
import { PACKAGES, VENUES } from '@/constant/constants';
import { SITE_CONFIG } from '@/constant/config';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const UnifiedServices: React.FC = () => {
  // Determine view mode based on config
  const isMultiVenue = SITE_CONFIG.hasMultipleVenues;

  // Default to 'catering' if single venue, else 'venue'
  const [activeTab, setActiveTab] = useState<'venue' | 'catering'>(isMultiVenue ? 'venue' : 'catering');

  const venuesToDisplay = isMultiVenue ? VENUES : [VENUES[0]];

  return (
    <section id="venues" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <SectionHeader
          subtitle={isMultiVenue ? "Seamless Integration" : "Culinary Excellence"}
          title={isMultiVenue ? "Curated Spaces & Plates" : "Premier Catering Services"}
          description={isMultiVenue
            ? "Whether you need a grand ballroom for 1000 or an intimate garden for 50, we pair the perfect environment with exquisite culinary journeys."
            : "Our executive culinary team delivers exceptional catering solutions tailored to your specific event requirements."
          }
          theme="convention"
        />

        {/* Toggle - Hide if single venue (only showing Catering) */}
        {isMultiVenue && (
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <Button
                variant={activeTab === 'venue' ? 'convention' : 'ghost'}
                onClick={() => setActiveTab('venue')}
                className={`rounded-full shadow-none ${activeTab === 'venue' ? 'shadow-lg' : 'bg-transparent'}`}
                size="sm"
              >
                Event Spaces
              </Button>
              <Button
                variant={activeTab === 'catering' ? 'primary' : 'ghost'}
                onClick={() => setActiveTab('catering')}
                className={`rounded-full shadow-none ${activeTab === 'catering' ? 'shadow-lg' : 'bg-transparent'}`}
                size="sm"
              >
                Culinary Experiences
              </Button>
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className={activeTab === 'venue' && !isMultiVenue ? "max-w-5xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>

          {activeTab === 'venue' ? (
            venuesToDisplay.map((venue) => {
              const suggestedPkg = PACKAGES.find(p => p.id === venue.suggestedMenuId);

              if (!isMultiVenue) {
                // Single Venue Professional Layout (Horizontal)
                return (
                  <Card key={venue.id} className="flex flex-col md:flex-row hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                    <div className="md:w-1/2 relative h-64 md:h-[500px]">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        title={venue.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                        <h3 className="text-2xl font-serif font-bold text-white">{venue.name}</h3>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="hidden md:block mb-4">
                        <span className="text-convention font-bold tracking-widest text-xs uppercase mb-2 block">The Grand Venue</span>
                        <h3 className="text-3xl font-serif font-bold text-gray-900">{venue.name}</h3>
                      </div>

                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{venue.description}</p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                            <Users size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{venue.capacity} Guests</p>
                            <p className="text-xs text-gray-500">Maximum Capacity</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                            <Maximize size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Spacious</p>
                            <p className="text-xs text-gray-500">{venue.type} Setup</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                          <Star size={12} className="text-gold" /> Chef's Recommendation
                        </p>
                        <p className="text-lg font-serif font-bold text-convention-dark">
                          Pair with: {suggestedPkg?.name}
                        </p>
                      </div>

                      <Link href="/reservation" className="w-full">
                        <Button variant="convention" fullWidth className="gap-2 rounded-xl">
                          Book This Venue <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              }

              // Multiple Venue Grid Layout (Existing Style)
              return (
                <Card key={venue.id} className="relative group overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-convention-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Users size={12} /> {venue.capacity} Guests
                  </div>

                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      title={venue.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
                      <p className="text-sm font-medium text-convention-dark">{suggestedPkg?.name}</p>
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
            PACKAGES.slice(0, 3).map((pkg) => (
              <Card key={pkg.id} className="relative group flex flex-col overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-convention text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  ৳{pkg.pricePerHead} / head
                </div>

                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  {/* Package Image */}
                  <Image
                    src={pkg.image || ''}
                    alt={pkg.name}
                    title={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <span className="text-white font-serif text-2xl font-bold">{pkg.name}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Package Items List */}
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {pkg.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-convention mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-convention/10 flex items-center justify-center text-convention">
                        <Utensils size={16} />
                      </div>
                      <span>{pkg.style} Service</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-silver/10 flex items-center justify-center text-silver-dark">
                        <Star size={16} className="text-silver" />
                      </div>
                      <span>Chef Consultation Included</span>
                    </div>
                  </div>

                  <Link href="/menu" className="w-full mt-4">
                    <Button variant="primary" fullWidth className="gap-2">
                      View Full Menu <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
          )}
        </div>

      </div>
    </section>
  );
};