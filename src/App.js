import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Admissions from "./Admissions";
import Departments from "./Departments";
import Placements from "./Placements";
import Gallery from "./Gallery";
import Contact from "./Contact";
import AdmissionForm from './Admission_form.js'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Form" element={<AdmissionForm/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;