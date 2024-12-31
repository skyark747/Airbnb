import Bookingdetails from "../components/BookingDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Admin from "../globalcontext/AdminContext";
import { useState,useEffect, useContext } from "react";
const BookingHistory = () => {
    const [bookings, setbookings] = useState([]);
    const { IsAdmin, setIsAdmin } = useContext(Admin);

    const get_bookings = async () => {
        const token = localStorage.getItem("Token");
        let url;
        if (IsAdmin) {
            url = "http://localhost:3000/api/admin/bookings";
        } else {
            url = "http://localhost:3000/api/viewbookings";
        }
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await res.json();
        setbookings(data);
    };


    useEffect(() => {
        get_bookings();
    }, []);

    if (bookings.length==0) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-gray-100 font-semibold text-xl">No Bookings to View</h1>
            </div>
        );
    }

    return (
        <>
            <div className="border-b-2">
                <Navbar />
            </div>
            <div className=" w-full h-full grid grid-cols-4 gap-2 ml-10 mt-2">
                {
                    bookings.map((item, index) => (
                        <Bookingdetails bookings={item} />
                    ))
                }

            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </>
    );
};

export default BookingHistory;