const Search = () => {
    return (
        <section class="h-24 w-full flex justify-center items-center shadow">
            <div class="h-16 flex" id="search">
                <div class="w-1/3 h-full hover:bg-customgray hover:rounded-full" id="l-box">
                    <div class="w-full h-2 ml-10 mt-3" id="where">Where</div><input
                        type="text"
                        placeholder="Search destinations?"
                        class="w-48 h-5  rounded-md mt-2  ml-10 justify-self-start hover:bg-customgray"
                        id="location"
                    />
                </div>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full" id="l-box">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check in</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full" id="l-box">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">Check out</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add dates</div>
                </a>
                <a href="#" class="w-40 h-full hover:bg-customgray hover:rounded-full">
                    <div class="w-1/2 h-2 ml-10 mt-3" id="where">who</div>
                    <div class="w-1/2 h-2 ml-10 mt-2" id="s-box">add guests</div>
                </a>
                <a href="#" id="s-b" class=" flex justify-center items-center"><i class="bx bx-search"></i></a>
            </div>


        </section>
    );
};

export default Search;