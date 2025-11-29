import { useState } from "react"
import styles from './product-card.module.css'

interface ProductCardProps {
    title: string,
    price: number,
    image: string
}

export function ProductCard(props: ProductCardProps) {
    const {title, price, image} = props
    const [count, setCount] = useState<number>(1)
    function incrementProduct(){
        if (count > 100){
            return
        }
        setCount(count + 1)
    }
    function decrementProduct(){
        if (count <= 1){
            return
        }
        setCount(count - 1)
    }

    return <div className={styles.product}>
        <img className={styles.productImage} src={image} alt="cat"/>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>Price: {price}$</p>
        <div className={styles.amountBlock}>
            <p>Amount: {count}</p>
            <button onClick={incrementProduct}>+</button>
            <button onClick={decrementProduct}>-</button>
        </div>
    </div>
}