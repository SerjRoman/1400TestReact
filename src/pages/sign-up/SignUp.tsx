import { useForm } from "react-hook-form"
import { SignUpFormState } from "./sign-up.types"
import { IMAGES, Button } from "../../shared"
import styles from "./sign-up.module.css"
import { API_URL } from "../../shared/api"
import { Link } from "react-router-dom"

export function SignUpPage() {
    const {register, handleSubmit, formState, setError} = useForm<SignUpFormState>()
    async function onSignInSubmit(data: SignUpFormState) {
        console.log("Form was submitted")
    }

    const emailError = formState.errors.email
    const usernameError = formState.errors.username
    const passwordError = formState.errors.password
    const avatarError = formState.errors.avatar
    const rootError = formState.errors.root

    return <div className={styles.mainContainer}>
        <form className={styles.signUpForm}  onSubmit={handleSubmit(onSignInSubmit)}>
            <div className={styles.formFields}>
                <label className={styles.formField}>
                    Email:
                    <input type="email" className={emailError && styles.errorInput} placeholder="sobaka@gmail.com" {...register("email", {
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
                    <p className={styles.error}>{emailError?.message}</p>
                </label>

                <label className={styles.formField}>
                    Username:
                    <input type="text" className={usernameError && styles.errorInput} placeholder="super_user123" {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })} />
                    <p className={styles.error}>{usernameError?.message}</p>
                </label>

                <label className={styles.formField}>
                    Password:
                    <input type="password" className={passwordError && styles.errorInput} placeholder="******" {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required"
                        },
                        minLength: {
                            value: 8,
                            message: "Password's length must be greater than 8"
                        },
                    })} />
                    <p className={styles.error}>{passwordError?.message}</p>
                </label>
                
                <label className={styles.formField}>
                    Avatar:
                    <input type="text" className={avatarError && styles.errorInput} placeholder="https://avatar.com/user.png" {...register("avatar", {
                        required: false,
                        validate: (value) => {
                            if (!value) return
                            if (!value.includes("https://") || !value.includes('.')) return "Wrong avatar's url."
                        }
                    })} />
                    <p className={styles.error}>{avatarError?.message}</p>
                </label>
            </div>
            <p className={styles.additionalInfo}>Already have an account? <Link className={styles.additionalInfoLink} to={"/sign-in"}>Sign in now!</Link></p>
            <Button variant="submit" type="submit">Submit</Button>
            {rootError && <p className={styles.error}>{rootError.message}</p>}

        </form>
        <div className={styles.imgContainer} >
            <img src= {IMAGES.signIn}/>
        </div>
    </div>
}