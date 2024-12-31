import { useState } from "react";
import Form from "../smallcomponents/UploadPics";
import Button from "../smallcomponents/hyperlink"
const Add_Listing = ({ setlisting }) => {
    const [name, setname] = useState('');
    const [place, setplace] = useState('');
    const [StayDetail, setStayDetail] = useState('');
    const [Date, setdate] = useState('');
    const [rating, setrating] = useState(0);
    const [price_per_night, setprice] = useState(0);
    const [bedrooms, setbedrooms] = useState(0);
    const [bathrooms, setbathrooms] = useState(0);
    const [property, setproperty] = useState('');
    const [img_url, setimg_url] = useState([]);

    const propertyArr = ["Breakfast", "Cabins", "Castles", "Caves", "Cities", "Icons", "Rooms", "Amazing Views", "Mansion"]

    
    const Add_listing = async (event) => {
        const token = localStorage.getItem("Token");
        const url = "http://localhost:3000/api/admin/listings";
        const body = {
            name: name,
            place: place,
            stay_details: StayDetail,
            date: Date,
            rating: rating,
            price_per_night: price_per_night,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            property_type: property,
            img_url: img_url
        };
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        alert(data.msg);
        setimg_url([]);
        setlisting(false);
        event.preventDefault();
    };



    return (
        <>
            <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" >
                <div className="bg-white items-center justify-center rounded-lg shadow-lg w-8/12">

                    <div class="p-6 space-y-6 flex ">

                        <form class="w-3/4 flex space-x-32">

                            <div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Host name</label>
                                    <input
                                        type="text"
                                        id="email"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter host name"
                                        required

                                        onChange={(e) => setname(e.target.value)} />
                                </div>

                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">Hosting Place</label>
                                    <input
                                        type="text"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter Place name"
                                        required

                                        onChange={(e) => setplace(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">Stay details</label>
                                    <input
                                        type="text"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter details"
                                        required

                                        onChange={(e) => setStayDetail(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">bedrooms</label>
                                    <input
                                        type="number"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter details"
                                        required

                                        onChange={(e) => setbedrooms(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">bathrooms</label>
                                    <input
                                        type="number"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter details"
                                        required

                                        onChange={(e) => setbathrooms(e.target.value)} />
                                </div>

                            </div>
                            <div>


                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">price per night</label>
                                    <input
                                        type="number"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter price per night"
                                        required

                                        onChange={(e) => setprice(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">dates for availability</label>
                                    <input
                                        type="text"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter date"
                                        required

                                        onChange={(e) => setdate(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">rating</label>
                                    <input
                                        type="number"
                                        id="password"
                                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                        placeholder="Enter rating"
                                        required

                                        onChange={(e) => setrating(e.target.value)} />
                                </div>
                                <div className="gap-1 grid grid-cols-3 mt-2">
                                    {
                                        propertyArr.map((item, index) => (
                                            <Button text={item} setproperty={setproperty} />
                                        ))
                                    }
                                </div>

                            </div>

                        </form>
                        <div >
                            <Form img_url={img_url} setimg_url={setimg_url} />
                            <div className="grid grid-cols-3 mt-2 ml-2 gap-0 space-y-1">

                                {
                                    img_url.map((img, index) => (
                                        <div className="w-1/2 h-10">


                                            <img src={img} alt="Image" className="w-full h-full"></img>

                                        </div>
                                    ))}

                            </div>
                        </div>

                    </div>
                    <div className="h-16 flex justify-end">
                        <button
                            type="submit"
                            class="w-24 h-10 border border-gray-600 text-gray-600 py-2 rounded-md hover:bg-gray-100 transition mr-6" onClick={() => { setlisting(false); setimg_url([]) }}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="w-24 h-10 bg-pink-600 text-white py-2 rounded-md hover:bg-red-600 transition mr-6" onClick={Add_listing}>
                            Continue
                        </button>
                    </div>
                </div>
            </div >

        </>

    )
}

export default Add_Listing;