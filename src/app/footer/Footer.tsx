import { IMAGES } from '../../shared'
import styles from './footer.module.css'

export function Footer() {

    return <footer className={styles.footer}>
        <div className={styles.logoBlock}>
            <img src={IMAGES.logo} alt="logo" className={styles.logoImage} />
            <div className={styles.textBlock}>
                <p>© 2024 TurboSphere. All rights reserved</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
}