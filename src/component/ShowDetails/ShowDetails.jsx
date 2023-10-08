import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDetails from "./SingleDetails";


const ShowDetails = () => {
    const[ detailsCard , setDetailsCard] = useState({}) 
const {id} =useParams()
const intId = parseInt(id)

    const details = useLoaderData()
  
    // console.log(details,intId)
    useEffect(() =>{
        const findDetail = details?.find((detail)=>detail.id === intId)
        setDetailsCard(findDetail)
    },[intId , details])


    return (
        <div>
            <SingleDetails detail={detailsCard}></SingleDetails>
        </div>
    );
};

export default ShowDetails;