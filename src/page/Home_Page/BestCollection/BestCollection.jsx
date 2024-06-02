import c1 from "../../../assets/collection/c1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BestCollection = () => {
  const getBreakpoints = () => {
    return {
      640: {
        slidesPerView: 2, // 2 slides per view on screens >= 640px
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // 3 slides per view on screens >= 1024px
        spaceBetween: 30,
      },
    };
  };

  return (
    <div className="py-24 px-32">
      <div className="flex items-center justify-between">
        <h2>Best Collection</h2>

        <button className="btn-not-fill">All Collection</button>
      </div>

      <div className="">
        <Swiper
          slidesPerView={getBreakpoints()}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>

              <div className="badge-best">
                <p>BEST</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>

              <div className="badge-new">
                <p>NEW</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>

              <div className="badge-best">
                <p>BEST</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>

              <div className="badge-new">
                <p>NEW</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-2xl w-fit p-9 relative ">
              <div className="w-52 h-72 mb-5">
                <img src={c1} alt="" />
              </div>

              <div className="text-center">
                <h3>Tulip Flower Boki</h3>
                <h4>Tulip Flower</h4>
                <p className="font-bold">$60.8</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestCollection;
