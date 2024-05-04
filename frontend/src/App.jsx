import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Shops from "./pages/shops";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

import CustomerSupport from "./pages/customer_support";

import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";
import Generate from "./pages/generate";

import PrototypePage from "./pages/prototypepage";
import BrandListPage from "./pages/brandlistpage";
import Suggestionp from "./pages/sugesstionspage";


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
      <Route path="/customer_support" element={<CustomerSupport />} />


      {/* omin's routes */}
      <Route path="/budget" element={<Budget />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/shoppingList" element={<ShoppingList />} />


      {/* sachira's routes */}
      <Route path="/prototype" element={ <PrototypePage/>} />
      <Route path="/brandlist" element={ <BrandListPage/>} />
      <Route path="/login" element={ <Suggestionp/>} />
  
      
    </Routes>

  

  )
}

export default App;