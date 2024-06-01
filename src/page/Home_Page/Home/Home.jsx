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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vero
        veniam iste molestias vitae. Cupiditate, iste inventore placeat
        perspiciatis dolor sapiente, nihil est dolore temporibus voluptates
        magnam? Alias, ex illum? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nisi eum mollitia, atque sapiente alias blanditiis.
        Sapiente sit aut dicta facilis eum nemo aperiam, nisi pariatur, nam,
        sunt ad a assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Dignissimos adipisci, quaerat mollitia sit magnam enim eos nobis,
        omnis magni repudiandae quisquam quod sapiente accusantium odit beatae,
        ratione consectetur deserunt possimus!
      </p>
    </div>
  );
};

export default Home;
