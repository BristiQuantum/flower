import About from "./About/About";
import BestColection from "./BestCollection/BestColection";
import BestSelling from "./BestSelling/BestSelling";
import Home from "./Home/Home";
import Subscribe from "./Subscribe/Subscribe";


const Home_Page = () => {
    return (
        <div className="">
            <Home></Home>
            <BestColection></BestColection>
            <About></About>
            <BestSelling></BestSelling>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home_Page;
