import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Pages/Products';
import PageNotFount from './Pages/PageNotFount';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
