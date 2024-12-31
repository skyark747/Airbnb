import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App'
import Details from './Details';
import Booking from './Booking';
import Display from '../globalcontext/View';
import Contexts from '../globalcontext/Bookingdetails';
import BookingHistory from './BookingHistory';
import Admin from '../globalcontext/AdminContext';
import LogIn from '../globalcontext/LoginContext';
const { StayDateIn, StayDateOut, StayGuests } = Contexts;

const Main = () => {
  const [View, setView] = useState(null);
  const [numberOfGuests, SetNumberOfGuests] = useState(0);
  const [checkindate, SetCheckinDate] = useState('undefined');
  const [checkoutdate, SetCheckoutDate] = useState('undefined');
  const [IsAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <StrictMode>
      <Router>

        <Display.Provider value={{ View, setView }}>
          <StayDateIn.Provider value={{ checkindate, SetCheckinDate }}>
            <StayDateOut.Provider value={{ checkoutdate, SetCheckoutDate }}>
              <StayGuests.Provider value={{ numberOfGuests, SetNumberOfGuests }}>
                <Admin.Provider value={{ IsAdmin, setIsAdmin }}>
                  <LogIn.Provider value={{ showLogin, setShowLogin }}>
                    <Routes>
                      <Route path="/" element={<App />} />

                      <Route path="/listings" element={<Details />} />

                      <Route path="/bookings" element={<Booking />} />

                      <Route path="/view/bookings" element={<BookingHistory />} />
                    </Routes>
                  </LogIn.Provider>
                </Admin.Provider>
              </StayGuests.Provider>
            </StayDateOut.Provider>
          </StayDateIn.Provider>
        </Display.Provider>
      </Router>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Main />);
