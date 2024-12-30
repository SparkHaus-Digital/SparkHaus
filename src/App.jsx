import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Home from "./screens/Home";
import Service from "./screens/Service";
import Footer from "./components/Footer";
import ComingSoon from './screens/ComingSoon';
import BookACall from './screens/BookACall';
import Error from './screens/Error';
import AboutUs from './screens/AboutUs';
import Portfolio from './screens/Portfolio';

import Navbar from './components/Navbar';

import './index.css';

import Snowfall from 'react-snowfall';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Snowfall 
        snowflakeCount={100} 
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 999 }} 
        snowflakeSpeed={0.1} 
      /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Service />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path='/book-a-call' element={<BookACall/>} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;