import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Services from "./component/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home> </Home>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
