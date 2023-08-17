import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"

const Testimonial = () => {
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(response => response.json())
        .then(data=> setReviews(data))
    },[])
    console.log(reviews)
  return (
<section className="max-w-screen-xl mx-auto">
    <SectionTitle heading={"Testimonials"} subHeading={"What Our Clients Say"}>

    </SectionTitle>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     {
        reviews.map((review)=> <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center my-8 mx-24 text-center ">
            <Rating className="mb-10" style={{ maxWidth: 250 }} value={review.rating} readOnly />
                <FaQuoteLeft size={70} color="black"/>

<p className="my-10">{review.details}</p>
<h3 className="text-2xl text-orange-400">{review.name}</h3>
</div>
        </SwiperSlide>
        )
        
     }
      </Swiper>
</section>  )
}

export default Testimonial