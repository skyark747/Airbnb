import { BiSearch } from "react-icons/bi";
import SearchCity from "./SearchCity";
import { useEffect, useState } from "react";
import Guests from "./Guests";
import DateSelector from "../smallcomponents/DatePick";
const Search = () => {
    const [SearchC, SetSearchC] = useState(false);
    const [Chechin, SetCheck] = useState(false);
    const [Guest, SetGuest] = useState(false);

    return (
        <>
            <section class="h-24 w-full  flex justify-center items-center border-b-2 " id="Search">
                <div class="h-16 flex" id="search">
                    <a href="#" class="sm:w-1/3 w-full h-full hover:bg-customgray hover:rounded-full " id="l-box" onClick={() => SetSearchC(!SearchC)}>
                        <div class="w-1/2 h-2 ml-10 mt-3" id="where">Where</div><input
                            type="text"
                            placeholder="Search destinations"
                            class="sm:w-48 w-1/2 h-5  rounded-md mt-2  ml-10 justify-self-start "
                            id="location"
                        />

                    </a>
                    <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full hidden sm:block" id="l-box" onClick={() => SetCheck(!Chechin)}>
                        <div class="w-1/2 h-2 ml-10 mt-3 " id="where">Check in</div>
                        <div class="w-1/2 h-2 ml-10 mt-2 " id="s-box">add dates</div>
                    </a>
                    <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full hidden sm:block" id="l-box" onClick={() => SetCheck(!Chechin)}>
                        <div class="w-1/2 h-2 ml-10 mt-3  " id="where">Check out</div>
                        <div class="w-1/2 h-2 ml-10 mt-2  " id="s-box">add dates</div>
                    </a>
                    <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full hidden sm:block" onClick={() => SetGuest(!Guest)}>
                        <div class="w-1/2 h-2 ml-10 mt-3  " id="where">who</div>
                        <div class="w-1/2 h-2 ml-10 mt-2 " id="s-box">add guests</div>
                    </a>
                    <a href="#" id="s-b" class=" flex justify-center items-center hidden sm:flex"><BiSearch style={{ color: "white", fontSize: "1.3rem" }} /></a>
                </div>

            </section>
            {SearchC && <SearchCity />}
            {Chechin && <DateSelector SetCheck={SetCheck} className={"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "} />}
            {Guest && <Guests className={"absolute bg-white right-52 z-50 overflow-y-auto w-96 h-2/3 rounded-lg shadow-2xl justify-self-center"} SetGuests={SetGuest} />}
        </>

    );
};

export default Search;