import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteMd from "vite-plugin-svelte-md";
import postcss from './postcss.config.js';
import hljs from 'highlight.js';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelteMd({
      markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
          highlight:  function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs p-4 rounded-md "><code>' +
                       hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                       '</code></pre>';
              } catch (__) {}
            }
        
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          }
        },
    }),
    svelte({
      extensions:[".svelte", ".md"]
    }),
  
    ],
  css: {
    postcss
  }
})
