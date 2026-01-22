"use client";

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'Venue Gallery', href: '/gallery' },
      { name: 'Catering Menus', href: '/menu' },
      { name: 'Virtual Tour', href: '#' },
      { name: 'Check Availability', href: '/reservation' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Delivery Policy', href: '/delivery-policy' },
      { name: 'Refund & Return Policy', href: '/refund-policy' },
    ]
  };

  return (
    <footer className="relative bg-gray-950 text-white pt-24 pb-8 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-convention/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <Link href="/" className="relative h-20 w-56 transition-transform hover:scale-105 bg-white/95 p-3 rounded-2xl shadow-xl backdrop-blur-sm group">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  title={SITE_CONFIG.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </Link>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Where heritage meets hospitality. Experience Bangladesh&apos;s most distinguished setting for weddings, corporate galas, and culinary excellence.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: SITE_CONFIG.socials.facebook, color: 'hover:bg-blue-600' },
                { icon: Instagram, href: SITE_CONFIG.socials.instagram, color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600' },
                { icon: Youtube, href: SITE_CONFIG.socials.youtube, color: 'hover:bg-red-600' },
                { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, color: 'hover:bg-blue-700' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1 shadow-lg group`}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold rounded-full"></span>
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-gold/50" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold rounded-full"></span>
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-gold/50" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="font-serif text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold rounded-full"></span>
              The Venue
            </h4>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-convention/20 flex items-center justify-center text-convention-light flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Our Location</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{SITE_CONFIG.contact.address.full}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-silver/20 flex items-center justify-center text-silver flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Make a Call</p>
                  <a href={`tel:${SITE_CONFIG.contact.phone[0]}`} className="text-sm text-gray-300 hover:text-silver transition-colors font-medium">
                    {SITE_CONFIG.contact.phone[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-gray-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm text-gray-300 hover:text-silver transition-colors font-medium">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Enhanced Payment Section */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-convention/50 to-silver/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Pay with</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
              </div>
              <div className="w-full container mx-auto overflow-hidden rounded-xl bg-white p-2 md:p-4 shadow-inner">
                <Image
                  src="https://shimanto.x-grouprestaurant.com/uploads/SSLCommerz-Pay-With-logo-All-Size-03.png"
                  alt="SSLCommerz Certified Trusted Provider"
                  title="SSLCommerz Certified Trusted Provider"
                  width={4162}
                  height={158}
                  className="w-full h-auto object-contain scale-100 md:scale-[1.02] transform transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Borderless Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-500">
              <span>&copy; {currentYear} {SITE_CONFIG.name}.</span>
              <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
              <div className="flex items-center gap-1 text-[10px] tracking-widest uppercase font-bold text-gray-600">
                Part of <span className="text-gold">X-Group</span> Hospitality Chain
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <span className="text-xs text-gray-400">Crafted with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span className="text-xs text-gray-400">by</span>
              <a
                href="https://mdamranhossen.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-gradient-to-r from-gold to-yellow-200 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Md Amran Hossen
              </a>
              <ExternalLink size={10} className="text-gold/50" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
