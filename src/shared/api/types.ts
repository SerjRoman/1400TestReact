export type LoginResponse = {token: string}
export type ErrorResponse = {error: string | null}

export interface LoginCredentials {
    email: string,
    password: string
}
export interface RegisterCredentials {
    
}