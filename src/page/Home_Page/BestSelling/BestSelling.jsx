

import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/all_flowers/1.jpg'
import img2 from '../../../assets/all_flowers/2.jpeg'
import img3 from '../../../assets/all_flowers/3.jpg'
import img4 from '../../../assets/all_flowers/4.jpeg'
const BestSelling = () => {
    const navigate = useNavigate()

    const goToFlower = () => {
        navigate("/all-flower")
    }
    return (
        <div className="best-selling">
            <div className=" ">
                <h2>Best Selling Flowers</h2>

                <button onClick={goToFlower} className="btn-not-fill">All Flowers</button>
            </div>


            {/* img slider 
            --------------- */}
            <div className="selling-slider">

           
                <div onClick={goToFlower} className="selling-slider-container">
                    <div className="s-img-box">
                        <img src={img1} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3> Flower Title</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div onClick={goToFlower} className="selling-slider-container">
                    <div className="s-img-box">
                        <img src={img2} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3> Flower Title</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div onClick={goToFlower} className="selling-slider-container">
                    <div className="s-img-box">
                        <img src={img3} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3> Flower Title</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div onClick={goToFlower} className="selling-slider-container">
                    <div className="s-img-box">
                        <img src={img4} alt="" className='rounded-md w-full h-full'/>
                    </div>

                    <div className="text-center">
                        <h3> Flower Title</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestSelling;