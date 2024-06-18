import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import Header from './Components/layout/Header';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Registration from './Components/Pages/Registration';
import Login from './Components/Modules/Login';
import About from './Components/Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/About" element={<About/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;