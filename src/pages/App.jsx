import Navbar from "../components/Navbar.jsx";
import Navbuttons from '../components/Navbuttons.jsx';
import Search from '../components/search.jsx';
import Filter from '../components/Filter.jsx';
import ItemList from '../components/ItemList.jsx';
import Listings from '../jsfiles/Context.js';
import { useState } from "react";
import Rooms from "../jsfiles/Homepage.js";
import Footer from "../components/Footer.jsx";
import SearchCity from "../components/SearchCity.jsx";
const App = () => {
    const [FilterItems,setFilterItems] = useState(Rooms);
    return (
        <>
            <Listings.Provider value={{FilterItems,setFilterItems}}>
                <Navbar Navbuttons={Navbuttons} />
                <Search />
                <Filter />
                <ItemList />
            </Listings.Provider>
            <Footer />
        </>
    )
}

export default App;