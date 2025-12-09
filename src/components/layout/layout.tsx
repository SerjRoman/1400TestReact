import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import styles from './layout.module.css';

export function Layout() {
    return (
        <div className={styles.container}>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}