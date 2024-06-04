import { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavCart from "../../CartPage/NavCart";

const NavBar = () => {
  
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('bg-[#F6D1D3]', 'text-[#911C32]');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-[#F6D1D3]', 'text-[#911C32]');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navList = (
    <>
      <li><Link to="/" className="navbar-links">Home</Link></li>
      <li><Link to="/all-flower" className="navbar-links">All Flowers</Link></li>
      <li><Link to="/cart" className="navbar-links" >Cart</Link></li>
    </>
  );

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul onClick={() => setOpen(!open)} tabIndex={0} className={`menu-icon ${open ? 'block' : 'hidden'}`}>
            {navList}
          </ul>
        </div>

        <ul className="hidden lg:flex items-center">
          {navList}
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/" className="logo">PetalPlay</Link>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FaUser className="text-xl" />
        </button>
        <button onClick={() => setCart(!cart)} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaShoppingCart className="text-xl" />
          </div>
        </button>
      </div>


      {/* cart content  */}
      <div className={`absolute right-0 top-16 ${cart ? 'block' : 'hidden'}`}>
        <NavCart setCart={setCart}></NavCart>
      </div>
    </div>
  );
};

export default NavBar;
