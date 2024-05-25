import Button from "../../../Components/Button/Button";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";

const ItemCard = ({ item }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  const { image, price, name, recipe } = item;
  return (
    <>
      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      > */}
      {/* <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="" />
            </figure>
            {price && (
              <p className=" badge bg-slate-800 px-5 absolute right-0 text-white mr-6 mt-6 border-none">
                ${price}
              </p>
            )}
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{recipe}</p>
              <div className="card-actions">
                <Button text={"Add To Cart"}></Button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      {/* </Swiper> */}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        {price && (
          <p className=" badge bg-slate-800 px-5 absolute right-0 text-white mr-6 mt-6 border-none">
            ${price}
          </p>
        )}
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <Button text={"Add To Cart"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
