import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div className="">
      <Helmet>
        <title>Menu</title>
      </Helmet>
    <Cover img={menuimg} height ={"600px"} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    <Cover img={menuimg} height ={"600px"} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    <Cover img={menuimg} height ={"600px"} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    <Cover img={menuimg} height ={"600px"} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
   
    </div>
  );
};

export default Menu;
