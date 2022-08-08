import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: './dep-that-dynamic-imports-css',
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue', '@vitejs/dep-that-dynamic-imports-css/index.css']
      // external: (source) => {
      //   return ['vue', '@vitejs/dep-that-dynamic-imports-css/index.css'].includes(source)
      // }
    },
    commonjsOptions: {
      esmExternals: ['vue']
    }
  }
})
