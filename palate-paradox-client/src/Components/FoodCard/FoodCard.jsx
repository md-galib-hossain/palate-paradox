import { Link } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item

  return (
   
      <div className="card max-w-sm bg-base-100 rounded-none shadow-xl">
        <figure>
          <img
            src={image}
            alt="Food"
          />
        </figure>
        <p className="bg-slate-900 absolute right-0 mr-4 mt-4 text-white py-2 px-4">${price}</p>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Link>
          <button className="btn btn-outline text-black bg-slate-100 border-0 border-b-2 rounded-lg border-black">
      Add to cart
    </button>
    </Link>
          </div>
        </div>
      </div>

  );
};

export default FoodCard;
