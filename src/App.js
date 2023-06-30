import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import Product from  "./pages/productPage/Product";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Main />}/>
      <Route path ="/product/:productId/:product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  )
}

