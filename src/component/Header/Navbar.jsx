import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const NabLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>

        <li><NavLink to='/course'>Service</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>

        <li><NavLink to='/plan'>Membership Plans</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{NabLinks}



                    </ul>
                </div>
                <div className="btn btn-ghost normal-case text-xl"><img className="w-[70px] md:w-[100px] md:ml-56 lg:ml-20 " src="https://i.ibb.co/4WYqmTH/71854-eduhub-logo-Pos-1200x600.jpg" alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                  {
                    NabLinks
                  }

                </ul>
            </div>
            <div className="navbar-end">
               <Link to='/login'>
               <button className="btn bg-[#FF630E] text-white">Login</button>
               </Link>
                {/* <button className="btn bg-[#FF630E] text-white">Register</button> */}
            </div>
        </div>
    );
};

export default Navbar;