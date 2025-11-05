// Extend the Window interface to include Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
    loadGTM: () => void;
    gtag: (...args: any[]) => void;
  }
}

export {}; // This file needs to be a module
