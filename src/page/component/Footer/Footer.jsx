import { CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#fae5e6] py-10">
      <footer className="footer px-8 bg-[#fae5e6] text-base-content">
        <aside>
          <h3>Contact Us</h3>
          <a className="link link-hover flex items-center gap-1 mt-2">
            <IoLocationOutline className="text-[#f1adb0] text-lg" />{" "}
            <span>Mirpur 12, Dhaka 1212</span>
          </a>
          <a className="link link-hover flex items-center gap-1 mt-1">
            <HiOutlinePhoneMissedCall className="text-[#f1adb0] text-base" />{" "}
            <span>+99 21542 856</span>
          </a>
          <a className="link link-hover flex items-center gap-1 mt-1">
            <CiMail className="text-[#f1adb0] text-base" />{" "}
            <span>example@gmail.com</span>
          </a>

          <div className="flex items-center gap-2 mt-2">
            <FaInstagram className="bg-[#8B1128] text-white text-3xl p-1 rounded-full transition-all ease-in-out hover:bg-transparent hover:text-[#8B1128] border-2 border-[#8B1128] duration-300 cursor-pointer" />
            <FaFacebookSquare className="bg-[#8B1128] text-white text-3xl p-1 rounded-full transition-all ease-in-out hover:bg-transparent hover:text-[#8B1128] border-2 border-[#8B1128] duration-300 cursor-pointer" />
          </div>
        </aside>
        <nav>
          <h3>Our Ethics</h3>
          <a className="link link-hover">Our mission</a>
          <a className="link link-hover">The green house</a>
          <a className="link link-hover">Charity partners</a>
          <a className="link link-hover">Closed loop system</a>
          <a className="link link-hover">Sustainability report</a>
          <a className="link link-hover">Satisfaction Guarantee</a>
        </nav>
        <nav>
          <h3>Speak to the team - 020 8001 0122</h3>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Delivery Information</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Customer Reviews</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">
            Environmental & Ethical Trading Policy
          </a>
          <a className="link link-hover">Modern Slavery Statement</a>
        </nav>
        <nav className="w-full">
          <h3>Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full md:w-fit">
            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>

            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover object-center cu transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1554486840-db3a33d9318e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>
            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover object-center cu transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1590119977523-5af0d80c559f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover object-center cu transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover object-center cu transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1604391659919-0cb8c6bb0966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="w-full h-32 md:w-20 md:h-20  overflow-hidden">
              <img
                className="w-full h-full object-cover object-center cu transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                src="https://images.unsplash.com/photo-1469317835793-6d02c2392778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjB8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
          </div>
        </nav>
      </footer>
      <h4 className="text-center mt-6 pt-6 border-t border-[#8B1128] px-4 md:px-0">
        Copyright © 2006 - 2024 Bristi Online Ltd. All Rights Reserved. Bristi
        Online ltd, Flowers HQ, Mirpur 12, Dhaka 1212
      </h4>
    </div>
  );
};

export default Footer;
