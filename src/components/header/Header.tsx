import styles from './header.module.css'
import logoImage from '../../assets/images/logo.png'
import searchSvg, { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import menuSvg, { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()

    return <header>
        <Link to={"/"} className={styles[`logo-block`]}>
            <img src={logoImage} alt="logo" className={styles.logoImage} />
        </Link>
        <div className={styles.actionsBlock}>
            <button onClick={() => {
                navigate('/products')
            }} className={styles.menuButton}>
                <MenuIcon className={styles.menuIcon}></MenuIcon>
                Categories
            </button>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Find products"/>
                <SearchIcon className={styles.searchIcon}></SearchIcon>
            </div>
            <Link to={"#"} className={styles.menuButton}>
                <MenuIcon className={styles.menuIcon}></MenuIcon>
                Cart
            </Link>
        </div>
        <div className={styles.profileBlock}>
            <p>Username</p>
            <img src={defaultAvatar} alt="avatar" />
        </div>
    </header>
}