import Navbar from "../components/Navbar.jsx";
import Navbuttons from "../components/Navbuttons.jsx";
import Displayname from "../smallcomponents/Displayname.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Display from "../globalcontext/View.js";
import { BiStar } from "react-icons/bi";
import Loader from "../smallcomponents/Loader.jsx";
const Details = () => {
    const { View, setView } = useContext(Display);
    const navigate = useNavigate();
    async function getlisting(id) {
        const path = `http://localhost:3000/api/listings/details/${id}`;
        const res = await fetch(path);
        const data = await res.json();
        setView(data);
    };
    
    const handleClick = () => {
        navigate("/bookings");
    };
    if (!View) {
        return <Loader />;
    }
    return (
        <>

            <Navbar Navbuttons={Navbuttons} />
            <div className="w-full h-20 flex justify-center border-t-2">
                <Displayname name={View.stay_details} className={"w-11/12 h-full flex justify-start items-center"} />
            </div>
            <div className="w-full flex justify-center ">
                <div className='grid w-11/12 overflow-hidden gap-[6px] grid-cols-5 rounded-2xl mt-2'>
                    <div className="col-span-5 h-[250px] sm:h-[350px] md:h-[430px] md:col-span-3 ">
                        <img
                            src={View.img_url[0]}
                            alt="Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className='hidden h-[430px] col-span-2 md:grid grid-cols-2 grid-rows-2 gap-[6px]'>
                        { 
                            View.img_url.slice(1,5).map((img, index) => (
                                <div className="flex items-center justify-center h-full">
                                    <img src={img} key={index} alt="Image" className="w-full h-full object-cover" />
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>


            <div className="w-full h-auto flex mt-10 mb-4">


                <div className="w-8/12 h-20 ml-16 ">
                    <h1 className="text-3xl font-semibold ">{View.name}/{View.place}</h1>
                    <p className="text-gray-700 text-lg">{View.bedrooms} bedroom shared.{View.bathrooms} bathroom</p>
                    <div className="flex ">
                    <BiStar className="w-6 h-6 mr-2" />
                    <p className="text-lg">{View.rating}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-lg border border-gray-300 rounded-lg h-20 mt-10 w-11/12">
                        <div>
                            <p className="font-semibold">Top 5% of homes</p>
                            <p className="text-gray-700">This home is highly ranked based on ratings, reviews, and reliability.</p>
                        </div>
                    </div>

                    <div className="h-20 w-11/12 border-b-2  flex flex-col justify-center mt-10 w-11/12">
                        <h2 className="text-2xl font-semibold">stay with {View.name}</h2>
                        <p className="text-gray-700 text-lg">host for 2 years</p>
                    </div>

                    <div className="w-11/12 mt-4">
                        <h1 className="text-2xl font-semibold">About this place</h1>
                        <p className="text-base text-gray-700 mt-4">
                            Nestled in the heart of tranquility, this place offers a perfect escape from the everyday hustle and bustle. Whether it’s a cozy home, a serene mountain retreat, a bustling city hotel, or a quaint countryside lodge, it provides an atmosphere that balances comfort with adventure. The surroundings are a harmonious blend of natural beauty and thoughtful design, ensuring a sense of calm while inviting exploration. Spacious interiors or open landscapes cater to every preference, from those seeking solitude to those yearning for connection. The gentle murmur of a stream, the rustle of leaves in the wind, or the distant hum of urban life create a backdrop that soothes the soul. Here, every sunrise paints the sky in vibrant hues, and every sunset whispers promises of renewal. Whether you’re seeking a place to rest, reconnect, or rediscover, this location has all the elements to make it memorable—a true sanctuary for the heart and mind.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="space-y-4 w-96">
                        <div className="border bg-white shadow-lg rounded-lg py-7 px-4 border-gray-300 space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-2xl font-semibold">{View.price_per_night}</p>
                                <p className="text-sm text-gray-600 font-xl">/ night</p>
                            </div>

                            <div className="border border-gray-300 rounded-lg py-4 w-full max-w-sm">
                                <div className="grid grid-cols-2 px-4 border-b border-gray-300 pb-4 gap-4">
                                    <div className="space-y-1">
                                        <p href="#" className="text-xs font-semibold text-gray-600">CHECK-IN</p>
                                        <p href="#" className="text-sm font-medium text-gray-800">6/25/2025</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-semibold text-gray-600">CHECKOUT</p>
                                        <p className="text-sm font-medium text-gray-800">7/4/2025</p>
                                    </div>
                                </div>
                                <div href="#" className="px-4 pt-4 flex justify-between items-center relative">
                                    <div className="space-y-1">
                                        <p className="text-xs font-semibold text-gray-600">Max Accomodation</p>
                                        <p href="#" className="text-sm font-medium text-gray-800">8 guests</p>

                                    </div>
                                    <span className="text-gray-500">▼</span>
                                </div>
                            </div>

                            <button onClick={handleClick} className="w-full py-2 bg-gradient-to-r from-pink-600 to-pink-800 text-white font-semibold rounded-lg">
                                Reserve
                            </button>

                            <p className="text-center text-gray-600  ">You won't be charged yet</p>
                            <div className="space-y-1 text-gray-600  underline ">
                                <div className="flex justify-between">
                                    <p>7 nights</p>
                                    <p>7</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Cleaning fee</p>
                                    <p>$29</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Airbnb service fee</p>
                                    <p>$89</p>
                                </div>
                            </div>
                            <div className='mx-auto  bg-gray-300'></div>
                            <div className="flex justify-between font-semibold">
                                <p>Total before taxes</p>
                                <p>200</p>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 shadow-sm">
                            <p className="text-pink-800 font-semibold">This is a rare find</p>
                            <p className="text-sm text-gray-600">Bo's place is usually fully booked.</p>
                        </div>


                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Details;