import { CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import r from '../../../assets/grafix/hg2.png'

const Footer = () => {
  return (
    <div className="bg-[#fae5e6] py-10 footer-bg">
      <footer className="footer-content">
        <aside>
          <h3>Contact Us</h3>
          <a className="f1-container">
            <IoLocationOutline className="f1-container-icon" />{" "}
            <span>Mirpur 12, Dhaka 1212</span>
          </a>
          <a className="f1-container">
            <HiOutlinePhoneMissedCall className="f1-container-icon" />{" "}
            <span>+99 21542 856</span>
          </a>
          <a className="f1-container">
            <CiMail className="f1-container-icon" />{" "}
            <span>example@gmail.com</span>
          </a>

          <div className="f-social-container">
            <FaInstagram className="social-icon" />
            <FaFacebookSquare className="social-icon" />
          </div>
        </aside>
        <nav>
          <h3>Our Ethics</h3>
          <a className="fotter-links">Our mission</a>
          <a className="fotter-links">The green house</a>
          <a className="fotter-links">Charity partners</a>
          <a className="fotter-links">Closed loop system</a>
          <a className="fotter-links">Sustainability report</a>
          <a className="fotter-links">Satisfaction Guarantee</a>
        </nav>
        <nav>
          <h3>Speak to the team - 020 8001 0122</h3>
          <a className="fotter-links">About us</a>
          <a className="fotter-links">Help</a>
          <a className="fotter-links">Delivery Information</a>
          <a className="fotter-links">FAQs</a>
          <a className="fotter-links">Customer Reviews</a>
          <a className="fotter-links">Terms & Conditions</a>
          <a className="fotter-links">Privacy Policy</a>
          <a className="fotter-links">
            Environmental & Ethical Trading Policy
          </a>
          <a className="fotter-links">Modern Slavery Statement</a>
        </nav>
        <nav className="w-full">
          <h3>Gallery</h3>
          <div className="footer-gallery">
            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>

            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1554486840-db3a33d9318e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>
            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1590119977523-5af0d80c559f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1604391659919-0cb8c6bb0966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
            <div className="f-gallery-container">
              <img
                className="f-gallery-img"
                src="https://images.unsplash.com/photo-1469317835793-6d02c2392778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjB8fHxlbnwwfHx8fHw%3D"
                alt="image"
              />
            </div>
          </div>
        </nav>
      </footer>
      <h4 className="copyrighr">
        Copyright © 2006 - 2024 Bristi Online Ltd. All Rights Reserved. Bristi
        Online ltd, Flowers HQ, Mirpur 12, Dhaka 1212
      </h4>

      <img src={r} alt="" className="f-grafix-1"/>
      <img src={r} alt="" className="f-grafix-2"/>
      <img src={r} alt="" className="f-grafix-3"/>
      <img src={r} alt="" className="f-grafix-4"/>
    </div>
  );
};

export default Footer;
