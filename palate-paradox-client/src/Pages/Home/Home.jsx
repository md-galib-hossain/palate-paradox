import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import ImageBox from './ImageBox/ImageBox'
import PopularMenu from './PopularMenu/PopularMenu'
import CallusSection from './CallusSection/CallusSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ImageBox></ImageBox>
      <PopularMenu></PopularMenu>
      <CallusSection></CallusSection>
    </div>
  )
}

export default Home