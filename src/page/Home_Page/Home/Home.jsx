import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Home = () => {
    return (
        <div className="home px-32 py-24 flex justify-end items-end">

            <div className="">
                <h6>Follow Us on </h6>

                <div className="">
                <GrInstagram />
                <FaFacebookSquare />
                </div>
            </div>
            
        </div>
    );
};

export default Home;