import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  base: './',
  root: process.cwd(),
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true
      }
    },
    brotliSize: false,
    chunkSizeWarningLimit: 1500
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      }
    }),
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
