import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App'
import Details from './Details';
import Booking from './Booking';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listings" element={<Details />} />
        <Route path="/bookings" element={<Booking />} />
      </Routes>
    </Router>
  </StrictMode>
)
