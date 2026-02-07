import { useState } from "react"
import { API_URL, ErrorResponse, LoginCredentials, LoginResponse } from "../shared/api"



type LoginRequestFunction = (credentials: LoginCredentials) => Promise<LoginResponse | ErrorResponse>

type UseLoginContract = [LoginRequestFunction, {isLoading: boolean, error: string | null}]

export function useLogin(): UseLoginContract {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const login: LoginRequestFunction = async (credentials) => {
        try {
            setIsLoading(true)
            const request = await fetch(
                `${API_URL}/users/login`,
                {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            if (request.status === 401) {
                const message = 'Wrong credentials';
                setError(message)
                return {error: message}
            } else if (request.status === 500) {
                const message = 'Server Error. Try again later';
                setError(message)
                return {error: message}
            }
            const data: LoginResponse = await request.json()
            return data
        
        } catch (error) {
            console.error("ERROR:", error)
            const message = 'Network Error. Try again later';
            setError(message)
            return {error: message}
        } finally {
            setIsLoading(false)
        }
    }
    return [login, {isLoading, error}]
}