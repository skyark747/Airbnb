import { useState } from "react";
import { BiPlus , BiMinus} from "react-icons/bi";

const AddGuests = ({ name, detail, SetNumberofGuests, numberOfGuests }) => {
    const [value, SetValue] = useState(1);
    function Set({ value }) {
        if (value == 0) {
            SetValue(0);
        }
        else {
            SetValue(value - 1);
            if (numberOfGuests != 0) {
                SetNumberofGuests(numberOfGuests - 1);
            }
        }
    }
    return (
        <div class="flex items-center h-1/4 w-full">  
            <div class="w-1/2 h-full flex flex-col justify-center items-center">
                <span class="font-semibold">{name}</span>
                <p class="text-gray-500">{detail}</p>
            </div>
            <div class="w-1/2 h-full flex justify-center items-center space-x-2 ">
                <>
                    <button class="w-8 h-8 rounded-full bg-white border-2 hover:border-black flex justify-center items-center" onClick={() => Set({ value })}><BiMinus /></button>
                <p >{value}</p>
                    <button class="w-8 h-8 rounded-full bg-white border-2 hover:border-black flex justify-center items-center" onClick={() => { SetValue(value + 1); SetNumberofGuests(numberOfGuests + 1)}}><BiPlus /></button>
                </>
            </div>
        </div>
    );
}

export default AddGuests;