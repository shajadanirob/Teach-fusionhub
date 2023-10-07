/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const SingleCard = ({data}) => {
    const{image,title,description,price} =data
    console.log(data)
    return (
     <div>
       

<div class="w-64 md:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div>
            <img src={image}
                    alt="Product" class="h-70 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
            <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-[#130F40] antialiased">
           {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
                <div class="flex items-center">
                    <p class="text-lg  text-[#FF630E] font-semibold cursor-auto my-3">Price:{price}</p>
                   
                </div>
                <button
            className="select-none rounded-lg bg-[#FF630E] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
            </div>
        </div>
    </div>

     </div>
    );
};

export default SingleCard;