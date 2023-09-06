import { globalConfig } from "@/config"

export const getBreadcrumbs = (url: URL) => {
    const pathname = `${globalConfig.owner.siteName}` + url.pathname
    const pathSplit = pathname.split('/')

    const lastPartOfThePath = pathSplit[pathSplit.length - 1] !== '' && ' / ' + pathSplit.pop()
    const firstPartOfThePath = pathSplit.shift()

    return {firstPartOfThePath, lastPartOfThePath}
}