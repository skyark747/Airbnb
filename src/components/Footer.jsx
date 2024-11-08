import Options from "./Hyperlinks";
import Hyperlinks from "./Footer-hyperlinks";
import Footer_detail from "./Footer_details";
import BabyFooter from "./BabyFooter";
const Footer = () => {
    return (
        <div className="w-full h-auto bg-gray-100">
            <div className="w-11/12 h-44 bg-gray-100 ml-16 border-b-2 justify-center items-center flex">
                <div className="w-full h-1/2">
                    <h1 className="text-xl font-semibold mt-4">Inspiration for future getaways</h1>
                        <div className="w-full h-1/2 flex justify-between mt-4">
                            <Options link={"Popular"} />
                            <Options link={"Arts & Culture"} />
                            <Options link={"Outdoor"} />
                            <Options link={"Mountains"} />
                            <Options link={"Beach"} />
                            <Options link={"Unique Stays"} />
                            <Options link={"Categories"} />
                            <Options link={"Things to do"} />
                            <Options link={"Travel tips & inspiration"} />
                            <Options link={"Airbnb friendly-apartments"} />
                        </div>
                </div>
            </div>
            <div className="w-11/12 h-96 grid grid-cols-6 gap-4 border-b-2 ml-16 mt-6">
                <Hyperlinks title={"Canmore"} detail={"Apartment rentals"} />
                <Hyperlinks title={"Benalmadena"} detail={"Beach house rentals"} />
                <Hyperlinks title={"Marbela"} detail={"house rentals"} />
                <Hyperlinks title={"Mijas"} detail={"Apartment rentals"} />
                <Hyperlinks title={"Prescott"} detail={"Pet-friendly rentals"} />
                <Hyperlinks title={"Scottsdale"} detail={"Condo rentals"} />
                <Hyperlinks title={"Tucson"} detail={"Condo rentals"} />
                <Hyperlinks title={"Jasper"} detail={"Cabin rentals"} />
                <Hyperlinks title={"Devonport"} detail={"Cottage rentals"} />
                <Hyperlinks title={"Mallacoota"} detail={"Pet-friendly rentals"} />
                <Hyperlinks title={"Ibiza"} detail={"Vacation rentals"} />
                <Hyperlinks title={"Anaheim"} detail={"Family-friendly rentals"} />
                <Hyperlinks title={"Monterey"} detail={"Bengalow rentals"} />
                <Hyperlinks title={"Passo Robals"} detail={"Cottage rentals"} />
                <Hyperlinks title={"Sonoma"} detail={"rentals with pools"} />
                <Hyperlinks title={"La Serena"} detail={"Beachfront rentals"} />
            </div>
            <div className="w-11/12 h-64 grid grid-cols-3 gap-4 ml-16 mt-6 border-b-2 bg-gray-100">
                <Footer_detail title={"Support"}/>
                <Footer_detail title={"Hostings"}/>
                <Footer_detail title={"Airbnb"}/>
            </div>
            <BabyFooter />
        </div>
    );
}

export default Footer;