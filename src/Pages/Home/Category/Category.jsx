import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <div className="my-24">
        <div className="text-center w-1/4 mx-auto space-y-3 mb-4">
            <h3 className="text-lg"><i>---From 10:00am to 11:00pm---</i></h3>
            <hr />
            <h2 className="text-4xl font-semibold">ORDER ONLINE</h2>
            <hr />
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-gray-500 ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-gray-500">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-gray-500">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-gray-500">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-gray-500">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
