import AddGuests from "./AddGuests";
const Guests = ({className,SetGuests}) => {
    return (
        <div className={`${className}`}>
            <button class="text-gray-500 hover:text-gray-700 fixed" aria-label="Close" onClick={() => SetGuests(false)}>
                &times;
            </button>
            <AddGuests name="Adults" detail="Age 13 or above" />
            <AddGuests name="Children" detail="Age 2-12" />
            <AddGuests name="Infants" detail="Under 2" />
            <AddGuests name="pets" detail="Pets allowed" />

        </div>

    );
}

export default Guests;