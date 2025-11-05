import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Componente de orden superior (HOC) para rastrear vistas de página
 * 
 * @param WrappedComponent - El componente a envolver
 * @param options - Opciones de seguimiento
 * @returns Componente envuelto con seguimiento de página
 */
const withPageViewTracking = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: {
    /** Nombre personalizado para la página (opcional) */
    pageName?: string;
    /** Deshabilitar el seguimiento de esta página */
    disabled?: boolean;
  } = {}
) => {
  const { pageName, disabled = false } = options;

  const TrackedComponent = (props: P) => {
    const location = useLocation();

    useEffect(() => {
      if (disabled) return;
      
      // Esperar un momento para asegurar que el título de la página esté actualizado
      const timer = setTimeout(() => {
        analytics.trackPageView({
          page_title: pageName || document.title,
          page_path: location.pathname + location.search,
          page_location: window.location.href
        });
      }, 100);

      return () => clearTimeout(timer);
    }, [location.pathname, location.search, disabled, pageName]);

    return <WrappedComponent {...(props as P)} />;
  };

  // Establecer un nombre de visualización para el componente en las herramientas de desarrollo
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  TrackedComponent.displayName = `withPageViewTracking(${displayName})`;

  return TrackedComponent;
};

export default withPageViewTracking;
