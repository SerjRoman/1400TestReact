import { SearchBar } from '../../components'
import { useUserContext } from '../../context'
import { ICONS, IMAGES } from '../../shared'
import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()
    const {user} = useUserContext()

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
        {user ? <div className={styles.profileBlock}>
            <p>{user.username}</p>
            <img src={user.avatar ? user.avatar : IMAGES.defaultAvatar} alt="avatar" />
        </div> : <Link to={"/sign-up"}>Sign Up</Link>}
    </header>
}