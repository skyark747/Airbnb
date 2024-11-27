import { useState } from "react";
import StaticDatePickerLandscape from "./InputDate";

import "react-datepicker/dist/react-datepicker.css";
const Checkinbox = () => {
    return (
        <div className="absolute bg-white left-80 z-50  w-8/12 h-1/2 rounded-3xl shadow-2xl flex justify-center" >
                <StaticDatePickerLandscape />
            
                <StaticDatePickerLandscape />
            
        </div>
    );
};

export default Checkinbox;