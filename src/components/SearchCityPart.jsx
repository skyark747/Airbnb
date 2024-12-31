import { useContext } from "react";
import Listings from "../jsfiles/Context";
const SearchCityPart = ({ name }) => {

    const { FilterItems, setFilterItems } = useContext(Listings);
    async function change(n) {

        const path = `http://localhost:3000/api/listings/search/query?query=${n}`;
        const res = await fetch(path);
        const data = await res.json();
        setFilterItems(data);

    }
    return (
        <div className="w-full h-16 bg-white flex justify-center items-center hover:bg-pink-100">
            <a href="#" className="w-full h-full flex justify-center items-center font-semibold" onClick={(e) => change(e.currentTarget.textContent)}>{name}</a> 
        </div>
    );
}

export default SearchCityPart;