import { useEffect, useRef, useState } from "react";
import { ICONS, Modal } from "../../shared";
import styles from './search-bar.module.css'
import { useGetProducts } from "../../hooks";
import { Link } from "react-router-dom";

export function SearchBar() {
    const [ searchValue, setSearchValue] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {products, isLoading, error} = useGetProducts()
    const [filteredProducts, setFilteredProducts] = useState(products)
    useEffect( () => {
        const foundProducts = products.filter( product => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredProducts(foundProducts)
    }, [searchValue, products])

    const isContent: boolean = !isLoading && !error

    const containerRef = useRef<HTMLDivElement>(null)

    return <div 
        className={styles.searchBar} 
        onClick={ (event) => { event.stopPropagation() }} 
        ref={containerRef}>
        <input
            type="text" 
            placeholder="Find products" 
            onFocus={() => {setIsOpen(true)}}
            onBlur={() => setIsOpen(false)}
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue}
        />
        <ICONS.Search className={styles.searchIcon}></ICONS.Search>
        {isOpen && <Modal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                doCloseOnClickOutside 
                className={styles.searchBarModal}
                container={containerRef.current ?? document.body}
                >
            <div>
                {isContent && filteredProducts.map( product => 
                    <Link to={`/products/${product.id}`}></Link>
                )}
                {isLoading && <div>Loading..</div>}
                {error && <div>Error {error}</div>}
            </div>
            </Modal>}
    </div>
}
