import { ButtonProps } from "./button.types";
import styles from './button.module.css';


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