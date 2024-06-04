import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Animation from "../../component/Animation/Animation";


const Home = () => {
  return (
    <div className="home">
      <div className="flex items-center gap-2">
        <h6 className="header-title">Follow Us on </h6>

        <div className="home-icon">
        <FaInstagram className="social-icon"/>
          <FaFacebookSquare className="social-icon"/>
        </div>
      </div>

      {/* background atttachment flowers  */}
      <Animation></Animation>
    </div>
  );
};

export default Home;
