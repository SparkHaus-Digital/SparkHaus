import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import ComingSoon from './screens/ComingSoon';
import BookACall from './screens/BookACall';
import Error from './screens/Error';
import AboutUs from './screens/AboutUs';
import Portfolio from './screens/Portfolio';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <Route path="/" element={<Navigate to="/coming-soon" />} />
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