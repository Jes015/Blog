import { globalConfig } from "@/config"

export const getPathName = (url: URL) => {
    const pathname = url.pathname
    let newPathName = pathname.split('/').join(' / ')
    newPathName = globalConfig.owner.nickName + newPathName
    return newPathName
}