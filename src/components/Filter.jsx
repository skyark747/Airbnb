import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { BiBed, BiCoffee } from 'react-icons/bi'; // Bed Icons 
import { FaTicketAlt, FaFilm } from 'react-icons/fa'; // Ticket Icons
import { MdPlace } from 'react-icons/md'; // Place Icons
import { GiCastle, GiHouse, GiMountainCave, GiAlienSkull, GiTowerBridge, GiAlienBug } from 'react-icons/gi'; // Game Icons
import Listings from "../jsfiles/Context";
import Button from "../smallcomponents/AddButton";
import Add_Listing from "./AddListing";
import Admin from "../globalcontext/AdminContext";
import { useNavigate } from "react-router-dom";


const Filter = () => {
    const slider = useRef(null);
    const [value, Setvalue] = useState('');
    const { Filteritems, setFilterItems } = useContext(Listings);
    const [listing, setlisting] = useState(false);
    const { IsAdmin, setIsAdmin } = useContext(Admin);
    const navigate = useNavigate();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
    };
    const Items = [
        {
            name: "Rooms",
            icon: <BiBed style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Icons",
            icon: <FaTicketAlt style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Top Cities",
            icon: <MdPlace style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Amazing Views",
            icon: <FaFilm style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Cabins",
            icon: <GiHouse style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Caves",
            icon: <GiMountainCave style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Bed & Breakfast",
            icon: <BiCoffee style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Mansions",
            icon: <GiHouse style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "Castles",
            icon: <GiCastle style={{ fontSize: "1.5rem" }} />,
        },
        {
            name: "OMG!",
            icon: <GiAlienBug style={{ fontSize: "1.5rem" }} />,
        },
    ];

    function viewbookings() {
        navigate("/view/bookings");
    }
    

    async function getlisting(name) {
        try {

            const path = `http://localhost:3000/api/listings/${name}`;

            const res = await fetch(path);
            const data = await res.json();
            setFilterItems(data);
        } catch (err) {
            console.error(err);
        }
    };

    function handleClick(item) {
        switch (item) {
            case "Rooms":
                getlisting('Rooms');
                break;
            case "Bed & Breakfast":
                getlisting('Breakfast');
                break;
            case "Mansions":
                getlisting('Mansion');
                break;
            case "Icons":
                getlisting('Icons');
                break;
            case "Top Cities":
                getlisting('Cities');
                break;
            case "Amazing Views":
                getlisting('Views');
                break;
            case "Cabins":
                getlisting('Cabins');
                break;
            case "Caves":
                getlisting('Caves');
                break;
            case "Castles":
                getlisting('Castles');
                break;
            case "OMG!":
                getlisting('Omg');
                break;
            default:
                getlisting('Rooms');
                break;
        }
    }

    useEffect(() => {
        handleClick(value);
    }, [value]);


    return (
        <>
            <div className="filter" class='flex w-full h-24'>
                <div class='w-3/4 h-16 ml-2 flex items-center mt-3 justify-center content-center'>
                    <button onClick={() => slider.current.slickPrev()} class='w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out' id="b"><i class='bx bx-chevron-left'></i></button>
                    <div class="flex w-5/6 h-full justify-center items-center content-center" >
                        <div className="w-11/12 h-full">
                            <Slider ref={slider} {...settings}>
                                {
                                    Items.map((item, index) => (

                                        <a href="#" key={index} onClick={(e) => Setvalue(e.currentTarget.textContent)} className="w-12 h-16 justify-center items-center align-center " id="slider">
                                            
                                            <div href="#" className="flex flex-col justify-center items-center w-3/4 h-full " id="check-hover">{item.icon}
                                                    <p className="font-semibold text-sm text-gray-500 mt-2">{item.name}</p>
                                            </div>
                                            
                                        </a>
                                    ))

                                }
                            </Slider>
                        </div>

                    </div>
                    <button onClick={() => slider.current.slickNext()} class='w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out' id="b"><i class='bx bx-chevron-right'></i></button>

                </div>
                <div className="space-x-4 flex ">
                    <div className="mt-3" onClick={() => setlisting(!listing)}>
                        {IsAdmin && <Button />}
                    </div>
                    <button className="w-24 h-12 mt-3 ml-24 rounded-xl border-1 flex border-gray-300 hover:bg-customgray hover:border-black justify-around items-center" ><FiFilter />Filters</button>
                    <button className="w-32 h-12 mt-3 rounded-xl border-1 flex border-gray-300 hover:bg-customgray hover:border-black justify-around items-center" onClick={viewbookings} >View Bookings</button>

                </div>
            </div>
            {listing && <Add_Listing setlisting={setlisting} />}
        </>
    );
}

export default Filter;