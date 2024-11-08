import { useContext, useState } from "react";
import Rooms from "../jsfiles/Homepage";
import Item from "./Item";
import Listings from "../jsfiles/Context";
const ItemList = () => {
    const {FilterItems,setFilterItems} = useContext(Listings);
    return (
        <div class=" w-full h-auto" id="items">
            <div class="w-95 h-auto gap-1 grid grid-cols-4 ml-16">
                {FilterItems.map((item,index) => (
                    <Item key={index}  
                    img_src={item.img_url}
                    place={item.place}
                    rating={item.rating}
                    price={item.price_per_night}
                    stay_details={item.stay_details}
                    date={item.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemList;