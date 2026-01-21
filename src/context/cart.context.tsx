import { createContext, ReactNode, useState } from "react";
import { Product } from "../shared/types";

interface CartItem extends Product {
    count: number
}

interface CartContextContract {
    items: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    isInCart: (id:number) => boolean
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void
}

export const CartContext = createContext<CartContextContract | null>(null)


export function CartContextProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([])

    // Если товара нету в корзине - добавляем его в массив items и даем ему count = 1
    // Если товар ЕСТЬ в корзине - увеличиваем его count на 1 count++
    function addToCart(product: Product) {
        const foundProduct = items.find(cartItem => cartItem.id === product.id)
        if (foundProduct) {
            foundProduct.count++;
            const newItems = items.filter( cartItem => cartItem.id !== foundProduct.id)
            newItems.push(foundProduct)
            setItems(newItems)
        } else{
            const newItems = [...items, {...product, count: 1}]
            setItems(newItems)
        }
    }
    function removeFromCart(id: number) {
        const newItems = items.filter(item => item.id !== id)
        // item.id=1, id = 3 -> true
        // item.id=2, id = 3 -> true
        // item.id=3, id = 3 -> false
        setItems(newItems)
    }

    function isInCart(id: number): boolean {
        const foundProduct = items.find(cartItem => cartItem.id === id)
        return !!foundProduct
    }
    function incrementCount(id: number) {
        if (!isInCart(id)) return
        const newItems = items.map(cartItem => {
            if (cartItem.id === id) {
                return {
                    ...cartItem,
                    count: cartItem.count + 1
                }
            }
            return cartItem
        })
        setItems(newItems)
    }
    function decrementCount(id: number) {
        const foundProduct = items.find(cartItem => cartItem.id === id)
        if (!foundProduct) return
        
    }
    return <CartContext value={{
        items,
        addToCart,
        removeFromCart,
        incrementCount,
        decrementCount,
        isInCart

    }}>
        {children}
    </CartContext>
}