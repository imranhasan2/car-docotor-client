
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Service = ({ service }) => {


    const {_id, title, img, price } = service
    return (
        <div className="  bg-base-100 shadow-xl  border-solid border-2  p-4 ">
            <figure><img src={img} alt="Shoes" className="rounded-lg" /></figure>
            <div className="space-y-4 pl-4 mt-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex justify-between">
                    <p className="text-[#FF3811] text-xl font-semibold ">Price: <span className="text-[#FF3811]">${price}</span></p>
                    <Link to={`checkOut/${_id}`}>
                        <FaArrowRight className="text-[#FF3811]"></FaArrowRight>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;