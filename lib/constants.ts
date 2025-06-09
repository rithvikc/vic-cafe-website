export const SITE_CONFIG = {
  name: 'Vic\'s Cafe',
  description: 'Melbourne\'s premier coffee destination in Cremorne. We use the highest quality beans roasted right here in Cremorne, Victoria. Discover exceptional coffee, delicious food, and genuine community.',
  url: 'https://viccafe.com.au',
  keywords: [
    'vic cafe',
    'coffee melbourne',
    'cremorne cafe',
    'best coffee cremorne',
    'melbourne coffee shop',
    'local coffee roaster',
    'artisan coffee',
    'breakfast melbourne',
    'lunch cremorne',
    'specialty coffee',
    'local beans',
    'community cafe'
  ],
  contact: {
    phone: '0470070020',
    email: 'info@viccafe.com.au',
    address: {
      street: 'Cremorne',
      city: 'Melbourne',
      state: 'Victoria',
      country: 'Australia',
    },
  },
  social: {
    instagram: 'https://instagram.com/vicscafe',
  },
  business: {
    hours: {
      monday: { open: '06:00', close: '16:00' },
      tuesday: { open: '06:00', close: '16:00' },
      wednesday: { open: '06:00', close: '16:00' },
      thursday: { open: '06:00', close: '16:00' },
      friday: { open: '06:00', close: '16:00' },
      saturday: { open: '07:00', close: '15:00' },
      sunday: { open: '08:00', close: '14:00' },
    },
    services: [
      'Specialty Coffee',
      'Breakfast',
      'Lunch',
      'Take Away',
      'Dine In',
      'Catering',
    ],
    features: [
      'Locally Roasted Beans',
      'Artisan Food',
      'Community Space',
      'Free Wi-Fi',
      'Outdoor Seating',
      'Vegetarian Options',
    ],
  },
  brand: {
    primaryColor: '#FF6B00',
    logo: 'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/logos/1749462667075-q45dd6jdvwg.jpeg',
    images: [
      'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462667963-zt1sqc3en7e.svg',
      'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462668192-qko7lbi88x.jpg',
    ],
  },
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const META_DEFAULTS = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords.join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vicscafe',
  },
};