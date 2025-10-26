import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from 'url';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración de optimización de imágenes
const imageOptimizerOptions = {
  test: /\.(jpe?g|png|gif|webp|svg)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  png: { quality: 80 },
  jpg: { quality: 80 },
  jpeg: { quality: 80 },
  webp: { quality: 80 },
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIDs: false,
          },
        },
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(imageOptimizerOptions),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // Aumentar límite de advertencia de tamaño
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    target: 'es2015',
    manifest: true,
  },
  // Configuración para manejar correctamente los archivos estáticos
  base: './',
  publicDir: 'public',
  // Configuración para el servidor de desarrollo
  preview: {
    port: 3000,
    open: true,
  },
});
