import { FaMinus, FaPlus } from 'react-icons/fa';
import img1 from '../../assets/collection/tr.png'
import img2 from '../../assets/all_flowers/1.jpg'
import g5 from '../../assets/grafix/hg5.png'
import g6 from '../../assets/grafix/hg6.png'

const NavCart = () => {
    return (
        <div className=" px-1 sm:px-9 pb-5 pt-10 border-b-8 border-b-[#911C32] border-l-8 border-l-[#911C32] rounded-bl-3xl bg-[#fef2f2]">
            <h2 className="border-b-2 pb-1 text-center">This is your cart</h2>

            <div className="space-y-12 mt-12">

                <div className="flex gap-5 py-3 items-center sm:px-9 shadow-md rounded-2xl ">
                    <img src={img1} alt="" className='w-28 h-20 object-contain' />
                    <div className="self-start">
                        <h3>Tuilip Rose </h3>
                        <p>$56</p>
                    </div>
                    <div className="  h-fit w-fit  flex items-center gap-2 self-start">
                        <FaMinus className='text-xs' />
                        <h3 className='text-lg border-2 px-3 border-[#911C32]'>2</h3>
                        <FaPlus className='text-xs' />
                    </div>
                </div>
                <div className="flex gap-5 py-3 items-center sm:px-9 shadow-md rounded-2xl ">
                    <img src={img2} alt="" className='w-28 h-20 object-contain' />
                    <div className="self-start">
                        <h3>Flower Title </h3>
                        <p>$65</p>
                    </div>
                    <div className="  h-fit w-fit self-start  flex items-center gap-2">
                        <FaMinus className='text-xs' />
                        <h3 className='text-lg border-2 px-3 border-[#911C32]'>2</h3>
                        <FaPlus className='text-xs' />
                    </div>
                </div>

            </div>

            <div className="w-full text-right mt-12 pr-5 sm:pr-0">
                <button className="btn-not-fill ">Chectout Now</button>
            </div>

            <img src={g5} alt="" className='w-16 h-16 absolute top-2 left-5 object-contain'/>
            <img src={g6} alt="" className='w-12 h-12 absolute bottom-3 left-3'/>
        </div>
    );
};

export default NavCart;