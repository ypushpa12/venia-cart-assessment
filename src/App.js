import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Basket from './component/Basket';
import { useEffect, useState } from 'react';
import About from './component/About';
import Filters from './component/Filters';
import Footer from './component/Footer';
import Nav from './component/Nav';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>
      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Nav countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
        <Route exact path='/' element={<Home category={category} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/filter'element={<Filters />} />
        <Route exact path='/products' element={<Products category="" />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
