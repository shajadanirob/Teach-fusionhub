import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Discount = () => {

  useEffect(() =>{
    Aos.init();
      },[])

    return (
  <div >
    <h2 data-aos='zoom-in-up' className="text-center font-bold text[text-[#130F40] my-20 md:text-5xl text-3xl">Discount Offer</h2>
          <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mt-10">

       
<div data-aos='zoom-in-down' className="w-full h-64 lg:w-1/2 lg:h-auto">
    <img className="h-full w-full object-cover" src="https://i.ibb.co/5rCzyvQ/pexels-olena-bohovyk-3646172.jpg"/>
</div>



<div
    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

    <div data-aos='zoom-in-up' className="flex flex-col p-12 md:px-16">
        <p data-aos='zoom-in-up'  className="text-xl font-medium uppercase text-[#FF630E] lg:text-4xl">LIMITED TIME OFFER</p>
        <h2 data-aos='zoom-in-up'  className="mt-4 text-3xl font-bold">
        "Half-Price Extravaganza: 50% Off Event Bookings!
        </h2>
        <p data-aos='zoom-in-up'  className=" font-semibold my-5">Upgrade your wardrobe with a 50% discount on select fashion items. Shop now and save big before this limited-time deal ends!




.</p>
      <p data-aos='zoom-in-up'  className="text-3xl my-5 font-semibold">15 may - 20july</p>
      <div>
        <button data-aos='zoom-in-up'  className="btn bg-[#FF630E] text-white">BOOK NOW</button>
      </div>
    </div>
   
</div>

</div>
  </div>
    );
};

export default Discount;