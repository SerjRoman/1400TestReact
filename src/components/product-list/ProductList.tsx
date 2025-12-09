import { ProductCard } from "../product-card/ProductCard"
import styles from './product-list.module.css';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useEffect, useState } from "react";

const products = [
    {id: 1, categoryId: 1 ,price: 5, title: "Product 1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
    {id: 2, categoryId: 1, price: 15, title: "Product 12", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
    {id: 3, categoryId: 2, price: 105, title: "Product 3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg"},
]
const categories = [
    {id: 1, name: "Cats",},
    {id: 2, name: "Dogs",},
    {id: 3, name: "Computers",},
]


export function ProductList() {
    const [searchValue, setSearchValue] = useState<string>("")
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState<"All" | number>("All")

    useEffect( () => {
        const foundProducts = products.filter( product => {
            return product.title.toLowerCase().includes(searchValue.toLowerCase())
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

    return <div className={styles.productList}>
        <div className={styles.filtersBlock}>
            <div className={styles.searchBar}>
                <input 
                    value={searchValue} 
                    onChange={event => {
                        setSearchValue(event.target.value)
                    }} 
                    type="text"
                    placeholder="Find products" />
                <SearchIcon className={styles.searchIcon}></SearchIcon>
            </div>
            <div className={styles.selectCategories}>
                
                <label><input
                    value={"All"}
                    type="radio"
                    onChange={event => {setSelectedCategory("All")}}
                    checked={selectedCategory === "All"}
                    />
                    All
                </label>
                {categories.map((category) => {
                    return (
                        <label key={category.id} className={styles.selectedCategory} >
                            <input
                                type="radio"
                                onChange={event => {
                                    setSelectedCategory(category.id)
                                }}
                                checked={selectedCategory === category.id}
                                />
                            {category.name}
                        </label>
                    )
                })}
            </div>
        </div>
        <div className={styles.content}>
            {filteredProducts.map( product => 
                <ProductCard 
                    title={product.title} 
                    price={product.price}
                    image={product.image}
                    key={product.id}
                ></ProductCard>)}
        </div>
        
    </div>
}