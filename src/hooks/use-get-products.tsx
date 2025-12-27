import { useEffect, useState } from "react"
import { Product } from "../shared/types"
import { API_URL } from "../shared/api"


interface UseGetProductsContract {
    isLoading: boolean
    products: Product[]
    error: string | null
}

export function useGetProducts(): UseGetProductsContract {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect( () => {
        async function getProducts() {
            // fetch - позволяет отправить запрос, принимает 2 параметра:
            //  url - ссылка(строка)
            // конфигурация запроса(метод, заголовки...)
            try {
                setIsLoading(true)
                const response = await fetch(`${API_URL}/products`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data: Product[] = await response.json()

                setProducts(data)
            } catch (error) {
                console.error(error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        getProducts()
    }, [])
        
    return {
        products,
        isLoading,
        error
    }
}