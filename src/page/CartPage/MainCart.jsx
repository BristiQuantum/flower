
import img1 from '../../assets/collection/tr.png'
import img2 from '../../assets/all_flowers/1.jpg'
import { RxCross2 } from "react-icons/rx";

const MainCart = () => {
    return (
        <div className='cart'>

            <div className="border-b pb-2 ">
                <h2>Shoping Cart :</h2>
            </div>



            <div className="cart-flex">
                {/* cart table 
                ------------------------- */}
                <div className=" xl:mx-10  md:w-1/2 xl:w-full">
                    <table className="block sm:table ">
                        {/* head */}
                        <thead className=' text-[10px] sm:text-sm font-bold '>
                            <tr className='cart-tr'>
                                <th></th>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Suntotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='cart-tr'>
                                <td>
                                    <RxCross2 className='text-[#8B1128] sm:text-xl' />
                                </td>
                                <td>
                                    <div className="w-10 h-16 sm:w-28 sm:h-20 ">
                                        <img src={img1} alt="" className='object-contain' />
                                    </div>
                                </td>
                                <td>
                                    <h3 className='cart-title'>Tuilip Rose </h3>
                                </td>
                                <td>
                                    <p className='cart-text'>$56</p>
                                </td>
                                <td>
                                    <p className='cart-q'>2</p>
                                </td>
                                <td>
                                    <p className='cart-text'>$112</p>
                                </td>
                            </tr>


                            {/* row 2 */}
                            <tr className='flex gap-4 items-center justify-end'>
                                <td>
                                    <RxCross2 className='text-[#8B1128] sm:text-xl' />
                                </td>
                                <td>
                                    <div className="w-10 h-16 sm:w-28 sm:h-20 ">
                                        <img src={img2} alt="" className='object-contain' />
                                    </div>
                                </td>
                                <td>
                                    <h3 className='cart-title'>Flower Title </h3>
                                </td>
                                <td>
                                    <p className='cart-text'>$65</p>
                                </td>
                                <td>
                                    <p className='cart-q'>3</p>
                                </td>
                                <td>
                                    <p className='cart-text'>$95</p>
                                </td>
                            </tr>

                        </tbody>


                    </table>
                </div>

                <div className="cart-devider"></div>

                {/* checkout option 
                -------------------- */}
                <div className="xl:mx-10 md:w-3/4 xl:w-full">
                    <h2 className='cart-total'>Cart Total</h2>

                    <div className="sub">
                        <h3>Subtotal</h3>
                        <p className='font-bold'>$307</p>
                    </div>

                    <div className="shipping">
                        <h3>Shipping</h3>

                        <div className="shipping-content">
                            <div className="shipping-raio">
                                <span>Free shippping</span>
                                <input type="radio" name="radio" id="" checked />
                            </div>
                            <div className="shipping-raio">
                                <span>Flat rate: $10</span>
                                <input type="radio" name="radio" id="" />
                            </div>
                            <div className="shipping-raio">
                                <span>Pickup: $15</span>
                                <input type="radio" name="radio" id="" />
                            </div>

                            <p className='py-2 font-light text-right'>Shipping option will be updated during checkout</p>
                            <p className='calculate'>calculate shipping</p>
                        </div>
                    </div>


                    <div className="py-4 flex justify-between">
                        <h3>Total</h3>
                        <p className='font-bold'>$332</p>


                    </div>

                    <div className="cart-button">
                        <button className="btn-fill w-full "> Process To Chectout</button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default MainCart;