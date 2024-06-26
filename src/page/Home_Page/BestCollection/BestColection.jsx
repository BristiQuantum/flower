
import tr from '../../../assets/collection/tr.png'
import r from '../../../assets/collection/r.png'
import sun from '../../../assets/collection/sun.png'
import t from '../../../assets/collection/t.png'
import wr from '../../../assets/collection/wr.png'
import m from '../../../assets/collection/m.png'
import bg from '../../../assets/grafix/hg5.png'
import tu from '../../../assets/grafix/tu.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const BestColection = () => {


    const getSlidesPerView = () => {
        const width = window.innerWidth;
        if (width < 450) {
            return 1;
        } else if (width >= 450 && width < 640) {
            return 2;
        } else if (width >= 640 && width < 786) {
            return 3;
        } else {
            return 3;
        }
    };


    return (
        <div className="best-collection">
            <div className="collection-title">
                <h2>Best Collection</h2>

                <button className="btn-not-fill">All Collection</button>
            </div>


            {/* flower slide 
            ------------------------ */}
            <div className="">

                <Swiper
                    slidesPerView={getSlidesPerView()}
                    spaceBetween={30}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"

                >

                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img ">
                                <img src={tr} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3>Tulip Rose Boki</h3>
                                <h4>Tulip & Rose</h4>
                                <p className='font-bold'>$60.8</p>
                            </div>

                            <div className="badge-best">
                                <p>BEST</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img">
                                <img src={t} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3>Tulip Flower Boki</h3>
                                <h4>Tulip Flower</h4>
                                <p className='font-bold'>$60.8</p>
                            </div>

                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img">
                                <img src={r} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3> Rose Flower Boki</h3>
                                <h4>Rose</h4>
                                <p className='font-bold'>$20.8</p>
                            </div>

                            <div className="badge-new">
                                <p>New</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img">
                                <img src={sun} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3>SunFlower Boki</h3>
                                <h4>SunFlower</h4>
                                <p className='font-bold'>$45.7</p>
                            </div>

                            <div className="badge-new">
                                <p>New</p>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img">
                                <img src={wr} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3>White Rose Boki</h3>
                                <h4>White Rose</h4>
                                <p className='font-bold'>$100.8</p>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-flower-card ">
                            <div className="c-flower-card-img">
                                <img src={m} alt="" className='object-contain'/>
                            </div>

                            <div className="text-center">
                                <h3>Mixed Flower Boki</h3>
                                <h4>Mixed Flower</h4>
                                <p className='font-bold'>$60.8</p>
                            </div>

                            <div className="badge-best">
                                <p>Best</p>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>

            <img src={bg} alt="" className='absolute w-20 h-20 right-0 top-0'/>
            <img src={tu} alt="" className='absolute w-28 h-28 right-0 bottom-0'/>

        </div>
    );
};

export default BestColection;