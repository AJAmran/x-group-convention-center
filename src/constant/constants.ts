import { Venue, MenuItem, MenuPackage, Testimonial, Cert, GalleryItem, AdditionalItem } from '../types';

export const VENUES: Venue[] = [
  {
    id: 'v1',
    name: 'Grand Sapphire Ballroom',
    capacity: 1200,
    type: 'Ballroom',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831199/restaurant-hall-with-round-square-tables-some-chairs-plants_140725-8031_tiw99o.avif',
    description: 'Our flagship venue featuring crystal chandeliers and column-free architecture.',
    suggestedMenuId: '601'
  },
  {
    id: 'v2',
    name: 'Riverview Conference Hall',
    capacity: 300,
    type: 'Conference',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/empty-conference-room-generative-ai_587448-1943_dxuzhp.avif',
    description: 'Modern minimalist design with panoramic windows overlooking the river.',
    suggestedMenuId: '602'
  },
  {
    id: 'v3',
    name: 'The Culinary Garden',
    capacity: 150,
    type: 'Outdoor',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/restaurant-hall-with-lots-table_140725-6309_wx2fva.avif',
    description: 'An open-air venue surrounded by lush greenery and live cooking stations.',
    suggestedMenuId: '603'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Saffron Risotto & Scallops',
    description: 'Creamy saffron-infused risotto topped with pan-seared scallops.',
    category: 'Main',
    tags: ['Chef Special', 'Seafood'],
    image: 'https://picsum.photos/id/493/400/300',
    isChefSpecial: true
  },
  {
    id: 'm2',
    name: 'Smoked Beef Brisket',
    description: 'Slow-cooked for 12 hours with our signature spice rub.',
    category: 'Main',
    tags: ['Meat', 'Signature'],
    image: 'https://picsum.photos/id/431/400/300',
    isChefSpecial: false
  },
  {
    id: 'm3',
    name: 'Mango Cardamom Mousse',
    description: 'A light, airy mousse fusing local mangoes with aromatic spices.',
    category: 'Dessert',
    tags: ['Fusion', 'Vegetarian'],
    image: 'https://picsum.photos/id/488/400/300',
    isChefSpecial: true
  }
];

export const PACKAGES: MenuPackage[] = [
  {
    id: '601',
    name: 'REGULAR PACKAGE',
    pricePerHead: 800.00,
    items: [
      'Plain Polao',
      'Roast Chicken',
      'Beef/ Chicken Rezala',
      'Jali Kabab/ Shami Kabab',
      'Mixed Vegetable Indian Style',
      'Fresh / Mixed Salad',
      'Firnee / Jorda',
      'Borhani / Soft Drinks (250 ml)',
      'Mineral Water'
    ],
    style: 'Buffet'
  },
  {
    id: '602',
    name: 'Motor Shuti Polao',
    pricePerHead: 825.00,
    items: [
      'Motor Shuti Polao',
      'Tandoori Chicken / Roast Chicken',
      'Chicken Rezala',
      'Jali Kabab / Shami Kabab',
      'Mixed Vegetable Indian Style',
      'Fresh / Mixed Salad',
      'Firnee / Jorda',
      'Borhani / Soft Drinks (250 ml)',
      'Mineral Water'
    ],
    style: 'Buffet'
  },
  {
    id: '603',
    name: 'Shimanto Special Saffron Polao',
    pricePerHead: 899.00,
    items: [
      'Shimanto Special Saffron Polao',
      'Tandoori Chicken / Roast Chicken',
      'Beef/ Mutton Rezala',
      'Jali Kabab/ Shami Kabab',
      'Mixed Vegetable Indian Style',
      'Fresh / Mixed Salad',
      'Firnee / Jorda',
      'Borhani / Soft Drinks ( 250 ml)',
      'Mineral Water'
    ],
    style: 'Buffet'
  },
  {
    id: '604',
    name: 'Shahi Morog Polao',
    pricePerHead: 1075.00,
    items: [
      'Shahi Morog Polao',
      'Beef Rezala',
      'Jali Kabab/ Shami Kabab',
      'Fresh / Mixed Salad',
      'Rumali Ruti / Nan',
      'Mixed Vegetable / Dal Makhani',
      'Borhani / Soft Drinks ( 250 ml)',
      'Special Firnee',
      'Mineral Water'
    ],
    style: 'Plated'
  },
  {
    id: '605',
    name: 'Kachchi Biriyani (Chini Gura)',
    pricePerHead: 925.00,
    items: [
      'Kachchi Biriyani (Chini Gura)',
      'Roast Chicken / Tandoori Chicken',
      'Jali Kabab/ Shami Kabab',
      'Vegetable Pakora',
      'Fresh / Mixed Salad',
      'Aloo Bukhara Chutney',
      'Firnee / Jorda',
      'Borhani / Soft Drinks ( 250 ml)',
      'Mineral Water'
    ],
    style: 'Plated'
  },
  {
    id: '606',
    name: 'Kachchi Biriyani (Bashmoti)',
    pricePerHead: 1075.00,
    items: [
      'Kachchi Biriyani (Bashmoti)',
      'Tandoori Chicken / Roast Chicken',
      'Rumali Ruti / Nan',
      'Fresh / Mixed Salad',
      'Beef Kalia / Chicken Rezala',
      'Mixed Vegetable / Butter Fry Dal',
      'Borhani / Soft Drinks ( 250 ml)',
      'Special Jorda',
      'Mineral Water'
    ],
    style: 'Plated'
  },
  {
    id: '607',
    name: 'Beef Tehari / Morog Polao',
    pricePerHead: 1125.00,
    items: [
      'Beef Tehari / Morog Polao',
      'Egg Kurma / Jali Kabab',
      'Fresh / Mixed Salad',
      'Borhani / Soft Drinks ( 250 ml)',
      'Mineral Water'
    ],
    style: 'Plated'
  }
];

