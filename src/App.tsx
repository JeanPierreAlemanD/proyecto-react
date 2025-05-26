import './App.css'
import Footer from './layaout/Footer';
import ProductList from './features/products/productList';
import Header from './layaout/Header';
import Home from './layaout/home';
import { Category } from './models/product';

function App() {

  return (
    <div className=" w-full">
      <Header />
      <Home />
      <ProductList title='New Arrivals' />
      <ProductList title='Womens Clothing' category={Category.WomensClothing} />
      <ProductList title='Jewelery' category={Category.Jewelery} />
      <Footer />
    </div>
  );
}

export default App
