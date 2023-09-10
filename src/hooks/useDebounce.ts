import { useEffect, useState } from "react"

export const useDebounce = (oldValue: string) => {
    const [newValue, setNewValue] = useState('')

    useEffect(() => {
        const executeOnTimeout = () => {
            setNewValue(oldValue)
        }

        const timeout = setTimeout(executeOnTimeout, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [oldValue])

    return { newValue }
}