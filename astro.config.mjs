import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-one-murex.vercel.app/',
  experimental: {
    optimizeHoistedScript: true
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        }
      },
      serialize(item) {

        const itemPath = new URL(item.url).pathname.split('/')

        if (itemPath.length === 2) {
          console.log(itemPath, 'PASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
          item.changefreq = 'weekly'
          item.lastmod = new Date()
        }
  
        return item
      }
    })
  ]
})