import { useState, useEffect, useCallback } from 'react';

// Declaração global para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadGoogleAnalytics = useCallback(() => {
    // Verificar se o gtag já está carregado
    if (typeof window !== 'undefined' && !window.gtag) {
      // Carregar Google Analytics dinamicamente
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RWY87ZSVH3';
      document.head.appendChild(script);

      script.onload = () => {
        // Inicializar GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', 'G-RWY87ZSVH3', {
          anonymize_ip: true,
          allow_google_signals: true,
          allow_ad_personalization_signals: true
        });

        // Carregar Google Ads se marketing foi aceito
        if (consent?.marketing) {
          gtag('config', 'AW-17291278691');
        }

        console.log('✅ Google Analytics carregado com consentimento');
      };
    }
  }, [consent?.marketing]);

  useEffect(() => {
    // Verificar consentimento salvo
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent);
      setConsent(parsedConsent);
      
      // Se aceitou analytics, carregar GA4
      if (parsedConsent.analytics) {
        loadGoogleAnalytics();
      }
    }
    setIsLoaded(true);
  }, [loadGoogleAnalytics]);

  const acceptAll = () => {
    const newConsent: CookieConsent = {
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    
    // Carregar Google Analytics
    loadGoogleAnalytics();
  };

  const rejectNonEssential = () => {
    const newConsent: CookieConsent = {
      analytics: false,
      marketing: false,
      preferences: true // Cookies essenciais sempre aceitos
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    
    // Não carregar Google Analytics
    console.log('❌ Google Analytics não carregado - consentimento negado');
  };

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    const updatedConsent = { ...consent, ...newConsent };
    localStorage.setItem('cookie-consent', JSON.stringify(updatedConsent));
    setConsent(updatedConsent as CookieConsent);
    
    // Se analytics foi aceito, carregar GA4
    if (newConsent.analytics) {
      loadGoogleAnalytics();
    }
  };

  const clearConsent = () => {
    localStorage.removeItem('cookie-consent');
    setConsent(null);
  };

  return {
    consent,
    isLoaded,
    acceptAll,
    rejectNonEssential,
    updateConsent,
    clearConsent,
    loadGoogleAnalytics
  };
}; 