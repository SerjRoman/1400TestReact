
// ReactNode - это тип любого элемента, который реакт может отобразить
// number, string, array из ReactNode, HTML теги. 
// Однако boolean, null, undefined - являются реактовскими узлами, но ничего не рендерят
// 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { ProductsPage } from './pages/products/ProductsPage';
import { HomePage } from './pages/home/HomePage';

export function App() {
    
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/products' element={<ProductsPage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}