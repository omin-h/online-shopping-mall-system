import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (

    <Routes> 
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App;