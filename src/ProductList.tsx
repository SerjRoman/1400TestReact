import { Product } from "./Product"

export function ProductList() {
    const products = [
            {price: 5, title: "Product 1"},
            {price: 15, title: "Product 12"},
            {price: 105, title: "Product 3"},
        ]
    return <div>
        {products.map( product => 
            <Product 
                title={product.title} 
                price={product.price}
            ></Product>)}
    </div>
}