import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { ProductsPage } from "../pages/products/ProductsPage";
import { Layout } from "./layout";


export function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}