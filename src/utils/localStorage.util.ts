export const getFromSessionStorage = (key: string) => {
    return window.sessionStorage.getItem(key)
}

export const setToSessionStorage = (key: string, value: string) => {
    window.sessionStorage.setItem(key, value)
}

export const clearSessionStorage = () => {
    window.sessionStorage.clear()
}