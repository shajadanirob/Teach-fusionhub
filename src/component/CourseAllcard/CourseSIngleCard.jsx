import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const CourseSIngleCard = ({card}) => {

  useEffect(() =>{
    Aos.init();
      },[])

    // eslint-disable-next-line react/prop-types
    const{id,image,title,description,price} =card
    return (
        <div>
            
<div className="w-64 md:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div data-aos='zoom-in-up'>
            <img src={image}
                    alt="Product" className="h-70 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
            <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-[#130F40] antialiased">
           {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
                <div className="flex items-center">
                    <p className="text-lg  text-[#FF630E] font-semibold cursor-auto my-3">Price:{price}</p>
                   
                </div>
           <Link to={`/courseDetails/${id}`}>
           <button
            className="select-none rounded-lg bg-[#FF630E] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
           </Link>
            </div>
        </div>
    </div>
        </div>
    );
};

export default CourseSIngleCard;