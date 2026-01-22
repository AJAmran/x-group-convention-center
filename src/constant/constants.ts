import { Venue, MenuItem, MenuPackage, Testimonial, Cert, GalleryItem, AdditionalItem, HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    bgImage: 'https://shimanto.x-grouprestaurant.com/uploads/0a1fa9f07cbdf936a7c69fad306091dc.jpg',
    subtitle: 'DISTINCTIVE SPACES',
    title: 'Where Grand Events\nTake Shape',
    desc: 'Experience Shimanto Convention Center — an elegant setting crafted for seamless gatherings and memorable occasions.',
    theme: 'convention',
    ctaPrimary: 'Explore Venues',
    ctaSecondary: 'Contact Us',
    width: 1200,
    height: 700
  },
  {
    id: 2,
    bgImage: 'https://shimanto.x-grouprestaurant.com/uploads/48a95b0f04a451441831746f62684056.jpg',
    subtitle: 'TIMELESS CELEBRATIONS',
    title: 'Where Every Moment\nFeels Just Right',
    desc: 'From elegant weddings to cherished milestones, Shimanto Convention Center brings tradition, warmth, and grace to every celebration.',
    theme: 'catering',
    ctaPrimary: 'View Menus',
    ctaSecondary: 'Meet the Chefs',
    width: 1200,
    height: 800
  },
  {
    id: 3,
    bgImage: 'https://shimanto.x-grouprestaurant.com/uploads/06121823e79e0a2001601361a6c4b887.jpg',
    subtitle: 'EVENTS WITH INTENT',
    title: 'Designed for Focus\nBuilt to Impress',
    desc: 'Host conferences, seminars, and corporate programs in a polished environment where clarity, comfort, and professionalism lead the way.',
    theme: 'unified',
    ctaPrimary: 'Plan Your Event',
    ctaSecondary: 'Watch Video',
    width: 1200,
    height: 800
  }
];

export const VENUES: Venue[] = [
  {
    id: 'v1',
    name: 'Grand Sapphire Ballroom',
    capacity: 1200,
    type: 'Ballroom',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831199/restaurant-hall-with-round-square-tables-some-chairs-plants_140725-8031_tiw99o.avif',
    description: 'Our flagship venue featuring crystal chandeliers and column-free architecture.',
    suggestedMenuId: '601',
    width: 1200,
    height: 800
  },
  {
    id: 'v2',
    name: 'Riverview Conference Hall',
    capacity: 300,
    type: 'Conference',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/empty-conference-room-generative-ai_587448-1943_dxuzhp.avif',
    description: 'Modern minimalist design with panoramic windows overlooking the river.',
    suggestedMenuId: '602',
    width: 1200,
    height: 800
  },
  {
    id: 'v3',
    name: 'The Culinary Garden',
    capacity: 150,
    type: 'Outdoor',
    image: 'https://res.cloudinary.com/dkoprlux1/image/upload/v1764831198/restaurant-hall-with-lots-table_140725-6309_wx2fva.avif',
    description: 'An open-air venue surrounded by lush greenery and live cooking stations.',
    suggestedMenuId: '603',
    width: 1200,
    height: 800
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Kachchi Biriyani (Bashmoti)',
    description: 'Traditional premium Bashmoti rice layer-cooked with tender mutton and aromatic spices.',
    category: 'Main',
    tags: ['Signature', 'Traditional', 'Biriyani'],
    image: 'https://shimanto.x-grouprestaurant.com/uploads/1a64c7d90d8040e5b8719df9c3bffe8a.jpg',
    isChefSpecial: true,
    width: 235,
    height: 157
  },
  {
    id: 'm2',
    name: 'Shahi Morog Polao',
    description: 'A royal delicacy of chicken and rice served with Rezala and kebabs.',
    category: 'Main',
    tags: ['Royal', 'Feast', 'Polao'],
    image: 'https://shimanto.x-grouprestaurant.com/uploads/5bab02e83dc13c11edc2d59a041594f9.jpg',
    isChefSpecial: true,
    width: 1600,
    height: 1064
  },
  {
    id: 'm3',
    name: 'Whole Mutton Roast',
    description: 'Exquisite whole roasted mutton, perfect for grand centerpieces.',
    category: 'Main',
    tags: ['Exclusive', 'Premium', 'Roast'],
    image: 'https://i.ibb.co.com/Z164cZG3/whole-mutton.jpg',
    isChefSpecial: false,
    width: 1600,
    height: 1200
  }
];

