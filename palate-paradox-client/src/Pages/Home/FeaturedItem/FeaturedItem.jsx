import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./FeaturedItem.css";
import img1 from "./../../../assets/home/featured.jpg";
const FeaturedItem = () => {
  return (
    <section className="featurebg bg-cover bg-fixed bg-center text-white pb-14 pt-8 md:px-32 flex items-center relative mb-24">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="w-3/4 mx-auto z-10">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="md:flex flex-row justify-center items-center">
          {/* left side div */}
          <div className="w-fit">
            <img className="" src={img1} alt="" />
          </div>
          {/* right side div */}
          <div className="flex flex-col md:ml-10 my-4 text-white">
            <p className="text-xl"> March,2023</p>
            <h3 className="text-2xl uppercase">Where can i get some ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nulla eaque, esse, id odit voluptates ducimus alias voluptatum
              hic.
            </p>

            <button className="btn btn-outline w-2/5 mt-8 text-white border-0 border-b-2 rounded-lg border-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
