
import Options from "./Hyperlinks";
const Hyp = ({title}) => {
    return (
        <div className="w-full h-full">
            <p className="font-semibold">{title}</p>
            <div className="w-full h-full flex flex-col">
                <Options link={"Popular"} />
                <Options link={"Arts & Culture"} />
                <Options link={"Outdoor"} />
                <Options link={"Mountains"} />
                <Options link={"Beach"} />
                <Options link={"Unique Stays"} />
            </div>
        </div>
    );
}

export default Hyp;