import { useState } from "react"
import styles from './product-card.module.css'
import { ProductCardProps } from "./product-card.types"

export function ProductCard(props: ProductCardProps) {
    const {product} = props
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
        <img className={styles.productImage} src={product.image} alt="cat"/>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.price}>Price: {product.price}$</p>
        <div className={styles.amountBlock}>
            <p>Amount: {count}</p>
            <button onClick={incrementProduct}>+</button>
            <button onClick={decrementProduct}>-</button>
        </div>
    </div>
}