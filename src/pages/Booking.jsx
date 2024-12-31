import Navbar from "../components/Navbar";
import Displayname from "../smallcomponents/Displayname";
import Guests from "../components/Guests";
import { useState, useContext, useEffect } from "react";
import BabyFooter from "../components/BabyFooter";
import DateSelector from "../smallcomponents/DatePick";
import Switch from "../smallcomponents/Switch";
import Form from "../components/PaymentForm";
import Contexts from '../globalcontext/Bookingdetails';
const { StayDateIn, StayDateOut, StayGuests } = Contexts;
import calculateDays from "../jsfiles/CalculateDays";

const Booking = () => {
    const [Checkin, SetCheckin] = useState(false);
    const [Checkout, SetCheckout] = useState(false);
    const [guests, SetGuest] = useState(false);
    const [toggle, settoggle] = useState(false);
    
    const { checkindate, SetCheckinDate } = useContext(StayDateIn);
    const { checkoutdate, SetCheckoutDate } = useContext(StayDateOut);
    const { numberOfGuests, SetNumberOfGuests } = useContext(StayGuests);

    return (
        <>
            <Navbar />

            <div className="relative w-full h-full flex border-t-2">

                <div className="w-3/4 h-full">

                    <div className="w-full h-28 flex justify-center">
                        <Displayname name={"Request to Book"} className={"w-11/12 h-full flex items-end ml-60 font-semibold "} />
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-lg border border-gray-300 rounded-lg h-28 mt-10 w-1/2 ml-60">
                        <div className="w-full h-full ml-10 flex flex-col justify-center">
                            <p className="font-semibold">Good Price</p>
                            <p className="text-gray-700">Your dates are $6 less than the avg. nightly rate over the last 3 months.</p>
                        </div>
                    </div>

                    <div className="space-x-2 text-lg h-60 mt-4 w-1/2 ml-60 border-b-2 flex items-center justify-center flex-col">
                        <div className="h-full w-full space-y-4">
                            <p className="font-semibold text-2xl">Your Trip</p>
                            <div className="w-full h-full mt-10 space-y-2 flex flex-col">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold text-xl">Date</p>
                                        <p className="font-semibold text-gray-500">{checkindate} - {checkoutdate}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 ">
                                        <Switch settoggle={settoggle} toggle={toggle} />
                                        {toggle &&
                                            <div className=" border border-gray-300 flex  justify-center space-x-2 items-center rounded-lg ">
                                                <a href="#" className="underline " onClick={(e) => { SetCheckin(!Checkin) }}>Edit check-in date</a>
                                                <a href="#" className="underline" onClick={(e) => { SetCheckout(!Checkout) }}>Edit check-out date</a>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        <p className="font-semibold text-xl">Guests</p>
                                        <p className="font-semibold text-gray-500">{numberOfGuests}</p>
                                    </div>
                                    <a href="#" className="underline" onClick={(e) => SetGuest(!guests)}>Edit</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-gray-100 w-full h-16 absolute flex justify-center items-center mt-10">
                        <BabyFooter />
                    </div>

                </div>
                <div className="w-1/3  mt-10">
                    {
                         <Form  checkindate={checkindate} checkoutdate={checkoutdate} numberOfGuests={numberOfGuests}/>
                    }
                </div>
                {Checkin && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 h-full w-full mt-10 space-x-4">

                        <DateSelector SetCheck={SetCheckin} SetCheckInDate={SetCheckinDate} />
                    </div>

                )}
                {Checkout && (<div className="absolute inset-0 flex items-center justify-center z-50 h-full w-full mt-10 space-x-4">

                    <DateSelector SetCheck={SetCheckout} SetCheckInDate={SetCheckoutDate} />
                </div>)}
                {guests && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 h-full w-full mt-10">
                        <Guests className="bg-white overflow-y-auto w-96 h-full rounded-lg shadow-2xl p-4" SetGuests={SetGuest} numberOfGuests=
                            {numberOfGuests} SetNumberOfGuests={SetNumberOfGuests} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Booking;