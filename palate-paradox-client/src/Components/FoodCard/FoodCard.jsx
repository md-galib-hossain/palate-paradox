import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart"

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart()
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    // if user & user;s email exist
    if (user && user.email) {
      // destructering the attributes for sending to backend
      const cartItem = {
        menuItemId: item._id,
        name,
        image,
        price,
        email: user.email,
      };
      // posting data to backend
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the numbers in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card max-w-sm bg-base-100 rounded-none shadow-xl">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="bg-slate-900 absolute right-0 mr-4 mt-4 text-white py-2 px-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <Link>
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline text-black bg-slate-100 border-0 border-b-2 rounded-lg border-black"
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
