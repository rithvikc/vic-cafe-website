import { SITE_CONFIG, META_DEFAULTS } from './constants';
import type { MetaData } from './types';

export function generateMetadata(data: Partial<MetaData> = {}): MetaData {
  return {
    title: data.title ? `${data.title} | ${SITE_CONFIG.name}` : META_DEFAULTS.title,
    description: data.description || META_DEFAULTS.description,
    keywords: data.keywords || META_DEFAULTS.keywords,
    image: data.image || `${SITE_CONFIG.url}/og-image.jpg`,
    canonical: data.canonical || SITE_CONFIG.url,
  };
}

export function generateStructuredData(type: 'LocalBusiness' | 'Restaurant' | 'WebSite' = 'LocalBusiness') {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    openingHoursSpecification: Object.entries(SITE_CONFIG.business.hours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours.open,
      closes: hours.close,
    })),
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  };

  if (type === 'LocalBusiness' || type === 'Restaurant') {
    return {
      ...baseData,
      servesCuisine: ['Coffee', 'Breakfast', 'Lunch', 'Australian'],
      priceRange: '$$',
      hasMenu: `${SITE_CONFIG.url}/#services`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '200',
        bestRating: '5',
        worstRating: '1',
      },
    };
  }

  return baseData;
}

export function generateBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    alternateName: 'Vic\'s Cafe Cremorne',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    servesCuisine: ['Coffee', 'Breakfast', 'Lunch', 'Australian'],
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Cash, Credit Card, EFTPOS',
    hasMenu: `${SITE_CONFIG.url}/#services`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
    ].filter(Boolean),
  };
}