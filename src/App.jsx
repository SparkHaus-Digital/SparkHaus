import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./screens/Home";
import Service from "./screens/Service";
import Footer from "./components/Footer";
import ComingSoon from './screens/ComingSoon';
import Error from './screens/Error';
//import './index.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Service />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
