import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import ImageBox from './ImageBox/ImageBox'
import PopularMenu from './PopularMenu/PopularMenu'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ImageBox></ImageBox>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Home