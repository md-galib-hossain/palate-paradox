import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "./../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "./../../assets/menu/pizza-bg.jpg"
import saladImg from "./../../assets/menu/salad-bg.jpg"
import soupImg from "./../../assets/menu/soup-bg.jpg"
const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
  return (
    <div className="">
      <Helmet>
        <title>Menu</title>
      </Helmet>
      {/* Menu */}
    <Cover img={menuimg} height ={"600px"} title="our menu"></Cover>
    {/* offered */}
   <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
   <MenuCategory items={offered}></MenuCategory>
   <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
   
    </div>
  );
};

export default Menu;
