// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false, // English: /positive/...  Japanese: /ja/positive/...
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
