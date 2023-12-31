
import { Link } from 'react-router-dom';
import Testimonal from '../Testimonal/Testimonal';
import Instrector from '../Instrector/Instrector';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AboutUS = () => {

    useEffect(() =>{
        Aos.init();
          },[])

    return (
        <div>

        <div className="relative h-[50vh] w-full">
    <img src="https://i.ibb.co/H4YHCTN/pexels-denniz-futalan-3453047.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">About Us</h1>
        <Link to='/' className="text-xl text-white mt-4">
            <button >Home</button>
        </Link>
    </div>
</div>
<div data-aos='zoom-in-up'>
<p className="text-center text-[#FF630E] font-semibold text-2xl my-10">WHO WE ARE</p>
<h1 className="text-center text-[#130F40] text-2xl md:text-3xl font-bold">We are a dedicated team of event professionals who specialize <br /> in curating, orchestrating, and delivering educational  that leave an indelible <br /> mark on attendees. With a collective background in event and a deep- <br /> passion for education, we bring a unique blend of creativity, <br /> precision, and innovation to every project.</h1>

<p data-aos='zoom-in-down' className='text-xl text-center my-10'>"At EduHub, we are dedicated to shaping the future of education events. Our passion lies in connecting educators, learners, and <br /> thought leaders through innovative and immersive experiences. With a deep-rooted commitment to excellence, we curate and organize educational <br />events that inspire, empower, and transform. Whether you're an aspiring learner seeking knowledge or an institution looking to host a remarkable event, <br /> EduHub is your trusted partner. Our team of experienced professionals is driven by a shared vision: to create impactful educational <br /> gatherings that drive progress and foster a lifelong love of learning. Join us on this exciting journey as we redefine <br /> education event management, one inspiring event at a time."</p>
</div>

<div data-aos='zoom-in-up' className='grid grid-cols-1 md:grid-cols-3 text-center my-10'>

    <div>
<h1 className='text-[#FF630E] text-5xl font-bold'>55,264+</h1>
<p className='text-2xl font-bold'>Event Total Booked</p>
    </div>

    <div>
<h1 className='text-[#FF630E] text-5xl font-bold'>90+</h1>
<p className='text-2xl font-bold'>Registered Event</p>
    </div>

    <div>
<h1  className='text-[#FF630E] text-5xl font-bold'>44%</h1>
<p className='text-2xl font-bold'>Success Rate</p>
    </div>
</div>

<Testimonal></Testimonal>
<Instrector></Instrector>


        </div>
    );
};

export default AboutUS;