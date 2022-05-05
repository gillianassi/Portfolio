import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteMd from "vite-plugin-svelte-md";
import postcss from './postcss.config.js';
import hljs from 'highlight.js';
import markdownitTagToClass from '@toycode/markdown-it-class';
// https://vitejs.dev/config/

const styleMapping = {
  h1: ['text-3xl','font-mediem','font-changa','text-gPrimaryColor','capitalize','mb-4'],
  h2: ['text-2xl','font-bold','font-changa','text-gPrimaryColor','capitalize','mb-4'],
  p: ['my-2', 'text-justify'],
  img: ['my-2'],
}
export default defineConfig({
  plugins: [
    svelteMd({
      markdownItUses: [(md) =>  md.use(markdownitTagToClass, styleMapping)],
      markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
          highlight:(str, lang) => {
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
