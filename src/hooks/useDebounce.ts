import { useEffect, useState } from "react"

// This will be used for make api request in future versions
export const useDebounce = (oldValue: string) => {
    const [newValue, setNewValue] = useState('')

    useEffect(() => {
        const executeOnTimeout = () => {
            setNewValue(oldValue)
        }

        const timeout = setTimeout(executeOnTimeout, 200)

        return () => {
            clearTimeout(timeout)
        }
    }, [oldValue])

    return { newValue }
}