import styles from './header.module.css'
import logoImage from '../../assets/images/logo.png'
import searchSvg, { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import defaultAvatar from '../../assets/images/defaultAvatar.png'

export function Header() {


    return <header>
        <div className={styles[`logo-block`]}>
            <img src={logoImage} alt="logo" className={styles.logoImage} />
        </div>
        <div className={styles.actionsBlock}>
            <button className={styles.menuButton}>Categories</button>
            <div className={styles.searchBar}>
                <input type="text" />
                <SearchIcon className={styles.searchIcon}></SearchIcon>
            </div>
            <button className={styles.menuButton}>Cart</button>
        </div>
        <div className={styles.profileBlock}>
            <p>Username</p>
            <img src={defaultAvatar} alt="avatar" />


        </div>
    </header>
}