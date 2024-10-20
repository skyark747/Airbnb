import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { BiBed, BiCoffee} from 'react-icons/bi'; // Bed Icons 
import { FaTicketAlt, FaFilm  } from 'react-icons/fa'; // Ticket Icons
import { MdPlace } from 'react-icons/md'; // Place Icons
import { GiCastle, GiHouse, GiMountainCave ,GiAlienSkull,GiTowerBridge, GiAlienBug} from 'react-icons/gi'; // Game Icons


const Filter = () => { 
    const slider = useRef(null);
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
            icon: <BiBed style={{fontSize:"1.5rem"}}/>,
        },
        {
            name: "Icons",
            icon: <FaTicketAlt style={{fontSize:"1.5rem"}}/>,
        },
        {
            name: "Top Cities",
            icon: <MdPlace style={{fontSize:"1.5rem"}}/>,
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
    
    return (
        <div className="filter" class='flex w-full h-24'>
            <div class='w-2/3 h-16 ml-16 flex items-center mt-3 justify-center content-center'>
                <button onClick={() => slider.current.slickPrev()} class='w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out' id="b"><i class='bx bx-chevron-left'></i></button>
                <div class="flex w-5/6 h-full space-x-14 justify-around items-center content-center" >
                    <div className="w-full h-full">
                    <Slider ref={slider} {...settings}>
                    {
                        Items.map((item, index) => (
                            
                            <div key={index} className="w-12 h-12 justify-center items-center align-center ml-10" id="slider">
                                <div className="w-6 h-6 ml-2">{item.icon}</div>
                                <p className="font-semibold text-sm text-gray-500 mt-2">{item.name}</p>
                            </div>
                        ))

                    }
                    </Slider>
                </div>
            
                </div>
                <button onClick={() => slider.current.slickNext()} class='w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out' id="b"><i class='bx bx-chevron-right'></i></button>

            </div>
            <button className="w-24 h-12 mt-3 rounded-xl border-1 flex border-gray-300 hover:bg-customgray hover:border-black justify-around items-center" ><FiFilter/>Filters</button>

            <button className="w-52 h-12 mt-3 rounded-xl border-1 border-gray-300 text-sm ml-10 hover:bg-customgray hover:border-black" >Display total before taxes</button>
        </div>
    );
}

export default Filter;