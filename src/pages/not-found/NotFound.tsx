import { IMAGES } from "../../shared"
import styles from "./not-found.module.css"
export function NotFoundPage() {
    return <div className={styles.container}>
        <p className={styles.title}>Page not found</p>
        <img className={styles.image} src={IMAGES.notFound}/>
    </div>
}