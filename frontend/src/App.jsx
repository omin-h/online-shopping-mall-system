import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import CustomerSupport from "./pages/customer_support";

import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";


const App = () => {
  return (



    <Routes> 

      <Route path="/" element={<Home />} />

      
      {/* dunal's routes */}
      <Route path="/customer_support" element={<CustomerSupport />} />


      {/* omin's routes */}
      <Route path="/budget" element={<Budget />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
  
      
    </Routes>

  

  )
}

export default App;