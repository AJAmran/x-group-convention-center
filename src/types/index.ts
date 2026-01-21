export interface Venue {
  id: string;
  name: string;
  capacity: number;
  type: string;
  image: string;
  description: string;
  suggestedMenuId: string;
  width?: number;
  height?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: "Appetizer" | "Main" | "Dessert" | "Beverage";
  tags: string[];
  image: string;
  isChefSpecial: boolean;
  width?: number;
  height?: number;
}

export interface MenuPackage {
  id: string;
  name: string;
  description?: string;
  pricePerHead: number;
  items: string[]; // List of items in the package
  style?: "Plated" | "Family Style" | "Royal Service";
  image?: string;
  width?: number;
  height?: number;
}

export interface AdditionalItem {
  id: string;
  name: string;
  price: number;
  unit?: string; // e.g., "per person", "per item"
  category?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company?: string;
  quote: string;
  venueRating: number;
  foodRating: number;
  pairedMenu: string;
  eventName: string;
  image?: string;
}

export interface Cert {
  title: string;
  issuer: string;
  iconName?: string;
  image?: string;
  type: "venue" | "catering";
  width?: number;
  height?: number;
}

export interface GalleryItem {
  id: string;
  type: "event" | "culinary";
  image: string;
  title: string;
  category: string;
  width?: number;
  height?: number;
}

export interface HeroSlide {
  id: number;
  bgImage: string;
  subtitle: string;
  title: string;
  desc: string;
  theme: 'convention' | 'catering' | 'unified';
  ctaPrimary: string;
  ctaSecondary: string;
  width?: number;
  height?: number;
}
