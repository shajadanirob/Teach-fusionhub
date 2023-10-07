import { useLoaderData } from "react-router-dom";
import CourseSIngleCard from "./CourseSIngleCard";

const CourseCard = () => {
    const allCard = useLoaderData()
    console.log(allCard)
    return (
        <div className="  max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10 space-y-10 lg:gap-12">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
                {
                    allCard.map(card => <CourseSIngleCard key={card.id} card={card}></CourseSIngleCard>)
                }
            </div>
        </div>
    );
};

export default CourseCard;