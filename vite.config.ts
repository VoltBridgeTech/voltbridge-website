import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
import type { ViteDevServer } from 'vite';

// Get the current directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    cors: true,
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      strict: false,
    },
  },
  plugins: [
    react(),
    // Custom plugin to handle SPA fallback
    {
      name: 'spa-fallback',
      configureServer(server: ViteDevServer) {
        return () => {
          server.middlewares.use((req, res, next) => {
            const url = req.url || '';
            if (!url.startsWith('/api') && !url.includes('.')) {
              req.url = '/';
            }
            next();
          });
        };
      },
    },
  ],
  // Base public path when served in production
  base: env.VITE_BASE_URL || '/',
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['framer-motion', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
          ui: ['@radix-ui/react-*'],
          form: ['react-hook-form', '@hookform/resolvers'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
    // Enable source maps in development
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1')
      },
    ],
  },
});
