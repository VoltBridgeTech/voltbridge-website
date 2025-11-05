// Extender la interfaz Window para incluir Google Tag Manager y funciones de consentimiento
declare global {
  interface Window {
    dataLayer: any[];
    loadGTM: () => void;
    gtag: (...args: any[]) => void;
    updateConsent: (consentData: {
      necessary?: boolean;
      analytics?: boolean;
      marketing?: boolean;
      preferences?: boolean;
    }) => void;
  }

  // Tipos para el evento personalizado de consentimiento
  interface WindowEventMap {
    cookieConsentUpdated: CustomEvent<{
      necessary: boolean;
      analytics: boolean;
      marketing: boolean;
      preferences: boolean;
    }>;
  }
}

export {}; // Este archivo necesita ser un módulo
