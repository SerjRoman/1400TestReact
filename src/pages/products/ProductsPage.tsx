import { useState, useEffect } from "react";
import { ProductList, SelectCategory } from "../../components";
import { ICONS } from "../../shared";
import styles from './products-page.module.css'
const products = [
    {id: 1, categoryId: 1 ,price: 5, name: "Product 1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
    {id: 2, categoryId: 1, price: 15, name: "Product 12", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
    {id: 3, categoryId: 2, price: 105, name: "Product 3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
]



export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<"All" | number>("All")
    const [searchValue, setSearchValue] = useState<string>("")

    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect( () => {
        const foundProducts = products.filter( product => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        if (isNaN(+selectedCategory)) {
            setFilteredProducts(foundProducts)
            return;
        }
        const newFilteredProducts = foundProducts.filter( product => {
            return product.categoryId === +selectedCategory
        })
        setFilteredProducts(newFilteredProducts)

    }, [searchValue, selectedCategory])

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
