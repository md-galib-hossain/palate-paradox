import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => [
    logOut()
      .then(() => {})
      .catch((error) => console.log(error)),
  ];
  const navOptions = (
    <>
      <li>
        <Link className="hover:text-yellow-400 " to="/secret">
          Secret
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400 " to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400" to="/menu">
          Our Menu
        </Link>
      </li>

      <li>
        <Link className="hover:text-yellow-400" to="/order/salad">
          Order
        </Link>
      </li>
      <li>
        <Link>
          <button className="btn">
            <FaShoppingCart/>
            <div className="badge badge-secondary">+0</div>
            
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <li>
          <Link className="hover:text-yellow-400" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-black bg-opacity-30 text-white fixed z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Palate Paradox</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex space-x-16 px-1 place-items-center">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
