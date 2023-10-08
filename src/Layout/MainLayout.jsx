import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayout;