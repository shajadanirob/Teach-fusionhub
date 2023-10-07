import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Course from "../Page/Course/Course";
import About from "../Page/About/About";
import Login from "../Page/Login/Login";
import MemberShip from "../Page/MemberShip/MemberShip";
import Error from "../component/Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('/Data.json')
           
        },
        {
            path:'/course',
            errorElement:<Error></Error>,
            element:<Course></Course>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/plan',
          element:<MemberShip></MemberShip>
        }
      ]
    },
  ]);
  export default router