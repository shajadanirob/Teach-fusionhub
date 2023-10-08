import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Catagory = () => {
    useEffect(() =>{
        Aos.init();
          },[])




    return (
     <div  className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-5">
       <div data-aos='zoom-in-up'>
       <p className="text-center text-[#FF630E] font-semibold text-2xl">CATEGORIES</p>
       <h2 className="text-center text-[#130F40] text-4xl font-bold">Popular Categories</h2>
       </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://i.ibb.co/cy541xJ/female-muslim-speaker-giving-presentation-hall-university-workshop.jpg" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Team Building Workshop</h3>
 
</article>
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://easiblock.com/html/omexo/assets/images/cat-3.jpg" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Leadership Training for Managers</h3>
   
</article>
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://easiblock.com/html/omexo/assets/images/cat-4.jpg" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Career Coaching</h3>
   
</article>
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://easiblock.com/html/omexo/assets/images/cat-1.jpg" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white"> Life Skills Mentoring</h3>
    
</article>
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://i.ibb.co/VTNqRDP/person-front-computer-working-html.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Web Development Fundamentals</h3>
    
</article>
            <article data-aos='zoom-in-up' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
    <img src="https://i.ibb.co/hK2Jqcj/distance-learning-online-education-webpage.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Digital Marketing Certification</h3>
    
</article>
        </div>
     </div>
    );
};

export default Catagory;