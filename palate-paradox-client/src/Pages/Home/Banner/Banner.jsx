import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  const images = [img1, img2, img3,img4, img5, img6];
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={2000} infiniteLoop={true}
    >
      {images.map((img, i) => (
        <div key={i}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
