import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ComingSoon from './screens/ComingSoon';
import BookACall from './screens/BookACall';
import Error from './screens/Error';
import AboutUs from './screens/AboutUs';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/coming-soon" />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path='/book-a-call' element={<BookACall/>} /> 
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
