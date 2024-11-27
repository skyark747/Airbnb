
const getlisting = (name) => {
    const path = `http://localhost:3000/api/listings/${name}`;
    fetch(path, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            setFilterItems(data);
        })
        .catch((err) => console.error(err));
};

export default getlisting;