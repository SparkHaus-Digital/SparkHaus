import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import '@fontsource/oswald'; // Defaults to weight 400
// import '@fontsource/oswald/300.css'; // Light weight
// import '@fontsource/oswald/700.css'; // Bold weight

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
