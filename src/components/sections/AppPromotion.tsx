import React from 'react';
import { CheckCircle, Apple, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';

export const AppPromotion: React.FC = () => {
  return (
    <section className="bg-convention text-white py-20 overflow-hidden relative">
      {/* Background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 space-y-8">
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              Powered by {SITE_CONFIG.apps.foodbite.name}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {SITE_CONFIG.shortName} Flavors,<br />Delivered to Your Door
            </h2>
            <p className="text-blue-100 text-lg">
              Can&apos;t make it to the venue? Order our signature chef specials directly to your home through the Foodbitebd app. Experience 5-star dining in your living room.
            </p>

            <div className="space-y-4">
              {[
                'Exclusive "Chef at Home" Menu',
                'Real-time Order Tracking',
                'Secure Contactless Delivery'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-gold" size={24} />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all border border-gray-800 shadow-lg group">
                <div className="text-3xl group-hover:scale-110 transition-transform"><Apple /></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-80">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg group">
                <div className="text-3xl group-hover:scale-110 transition-transform text-convention"><Play /></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-gray-600">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-20"></div>
              <img
                src="https://picsum.photos/id/429/600/1200"
                alt="Foodbitebd App Interface"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Overlay UI Mock */}
              <div className="absolute top-12 left-0 right-0 p-4">
                <div className="flex justify-between items-center text-white mb-4">
                  <span className="font-bold">Foodbitebd</span>
                  <span className="bg-convention px-2 py-0.5 rounded text-xs">LIVE</span>
                </div>
                <h3 className="text-white font-serif text-2xl font-bold leading-tight drop-shadow-md">Today&apos;s Special: Smoked Beef Brisket</h3>
              </div>

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
                <button className="w-full bg-convention text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-convention-dark transition-colors">
                  Order Now • $45.00
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-32 -right-4 bg-white p-4 rounded-xl shadow-xl animate-bounce hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm text-gray-800">Order Accepted</span>
              </div>
            </div>
            <div className="absolute bottom-40 -left-10 bg-white p-4 rounded-xl shadow-xl animate-pulse hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-convention">50% OFF</span>
                <span className="text-xs text-gray-500 font-medium">First App Order</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};