export const ADDITIONAL_ITEMS: AdditionalItem[] = [
  { id: '608', name: 'Whole Mutton', price: 14900, unit: 'whole' },
  { id: '609', name: 'Whole Fish', price: 5800, unit: 'whole' },
  { id: '610', name: 'Whole Roast Chicken', price: 700, unit: 'whole' },
  { id: '611', name: 'Fish Fillet (Koral)', price: 450 },
  { id: '612', name: 'King Prawn', price: 400 },
  { id: '613', name: 'Pomfret', price: 400 },
  { id: '614', name: 'Shrimps Cocktails', price: 400 },
  { id: '615', name: 'Mutton Rezala', price: 350, unit: 'per person' },
  { id: '616', name: 'Beef Rezala', price: 275, unit: 'per person' },
  { id: '617', name: 'Piece of Roast Chicken', price: 175 },
  { id: '618', name: 'Chicken Shashlik', price: 175 },
  { id: '619', name: 'Piece of Rui Fish Dopiaza', price: 150 },
  { id: '620', name: 'Mixed Vegetable (Chinese Style)', price: 125 },
  { id: '621', name: 'Nan and Dal', price: 120 },
  { id: '622', name: 'Mixed Vegetable', price: 75 },
  { id: '623', name: 'Egg Korma', price: 60 },
  { id: '624', name: 'Aloo Bukhara Chutney', price: 60 },
  { id: '625', name: 'Chotpoti / Fuska', price: 60 },
  { id: '626', name: 'Shahi Kheer ice-cream', price: 135 },
  { id: '627', name: 'Traditional Sweet', price: 125 },
  { id: '628', name: 'Golab Jamun', price: 90 },
  { id: '629', name: 'Malai Bundia', price: 85 },
  { id: '630', name: 'Sweet Yogurt', price: 75 },
  { id: '631', name: 'Borhani (250 ml)', price: 75 },
  { id: '632', name: 'Reshmi Jilapi', price: 60 },
  { id: '633', name: 'Tea / Coffee', price: 50 },
  { id: '634', name: 'Pan Box', price: 15 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Sarah Jenkins',
    role: 'Event Director',
    company: 'TechSummit Global',
    quote: 'The seamless transition from the conference keynote to the gourmet lunch was flawless. The venue tech was top-tier, but the Smoked Brisket stole the show.',
    venueRating: 5,
    foodRating: 5,
    pairedMenu: 'Corporate Power Lunch',
    eventName: 'Annual Tech Symposium',
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 't2',
    clientName: 'Rafiqul Islam',
    role: 'Groom',
    quote: 'We wanted a traditional wedding with a modern twist. The Grand Ballroom was majestic, and the Chef customized a fusion menu that delighted both generations.',
    venueRating: 5,
    foodRating: 4.8,
    pairedMenu: 'Royal Gala Feast',
    eventName: 'Wedding Reception',
    image: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: 't3',
    clientName: 'Elena Rodriguez',
    role: 'CEO',
    company: 'Luxe Fashion',
    quote: 'The Culinary Garden was the perfect backdrop for our summer collection launch. The live cooking stations added an interactive element that our guests loved.',
    venueRating: 4.9,
    foodRating: 5,
    pairedMenu: 'Sunset Fusion Grill',
    eventName: 'Product Launch',
    image: 'https://picsum.photos/id/338/100/100'
  }
];

export const CERTIFICATIONS: Cert[] = [
  { title: 'ISO 9001:2015', issuer: 'Quality Management', iconName: 'Award', type: 'venue' },
  { title: 'Fire Safety A+', issuer: 'Natl Safety Board', iconName: 'ShieldCheck', type: 'venue' },
  { title: 'HACCP Certified', issuer: 'Food Safety Global', iconName: 'Utensils', type: 'catering' },
  { title: '100% Halal', issuer: 'Islamic Foundation', iconName: 'CheckCircle', type: 'catering' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', type: 'event', image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/close-up-people-serving-themselves-fruits-buffet-restaurant_8353-9872_pcsh74.avif', title: 'Grand Ballroom Setup', category: 'Wedding' },
  { id: 'g2', type: 'culinary', image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/rich-dinner-tables-covered-with-blue-clothes-sparkling-glass_8353-799_etqpuv.avif', title: 'Live Pasta Station', category: 'Live Cooking' },
  { id: 'g3', type: 'event', image: 'https://picsum.photos/id/4/800/600', title: 'Corporate Seminar', category: 'Corporate' },
  { id: 'g4', type: 'culinary', image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/wedding-bread-served-plate-with-greenery-stands-plates_8353-547_uljxap.jpg', title: 'Plated Scallops', category: 'Fine Dining' },
  { id: 'g5', type: 'event', image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764832651/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565_eiup0m.avif', title: 'Garden Reception', category: 'Outdoor' },
  { id: 'g6', type: 'culinary', image: 'https://picsum.photos/id/488/800/600', title: 'Dessert Symphony', category: 'Dessert' },
];