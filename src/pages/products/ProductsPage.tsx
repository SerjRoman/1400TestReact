/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { ProductList, SelectCategory } from "../../components";
import { ICONS } from "../../shared";
import styles from './products-page.module.css'
import { useGetProducts } from "../../hooks";

export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<"All" | number>("All")
    const [searchValue, setSearchValue] = useState<string>("")
    const {products, isLoading, error} = useGetProducts()

    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect( () => {
        const foundProducts = products.filter( product => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase())
        }) // 
        if (isNaN(+selectedCategory)) {
            setFilteredProducts(foundProducts)
            return;
        }
        const newFilteredProducts = foundProducts.filter( product => {
            return product.categoryId === +selectedCategory
        })
        setFilteredProducts(newFilteredProducts)

    }, [searchValue, selectedCategory, products])

    if (isLoading) {
        return <div>Loading.....</div>
    }
    if (error) {
        return <div>Error occured. {error}</div>
    }

    return <div className={styles.productsPage}>
        <div className={styles.filtersBlock}>
            <div className={styles.searchBar}>
                <input 
                    value={searchValue} 
                    onChange={event => {
                        setSearchValue(event.target.value)
                    }} 
                    type="text"
                    placeholder="Find products" />
                <ICONS.Search className={styles.searchIcon}></ICONS.Search>
            </div>
            <SelectCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
        <ProductList filteredProducts={filteredProducts}/>
    </div>
}
