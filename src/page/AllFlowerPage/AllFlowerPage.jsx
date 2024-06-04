import { IoIosArrowDown } from "react-icons/io";

import tr from '../../assets/collection/tr.png'
import img1 from '../../assets/all_flowers/1.jpg'
import img2 from '../../assets/collection/t.png'
import img3 from '../../assets/all_flowers/2.jpeg'
import img4 from '../../assets/all_flowers/3.jpg'
import img5 from '../../assets/collection/r.png'


const AllFlowerPage = () => {
    return (
        <div className="all-flower">

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flower-drawer">
                    {/* Page content here */}

                    <div className="">
                        <p className="text-sm text-gray-400">Home <span className="px-2">/</span> All Flower <span className="px-2">/</span> <span className="font-bold text-base ">Flower</span></p>
                    </div>

                    <div className="space-y-2 xl:pr-28">
                        <h2>Let&apos;s Checkout All Beautiful Flowers</h2>
                        <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem excepturi aut aspernatur quibusdam aliquid sapiente cum temporibus exercitationem laborum fugiat corrupti libero quo deleniti dolores quisquam eos! Velit quae vel cumque!</p>
                    </div>

                    {/* all flower container 
                        ------------------------------ */}
                    <div className="w-full">
                        <h3 className="tranding"><span>Tranding</span> <IoIosArrowDown /></h3>

                        <div className="flower-slider">

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={tr} alt="" className='object-contain' />
                                </div>

                                <div className="text-center">
                                    <h3>Tulip Rose Boki</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>

                                <div className="badge-best">
                                    <p>BEST</p>
                                </div>
                            </div>

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={img1} alt="" className='object-contain sm:object-cover' />
                                </div>

                                <div className="text-center">
                                    <h3>Flower Title Here</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>
                            </div>

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={img2} alt="" className='object-contain sm:object-cover' />
                                </div>

                                <div className="text-center">
                                    <h3>Flower Title Here</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>

                                <div className="badge-sell">
                                    <p>SELL</p>
                                </div>

                            </div>

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={img3} alt="" className='object-contain sm:object-cover' />
                                </div>

                                <div className="text-center">
                                    <h3>Flower Title Here</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>

                                <div className="badge-new">
                                    <p>NEW</p>
                                </div>
                            </div>

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={img4} alt="" className='object-contain sm:object-cover' />
                                </div>

                                <div className="text-center">
                                    <h3>Flower Title Here</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>

                                <div className="badge-best">
                                    <p>BEST</p>
                                </div>
                            </div>

                            <div className="flower-container">
                                <div className="img-container">
                                    <img src={img5} alt="" className='object-contain sm:object-cover' />
                                </div>

                                <div className="text-center">
                                    <h3>Flower Title Here</h3>
                                    <p className='font-bold'>$60.8</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="pagination-container">
                        <div className="join ">
                            <input className="padination-btn bg-[#911C32]" type="radio" name="options" aria-label="1" />
                            <input className="padination-btn" type="radio" name="options" aria-label="2" />
                            <input className="padination-btn" type="radio" name="options" aria-label="3" />
                            <input className="padination-btn" type="radio" name="options" aria-label="4" />
                        </div>
                    </div>




                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="sidebar-container">
                        {/* Sidebar content here */}

                        <div><h3>Filter Flower</h3></div>

                        {/* color  */}
                        <div className="">
                            <h3 className="text-sm">Choose Color :</h3>

                            <div className="sidebar-content">
                                <div className="form-control">
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Red</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Pink</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">White</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Mixed</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Sort  */}
                        <div className="">
                            <h3 className="text-sm">Sort :</h3>

                            <div className="sidebar-content">
                                <div className="form-control ">
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Flowers</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Boki</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Name  */}
                        <div className="">
                            <h3 className="text-sm">Flower Name :</h3>

                            <div className="sidebar-content">
                                <div className="form-control">
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Tuilip</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Rose</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">SunFlower</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Mixed Flower</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">White Rose</span>
                                    </label>
                                    <label className="title-box">
                                        <input type="checkbox" defaultChecked className="chect-style" />
                                        <span className="subtitle-option">Poppy</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllFlowerPage;