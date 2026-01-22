import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { MENU_ITEMS } from "@/constant/constants";
import { ChefHat, QrCode, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const MenuShowcase: React.FC = () => {
  return (
    <section id="culinary" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeader
            subtitle="The Palette"
            title="Signature Creations"
            alignment="left"
            theme="convention"
            className="mb-0"
          />
          <Link href="/menu" className="mb-6 md:mb-0">
            <Button variant="ghost" className="hidden md:inline-flex items-center gap-2 text-convention font-medium hover:text-convention-dark hover:bg-transparent">
              View All Menus <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              className="group relative cursor-pointer border-none shadow-md"
            >
              <div className="relative aspect-w-4 aspect-h-3 h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.isChefSpecial && (
                  <span className="inline-flex items-center gap-1 bg-silver text-white text-xs font-bold px-2 py-0.5 rounded mb-2 shadow-sm">
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
                        className="text-[10px] text-white border border-white/30 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded border border-white/20">
                    <QrCode size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


