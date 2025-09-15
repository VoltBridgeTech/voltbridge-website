import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
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
      configureServer(server) {
        // Serve index.html for all routes except those starting with /api or containing a file extension
        return () => {
          server.middlewares.use((req, res, next) => {
            if (req.url && !req.url.startsWith('/api') && !req.url.includes('.')) {
              req.url = '/';
            }
            next();
          });
        };
      },
    },
  ],
  // Base public path when served in production
  base: './',
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['framer-motion', '@radix-ui/react-dialog'],
        },
      },
    },
    // Enable source maps in development
    sourcemap: process.env.NODE_ENV !== 'production',
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
      }
    ]
  },
  // Preview server configuration
  preview: {
    port: 8080,
    strictPort: true,
    // This ensures that the preview server serves index.html for all routes
    // which is necessary for client-side routing to work
    proxy: {
      '^/.*': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => '/',
      },
    },
  },
});
