import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import AddProducts from "../components/AddProducts/AddProducts";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/products/add" element={<AddProducts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
