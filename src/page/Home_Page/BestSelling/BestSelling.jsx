

import img1 from '../../../assets/all_flowers/1.png'
const BestSelling = () => {
    return (
        <div className="best-selling px-2 lg:px-20 2xl:px-32 pt-52 md:pt-64 bg-[#F2DCDC] sm:-mt-44 ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 ">
                <h2>Best Selling Flowers</h2>

                <button className="btn-not-fill">All Flowers</button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8 mt-9">

                <div className="rounded-2xl w-fit p-6 relative shadow-sm transition-all ease-in-out hover:shadow-xl duration-300 mx-auto">
                    <div className="sm:w-36 md:w-52 h-60 md:h-64 mb-5">
                        <img src={img1} alt="" className='rounded-md w-full h-full mx-auto'/>
                    </div>

                    <div className="text-center">
                        <h3>Tulip Flower Boki</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="rounded-2xl w-fit p-6 relative shadow-sm transition-all ease-in-out hover:shadow-xl duration-300 mx-auto">
                    <div className="sm:w-36 md:w-52 h-60 md:h-64 mb-5">
                        <img src={img1} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3>Tulip Flower Boki</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="rounded-2xl w-fit p-6 relative shadow-sm transition-all ease-in-out hover:shadow-xl duration-300 mx-auto">
                    <div className="sm:w-36 md:w-52 h-60 md:h-64 mb-5">
                        <img src={img1} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3>Tulip Flower Boki</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="rounded-2xl w-fit p-6 relative shadow-sm transition-all ease-in-out hover:shadow-xl duration-300 mx-auto">
                    <div className="sm:w-36 md:w-52 h-60 md:h-64 mb-5">
                        <img src={img1} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3>Tulip Flower Boki</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="rounded-2xl w-fit p-6 relative shadow-sm transition-all ease-in-out hover:shadow-xl duration-300 mx-auto">
                    <div className="sm:w-36 md:w-52 h-60 md:h-64 mb-5">
                        <img src={img1} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3>Tulip Flower Boki</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestSelling;