

const Banner = () => {
    return (

<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://i.ibb.co/JBrrFQx/speaker-business-meeting-conference-hall.jpg" alt="Winding mountain road" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-3xl font-bold leading-tight mb-4 ">Connect With Our Expert And <br /> Start Learning Today</h1>
    <p className="text-lg text-gray-300 mb-8">We are providing high-quality online courses to improve your skill. <br /> Our all instructors are highly experienced and experts.</p>
    <a href="#" className="bg-[#FF630E] text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
  </div>
</div>


    );
};

export default Banner;