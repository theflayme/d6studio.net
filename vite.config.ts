import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import viteCompression from 'vite-plugin-compression'


// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr(),
    ...(mode === 'production' ? [cssInjectedByJsPlugin()] : []),
    ...(mode === 'production' ? [viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      threshold: 1024, // only compress files > 1KB
    })] : []),
  ],
}))
