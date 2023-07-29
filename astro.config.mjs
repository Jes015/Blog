import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    experimental: {
        viewTransitions: true,
        assets: true
    },
    compressHTML: true
});
