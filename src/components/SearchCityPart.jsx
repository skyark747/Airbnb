const SearchCityPart = ({name}) => {
    return (
        <div className="w-full h-16 bg-white flex justify-center items-center hover:bg-gray-100">
            <p className="font-semibold">{name}</p> 
        </div>
    );
}

export default SearchCityPart;