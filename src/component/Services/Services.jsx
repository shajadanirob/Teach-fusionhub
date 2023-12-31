import { Link, useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Services = () => {
    const Alldata = useLoaderData()
    useEffect(() =>{
        Aos.init();
          },[])
   
    return (
        <div data-aos='zoom-in-up'>
            <p className="text-center text-[#FF630E] font-semibold text-2xl my-20">SERVICE</p>
            <h1 className="text-center text-[#130F40] text-4xl font-bold">Explore Popular Service</h1>
            <div className="  max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10 space-y-10 lg:gap-12">
            
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
           {
               Alldata.slice(0,6).map(data => <SingleCard key={data.id} data={data}></SingleCard>)
            }
           </div>
           </div>
           <div className="text-center">
          <Link to='/course'> <button  className="btn bg-[#FF630E] text-white">Show All Service</button></Link>
           </div>

        </div>
      
    );
};

export default Services;