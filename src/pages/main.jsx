import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "../components/Navbar.jsx";
import Navbuttons from '../components/Navbuttons.jsx';
import Search from '../components/search.jsx';

createRoot(document.getElementById('Navbar')).render(
  <>
    <Navbar Navbuttons={Navbuttons} />
    <Search />
  </>
)
