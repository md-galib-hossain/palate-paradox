import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

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
<section >
    <SectionTitle heading={"Testimonials"} subHeading={"What Our Clients Say"}>

    </SectionTitle>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     {
        reviews.map((review)=> <SwiperSlide key={review._id}>
            <div>
<p>{review.details}</p>
<h3 className="text-2xl text-orange-400">{review.name}</h3>
</div>
        </SwiperSlide>
        )
        
     }
      </Swiper>
</section>  )
}

export default Testimonial