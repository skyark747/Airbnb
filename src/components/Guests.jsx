import AddGuests from "./AddGuests";
const Guests = () => {
    return (
        <div className="fixed bg-white right-52 z-50 overflow-y-auto w-1/4 h-2/3 rounded-3xl shadow-2xl justify-self-center">
            <AddGuests name="Adults" detail="Age 13 or above" />
            <AddGuests name="Children" detail="Age 2-12" />
            <AddGuests name="Infants" detail="Under 2" />
            <AddGuests name="pets" detail="Pets allowed" />
        </div>

    );
}

export default Guests;