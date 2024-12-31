import React, { useEffect, useState } from 'react';
import Input from './YearCom';

const DateSelector = ({SetCheck,className,SetCheckInDate}) => {
    const [selected, setSelected] = useState(null);
    const [selectmonth, setselectedmonth] = useState(null);
    const [year, setyear] = useState(null);
    const [Month, setmonth] = useState(null);
    const [Date, setdate] = useState(null);

    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let checkinArr = new Array(6);
    
    const SetStay = () => {
        checkinArr.push(year,'/', Month,'/', Date);
        SetCheckInDate(checkinArr);
        SetCheck(false);
    }
 
    return (
        <div className={`${className}`}>
           
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                    onClick={() => SetCheck(false)}
                >
                    ✕
                </button>
                <div>
                    <Input setyear={setyear} />
                </div>
                <div className="grid grid-cols-7 gap-2 mt-4">
                    {months.map((month) => (
                        <button
                            key={month}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition-colors text-sm ${selectmonth === month ? 'bg-pink-500 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'}`}
                            onClick={() => { setselectedmonth(month); setmonth(month);}}
                        >
                            {month}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-2 mt-4">
                    {dates.map((date) => (
                        <button
                            key={date}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition-colors ${selected === date ? 'bg-pink-500 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'}`}
                            onClick={() => {setSelected(date); setdate(date);}}
                        >
                            {date}
                        </button>
                    ))}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                        
                    onClick={() => SetCheck(false)}>
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600" onClick={SetStay}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DateSelector;
