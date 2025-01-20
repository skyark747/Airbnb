
const Hyperlinks=({title,detail})=>{
    return (
        <a  href="#" className="font-semibold text-customgray text-xs sm:text-base">
            <p className="text-black">{title}</p>
            <p className="text-gray-500">{detail}</p>
        </a>
    );
}

export default Hyperlinks;