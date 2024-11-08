import SearchCityPart from "./SearchCityPart";
import Cities from "../jsfiles/Cities";

const SearchCity = () => {
    
    return (
        <div className="fixed  bg-white left-80 z-50 overflow-y-auto w-1/3 h-1/2 rounded-3xl shadow-2xl justify-self-center">
            {
                Cities.map((city, index) => (
                    <SearchCityPart key={index} name={city.place} />
                ))
            }
        </div>
    );
};  

export default SearchCity;