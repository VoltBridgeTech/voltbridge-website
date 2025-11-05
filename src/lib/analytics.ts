// Tipos para los eventos de analítica
type EventParams = {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
};

type PageViewParams = {
  page_title?: string;
  page_path?: string;
  page_location?: string;
};

// Verificar si GTM está disponible
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Servicio de analítica para GTM y GA4
 */
class AnalyticsService {
  private static instance: AnalyticsService;
  private isInitialized = false;
  private debug = process.env.NODE_ENV !== 'production';

  private constructor() {
    if (typeof window === 'undefined') return;
    this.initialize();
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Inicializar dataLayer si no existe
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      window.dataLayer.push(arguments);
    };

    // Configurar listeners globales
    this.setupLinkTracking();
    this.setupFormTracking();
    this.setupScrollTracking();
    this.setupVideoTracking();
    
    this.isInitialized = true;
    
    if (this.debug) {
      console.log('[Analytics] Service initialized');
    }
  }

  /**
   * Enviar un evento personalizado
   */
  public trackEvent({ category, action, label, value, nonInteraction = false }: EventParams): void {
    if (typeof window === 'undefined' || !window.dataLayer) return;

    const eventData: any = {
      event: 'custom_event',
      event_category: category,
      event_action: action,
      ...(label && { event_label: label }),
      ...(value !== undefined && { value }),
      non_interaction: nonInteraction
    };

    window.dataLayer.push(eventData);

    if (this.debug) {
      console.log('[Analytics] Event tracked:', eventData);
    }
  }

  /**
   * Registrar una vista de página
   */
  public trackPageView(params: PageViewParams = {}): void {
    if (typeof window === 'undefined' || !window.dataLayer) return;

    const pageData = {
      event: 'page_view',
      page_title: params.page_title || document.title,
      page_path: params.page_path || window.location.pathname + window.location.search,
      page_location: params.page_location || window.location.href
    };

    window.dataLayer.push(pageData);

    if (this.debug) {
      console.log('[Analytics] Page view:', pageData);
    }
  }

  /**
   * Configurar seguimiento de enlaces externos
   */
  private setupLinkTracking(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      // Ignorar si es un enlace interno o no tiene href
      if (link.hostname === window.location.hostname || !link.href) return;
      
      // Ignorar si es un enlace de descarga o mailto:
      if (link.download || link.href.startsWith('mailto:')) return;
      
      // Rastrear clic en enlace externo
      this.trackEvent({
        category: 'Outbound Link',
        action: 'Click',
        label: link.href,
        nonInteraction: true
      });
      
      // Retrasar la navegación para dar tiempo a enviar el evento
      if (!link.target || link.target === '_self') {
        e.preventDefault();
        setTimeout(() => {
          window.location.href = link.href;
        }, 150);
      }
    });
  }

  /**
   * Configurar seguimiento de formularios
   */
  private setupFormTracking(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('submit', (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (!form) return;
      
      const formId = form.id || form.getAttribute('name') || 'unknown';
      
      // Rastrear envío de formulario
      this.trackEvent({
        category: 'Form',
        action: 'Submit',
        label: formId
      });
      
      // Rastrear campos del formulario (opcional, asegúrate de cumplir con RGPD)
      if (form.elements) {
        Array.from(form.elements).forEach((element: Element) => {
          const input = element as HTMLInputElement;
          if (input.name && input.value) {
            this.trackEvent({
              category: 'Form Field',
              action: 'Interaction',
              label: `${formId} - ${input.name}`,
              nonInteraction: true
            });
          }
        });
      }
    });
  }

  /**
   * Configurar seguimiento de scroll
   */
  private setupScrollTracking(): void {
    if (typeof window === 'undefined') return;
    
    const scrollThresholds = [25, 50, 75, 90];
    const trackedThresholds: number[] = [];
    
    const trackScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      scrollThresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.includes(threshold)) {
          this.trackEvent({
            category: 'Scroll',
            action: 'Scroll Depth',
            label: `Scrolled ${threshold}% of page`,
            value: threshold,
            nonInteraction: true
          });
          trackedThresholds.push(threshold);
        }
      });
    };
    
    // Usar debounce para mejorar el rendimiento
    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 100);
    }, { passive: true });
  }

  /**
   * Configurar seguimiento de videos (opcional)
   */
  private setupVideoTracking(): void {
    if (typeof document === 'undefined') return;
    
    // Implementar seguimiento de videos si es necesario
    // Esto es un esqueleto que puedes expandir según tus necesidades
    const videos = document.querySelectorAll('video');
    
    videos.forEach((video, index) => {
      const videoId = video.id || `video-${index}`;
      
      // Rastrear reproducción
      video.addEventListener('play', () => {
        this.trackEvent({
          category: 'Video',
          action: 'Play',
          label: videoId
        });
      });
      
      // Rastrear pausa
      video.addEventListener('pause', () => {
        this.trackEvent({
          category: 'Video',
          action: 'Pause',
          label: videoId
        });
      });
      
      // Rastrear finalización
      video.addEventListener('ended', () => {
        this.trackEvent({
          category: 'Video',
          action: 'Complete',
          label: videoId
        });
      });
    });
  }
}

// Exportar una instancia única del servicio
export const analytics = AnalyticsService.getInstance();

// Hook personalizado para usar en componentes de React
export const useAnalytics = () => {
  // Verificar si estamos en el navegador
  const isBrowser = typeof window !== 'undefined';
  
  const trackEvent = (params: EventParams) => {
    if (isBrowser) {
      analytics.trackEvent(params);
    }
  };
  
  const trackPageView = (params?: PageViewParams) => {
    if (isBrowser) {
      analytics.trackPageView(params);
    }
  };
  
  return { trackEvent, trackPageView };
};

// Inicializar automáticamente en el navegador
if (typeof window !== 'undefined') {
  // Asegurarse de que el servicio se inicialice
  AnalyticsService.getInstance();
}
