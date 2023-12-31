import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay)
        return () => clearImmediate(handler)
    }, [value])
    return debounceValue
}

export default useDebounce;