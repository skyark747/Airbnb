const Search = () => {
    return (
        <section class="h-16 w-full flex justify-center items-center">
            <div class="h-full flex" id="search">
                <div class="w-1/3 h-full " id="l-box">
                    <div class="w-full h-2 ml-10 mt-3" id="where">Where</div><input
                        type="text"
                        placeholder="Search destinations?"
                        class="w-48 h-5 pl-10 rounded-md mt-2 bg-red-200 ml-2 justify-self-start"
                        id="location"
                    />
                </div>
                <a href="#" class="w-40 h-full " id="l-box">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check in</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full " id="l-box">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check out</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full ">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">who</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add guests</div>
                </a>
                <a href="#" id="s-b" class=" flex justify-center items-center"><i class="bx bx-search"></i></a>
            </div>


        </section>
    );
};

export default Search;