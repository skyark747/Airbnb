
import Options from "./Hyperlinks";
const BabyFooter = () => {
    return (
        <div className="sm:w-11/12 w-10/12 h-12 flex justify-between mt-4 sm:ml-16 ml-8">
            <div className="w-1/2 h-full flex">
                <a href="#" className="font-semibold hover:underline mt-2">© 2022 Airbnb, Inc.</a>
                <a href="#" className="text-gray-500 space-x-2 ml-2 hidden sm:flex">
                    <Options link={"Privacy"} />
                    <Options link={"Terms"} />
                    <Options link={"Help"} />
                    <Options link={"Cookie Preferences"} />
                </a>
            </div>
            <div className="w-1/2 h-full  sm:justify-end space-x-2 hidden sm:flex">
                <Options link={"English (US)"} />
                <Options link={"$ USD"} />
            </div>
        </div>
    );
};

export default BabyFooter;