import React from "react";
import { MENU_ITEMS } from "@/constant/constants";
import { ChefHat, QrCode } from "lucide-react";

export const MenuShowcase: React.FC = () => {
  return (
    <section id="culinary" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-catering font-bold tracking-widest text-sm uppercase">
              The Palette
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
              Signature Creations
            </h2>
          </div>
          <a href="/menu" className="hidden md:flex items-center gap-2 text-convention font-medium hover:text-convention-dark transition">
            View All Menus <ArrowRightIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-w-4 aspect-h-3 h-80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.isChefSpecial && (
                  <span className="inline-flex items-center gap-1 bg-gold text-black text-xs font-bold px-2 py-0.5 rounded mb-2">
                    <ChefHat size={12} /> Chef&apos;s Special
                  </span>
                )}
                <h3 className="text-white font-serif text-2xl font-bold mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {item.description}
                </p>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-white border border-white/30 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="bg-white p-1 rounded">
                    <QrCode size={16} className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Promo Card */}
          <div className="bg-convention-light rounded-xl p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-white/10">
              <ChefHat size={200} />
            </div>
            <h3 className="text-2xl font-serif font-bold relative z-10 mb-4">
              Customize Your Menu
            </h3>
            <p className="text-blue-100 relative z-10 mb-6">
              Work directly with Executive Chef Rahman to design a menu that
              tells your story.
            </p>
            <button className="bg-white text-convention font-bold px-6 py-2 rounded-full hover:bg-blue-50 transition relative z-10">
              Start Designing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
