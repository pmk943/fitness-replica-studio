import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '',
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || '';
          // Store images in an images directory
          if (fileName.match(/\.(png|jpe?g)$/i)) {
            return 'assets/images/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      }
    },
    assetsInlineLimit: 0, // Never inline assets
    copyPublicDir: true, // Copy public directory to dist
    sourcemap: false, // Disable sourcemaps for production
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'copy-htaccess',
      closeBundle() {
        // Copy .htaccess to dist folder after build
        fs.copyFileSync('.htaccess', 'dist/.htaccess');
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
