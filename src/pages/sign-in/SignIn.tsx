import { useForm } from "react-hook-form"
import { SignInFormState } from "./sign-in.types"
import { IMAGES, Button } from "../../shared"
import styles from "./sign-in.module.css"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks"
import { useEffect } from "react"
import { useUserContext } from "../../context"
export function SignInPage() {
    // Generic - общий/универсальный
    const {register, handleSubmit, formState, setError} = useForm<SignInFormState>()
    const [login, {isLoading, error}] = useLogin()
    const {setToken} = useUserContext()

    async function onSignInSubmit(data: SignInFormState) {
        console.log("Form was submitted")
        const responseData = await login(data)
        if ("error" in responseData && responseData.error) {
            setError('root', {message: error ?? "Server Errror"})
        } else if ("token" in responseData) {
            setToken(responseData.token)
            localStorage.setItem('token', responseData.token)
        }
    }
    useEffect( () => {
        if (!error) return
        setError('root', {message: error})
    } , [error])


    const emailError = formState.errors.email
    const passwordError = formState.errors.password
    const rootError = formState.errors.root

    

    return <div className={styles.mainContainer} >
        <form className={styles.signInForm}  onSubmit={handleSubmit(onSignInSubmit)}>
            <div className={styles.formFields}>
            {/* Функция register возвращает необходимые для контроля поля(input, select, checkbox) атрибуты(onChange, ref) */}
                <label className={styles.formField}>
                    Email:
                    <input className={emailError && styles.errorInput} type="email" placeholder="sobaka@gmail.com" {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        minLength: {
                            value: 10,
                            message: "Email's length must be greater than 10"
                        },
                        validate: (value) => {
                            if (!value.includes("@") || !value.includes('.')) return "Email must be valid email."
                        }
                    })}/>
                    <p className={styles.error} >{emailError?.message}</p>
                </label>
                
                <label className={styles.formField} >
                    Password:
                    <input className={passwordError && styles.errorInput } 
                    type="password" placeholder="******" {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required"
                        },
                        minLength: {
                            value: 4,
                            message: "Password's length must be greater than 8"
                        },
                    })} />
                    <p className={styles.error}>{passwordError?.message}</p>
                </label>
            </div>
            <p className={styles.additionalInfo}>Don’t have an account? <Link className={styles.additionalInfoLink} to={"/sign-up"}>Sign up now!</Link></p>
            <Button disabled={isLoading} type="submit" variant="submit">Submit</Button>
            {rootError && <p className={styles.error}>{rootError.message}</p>}
        </form>
        <div className={styles.imgContainer} >
            <img src= {IMAGES.signIn}/>
        </div>
    </div>
}