import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://pourtaud.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ja'],
    pages: {
      '/about': ['en', 'fr', 'ja']
    }
  },
  integrations: [mdx(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        fr: 'fr-FR',
        ja: 'ja-JP'
      }
    }
  }), react(), tailwind({
    applyBaseStyles: false
  })],
  redirects: {
    '/en': {
      destination: '/',
      status: 301
    }
  }
});