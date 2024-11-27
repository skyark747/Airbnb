
import SearchCityPart from "./SearchCityPart";
const SearchCity = () => {
    let arr = ["India", "Pakistan", "Thailand", "USA", "UK"]
    return (
        <div className="absolute bg-white left-80 z-50 overflow-y-auto w-1/3 h-1/2 rounded-3xl shadow-2xl justify-self-center ">
            {
                arr.map((city, index) => (
                    <SearchCityPart key={index} name={city} />
                ))
            }
        </div>
    );
};

export default SearchCity;