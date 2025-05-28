import './App.css'
import Footer from './layaout/Footer';
import Header from './layaout/Header';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App
