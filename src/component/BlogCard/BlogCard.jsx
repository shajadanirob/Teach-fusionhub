import { useLoaderData } from "react-router-dom";
import SingleBlogCard from "./SingleBlogCard";

const BlogCard = () => {
    const allData = useLoaderData()
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
        {
            allData.map(data => <SingleBlogCard key={data.id} data={data}></SingleBlogCard>)
         }
        </div>
    );
};

export default BlogCard;