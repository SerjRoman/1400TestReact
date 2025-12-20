import { useGetCategories } from "../../hooks";
import { ProductCard } from "./product-card/ProductCard"
import styles from './product-list.module.css';
import { ProductListProps } from "./product-list.types";



export function ProductList({filteredProducts}: ProductListProps) {
    const { } = useGetCategories()
    return <div className={styles.content}>
        {filteredProducts.map( product => 
            <ProductCard 
                title={product.title} 
                price={product.price}
                image={product.image}
                key={product.id}
            ></ProductCard>)}
    </div>
}