import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CustomerSupport from "./pages/customer_support";


const App = () => {
  return (



    <Routes> 


      <Route path="/" element={<Home />} />

      <Route path="/customer_support" element={<CustomerSupport />} />
      





    </Routes>

  

  )
}

export default App;