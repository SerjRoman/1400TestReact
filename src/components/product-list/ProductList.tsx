import { ProductCard } from "../product-card/ProductCard"

export function ProductList() {
    const products = [
            {price: 5, title: "Product 1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
            {price: 15, title: "Product 12", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
            {price: 105, title: "Product 3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
        ]
    return <div>
        {products.map( product => 
            <ProductCard 
                title={product.title} 
                price={product.price}
                image={product.image}
            ></ProductCard>)}
    </div>
}