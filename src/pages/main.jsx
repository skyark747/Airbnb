import { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App'
import Details from './Details';
import Booking from './Booking';
import Display from '../globalcontext/View';

const Main = () => {
  const [View, setView] = useState(null);
  return (
    <StrictMode>
      <Router>

        <Display.Provider value={{ View, setView }}>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/listings" element={<Details />} />

          <Route path="/bookings" element={<Booking />} />
          </Routes>

        </Display.Provider>
      </Router>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Main />);
