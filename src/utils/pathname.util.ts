import { globalConfig } from "@/config"

export const getBreadcrumbs = (url: URL) => {
    const pathname = `${globalConfig.owner.nickName}/` + url.pathname
    const pathSplit = pathname.split('/')

    const lastPartOfThePath = pathSplit.pop()
    const firstPartOfThePath = pathSplit.join(' / ')

    return {firstPartOfThePath, lastPartOfThePath}
}