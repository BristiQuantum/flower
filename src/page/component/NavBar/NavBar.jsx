import { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false)

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
      <li><Link to="/" className="pl-5 text-2xl lg:text-base py-5 transition-all ease-in-out hover:text-[#EC4899]">Home</Link></li>
      <li><Link to="/" className="pl-5 text-2xl lg:text-base py-5 transition-all ease-in-out hover:text-[#EC4899]">Flowers</Link></li>
      <li><Link to="/" className="pl-5 text-2xl lg:text-base py-5 transition-all ease-in-out hover:text-[#EC4899] block lg:hidden">Cart</Link></li>
    </>
  );

  return (
    <div id="navbar" className="navbar fixed top-0 z-50 w-full px-2 lg:px-16 2xl:px-20 bg-transparent text-[#911C32] transition-colors duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul onClick={() => setOpen(!open)} tabIndex={0} className={`menu h-72 bg-[#F6D1D3] menu-sm dropdown-content mt-3 z-[1] shadow rounded-box w-52 ${open ? 'block' : 'hidden'}`}>
            {navList}
          </ul>
        </div>

        <ul className="hidden lg:flex items-center">
          {navList}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <a className="font-extrabold text-xl logo">PetalPlay</a>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FaUser className="text-xl" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaShoppingCart className="text-xl" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
