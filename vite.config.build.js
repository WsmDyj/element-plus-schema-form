import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021
* Released under the MIT License.
*/`;

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'lib',
        banner,
        globals: {
          vue: 'Vue',
        }
      }
    },
    lib: {
      entry: 'src/index',
      name: 'schema-form',
      fileName: 'index'
    }
  }
});
