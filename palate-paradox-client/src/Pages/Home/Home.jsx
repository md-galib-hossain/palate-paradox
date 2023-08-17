import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import ImageBox from './ImageBox/ImageBox'
import PopularMenu from './PopularMenu/PopularMenu'
import CallusSection from './CallusSection/CallusSection'
import Recommended from './Recommended/Recommended'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ImageBox></ImageBox>
      <PopularMenu></PopularMenu>
      <CallusSection></CallusSection>
      <Recommended></Recommended>
    </div>
  )
}

export default Home