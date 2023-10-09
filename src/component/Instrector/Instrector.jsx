import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Instrector = () => {
    useEffect(() =>{
        Aos.init();
          },[])
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-5">
             <p data-aos='zoom-in-up' className="text-center text-[#FF630E] font-semibold text-2xl my-10">FOUNDERS</p>
            <h1 data-aos='zoom-in-up' className="text-center text-[#130F40] text-4xl font-bold">Our Founders</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            <div data-aos ='zoom-out-right' className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://easiblock.com/html/omexo/assets/images/instructor-1.jpg" className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-[#130F40] text-xl">Shane Warne</h4>
        <p className="mt-2 text-xl font-bold text-gray-600">CEO
        </p>
        
    </div>
</div>
            <div data-aos ='zoom-out-up' className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://easiblock.com/html/omexo/assets/images/instructor-2.jpg" className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-[#130F40] text-xl">Avelina Smith</h4>
        <p className="mt-2 text-xl font-bold text-gray-600">COO
        </p>
        
    </div>
</div>
            <div  data-aos ='zoom-out-right' className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://easiblock.com/html/omexo/assets/images/instructor-3.jpg" className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-[#130F40] text-xl">John Bond</h4>
        <p className="mt-2 text-xl font-bold text-gray-600">CMO
        </p>
        
    </div>
</div>
            <div data-aos ='zoom-out-up' className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://easiblock.com/html/omexo/assets/images/instructor-4.jpg" className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-[#130F40] text-xl">Sophia Smith</h4>
        <p className="mt-2 text-xl font-bold text-gray-600">CTO
        </p>
        
    </div>
</div>
       
            

            </div>

         
        </div>
    );
};

export default Instrector;