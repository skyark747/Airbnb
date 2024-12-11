import { BiSearch } from "react-icons/bi";
import SearchCity from "./SearchCity";
import { useEffect, useState } from "react";
import Checkinbox from "./Checkinbox";
import Guests from "./Guests";
const Search = () => {
    const [SearchC, SetSearchC] = useState(false);
    const [Chechin, SetCheck] = useState(false);
    const [Guest,SetGuest]= useState(false);

    return (
        <>
        <section class="h-24 w-full flex justify-center items-center border-b-2" id="Search">
            <div class="h-16 flex" id="search">
                <a href="#" class="w-1/3 h-full hover:bg-customgray hover:rounded-full" id="l-box" onClick={() => SetSearchC(!SearchC)}>
                    <div class="w-full h-2 ml-10 mt-3" id="where">Where</div><input
                        type="text"
                        placeholder="Search destinations"
                        class="w-48 h-5  rounded-md mt-2  ml-10 justify-self-start "
                            id="location"
                    />

                </a>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full" id="l-box" onClick={() => SetCheck(!Chechin)}>
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check in</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full" id="l-box" onClick={() => SetCheck(!Chechin)}>
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check out</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full" onClick={() => SetGuest(!Guest)}>
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">who</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add guests</div>
                </a>
                <a href="#" id="s-b" class=" flex justify-center items-center"><BiSearch style={{ color: "white", fontSize: "1.3rem" }} /></a>
            </div>

            </section>
            {SearchC && <SearchCity />}
            {Chechin && <Checkinbox className={"absolute bg-white z-50  w-8/12 h-1/2 rounded-3xl shadow-2xl flex justify-center left-64"} />}
            {Guest && <Guests className={"absolute bg-white right-52 z-50 overflow-y-auto w-1/4 h-2/3 rounded-3xl shadow-2xl justify-self-center"}/>}
        </>
        
    );
};

export default Search;