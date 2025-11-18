import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import './CookieConsentBanner.css';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,  // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      try {
        const storedConsent: CookieConsent = JSON.parse(consentGiven);
        setConsent(storedConsent);
        setShowBanner(false);
      } catch (error) {
        console.error('Error al cargar el consentimiento almacenado:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(allConsent);
    saveConsent(allConsent);
    setShowBanner(false);
    
    // Actualizar el consentimiento usando la función global
    if (typeof window !== 'undefined' && window.updateConsent) {
      window.updateConsent(allConsent);
    }
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
    setShowBanner(false);
    
    // Actualizar el consentimiento usando la función global
    if (typeof window !== 'undefined' && window.updateConsent) {
      window.updateConsent(consent);
    }
  };

  const saveConsent = (consent: CookieConsent) => {
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      // Disparar evento personalizado para otros componentes
      const event = new CustomEvent('cookieConsentUpdated', { detail: consent });
      window.dispatchEvent(event);
      
      // Registrar en la consola en desarrollo
      if (process.env.NODE_ENV !== 'production') {
        console.log('Consentimiento actualizado:', consent);
      }
    } catch (e) {
      console.error('Error al guardar el consentimiento:', e);
    }
  };

  // Función para inicializar GTM (ya no es necesaria aquí, se maneja desde index.html)
  const initializeGTM = () => {
    // Esta función se mantiene por compatibilidad, pero la lógica se movió a index.html
    if (typeof window !== 'undefined' && window.loadGTM) {
      window.loadGTM();
    }
  };

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setConsent(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg animate-slide-up">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-white">We Value Your Privacy</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. 
              <a href="/cookies-policy" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                Cookie Policy
              </a>
            </p>
            
            {showSettings && (
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">Necessary Cookies</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Essential for the website to function</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="necessary" 
                      id="necessary" 
                      checked={consent.necessary}
                      disabled
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="necessary" 
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
                    ></label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">Analytics Cookies</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Help us improve our website</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="analytics" 
                      id="analytics" 
                      checked={consent.analytics}
                      onChange={() => handleToggle('analytics')}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="analytics" 
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${consent.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                    ></label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">Marketing Cookies</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Used for personalised advertising</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="marketing" 
                      id="marketing" 
                      checked={consent.marketing}
                      onChange={() => handleToggle('marketing')}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="marketing" 
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${consent.marketing ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                    ></label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">Preference Cookies</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Remember your preferences</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="preferences" 
                      id="preferences" 
                      checked={consent.preferences}
                      onChange={() => handleToggle('preferences')}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="preferences" 
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${consent.preferences ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                    ></label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowSettings(!showSettings)}
              className="whitespace-nowrap"
            >
              {showSettings ? 'Hide Settings' : 'Customise Settings'}
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  // Only accept necessary cookies
                  const necessaryConsent = {
                    necessary: true,
                    analytics: false,
                    marketing: false,
                    preferences: false,
                  };
                  setConsent(necessaryConsent);
                  saveConsent(necessaryConsent);
                  setShowBanner(false);
                }}
              >
                Reject All
              </Button>
              
              <Button 
                size="sm"
                onClick={showSettings ? handleSavePreferences : handleAcceptAll}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {showSettings ? 'Save Preferences' : 'Accept All'}
              </Button>
            </div>
          </div>
          
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            aria-label="Close cookie consent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
