"use client";

import React, { useState } from 'react';
import { Menu, X, Calendar, ChefHat, MapPin, Image, Phone, Home, Info } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/constant/config';
import { Button } from '../ui/Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              src="https://shimanto.x-grouprestaurant.com/uploads/ff6c6ecade66e52f2d2992fa7cab9763.png"
              alt="Shimanto Convention Center"
              title="Shimanto Convention Center Logo"
              width={493}
              height={174}
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/" label="Home" active={isActive('/')} />
            <NavLink href="/about" label="About" active={isActive('/about')} />
            {SITE_CONFIG.hasMultipleVenues && (
              <NavLink href="/venues" label="Venues" active={isActive('/venues')} />
            )}
            <NavLink href="/menu" label="Menu" active={isActive('/menu')} />
            <NavLink href="/gallery" label="Gallery" active={isActive('/gallery')} />
            <NavLink href="/reservation" label="Reservation" active={isActive('/reservation')} />
            <NavLink href="/contact" label="Contact" active={isActive('/contact')} />

            <Link href="/reservation">
              <Button variant="convention" className="flex items-center gap-2 rounded-full px-6 py-2.5">
                <Calendar size={16} />
                <span>Book Event</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-convention focus:outline-none p-2 h-auto hover:bg-transparent border-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <MobileNavLink href="/" icon={<Home size={18} />} label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/about" icon={<Info size={18} />} label="About Us" onClick={() => setIsOpen(false)} />
            {SITE_CONFIG.hasMultipleVenues && (
              <MobileNavLink href="/venues" icon={<MapPin size={18} />} label="Venues" onClick={() => setIsOpen(false)} />
            )}
            <MobileNavLink href="/menu" icon={<ChefHat size={18} />} label="Menu & Catering" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/gallery" icon={<Image size={18} />} label="Gallery" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/reservation" icon={<Calendar size={18} />} label="Reservation" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/contact" icon={<Phone size={18} />} label="Contact" onClick={() => setIsOpen(false)} />

            <Link href="/reservation" onClick={() => setIsOpen(false)} className="block w-full mt-8">
              <Button variant="convention" fullWidth className="rounded-lg">
                Plan Your Event
              </Button>
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