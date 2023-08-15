import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide3.jpg";
import slide3 from "../../../assets/home/slide4.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  const slides = [
    { slideImg: slide1, slideCaption: "Salads" },
    { slideImg: slide2, slideCaption: "Soups" },
    { slideImg: slide3, slideCaption: "Pizzas" },
    { slideImg: slide4, slideCaption: "Deserts" },
    { slideImg: slide5, slideCaption: "Salads" },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
       
            <img src={slide?.slideImg} alt="" />
           
            <h3 className="text-4xl text-white text-center uppercase -mt-16 ">
              {slide?.slideCaption}
            </h3>
        
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
