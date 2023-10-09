/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const Footer = () => {
    return (
    
<footer className="footer p-10 bg-base-200 text-base-content mt-10 w-full h-full">
  <aside>
   <img className="w-[70px] md:w-[100px]" src="https://i.ibb.co/4WYqmTH/71854-eduhub-logo-Pos-1200x600.jpg" alt="" />
    <p>EDU-HUB.<br/>Providing reliable tech since 2014</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to='/about' className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link to='/course' className="link link-hover">Course</Link> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>


    );
};

export default Footer;