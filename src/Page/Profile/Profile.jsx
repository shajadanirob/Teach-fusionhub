import UseAuth from "../../Hooks/UseAuth";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Profile = () => {
    useEffect(() =>{
        Aos.init();
          },[])


    const { user} = UseAuth();
    console.log(user)
    return (
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

      
        <div id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


            <div  data-aos='zoom-in-up' className="p-4 md:p-12 text-center lg:text-left">
               
                <div  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                    ></div>

                <h1  data-aos='zoom-in-up' className="text-3xl font-bold pt-8 lg:pt-0">{user.displayName}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p  data-aos='zoom-in-up' className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                   <div className="h-4 gap-4 fill-current ">
                   <AiOutlineMail></AiOutlineMail>

                    </div> Email: {user.email}
                </p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <div className="h-4 gap-4 fill-current ">
                    <AiOutlinePhone></AiOutlinePhone>
                        </div>Phone :{user.phoneNumber }
                </p>
                <p className="pt-8 text-4xl">Hello {user.displayName} Hope You are well</p>

                <div className="pt-12 pb-8">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				         Get In Touch
				     </button>
                </div>

            
               

            </div>

        </div>

        
        <div  data-aos='zoom-in-down' className="w-full lg:w-2/5">
           
            <img src={user.photoURL} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
          

        </div>


        

    </div>

    );
};

export default Profile;