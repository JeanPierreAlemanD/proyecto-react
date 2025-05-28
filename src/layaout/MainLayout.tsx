import ProductList from "@pages/ProductsList/productList";
import HomePage from "@pages/Home/HomePage ";

console.log("ℹ️ MainLayout cargado (lazy)");

const MainLayout = () => {
    return (
        <div>
            <HomePage></HomePage>
            <ProductList title="New Arrivals"/>
        </div>
    );
};

export default MainLayout;
