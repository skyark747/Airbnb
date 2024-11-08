
import Options from "./Hyperlinks";
const BabyFooter = () => {
    return (
        <div className="w-11/12 h-12 flex justify-between mt-4 ml-16">
            <div className="w-1/2 h-full flex">
                <a href="#" className="font-semibold hover:underline">© 2022 Airbnb, Inc.</a>
                <a href="#" className="text-gray-500 space-x-2 ml-2">
                    <Options link={"Privacy"} />
                    <Options link={"Terms"} />
                    <Options link={"Help"} />
                    <Options link={"Cookie Preferences"} />
                </a>
            </div>
            <div className="w-1/2 h-full flex  justify-end space-x-2">
                <Options link={"English (US)"} />
                <Options link={"$ USD"} />
            </div>
        </div>
    );
};

export default BabyFooter;