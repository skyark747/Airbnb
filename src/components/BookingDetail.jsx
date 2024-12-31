import { useState,useRef } from "react";
import Slider from "react-slick";

const Bookingdetails = ({bookings}) => {
    
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
    
    return (
        <div className="w-4/5 h-3/4 mt-2  border border-gray-300 rounded-lg shadow-md bg-white">
            <div className="w-full h-1/3">
                {
                    <Slider {...settings} ref={slider}>
                        {bookings.images.map((img, index) => (
                            <div className="relative w-full h-72 rounded-xl justify-center items-center flex" key={index}>

                                <button onClick={Prev} className="absolute left-4 w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out bottom-32 bg-white " id="slide-image">
                                    <i class='bx bx-chevron-left'></i>
                                </button>
                                <img src={img} className="w-full h-full rounded-lg" />
                                <button id="slide-image" onClick={Next} className="absolute bottom-32 right-4 w-8 h-8 rounded-full border-black hover:shadow-2xl hover:scale-105 transform transition duration-150 ease-in-out bg-white">
                                    <i class='bx bx-chevron-right'></i>
                                </button>

                            </div>
                        ))}
                    </Slider>
                }
            </div>
            <div className="mt-4 p-4">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Booking for:</span>
                        <span className="text-gray-800">{bookings.clientemail}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Host:</span>
                        <span className="text-gray-800">{bookings.Host}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Place:</span>
                        <span className="text-gray-800">{bookings.Stay_place}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Stay Details:</span>
                        <span className="text-gray-800">{bookings.Stay_detail}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Check-In:</span>
                        <span className="text-gray-800">{bookings.check_in_date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Check-Out:</span>
                        <span className="text-gray-800">{bookings.check_out_date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Guests:</span>
                        <span className="text-gray-800">{bookings.guests}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Price:</span>
                        <span className="text-gray-800">{bookings.total_price}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bookingdetails;