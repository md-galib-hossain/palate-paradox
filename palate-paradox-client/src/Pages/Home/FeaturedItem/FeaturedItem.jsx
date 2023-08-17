import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./FeaturedItem.css";
import img1 from "./../../../assets/home/featured.jpg";
const FeaturedItem = () => {
  return (
    <section className="featurebg bg-center bg-cover">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="flex flex-row w-3/5">
        {/* left side div */}
        <div>
          <img src={img1} alt="" />
        </div>
        {/* right side div */}
        <div className="flex flex-col">
          <div>
            <p className="text-xl"> March,2023</p>
            <h3 className="text-2xl uppercase">Where can i get some?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nulla eaque, esse, id odit voluptates ducimus alias voluptatum
              hic.
            </p>
          </div>
          <div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
