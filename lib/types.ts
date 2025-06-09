export interface BusinessHours {
  open: string;
  close: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: Address;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface BusinessInfo {
  hours: Record<string, BusinessHours>;
  services: string[];
  features: string[];
}

export interface BrandInfo {
  primaryColor: string;
  logo: string;
  images: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  contact: ContactInfo;
  social: SocialLinks;
  business: BusinessInfo;
  brand: BrandInfo;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  image?: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonical?: string;
}