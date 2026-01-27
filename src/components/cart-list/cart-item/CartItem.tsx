import styles from "./cart-item.module.css";
import { useCartContext } from "./../../../context";
import { CartItemProps } from "./cart-item.types";
import { ICONS } from "../../../shared";
import { Button } from "../../../shared/button";
import { Link } from "react-router-dom";

export function CartItem(props: CartItemProps) {
    const {item} = props
    const {incrementCount, decrementCount, removeFromCart,} = useCartContext()
    
    return (
      <div className={styles.Item}>
        <img src={item.image} />
        <div className={styles.centerContent}>
          <span><b>Name</b>: {item.name}</span>
          <span><b>Description</b>: {item.description}</span>
          <span><b>Price</b>: {item.price}</span>
          <span><b>CategoryId</b>: {item.categoryId}</span>
          <span><b>Number of Items</b>: {item.count}</span>
          <div className={styles.buttonsBlock} >
            <button onClick={() => incrementCount(item.id)} className={styles.plus}><ICONS.Plus/></button>
            <button onClick={() => decrementCount(item.id)} className={styles.minus}><ICONS.Minus/></button>
          </div>
        </div>
        <div className={styles.itemActions}>
          <Button><p>Buy</p></Button>
          <Link to={`/products/${item.id}`}><Button>Go To</Button></Link>
          <Button onClick={() => removeFromCart(item.id)}><p>Delete</p></Button>
        </div>
      </div>
    );
}
