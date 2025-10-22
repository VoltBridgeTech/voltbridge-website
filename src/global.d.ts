// Allow using the <model-viewer> web component in TSX
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      poster?: string;
      alt?: string;
      ar?: boolean | string;
      arModes?: string;
      arScale?: string;
      cameraControls?: boolean | string;
      autoRotate?: boolean | string;
      exposure?: string | number;
      shadowIntensity?: string | number;
      environmentImage?: string;
      disableZoom?: boolean | string;
      autoplay?: boolean | string;
      interactionPrompt?: string;
      skyboxImage?: string;
    };
  }
}
