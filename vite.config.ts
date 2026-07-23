import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const productionHost = process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL?.trim()
const productionUrl = productionHost ? `https://${productionHost}` : ''

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'classvybes-production-url',
      transformIndexHtml(html) {
        return html.replaceAll('__CLASSVYBES_PRODUCTION_URL__', productionUrl)
      },
    },
  ],
  build: {
    target: 'es2022',
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
})
