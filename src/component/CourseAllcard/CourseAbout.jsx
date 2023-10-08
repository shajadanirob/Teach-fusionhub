import { Link } from "react-router-dom";


const CourseAbout = () => {
    return (
       <div>

<div className="relative h-[50vh] w-full">
    <img src="https://i.ibb.co/H4YHCTN/pexels-denniz-futalan-3453047.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold"> All Services</h1>
        <Link to='/' className="text-xl text-white mt-4">
            <button >Home</button>
        </Link>
    </div>
</div>




       </div>
    
    );
};

export default CourseAbout;