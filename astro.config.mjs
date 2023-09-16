import react from "@astrojs/react"
import { defineConfig } from 'astro/config'


// https://astro.build/config
export default defineConfig({
  experimental: {
    optimizeHoistedScript: true
  },
  integrations: [react()]
});