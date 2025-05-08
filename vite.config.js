import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br|gz)$/, /\.(jpe?g|png|gif|webp|zip)$/i],
      threshold: 1024,
      verbose: true,
      deleteOriginalAssets: false
    })
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    target: 'esnext',
    modulePreload: {
      polyfill: true
    },
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500
  },
  server: {
    headers: {
      'Cache-Control': 'max-age=31536000'
    }
  }
})