"use client";

import React, { useState } from 'react';
import { Menu, X, Calendar, ChefHat, MapPin, Image, Phone, Home, Info } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/constant/config';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-convention rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-convention-dark transition-colors">
              {SITE_CONFIG.shortName.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-convention-dark leading-none">{SITE_CONFIG.shortName}</span>
              <span className="text-[0.65rem] tracking-widest text-catering uppercase font-medium">{SITE_CONFIG.tagline}</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/" label="Home" active={isActive('/')} />
            <NavLink href="/about" label="About" active={isActive('/about')} />
            <NavLink href="/venues" label="Venues" active={isActive('/venues')} />
            <NavLink href="/menu" label="Menu" active={isActive('/menu')} />
            <NavLink href="/gallery" label="Gallery" active={isActive('/gallery')} />
            <NavLink href="/contact" label="Contact" active={isActive('/contact')} />

            <Link href="/contact" className="bg-gradient-to-r from-convention to-convention-dark text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-convention/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <Calendar size={16} />
              <span>Book Event</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-convention focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <MobileNavLink href="/" icon={<Home size={18} />} label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/about" icon={<Info size={18} />} label="About Us" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/venues" icon={<MapPin size={18} />} label="Venues" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/menu" icon={<ChefHat size={18} />} label="Menu & Catering" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/gallery" icon={<Image size={18} />} label="Gallery" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/contact" icon={<Phone size={18} />} label="Contact" onClick={() => setIsOpen(false)} />

            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-8 bg-convention text-white text-center px-4 py-3 rounded-lg font-medium shadow-md">
              Plan Your Event
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, active }: { href: string; label: string; active: boolean }) => (
  <Link
    href={href}
    className={`font-medium transition-colors ${active ? 'text-convention font-bold' : 'text-gray-600 hover:text-convention'}`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-convention rounded-md flex items-center gap-3"
  >
    <span className="text-gray-400">{icon}</span> {label}
  </Link>
);