export const CTechs = {
    javascript: {
        name: 'JavaScript',
        color: '#f1e05a'
    },
    typescript: {
        name:'TypeScript',
        color: '#3178c6'
    }
} as const

export type TTech = keyof typeof CTechs
export type TTechs = TTech[]