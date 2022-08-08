import { useCallback, useState } from "react"

interface RequestObject {
    url: string,
    method: string | undefined,
    headers: {},
    body: string | undefined
}

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)

    const sendRequest = useCallback(async(requestObj: RequestObject, applyData: any) => {
        try {
            const response = await fetch(requestObj.url, {
                method: requestObj.method ? requestObj.method : 'GET',
                headers: requestObj.headers ? requestObj.headers : {},
                body: requestObj.body ? JSON.stringify(requestObj.body) : null
            })
            if (!response.ok) {
                throw new Error("something went wrong!")
            }
            const data = await response.json()
            applyData(data)
        } catch (err) {
            setError(true)
            console.log(err)
        }
        setIsLoading(false)
    }, [])

    return {
        error,
        isLoading,
        sendRequest,
    }
}

export default useHttp;