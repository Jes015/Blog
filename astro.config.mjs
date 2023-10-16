import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  experimental: {
    optimizeHoistedScript: true
  },
  integrations: [react(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'dracula' },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeMinifyHtml],
    remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false,
    extendMarkdownConfig: false,
    optimize: false
  })]
})
