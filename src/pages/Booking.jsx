import Navbar from "../components/Navbar";
import Displayname from "../smallcomponents/Displayname";
import Checkinbox from "../components/Checkinbox";
import Guests from "../components/Guests";
import { useState } from "react";
import BabyFooter from "../components/BabyFooter";
const Booking = () => {
    const [Checkin, SetCheckin] = useState(false);
    const [guests, SetGuest] = useState(false);
    
    return (
        <>
            <Navbar />

            <div className="relative w-full h-full">
            <div className="w-full h-28 flex justify-center border-t-2">
                    <Displayname name={"Request to Book"} className={"w-11/12 h-full flex items-end ml-60 font-semibold "} />
            </div>
            <div className="flex items-center justify-center space-x-2 text-lg border border-gray-300 rounded-lg h-28 mt-10 w-1/3 ml-60">
                <div className="w-full h-full ml-10 flex flex-col justify-center">
                    <p className="font-semibold">Good Price</p>
                    <p className="text-gray-700">Your dates are $6 less than the avg. nightly rate over the last 3 months.</p>
                </div>
            </div>
            <div className="space-x-2 text-lg h-60 mt-4 w-1/3 ml-60 border-b-2 flex items-center justify-center flex-col">
                <div className="h-full w-full space-y-4">
                    <p className="font-semibold text-2xl">Your Trip</p>
                    <div className="w-full h-full mt-10 space-y-2 flex flex-col">
                        <div className="flex justify-between">
                            <div>
                            <p className="font-semibold text-xl">Date</p>
                                <p className="font-semibold text-gray-500">Dec 21-22</p>
                            </div>
                            <a href="#" className="underline" onClick={(e) => SetCheckin(!Checkin)}>Edit</a>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>
                                <p className="font-semibold text-xl">Guests</p>
                                <p className="font-semibold text-gray-500">1 guest</p>
                            </div>
                            <a href="#" className="underline" onClick={(e) => SetGuest(!guests)}>Edit</a>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="bg-gray-100 w-full h-18 absolute flex justify-center items-center mt-10">
                    <BabyFooter />
                </div>
                {Checkin && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 h-full w-full mt-10">
                        
                        <Checkinbox className="bg-white overflow-y-auto w-2/3 h-full rounded-3xl shadow-2xl p-4 flex" SetCheckin={SetCheckin}/>
                    </div>
                )}
                {guests && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 h-full w-full mt-10">
                        <Guests className="bg-white overflow-y-auto w-96 h-full rounded-3xl shadow-2xl p-4" SetGuests={SetGuest}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Booking;