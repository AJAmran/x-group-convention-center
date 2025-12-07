import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-convention rounded-tr-lg rounded-bl-lg flex items-center justify-center text-white font-serif font-bold text-lg">
                {SITE_CONFIG.shortName.charAt(0)}
              </div>
              <span className="font-serif text-xl font-bold">{SITE_CONFIG.shortName}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bangladesh&apos;s premier destination where grand architecture meets culinary artistry.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SITE_CONFIG.socials.facebook} className="text-gray-400 hover:text-white transition duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href={SITE_CONFIG.socials.instagram} className="text-gray-400 hover:text-white transition duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.socials.linkedin} className="text-gray-400 hover:text-white transition duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Venue Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Catering Menus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Virtual Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Check Availability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Legal & Certs</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Food Safety Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300 hover:pl-2 block">
                  Venue Rules
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-convention-light mt-1 group-hover:scale-110 transition duration-300" />
                <span className="group-hover:text-white transition duration-300">
                  {SITE_CONFIG.contact.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-convention-light group-hover:scale-110 transition duration-300" />
                <a href={`tel:${SITE_CONFIG.contact.phone[0]}`} className="hover:text-white transition duration-300">
                  {SITE_CONFIG.contact.phone.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-convention-light group-hover:scale-110 transition duration-300" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition duration-300">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
              <span className="flex items-center">
                &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="text-gold/80">Designed for Excellence.</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400">Designed & Developed with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span className="text-gray-400">by</span>
              <a
                href="https://mdamranhossen.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition duration-300 font-medium px-2 py-1 rounded bg-gray-800/50 hover:bg-gray-800"
              >
                Md Amran Hossen
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800/50 text-xs text-gray-600 text-center">
            <p>Part of the x-group chain restaurant and hospitality management family.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};