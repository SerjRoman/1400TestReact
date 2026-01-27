import styles from "./cart-page.module.css";
import { CartList } from "../../components";

import { Button } from "../../shared/button";
import { useCartContext } from "../../context";
//

export function CartPage() {
  const { totalPrice, removeAll } = useCartContext();
  return (
    <div className={styles.page}>
      <h1>Cart</h1>
      <CartList />
      <div className={styles.bottom}>
        <h2 className={styles.total}>Total price: {totalPrice()}$</h2>
        <Button>Buy All</Button>
        <Button className={styles.delete} onClick={() => removeAll()}>Delete All</Button>
      </div>
    </div>
  );
}
