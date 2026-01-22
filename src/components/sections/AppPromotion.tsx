import React from 'react';
import { CheckCircle, Apple, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { APP_FEATURES } from '@/constant/constants';

import Image from 'next/image';

export const AppPromotion: React.FC = () => {
  return (
    <section className="bg-convention text-white py-20 overflow-hidden relative">
      {/* Background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 space-y-8">
            <SectionHeader
              subtitle={`Powered by ${SITE_CONFIG.apps.foodbite.name}`}
              title={`${SITE_CONFIG.shortName} Flavors, Delivered to Your Door`}
              description="Can't make it to the venue? Order our signature chef specials directly to your home through the Foodbitebd app. Experience premium dining in your living room."
              alignment="left"
              theme="light"
              className="mb-8"
            />

            <div className="space-y-4">
              {APP_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-silver" size={24} />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={SITE_CONFIG.apps.foodbite.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all border border-gray-800 shadow-lg group h-auto"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform"><Apple /></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-80">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </a>

              <a
                href={SITE_CONFIG.apps.foodbite.android}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg group h-auto"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform text-convention"><Play /></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-gray-600">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-20"></div>
              <Image
                src="https://ik.imagekit.io/4iqsux69yt/shimanto%20convention%20images/WhatsApp%20Image%202026-01-22%20at%205.18.28%20PM%20(1).jpeg"
                alt="Foodbitebd App Interface"
                title="Foodbitebd Mobile App Interface"
                fill
                className="object-cover opacity-80"
                sizes="300px"
              />



              <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md p-6 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Delivery Time</div>
                    <div className="font-bold text-gray-900 text-lg">25-35 min</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-bold uppercase">Rating</div>
                    <div className="font-bold text-convention text-lg">4.9 ★</div>
                  </div>
                </div>
                <Button variant="convention" fullWidth className="py-3.5 rounded-xl shadow-lg">
                  Order Now • ৳1550
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};