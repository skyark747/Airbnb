
const Displayname = ({name, className}) => {
    return (
        <div className={`${className}`}>
            <h1 className="text-3xl font-semibold ">{name}</h1>
        </div>
    )
}

export default Displayname;