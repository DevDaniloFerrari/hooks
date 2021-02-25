import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, { method })
            .then(response => response.json())
            .then(json => setResponse({ data: json, loading: false }))
    }, [url, method])

    return response
}