import { useForm } from "react-hook-form"
import { SignInFormState } from "./sign-in.types"

export function SignInPage() {
    // Generic - общий/универсальный
    const {register, handleSubmit, formState} = useForm<SignInFormState>()

    function onSignInSubmit(data: SignInFormState) {
        console.log("Form was submitted")
        console.log(data)
    }

    const emailError = formState.errors.email
    const passwordError = formState.errors.email

    return <div>
        <form onSubmit={handleSubmit(onSignInSubmit)}>
            <p>Email:</p>
            {/* Функция register возвращает необходимые для контроля поля(input, select, checkbox) атрибуты(onChange, ref) */}
            <input type="email" placeholder="sobaka@gmail.com" {...register("email", {
                required: {
                    value: true,
                    message: "Email is required"
                },
                minLength: {
                    value: 10,
                    message: "Email's length must be greater than 10"
                },
                
            })}/>
            <p>{emailError?.message}</p>
            <p>Password:</p>
            <input type="password" placeholder="******" {...register("password", {
                required: {
                    value: true,
                    message: "Password is required"
                }
            })} />
            <p>{passwordError?.message}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
}