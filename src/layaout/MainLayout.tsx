import ProductList from "@pages/ProductsList/productList";
import HomePage from "@pages/Home/HomePage ";
import { Category } from "@models/product";

console.log("ℹ️ MainLayout cargado (lazy)");

const MainLayout = () => {
    return (
        <div>
            <HomePage></HomePage>
            <ProductList title="New Arrivals" />
            <ProductList category={Category.Electronics} title="Electronics" />
            <ProductList category={Category.Jewelery} title="Jewelery" />
            <ProductList category={Category.WomensClothing} title="Woman" />
        </div>
    );
};

export default MainLayout;
