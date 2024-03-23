import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

<<<<<<< HEAD
import CustomerSupport from "./pages/customerSupport";
import CustomerSupAdmin from "./pages/customerSupAdmin";
=======
import Shops from "./pages/shops";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

import CustomerSupport from "./pages/customer_support";
>>>>>>> 27eeee937c423f3c6b64803fea2adc782d833749

import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";


const App = () => {
  return (



    <Routes> 

      <Route path="/" element={<Home />} />
        
        {/* Avishka's routes */}
      <Route path="/shops" element={<Shops />} />
      <Route path="/shop/:name" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />


      {/* dunal's routes */}
      <Route path="/customer_Support" element={<CustomerSupport />} />
      <Route path="/customer_Support_Admin" element={<CustomerSupAdmin />} />


      {/* omin's routes */}
      <Route path="/budget" element={<Budget />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
  
      
    </Routes>

  

  )
}

export default App;