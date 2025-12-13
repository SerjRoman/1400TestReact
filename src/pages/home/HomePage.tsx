import styles from './home.module.css';
import homeImage from '../../assets/images/home.png';
import { IMAGES } from '../../shared';

export function HomePage() {
    return <div className={styles.page}>
        <h1 className={styles.title}>TurboSphere: Performance at Your Pace.</h1>
        <div className={styles.content}>
            <div className={styles.textBlock}>
                <p className={styles.titleTextBlock}>Our Mascot is a Snail. Here's Why.</p>
                <span className={styles.description}>
                    <p>We live in a world obsessed with speed. But true quality is born from deliberation. 
                    Our snail is a symbol of the three core principles of TurboSphere:</p>

                    <ul>
                        <li>🐌 Mindful Curation
                    We slowly select every item. No rushing - only rigorous testing, material checks, and a focus on longevity.</li>
                        <li>
                            🐌 Steady Progress
                    A snail always moves forward, carrying its home on its back. Our gear is built to be your reliable companion for the long haul, not to break after one season.
                        </li>
                        <li>
                            🐌 Your Personal Sphere
                    The shell is a perfect, self-sufficient world. We help you build your own "sphere" of comfort, efficiency, and joy, where everything has its place.
                        </li>
                    </ul>
                </span>
            </div>
            <div className={styles.imageBlock}>
                <img src={IMAGES.home} alt='homeImage' className={styles.homeImage}/>
            </div>
        </div>
    </div>
}