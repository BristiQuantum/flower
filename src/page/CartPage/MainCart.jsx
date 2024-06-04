
import img1 from '../../assets/collection/tr.png'
import img2 from '../../assets/all_flowers/1.jpg'
import { RxCross2 } from "react-icons/rx";

const MainCart = () => {
    return (
        <div className='px-2 md:px-16 lg:px-32 py-24 bg-[#EABABA]'>

            <div className="border-b pb-2 ">
                <h2>Shoping Cart :</h2>
            </div>



            <div className="flex flex-col xl:flex-row gap-7 xl:gap-0 mt-5 xl:mt-0">
                {/* cart table 
                ------------------------- */}
                <div className=" xl:mx-10  md:w-1/2 xl:w-full">
                    <table className="block sm:table ">
                        {/* head */}
                        <thead className=' text-[10px] sm:text-sm font-bold '>
                            <tr className='border-b-[#8B1128] flex gap-4 items-center justify-end  '>
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
                            <tr className='border-b-[#8B1128] flex gap-4 items-center sm:block'>
                                <td>
                                    <RxCross2 className='text-[#8B1128] sm:text-xl' />
                                </td>
                                <td>
                                    <div className="w-10 h-16 sm:w-28 sm:h-20 ">
                                        <img src={img1} alt="" className='object-contain' />
                                    </div>
                                </td>
                                <td>
                                    <h3 className='text-[#8B1128] text-xs sn:text-sm text-nowrap'>Tuilip Rose </h3>
                                </td>
                                <td>
                                    <p className='font-bold text-xs sm:text-base'>$56</p>
                                </td>
                                <td>
                                    <p className='font-bold border text-xs sm:text-base w-fit p-2 border-[#8B1128]'>2</p>
                                </td>
                                <td>
                                    <p className='font-bold text-xs sm:text-base'>$112</p>
                                </td>
                            </tr>


                            {/* row 2 */}
                            <tr className='border-b-[#8B1128] flex gap-4 items-center sm:block'>
                                <td>
                                    <RxCross2 className='text-[#8B1128] sm:text-xl' />
                                </td>
                                <td>
                                    <div className="w-10 h-16 sm:w-28 sm:h-20 ">
                                        <img src={img2} alt="" className='object-contain' />
                                    </div>
                                </td>
                                <td>
                                    <h3 className='text-[#8B1128] text-xs sn:text-sm  text-nowrap'>Flower Title </h3>
                                </td>
                                <td>
                                    <p className='font-bold text-xs sm:text-base'>$65</p>
                                </td>
                                <td>
                                    <p className='font-bold text-xs sm:text-base border w-fit p-2 border-[#8B1128]'>3</p>
                                </td>
                                <td>
                                    <p className='font-bold text-xs sm:text-base'>$95</p>
                                </td>
                            </tr>

                        </tbody>


                    </table>
                </div>

                <div className="divider lg:divider-horizontal hidden xl:block"></div>

                {/* checkout option 
                -------------------- */}
                <div className="xl:mx-10 md:w-3/4 xl:w-full">
                    <h2 className='py-4 border-b border-b-[#911C32] '>Cart Total</h2>

                    <div className="py-4 border-b border-b-[#911C32] flex justify-between">
                        <h3>Subtotal</h3>
                        <p className='font-bold'>$307</p>
                    </div>

                    <div className="py-4 border-b border-b-[#911C32] flex justify-between">
                        <h3>Shipping</h3>

                        <div className="flex flex-col items-end text-sm font-semibold">
                            <div className="flex  items-center gap-1">
                                <span>Free shippping</span>
                                <input type="radio" name="radio" id="" checked />
                            </div>
                            <div className="flex items-center gap-1">
                                <span>Flat rate: $10</span>
                                <input type="radio" name="radio" id="" />
                            </div>
                            <div className="flex items-center gap-1">
                                <span>Pickup: $15</span>
                                <input type="radio" name="radio" id="" />
                            </div>

                            <p className='py-2 font-light'>Shipping option will be updated during checkout</p>
                            <p className='border-b border-b-[#911C32] hover:text-[#911C32] pb-1'>calculate shipping</p>
                        </div>
                    </div>


                    <div className="py-4 flex justify-between">
                        <h3>Total</h3>
                        <p className='font-bold'>$332</p>


                    </div>

                    <div className="w-full text-right mt-12 pr-5 sm:pr-0">
                        <button className="btn-fill w-full "> Process To Chectout</button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default MainCart;