import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';
import {plugin as mdPlugin, Mode} from 'vite-plugin-markdown'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), mdPlugin({mode: Mode.HTML})],
  css: {
    postcss
  }
})
