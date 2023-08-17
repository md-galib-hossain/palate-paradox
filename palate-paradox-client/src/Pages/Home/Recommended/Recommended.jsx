import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "./../../../assets/home/featured.jpg"

const Recommended = () => {

    const cardInfo = [
{
    img:img1,
    name:"Caeser Salad",
    details:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
},
{
    img:img1,
    name:"Caeser Salad",
    details:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
},
{
    img:img1,
    name:"Caeser Salad",
    details:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
}

    ]
  return (
    <section className="max-w-screen-xl mx-auto mb-24">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="flex flex-row place-content-between">
       
{
    cardInfo.map(card=>  <div className="card w-80 glass rounded-none mx-auto">
    <figure>
      <img
        src={card.img}
        alt="Food"
      />
    </figure>
    <div className="card-body mx-auto bg-slate-100 text-center gap-0">
      <h2 className="text-2xl font-medium">{card.name}</h2>
      <p>{card.details}</p>
      <div className="mt-4 card-actions justify-center">
        <button className="btn btn-primary w-3/5 border-none uppercase hover:bg-neutral bg-slate-300 text-yellow-600">Add to cart </button>
      </div>
    </div>
  </div>)
}
      </div>
    </section>
  );
};

export default Recommended;