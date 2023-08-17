import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularMenu = data.filter((item) => item.category === "popular");
        setMenu(PopularMenu);
      });
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto mb-32">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">

        {
            menu.map(item=> <MenuItem key={item._id} item={item}>
            </MenuItem>)
        }
      </div>
      <div className="flex justify-center mt-14">
    <button className="btn btn-outline w-1/5 text-black border-0 border-b-2 rounded-lg border-black">
      View Full Menu
    </button>
  </div>
    </section>
  );
};

export default PopularMenu;
