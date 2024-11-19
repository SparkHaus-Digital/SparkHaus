import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './screens/ComingSoon';
import Error from './screens/Error';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon/>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
