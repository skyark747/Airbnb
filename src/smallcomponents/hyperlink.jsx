const Button = ({text,setproperty}) => {
    return (
        <a href="#"
            onClick={(e) => setproperty(e.currentTarget.textContent)} className="flex justify-center items-center border border-gray-300 rounded-lg w-16 h-10 text-xs text-gray-500 hover:bg-pink-100">{text}</a>
    );
};
export default Button;
    