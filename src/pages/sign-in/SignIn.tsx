import { useForm } from "react-hook-form"
import { SignInFormState } from "./sign-in.types"
import { IMAGES, Button } from "../../shared"
import styles from "./sign-in.module.css"
import { Link } from "react-router-dom"
import { API_URL } from "../../shared/api"
export function SignInPage() {
    // Generic - общий/универсальный
    const {register, handleSubmit, formState, setError} = useForm<SignInFormState>()
    

    async function onSignInSubmit(data: SignInFormState) {
        console.log("Form was submitted")
        try {
            const request = await fetch(
                `${API_URL}/users/login`,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // c = s
            const responseData = await request.json()
            if (request.status === 401) {
                setError("root", {message: "Wrong credentials"})
                return
            }
            console.log(responseData, request.status)
        } catch (error) {
            console.error("ERROR:", error)
        }
    }


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
            <p className={styles.additionalInfo}>Don’t have an account? <Link className={styles.additionalInfoLink} to={"/sign-up"}>Register now!</Link></p>
            <Button type="submit" variant="submit">Submit</Button>
            {rootError && <p className={styles.error}>{rootError.message}</p>}
        </form>
        <div className={styles.imgContainer} >
            <img src= {IMAGES.signIn}/>
        </div>
    </div>
}