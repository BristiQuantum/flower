/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from 'react-icons/fa';
import img1 from '../../assets/collection/tr.png'
import img2 from '../../assets/all_flowers/1.jpg'
import g5 from '../../assets/grafix/hg5.png'
import g6 from '../../assets/grafix/hg6.png'
import { useNavigate } from 'react-router-dom';

const NavCart = ({setCart}) => {
    const navigate = useNavigate()

    const clearCart = () => {
        navigate("/cart")
        setCart(false)
    }
    return (
        <div className="navcart">
            <h2 className="nav-cart-title">This is your cart</h2>

            <div className="space-y-12 mt-12">


                {/* cart content 
                ------------------------ */}
                <div onClick={clearCart} className="cart-container ">
                    <img src={img1} alt="" className='w-28 h-20 object-contain' />
                    <div className="self-start">
                        <h3>Tuilip Rose </h3>
                        <p>$56</p>
                    </div>
                    <div className="nav-cart-icon">
                        <FaMinus className='text-xs' />
                        <h3 className='nav-cart-q'>2</h3>
                        <FaPlus className='text-xs' />
                    </div>
                </div>
                <div onClick={clearCart} className="cart-container">
                    <img src={img2} alt="" className='w-28 h-20 object-contain' />
                    <div className="self-start">
                        <h3>Flower Title </h3>
                        <p>$65</p>
                    </div>
                    <div className="nav-cart-icon">
                        <FaMinus className='text-xs' />
                        <h3 className='nav-cart-q'>3</h3>
                        <FaPlus className='text-xs' />
                    </div>
                </div>

            </div>

            <div className="w-full text-right mt-12 pr-5 sm:pr-0">
                <button onClick={clearCart} className="btn-not-fill ">Chectout Now</button>
            </div>

            <img src={g5} alt="" className='w-16 h-16 absolute top-2 left-5 object-contain'/>
            <img src={g6} alt="" className='w-12 h-12 absolute bottom-3 left-3'/>
        </div>
    );
};

export default NavCart;