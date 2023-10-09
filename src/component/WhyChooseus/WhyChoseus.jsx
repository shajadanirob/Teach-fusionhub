import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const WhyChoseus = () => {
    useEffect(() =>{
        Aos.init();
          },[])

    return (
<div>
    
<div className="text-center p-8">
<h1 data-aos='zoom-in-up' className="text-center text-[#130F40] text-4xl font-bold">Why Choose Us?</h1>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div data-aos='zoom-in-right' className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://i.ibb.co/rcTmbcC/pexels-ron-lach-9830805.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div data-aos='zoom-in-up' className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Comprehensive Services
            </h3>
            <p className="sm:text-lg mt-6">
            Explain the range of services you offer. This could include event planning, marketing, logistics, and post-event analysis.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div data-aos='zoom-in-right' className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://i.ibb.co/S63t6Sz/pexels-fauxels-3184465.jpg" alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div data-aos='zoom-in-up' className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Client-Centric Approach
            </h3>
            <p className="sm:text-lg mt-6">
                All LocaleData projects are private. Each project Highlight your commitment to understanding your clients' goals and needs.Describe how you customize event solutions to align with each client's vision and objectives..
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left  text-center">
        <div data-aos='zoom-in-right' className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://i.ibb.co/bmm33JY/pexels-pixabay-355948.jpg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div data-aos='zoom-in-up' className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12"/>
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Innovative Solutions
            </h3>
            <p className="sm:text-lg mt-6">
            Showcase any innovative or cutting-edge approaches you use in event management.Mention how you stay updated with industry trends and incorporate the latest
            </p>
        </div>
    </div>

   

</div>

    );
};

export default WhyChoseus;