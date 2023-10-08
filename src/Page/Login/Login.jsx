import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="py-26 bg-white">
  <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <a className="inline-block mx-auto mb-6" href="#">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>
        </a>
        

       <div>
       <div className="flex justify-center items-center">
            <img className="w-[70px] md:w-[150px]" src="https://i.ibb.co/4WYqmTH/71854-eduhub-logo-Pos-1200x600.jpg" alt="" />
        </div>
       </div>


        <h2 className="text-3xl md:text-4xl font-extrabold mt-8">Sign in</h2>
       
          </div>
      <form action="">
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" >Email</label>
          <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"/>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" for="">Password</label>
          <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********"/>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label for="">
              <input type="checkbox"/>
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
        </div>
        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#FF630E]  border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>



        <div className="my-2">
        <a href="#">
            <button
               className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
               <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
               <span className="dark:text-gray-300">
                   Login with Google
               </span>
            </button>
        </a>

        <div>
            <button
                className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"
                    viewBox="0 0 24 24" stroke="currentColor" className=" dark:text-white">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="dark:text-gray-300">
                    Login with Github
                </span>
            </button>
        </div>
    </div>




        <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/register' className="text-red-500 hover:underline" href="#">Sign up</Link></p>

      </form>
    </div>
  </div>
</section>
    );
};

export default Login;