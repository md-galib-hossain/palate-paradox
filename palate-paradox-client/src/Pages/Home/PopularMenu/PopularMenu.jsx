import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const PopularMenu = data.filter(item=>
                item.category === "popular"
            )
            setMenu(PopularMenu)
        })

    },[])
    console.log(menu)
  return (
<section>
    <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
</section>  )
}

export default PopularMenu