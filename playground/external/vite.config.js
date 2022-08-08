import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue', '@vitejs/dep-that-dynamic-imports-css/index.css']
    },
    commonjsOptions: {
      esmExternals: ['vue']
    }
  }
})
