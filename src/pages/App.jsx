import Navbar from "../components/Navbar.jsx";
import Navbuttons from "../components/Navbuttons.jsx";
import Search from "../components/search.jsx";
import Filter from "../components/Filter.jsx";
import ItemList from "../components/ItemList.jsx";
import Listings from "../globalcontext/Listings.js";
import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer.jsx";
import Pages from "../globalcontext/pages.js";
import LogIn from "../globalcontext/LoginContext.js";

const App = () => {
  const [FilterItems, setFilterItems] = useState([]);
  const [page, setpage] = useState(1);
  const {showLogin, setShowLogin}=useContext(LogIn);
  
  async function getlisting(name, page, limit) {
    const path = `http://localhost:3000/api/listings/${name}/${page}/${limit}`;
    const res = await fetch(path);
    const data = await res.json();
      setFilterItems(data);
  }
  async function getlistingcount(name) {
    try {
      const path = `http://localhost:3000/api/listingscount/${name}`;

      const res = await fetch(path);
      const data = await res.json();
      const count = parseInt(data, 10);
      settotalpages(count);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function loadData() {
      await getlistingcount("Rooms");
      await getlisting("Rooms", 1, 8);
      if (showLogin == false) {
        setShowLogin(true)
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Listings.Provider value={{ FilterItems, setFilterItems }}>
        <Pages.Provider value={{ page, setpage }}>
              <Navbar Navbuttons={Navbuttons} />
              <Search />
              <Filter />
              <ItemList />
        </Pages.Provider>
      </Listings.Provider>
      <Footer />
    </>
  );
};

export default App;
