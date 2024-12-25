import AddGuests from "./AddGuests";
const Guests = ({className,SetGuests}) => {
    return (
        <div className={`${className}`}>
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                onClick={() => SetGuests(false)}
            >
                ✕
            </button>
            <AddGuests name="Adults" detail="Age 13 or above" />
            <AddGuests name="Children" detail="Age 2-12" />
            <AddGuests name="Infants" detail="Under 2" />
            <AddGuests name="pets" detail="Pets allowed" />

        </div>

    );
}

export default Guests;