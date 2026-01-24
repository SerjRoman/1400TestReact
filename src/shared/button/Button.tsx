import { ButtonProps } from "./Button.types";
import styles from './Button.module.css';


export function Button(props: ButtonProps) {
    const {variant = "primary", className, ...restProps} = props

    return (
        <button 
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...restProps}
        >
        </button>
    )
}