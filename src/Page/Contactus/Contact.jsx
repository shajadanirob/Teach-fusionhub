import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Contact = () => {
    useEffect(() =>{
        Aos.init();
          },[])
    return (

       <div>
         <div className="relative h-[50vh] w-full">
        <img src="https://i.ibb.co/H4YHCTN/pexels-denniz-futalan-3453047.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1  className="text-4xl text-white font-bold">Contact Us</h1>
            <Link to='/' className="text-xl text-white mt-4">
                <button >Home</button>
            </Link>
        </div>
    </div>


        <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div  className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 data-aos='zoom-in-up' className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                <p data-aos='zoom-in-up' className="mt-4 text-lg text-[#FF630E]">Purana Paltan, Dhaka, Bangladesh.</p>
            </div>
            <div className="mt-16 lg:mt-20">
                <div data-aos='zoom-in-up' className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0012456416925!2d90.40991777447044!3d23.732200039476496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f61d553505%3A0xb64d82bd6d3286d0!2sPurana%20Paltan%2C%20Dhaka%2C%20Bangladesh!5e1!3m2!1sen!2sus!4v1696775733322!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                <p className="mt-1 text-gray-600">Purana Paltan, Dhaka, Bangladesh</p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                <p className="mt-1 text-gray-600">Saturday - Thursday: 9am - 5pm</p>
                                <p className="mt-1 text-gray-600">Thursday: 10am - 4pm</p>
                                <p className="mt-1 text-gray-600">Friday: Closed</p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                <p className="mt-1 text-gray-600">Email: eduhub@gmail.com</p>
                                <p className="mt-1 text-gray-600">Phone: +880 0181236575</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </div>
    );
};

export default Contact;