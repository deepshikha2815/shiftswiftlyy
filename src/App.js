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
import TransporterPanel from './Components/Pages/transporterpanel/TransporterPanel';
import PendingOrders from './Components/Pages/transporterpanel/PendingOrders';
import OrderCompletePage from './Components/Pages/transporterpanel/OrderCompletePage';
import Tlogin from './Components/Pages/transporterpanel/Tlogin';

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
        <Route path="/transporterpanel" element={<TransporterPanel />} /> 
        <Route path="/pendingorders" element={<PendingOrders/>} /> 
        <Route path="/ordercomplete" element={<OrderCompletePage/>} /> 
        <Route path="/tlogin" element={<Tlogin/>} /> 


        

      </Routes>
    </BrowserRouter>
  );
}

export default App;