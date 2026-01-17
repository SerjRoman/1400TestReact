import { createContext, ReactNode, useState } from "react";
import { Product } from "../shared/types";

interface CartItem extends Product {
    count: number
}

interface CartContextContract {
    items: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
}

export const CartContext = createContext<CartContextContract | null>(null)


export function CartContextProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([])

    function addToCart(product: Product) {}
    function removeFromCart(id: number) {
        const newItems = items.filter(item => item.id !== id)
        // item.id=1, id = 3 -> true
        // item.id=2, id = 3 -> true
        // item.id=3, id = 3 -> false
        setItems(newItems)
    }
    return <CartContext value={{
        items,
        addToCart,
        removeFromCart

    }}>
        {children}
    </CartContext>
}