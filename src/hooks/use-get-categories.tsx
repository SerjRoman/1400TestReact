import { useEffect, useState } from "react"
import { Category } from "../shared/types"

interface UseGetCategories {
    isLoading: boolean
    categories: Category[]
    error: string | null
}

export function useGetCategories(): UseGetCategories{
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
    useEffect( () => {
        async function getCategories() {
            // fetch - позволяет отправить запрос, принимает 2 параметра:
            //  url - ссылка(строка)
            // конфигурация запроса(метод, заголовки...)
            try {
                setIsLoading(true)
                const response = await fetch("http://localhost:8001/categories", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data: Category[] = await response.json()

                setCategories(data)
            } catch (error) {
                console.error(error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        getCategories()
    }, [])

    return {categories, isLoading, error}
}