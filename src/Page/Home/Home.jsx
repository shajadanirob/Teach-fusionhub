import Catagory from "../../component/Catagory/Catagory";
import Discount from "../../component/Discount/Discount";
import Banner from "../../component/Header/Banner";
import Services from "../../component/Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Services></Services>
            <Discount></Discount>
        </div>
    );
};

export default Home;