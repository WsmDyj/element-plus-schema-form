import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
const path = require('path')
export default defineConfig({
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    // rollupOptions: {
    //   input: {
    //     doc: resolve(__dirname, 'index.html'),
    //     mobile: resolve(__dirname, 'demo.html')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: false,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return name === 'locale' ? '' : `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ]
})
