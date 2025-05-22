import { useContext } from "react";
import Item from "./Item";
import Listings from "../globalcontext/Listings.js";
import Loader from "../smallcomponents/Loader";
import Button from "../smallcomponents/Showmore";
import Pages from "../globalcontext/pages";
import ButtonP from "../smallcomponents/Prevpage";


const ItemList = () => {
    const { FilterItems } = useContext(Listings);
    const { page, setpage } = useContext(Pages);
    

    if (!FilterItems) {
        return <Loader />;
    }

    return (
        <div className="w-full h-auto " id="items">
            <div
                className="sm:w-95 w-10/12 h-auto gap-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-9 md:ml-8 lg:ml-16
                sm:ml-11 "
            >
                {FilterItems.map((item, index) => (
                    <Item
                        key={index}
                        img_src={item.img_url}
                        place={item.place}
                        rating={item.rating}
                        price={item.price_per_night}
                        stay_details={item.stay_details}
                        date={item.date}
                        id={item.id}
                    />
                ))}
            </div>
            <div className="w-95 flex md:justify-end justify-center items-center mb-2 space-x-2">

                <ButtonP page={page} setpage={setpage} />
                <Button page={page} setpage={setpage} />
            </div>
        </div>
    );
};

export default ItemList;
