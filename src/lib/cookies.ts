export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now()
};

export function getCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return null;
    
    const parsed = JSON.parse(consent);
    
    // Check if consent is older than 1 year (365 days)
    const oneYearMs = 365 * 24 * 60 * 60 * 1000;
    if (Date.now() - parsed.timestamp > oneYearMs) {
      localStorage.removeItem('cookie-consent');
      return null;
    }
    
    return parsed;
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    localStorage.removeItem('cookie-consent');
    return null;
  }
}

export function setCookieConsent(preferences: Omit<CookiePreferences, 'timestamp'>): void {
  if (typeof window === 'undefined') return;
  
  const consentData: CookiePreferences = {
    ...preferences,
    timestamp: Date.now()
  };
  
  localStorage.setItem('cookie-consent', JSON.stringify(consentData));
  
  // Trigger analytics based on consent
  if (preferences.analytics && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  
  // Dispatch custom event for other components to listen to
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
    detail: consentData
  }));
}

export function hasConsent(type: keyof Omit<CookiePreferences, 'timestamp'>): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;
  
  return consent[type];
}

export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('cookie-consent');
  
  // Reset GTM consent
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
  }
}

// Helper function to conditionally load analytics scripts
export function shouldLoadAnalytics(): boolean {
  return hasConsent('analytics');
}

export function shouldLoadMarketing(): boolean {
  return hasConsent('marketing');
}

// Initialize GTM consent mode
export function initializeGTMConsent(): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const consent = getCookieConsent();
  
  window.gtag('consent', 'default', {
    'analytics_storage': consent?.analytics ? 'granted' : 'denied',
    'ad_storage': consent?.marketing ? 'granted' : 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}