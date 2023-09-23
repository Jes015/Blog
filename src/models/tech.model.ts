export const CTechs = {
  all: {
    name: 'All',
    color: 'transparent'
  },
  javascript: {
    name: 'JavaScript',
    color: 'rgb(241 224 90 / 55%)'
  },
  typescript: {
    name: 'TypeScript',
    color: 'rgb(49 120 198 / 33%)'
  },
  bun: {
    name: 'Bun',
    color: 'rgb(251 240 223 / 33%)'
  }
} as const

export type TTech = keyof typeof CTechs
export type TTechs = TTech[]
