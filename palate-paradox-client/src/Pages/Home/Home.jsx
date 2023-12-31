import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import ImageBox from './ImageBox/ImageBox'
import PopularMenu from './PopularMenu/PopularMenu'
import CallusSection from './CallusSection/CallusSection'
import Recommended from './Recommended/Recommended'
import FeaturedItem from './FeaturedItem/FeaturedItem'
import Testimonial from './Testimonial/Testimonial'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ImageBox></ImageBox>
      <PopularMenu></PopularMenu>
      <CallusSection></CallusSection>
      <Recommended></Recommended>
      <FeaturedItem></FeaturedItem>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home