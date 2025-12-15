import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import path from 'path'
import { fileURLToPath } from 'url'

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base:'/',
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname,'src/components/'),
      '@hooks': path.resolve(__dirname,'src/hooks')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
