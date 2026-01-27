import { SearchBar } from '../../components'
import { ICONS, IMAGES } from '../../shared'
import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()

    return <header>
        <Link to={"/"} className={styles[`logo-block`]}>
            <img src={IMAGES.logo} alt="logo" className={styles.logoImage} />
        </Link>
        <div className={styles.actionsBlock}>
            <button onClick={() => {
                navigate('/products')
            }} className={styles.menuButton}>
                <ICONS.Menu className={styles.menuIcon}></ICONS.Menu>
                Categories
            </button>
            <SearchBar/>
            
            <Link to={"/cart"} className={styles.menuButton}>
                <ICONS.Menu className={styles.menuIcon}></ICONS.Menu>
                Cart
            </Link>
        </div>
        <div className={styles.profileBlock}>
            <p>Username</p>
            <img src={IMAGES.defaultAvatar} alt="avatar" />
        </div>
    </header>
}