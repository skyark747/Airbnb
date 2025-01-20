import Options from "./Hyperlinks";
import Hyperlinks from "./Footer-hyperlinks";
import Footer_detail from "./Footer_details";
import BabyFooter from "./BabyFooter";
const Footer = () => {
    
    return (
        <div className="w-full h-auto bg-gray-100">
            <div className="sm:w-11/12 sm:h-44 w-10/12 h-90 bg-gray-100 sm:ml-16 ml-8 border-b-2 justify-center items-center flex">
                <div className="w-full h-1/2">
                    <h1 className="sm:text-xl text-lg font-semibold mt-4">Inspiration for future getaways</h1>
                        <div className="w-full h-1/2 grid grid-cols-2 gap-2 sm:grid-cols-10 sm:mt-2 ">
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
            <div className="sm:w-11/12 w-10/12 sm:h-96 grid sm:grid-cols-6 grid-cols-3 gap-4 border-b-2 sm:ml-16 ml-8 mt-6">
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
            <div className="w-10/12 sm:w-11/12 sm:h-64 h-72 grid grid-cols-3 gap-4 sm:ml-16 ml-8 mt-6 border-b-2 bg-gray-100">        
                <Footer_detail title={"Support"}/>
                <Footer_detail title={"Hostings"}/>
                <Footer_detail title={"Airbnb"}/>
            </div>
            <BabyFooter />
        </div>
    );
}

export default Footer;