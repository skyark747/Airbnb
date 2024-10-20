import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "../components/Navbar.jsx";
import Navbuttons from '../components/Navbuttons.jsx';
import Search from '../components/search.jsx';
import Filter from '../components/Filter.jsx';
import Filteritems from '../components/Filteritems.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Navbar Navbuttons={Navbuttons} />
    <Search />
    <Filter Filteritems={Filteritems}/>
  </>
)
