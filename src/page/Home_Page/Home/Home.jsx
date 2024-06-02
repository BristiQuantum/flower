import { FaFacebookSquare, FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
    <div className="home px-2 sm:px-8 md:px-32 pt-24 pb-5 flex justify-end items-end">
      <div className="flex items-center gap-2">
        <h6 className="header-title">Follow Us on </h6>

        <div className="flex items-center gap-2">
        <FaInstagram className="bg-[#8B1128] text-white text-3xl p-1 rounded-full transition-all ease-in-out hover:bg-transparent hover:text-[#8B1128] border-2 border-[#8B1128] duration-300 cursor-pointer"/>
          <FaFacebookSquare className="bg-[#8B1128] text-white text-3xl p-1 rounded-full transition-all ease-in-out hover:bg-transparent hover:text-[#8B1128] border-2 border-[#8B1128] duration-300 cursor-pointer"/>
        </div>
      </div>

    </div>
  );
};

export default Home;
