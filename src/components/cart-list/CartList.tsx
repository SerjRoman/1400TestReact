import styles from "./cart-list.module.css";
import { useCartContext } from "./../../context";
import { CartItem } from "./cart-item";
export function CartList() {
    const { items } = useCartContext();
    return (
        <div className={styles.content}>
            {items.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })}
            {items.length === 0 && <p>No product yet in your cart</p>}
        </div>
    );
}
