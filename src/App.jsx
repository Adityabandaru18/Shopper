import React from 'react'
import Navbar from './components/Navbar.jsx'
import Shop from './components/Shop.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import Shopcategory from './components/shopcategory/Shopcategory.jsx';
import { Route, Routes } from 'react-router-dom';
import menB from "./components/Assets/banner_mens.png";
import womB from "./components/Assets/banner_women.png";
import kidB from "./components/Assets/banner_kids.png";
import Login from './components/login/Login.jsx';
import Products from './components/products/Products.jsx';
import Cart from './components/Cartdetails/Cart.jsx';
const App = () => {
  return (
    <div>
      <Router>


        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mens" element={<Shopcategory category="men" banner={menB} />} />
          <Route path="/womens" element={<Shopcategory category="women" banner={womB} />} />
          <Route path="/kids" element={<Shopcategory category="kid" banner={kidB} />} />
          <Route path="/product" element={<Products />} />

        </Routes>


      </Router>
    </div>
  )
}

export default App
