import Navbar from "../components/Navbar.jsx";
import Navbuttons from '../components/Navbuttons.jsx';
import Search from '../components/search.jsx';
import Filter from '../components/Filter.jsx';
import ItemList from '../components/ItemList.jsx';
import Listings from '../jsfiles/Context.js';
import { useState,createContext, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Display from "../globalcontext/View.js";

const App = () => {
    const [FilterItems, setFilterItems] = useState([]);
    const [View, setView] = useState('');
    async function getlisting(name) {
        const path = `http://localhost:3000/api/listings/${name}`;
        const res = await fetch(path);
        const data = await res.json();
        setFilterItems(data);
    };

    useEffect(() => {
        getlisting('Rooms');
    }, []);

    return (
        <>
            <Display.Provider value={{View, setView}}>
                <Listings.Provider value={{FilterItems,setFilterItems}}>
                    <Navbar Navbuttons={Navbuttons} />
                    <Search />
                    <Filter />
                    <ItemList />
                </Listings.Provider>
            </Display.Provider>
            <Footer />
        </>
    )
}

export default App;