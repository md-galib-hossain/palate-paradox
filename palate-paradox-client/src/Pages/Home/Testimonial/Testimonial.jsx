import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center my-8 mx-24 text-center ">
              <Rating
                className="mb-10"
                style={{ maxWidth: 250 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft size={70} color="black" />

              <p className="my-10">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
