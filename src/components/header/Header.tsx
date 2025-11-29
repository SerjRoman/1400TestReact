import styles from './header.module.css'
import logoImage from '../../assets/images/logo.png'
import searchSvg, { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

export function Header() {

    return <header>
        <div className={styles[`logo-block`]}>
            <img src={logoImage} alt="logo" className={styles.logoImage} />
        </div>
        <div className={styles.actionsBlock}>
            <button>Categories</button>
            <div className={styles.searchBar}>
                <input type="text" />
                <SearchIcon className={styles.searchIcon}></SearchIcon>
                {/* {searchSvg} */}
            </div>
            <button>Cart</button>
        </div>
        <div className={styles.profileBlock}>

        </div>
    </header>
}