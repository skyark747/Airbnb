import { useRef } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Display from "../globalcontext/View";
import Admin from "../globalcontext/AdminContext";
const Item = ({ img_src, place, rating, price, stay_details, date, id }) => {
    const { View, setView } = useContext(Display);
    const { IsAdmin, setIsAdmin } = useContext(Admin);
    async function getlisting(id) {
        const path = `http://localhost:3000/api/listings/details/${id}`;
        const res = await fetch(path);
        const data = await res.json();
        setView(data);
    };
    async function dellisting(id) {
        const token=localStorage.getItem("Token");
        const path = `http://localhost:3000/api/admin/listings/${id}`;
        const res = await fetch(path, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`, 
            },
        });
        const data = await res.json();
        alert(data.msg);
    };
    const navigate = useNavigate();
    const handle_Click = (id) => {
        getlisting(id);
        navigate('/listings');
    }
    const handle_Click_2 = (id) => {
        dellisting(id);
    }
    const slider = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    function Prev(event) {
        event.preventDefault();
        slider.current.slickPrev();
    }
    function Next(event) {
        event.preventDefault();
        slider.current.slickNext();
    }
    const [active, setactive] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        setactive(!active);
    }
    return (
        <div className="h-full w-11/12 object-contain pb-10 mt-2" id="image-slider">
            <div className="w-full h-full">
                <div className="w-full h-72">
                    <Slider {...settings} ref={slider}>
                        {img_src.map((img, index) => (
                            <div className="relative w-full h-72 rounded-xl justify-center items-center flex" key={index}>
                                <button className="absolute bg-black top-4 right-4 rounded-xl text-white text-sm h-8 w-8 " onClick={handleClick} style={{ backgroundColor: active ? "red" : "black" }}>
                                    <i class='bx bx-heart' style={{ fontSize: "1rem" }}></i>
                                </button>
                                <button onClick={Prev} className="absolute left-4 w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out bottom-32 bg-white " id="slide-image">
                                    <i class='bx bx-chevron-left'></i>
                                </button>
                                <img src={img} className="w-full h-full rounded-xl" />
                                <button id="slide-image" onClick={Next} className="absolute bottom-32 right-4 w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out bg-white">
                                    <i class='bx bx-chevron-right'></i>
                                </button>

                            </div>
                        ))}
                    </Slider>

                </div>
                <a href="#" className="w-full h-24 " onClick={() => handle_Click(id)}>
                    <div className="flex justify-between mt-2">
                        <h2 className="font-semibold">{place}</h2>
                        <h2 >{rating}</h2>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-500">{stay_details}</p>
                            <p className="text-gray-500">{date}</p>
                            <p className="font-semibold">${price} night</p>
                        </div>
                        <div className="mt-2 h-8">

                            {IsAdmin && <button className="w-24 h-8 rounded-xl border-1 flex border-gray-300 hover:bg-custompink hover:border-black justify-around items-center" onClick={() => handle_Click_2(id)}>Delete</button>}
                        </div>
                    </div>
                </a>
                

            </div>
        </div>
    );
}

export default Item;