export const PACKAGES: MenuPackage[] = [
  {
    id: '601',
    name: 'Regular Package (Plain Polao)',
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
    image: 'https://shimanto.x-grouprestaurant.com/uploads/429965dc8c33dae64770d669d4d2669b.jpg',
    width: 750,
    height: 500
  },
  {
    id: '602',
    name: 'Motor Shuti Polao Menu',
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
    image: 'https://ik.imagekit.io/4iqsux69yt/Food%20Image/motor.jpeg',
    width: 1600,
    height: 1600
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
    image: 'https://i.ibb.co.com/rfvjmm6L/Shimanto-Special-Saffron-Polao-1.jpg',
    width: 1599,
    height: 1166
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
    image: 'https://i.ibb.co.com/XxQ1VWPk/Shahi-Morog-Polao.jpg',
    width: 1600,
    height: 1064
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
    image: 'https://shimanto.x-grouprestaurant.com/uploads/cd82bd9244c6bc867ced315b4ffeaff1.jpg',
    width: 258,
    height: 145
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
    image: 'https://shimanto.x-grouprestaurant.com/uploads/1a64c7d90d8040e5b8719df9c3bffe8a.jpg',
    width: 235,
    height: 157
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
    image: 'https://shimanto.x-grouprestaurant.com/uploads/32a0be4dbe1698018807546b0df2bf40.png',
    width: 333,
    height: 188
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
    clientName: 'Mahmudul Hasan',
    role: 'Head of Corporate Affairs',
    company: 'Grameen Digital Solutions',
    quote: 'From registration to closing remarks, everything ran like clockwork. The auditorium acoustics were excellent, and the Bengali–continental lunch struck the perfect balance.',
    venueRating: 5,
    foodRating: 4.9,
    pairedMenu: 'Executive Corporate Lunch',
    eventName: 'Annual Business Leadership Conference',
    image: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: 't2',
    clientName: 'Rafiqul Islam',
    role: 'Groom',
    quote: 'We dreamed of a wedding that honored tradition without feeling outdated. The décor, lighting, and hospitality were spot on—and the Kacchi Biryani? Absolute crowd favorite.',
    venueRating: 5,
    foodRating: 5,
    pairedMenu: 'Traditional Wedding Feast',
    eventName: 'Wedding Reception',
    image: 'https://picsum.photos/id/1011/100/100'
  },
  {
    id: 't3',
    clientName: 'Nusrat Jahan',
    role: 'Marketing Manager',
    company: 'PRAN–RFL Group',
    quote: 'The venue elevated our product launch effortlessly. Spacious layout, professional service team, and a refreshment menu that kept guests engaged throughout.',
    venueRating: 4.8,
    foodRating: 4.7,
    pairedMenu: 'Premium Refreshment & Canapés',
    eventName: 'New Product Launch Event',
    image: 'https://picsum.photos/id/1012/100/100'
  },
  {
    id: 't4',
    clientName: 'Dr. Shafiqur Rahman',
    role: 'Conference Chair',
    company: 'Bangladesh Medical Association',
    quote: 'Shimanto Convention Center provided an ideal setting for an academic gathering. Comfortable seating, reliable AV support, and timely catering made all the difference.',
    venueRating: 4.9,
    foodRating: 4.8,
    pairedMenu: 'Healthy Delegate Lunch',
    eventName: 'National Medical Seminar',
    image: 'https://picsum.photos/id/1027/100/100'
  }
];


export const CERTIFICATIONS: Cert[] = [
  { title: 'BSTI Certified', issuer: 'Bangladesh Standards', image: 'https://iconape.com/wp-content/png_logo_vector/bsti-logo.png', type: 'venue', width: 300, height: 213 },
  { title: 'Halal Certified', issuer: 'Islamic Foundation', image: 'https://images.seeklogo.com/logo-png/37/1/islamic-foundation-bangladesh-halal-logo-png_seeklogo-376753.png', type: 'catering', width: 600, height: 600 },
  { title: 'Grade A+ Certified', issuer: 'BD Food Safety Authority', image: 'https://bfsa.teletalk.com.bd/images/bfsa_logo.png', type: 'catering', width: 215, height: 232 }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', type: 'event', image: 'https://ik.imagekit.io/4iqsux69yt/RGF04344.jpg', title: 'Grand Ballroom Setup', category: 'Wedding', width: 1480, height: 986 },
  { id: 'g2', type: 'culinary', image: 'https://ik.imagekit.io/4iqsux69yt/RGF06602.jpg', title: 'Live Pasta Station', category: 'Live Cooking', width: 1480, height: 986 },
  { id: 'g3', type: 'event', image: 'https://ik.imagekit.io/4iqsux69yt/2.JPG', title: 'Corporate Seminar', category: 'Corporate', width: 800, height: 600 },
  { id: 'g4', type: 'culinary', image: 'https://ik.imagekit.io/4iqsux69yt/RGF06503.jpg', title: 'Plated Scallops', category: 'Fine Dining', width: 1480, height: 986 },
  { id: 'g5', type: 'event', image: 'https://ik.imagekit.io/4iqsux69yt/RGF06525.jpg', title: 'Garden Reception', category: 'Outdoor', width: 1480, height: 986 },
  { id: 'g6', type: 'culinary', image: 'https://ik.imagekit.io/4iqsux69yt/RGF06600.jpg', title: 'Dessert Symphony', category: 'Dessert', width: 800, height: 600 },
];