import { useEffect, useState } from "react"
import { Category } from "../shared/types"
import { API_URL } from "../shared/api"

interface UseGetCategoriesContract {
    isLoading: boolean
    categories: Category[]
    error: string | null
}

export function useGetCategories(): UseGetCategoriesContract{
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
                const response = await fetch(`${API_URL}/categories`, {
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