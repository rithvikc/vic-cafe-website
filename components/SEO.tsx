import { SITE_CONFIG } from '@/lib/constants';

export function SEO() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_CONFIG.url}/#business`,
        name: SITE_CONFIG.name,
        alternateName: 'Vic\'s Cafe Cremorne',
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        telephone: '0470070020',
        email: 'info@viccafe.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Cremorne',
          addressLocality: 'Melbourne',
          addressRegion: 'Victoria',
          addressCountry: 'AU',
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
          'https://instagram.com/vicscafe',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          '@id': `${SITE_CONFIG.url}/#business`,
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'Restaurant',
        '@id': `${SITE_CONFIG.url}/#restaurant`,
        name: SITE_CONFIG.name,
        image: `${SITE_CONFIG.url}/og-image.jpg`,
        servesCuisine: ['Coffee', 'Breakfast', 'Lunch'],
        hasMenu: `${SITE_CONFIG.url}/#services`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Melbourne',
          addressRegion: 'Victoria',
          addressCountry: 'AU',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={SITE_CONFIG.url} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta name="twitter:creator" content="@vicscafe" />
      <meta name="application-name" content={SITE_CONFIG.name} />
      <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
      <meta name="msapplication-TileColor" content="#FF6B00" />
    </>
  );
}