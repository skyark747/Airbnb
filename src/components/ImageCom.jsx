
const Images = ({img_url}) => {
    return (
        <div className="w-11/12 h-full ">
            <img src={img_url} alt="Image" className="w-full h-full rounded-xl" />
        </div>
    );
}

export default Images;