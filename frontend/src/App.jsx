import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Budget from "./pages/budget";

const App = () => {
  return (

    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<Budget />} />
    </Routes>

  )
}

export default App;