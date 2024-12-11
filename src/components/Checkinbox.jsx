import StaticDatePickerLandscape from "./InputDate";

import "react-datepicker/dist/react-datepicker.css";
const Checkinbox = ({className,SetCheckin}) => {
    return (
        <div className={`${className}`} >
            
                <StaticDatePickerLandscape />
            
            <StaticDatePickerLandscape />
            
            <button class="text-gray-500 hover:text-gray-700 fixed" aria-label="Close" onClick={() => SetCheckin(false)}>
                &times;
            </button>

        </div>
    );
};

export default Checkinbox;