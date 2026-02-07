import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Header } from "../header";
import { Main } from "../main";
import { Footer } from "../footer";
import { useGetMe } from "../../hooks";

export function Layout() {
    useGetMe()
    return (
        <div className={styles.container}>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
  ) ;
}
