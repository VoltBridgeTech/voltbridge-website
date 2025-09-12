import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
        display: 'var(--font-display, Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
      },
      // Color palette
      colors: {
        // Base colors with alpha support
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        // VoltBridge Colors
        'vb': {
          navy: '#00082F',
          'dark-1': '#000937',
          'dark-2': '#000934',
          'dark-3': '#000A39',
          'electric-1': '#0D76FA',
          'electric-2': '#0E73FB',
          'electric-1/10': 'rgba(13, 118, 250, 0.1)',
          'electric-1/20': 'rgba(13, 118, 250, 0.2)',
          'electric-1/30': 'rgba(13, 118, 250, 0.3)',
        },
        'vb-dark-1': 'hsl(220, 32%, 8%)',
        'vb-dark-2': 'hsl(220, 30%, 12%)',
        'vb-dark-3': 'hsl(220, 28%, 16%)',
        'vb-dark-4': 'hsl(220, 26%, 20%)',
        'vb-electric-1': 'hsl(200, 100%, 60%)',
        'vb-electric-2': 'hsl(200, 100%, 70%)',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom animations
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px 0px rgba(13, 118, 250, 0.5)' },
          '100%': { boxShadow: '0 0 20px 5px rgba(13, 118, 250, 0.8)' },
        },
      },
      animation: {
        // Component animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Custom animations
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      boxShadow: {
        'glow-sm': '0 0 10px 2px rgba(13, 118, 250, 0.3)',
        'glow': '0 0 15px 3px rgba(13, 118, 250, 0.5)',
        'glow-lg': '0 0 25px 5px rgba(13, 118, 250, 0.7)',
        'glow-xl': '0 0 40px 10px rgba(13, 118, 250, 0.8)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(13, 118, 250, 0.3)',
      },
      backgroundImage: {
        'gradient-vb': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-vb-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-vb-diagonal': 'linear-gradient(135deg, #00082F 0%, #000A39 50%, #00082F 100%)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
        'transform': 'transform',
      },
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  // Variants
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'focus-visible', 'group-hover'],
      borderColor: ['focus-visible', 'hover'],
      textColor: ['focus-visible', 'group-hover', 'hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      animation: ['motion-safe', 'motion-reduce'],
    },
  },
  // Core plugins configuration
  corePlugins: {
    // Disable default container to use our custom one
    container: false,
  },
  // Plugins
  plugins: [
    animate,
    // Custom plugin for border opacity
    function({ addUtilities }: any) {
      const newUtilities = {
        '.border-opacity-10': {
          '--tw-border-opacity': '0.1',
        },
        '.border-opacity-20': {
          '--tw-border-opacity': '0.2',
        },
        '.border-opacity-30': {
          '--tw-border-opacity': '0.3',
        },
        '.border-opacity-40': {
          '--tw-border-opacity': '0.4',
        },
        '.border-opacity-50': {
          '--tw-border-opacity': '0.5',
        },
      };
      addUtilities(newUtilities, ['hover', 'focus']);
    },
    // Custom plugin for text shadow
    function({ addUtilities }: any) {
      const textShadowUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config satisfies Config;
