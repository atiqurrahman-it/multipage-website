import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

const App = () => {
  return (
    // header & footer page sob page thakbe tai ei tabe diye
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home> </Home>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
