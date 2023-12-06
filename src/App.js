import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

import {BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
        </Routes>
      </BrowserRouter>
      <Banner />
      <Cards />
      <Product />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;