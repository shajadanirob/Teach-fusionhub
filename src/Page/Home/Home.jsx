import Catagory from "../../component/Catagory/Catagory";
import Discount from "../../component/Discount/Discount";
import Banner from "../../component/Header/Banner";
import Instrector from "../../component/Instrector/Instrector";
import Services from "../../component/Services/Services";
import Testimonal from "../../component/Testimonal/Testimonal";
import WhyChoseus from "../../component/WhyChooseus/WhyChoseus";



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Catagory></Catagory>
            <Services></Services>
            <Discount></Discount>
            <Testimonal></Testimonal>
            <WhyChoseus></WhyChoseus>
            <Instrector></Instrector>
        </div>
    );
};

export default Home;