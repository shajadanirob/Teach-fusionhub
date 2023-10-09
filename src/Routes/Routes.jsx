import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Course from "../Page/Course/Course";
import About from "../Page/About/About";
import Login from "../Page/Login/Login";
import MemberShip from "../Page/MemberShip/MemberShip";
import Error from "../component/Error/Error";
import ShowDetails from "../component/ShowDetails/ShowDetails";
import Profile from "../Page/Profile/Profile";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contactus/Contact";
import Register from "../Page/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllCourseDetails from "../component/CourseAllcard/AllCoursesDetails/AllCourseDetails";
import BlogDetails from "../component/BlogCard/BlogDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        errorElement: <Error></Error>,
        element: <Home></Home>,
        loader: () => fetch('/Data.json')

      },
      {
        path: '/course',
        errorElement: <Error></Error>,
        element: <Course></Course>,
        loader: () => fetch('/Data.json')
      },
      {
        path: '/showDetails/:id',
        errorElement: <Error></Error>,
        element: <PrivetRoute>
          <ShowDetails></ShowDetails>
          </PrivetRoute>,
        loader: () => fetch('/Data.json')

      },
      {
        path:'/courseDetails/:id',
        errorElement: <Error></Error>,
        element:<PrivetRoute>
          <AllCourseDetails></AllCourseDetails>
        </PrivetRoute>,
         loader: () => fetch('/Data.json')
      },
      {
        path: '/about',
        errorElement: <Error></Error>,
        element: <About></About>
      },
      {
        path: '/login',
        errorElement: <Error></Error>,
        element: <Login></Login>
      },
      {
        path:'/register',
        errorElement: <Error></Error>,
        element:<Register></Register>
      },
      {
        path: '/plan',
        errorElement: <Error></Error>,
        element: <MemberShip></MemberShip>
      },
      {
        path: '/contact',
        errorElement: <Error></Error>,
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        errorElement: <Error></Error>,
        element:<PrivetRoute> <Blog></Blog></PrivetRoute>,
        loader: () => fetch('/Blog.json')
      },
      {
        path:'/BlogDetails/:id',
        errorElement: <Error></Error>,
        element:  <PrivetRoute><BlogDetails></BlogDetails></PrivetRoute>,
        loader: () => fetch('/Blog.json')
        
        
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
    ]
  },
]);
export default router