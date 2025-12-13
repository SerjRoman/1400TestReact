// ReactNode - это тип любого элемента, который реакт может отобразить
// number, string, array из ReactNode, HTML теги.
// Однако boolean, null, undefined - являются реактовскими узлами, но ничего не рендерят
//import { ProductsPage } from "../pages/products/ProductsPage";
import { AppRoutes } from "./AppRoutes";

export function App() {
  return (
    <AppRoutes/>
  );
}
