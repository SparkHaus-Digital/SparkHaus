import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './screens/ComingSoon';
import Error from './screens/Error';
import './index.css';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
