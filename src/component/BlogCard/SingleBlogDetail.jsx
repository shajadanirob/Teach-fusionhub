import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SingleBlogDetail = ({detail}) => {

    useEffect(() =>{
        Aos.init();
          },[])

    const{image,title,writer,paragraph,hashtags} = detail
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div data-aos='zoom-in-up' className="bg-cover bg-center text-center overflow-hidden"
            title="Woman holding a mug">
                <img className="w-full h-[150vh] md:h-[100vh] md:w-[80%]" src={image} alt="" />
        </div>
        <div className="max-w-3xl mx-auto">
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                    <h1 data-aos='zoom-in-down' href="#" className="text-gray-900 font-bold text-3xl mb-2">{title}</h1>
                    <p data-aos='zoom-in-up' className="text-gray-700 text-xs mt-2">Written By:
                     
    
                    </p>
    
                    <p data-aos='zoom-in-down' className="text-base leading-8 my-5">
                       {paragraph}
                    </p>
    
                  
    
                    <a href="#"
                        className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        #{hashtags}
                    </a>, 
                   
                   
                </div>
    
            </div>
        </div>
    </div>
    );
};

export default SingleBlogDetail;