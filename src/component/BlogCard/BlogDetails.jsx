import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBlogDetail from "./SingleBlogDetail";


const BlogDetails = () => {
    const[ detailsCard , setDetailsCard] = useState({}) 
    const {id} =useParams()
    const intId = parseInt(id)
    
        const details = useLoaderData()
        console.log(details)
      
        // console.log(details,intId)
        useEffect(() =>{
            const findDetail = details?.find((detail)=>detail.id === intId)
            setDetailsCard(findDetail)
        },[intId , details])


    return (
        <div>
           {
             <SingleBlogDetail detail={detailsCard}></SingleBlogDetail>
           }
        </div>
    );
};

export default BlogDetails;