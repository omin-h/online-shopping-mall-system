import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";


const App = () => {
  return (

    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
  
      
    </Routes>

  )
}

export default App;