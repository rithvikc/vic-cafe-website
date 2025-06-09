declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const trackConversion = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', eventName, {
      ...parameters,
      event_category: 'conversion',
    });
  }
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent('click', 'Contact', 'Phone Call');
  trackConversion('phone_call');
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('click', 'Social Media', platform);
};

// Track menu/service views
export const trackMenuView = (section: string) => {
  trackEvent('view', 'Menu', section);
};