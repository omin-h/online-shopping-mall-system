import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import CustomerSupport from "./pages/customerSupport";
import CustomerSupAdmin from "./pages/customerSupAdmin";

import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";


const App = () => {
  return (



    <Routes> 

      <Route path="/" element={<Home />} />


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