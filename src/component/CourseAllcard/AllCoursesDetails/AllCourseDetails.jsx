import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCourseDetail from "./SingleCourseDetail";


const AllCourseDetails = () => {
    const[ detailsCard , setDetailsCard] = useState({}) 
    const {id} =useParams()
    const intId = parseInt(id)
    const details = useLoaderData()

    useEffect(() =>{
        const findDetail = details?.find((detail)=>detail.id === intId)
        setDetailsCard(findDetail)
    },[intId , details])

    return (
        <div>
            <SingleCourseDetail detail={detailsCard}></SingleCourseDetail>
        </div>
    );
};

export default AllCourseDetails;