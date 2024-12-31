import AddGuests from "./AddGuests";
const Guests = ({ className, SetGuests, numberOfGuests,SetNumberOfGuests}) => {
    return (
        <div className={`${className}`}>
            <div className="w-full flex justify-end">
            <button
                className="absolute top-2 text-gray-600 hover:text-red-500"
                onClick={() => SetGuests(false)}>
                ✕
                </button>
            </div>
            <AddGuests name="Adults" detail="Age 13 or above" SetNumberofGuests={SetNumberOfGuests} numberOfGuests={numberOfGuests}/>
            <AddGuests name="Children" detail="Age 2-12" SetNumberofGuests={SetNumberOfGuests} numberOfGuests={numberOfGuests} />
            <AddGuests name="Infants" detail="Under 2" SetNumberofGuests={SetNumberOfGuests} numberOfGuests={numberOfGuests} />
            <AddGuests name="pets" detail="Pets allowed" SetNumberofGuests={SetNumberOfGuests} numberOfGuests={numberOfGuests} />
            

        </div>

    );
}

export default Guests;