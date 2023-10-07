/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const SingleCard = ({data}) => {
    const{image,title,description,price} =data
    console.log(data)
    return (
     <div className="grid grid-cols-4">
           <div className="relative flex w-64 md:w-80 lg:w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-[#130F40] antialiased">
           {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
          <p className=" text-[#FF630E] font-semibold">Price: {price}</p>
        </div>
        <div className="p-6 pt-0">
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
    );
};

export default SingleCard;