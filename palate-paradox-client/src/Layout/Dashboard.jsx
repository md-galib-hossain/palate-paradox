import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";

import { MdMenuBook } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load data from the server to have dynamic isAdmin based data
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden border-none bg-[#D1A054] hover:bg-black"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 gap-2 min-h-full text-black bg-[#D1A054]">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link>
                  <FaHome></FaHome>
                  Admin Home
                </Link>
              </li>
              <li>
                <Link>
                  <ImSpoonKnife></ImSpoonKnife>
                  Add Items
                </Link>
              </li>
            <li>
                <Link to="/dashboard/mycart" className="flex content-start">
                  <TfiMenuAlt></TfiMenuAlt>
                  Manage Items
                </Link>
              </li>
              <li>
                <Link>
                  <FaBook></FaBook>
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FaUser></FaUser>
                  All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
              <Link to="/dashboard/mycart" className="flex content-start">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                  <span className="badge badge-ghost">+{cart?.length || 0}</span>                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet>
                  Payment History
                </Link>
              </li>
              <li>
                <Link>
                  <FaCalendarAlt></FaCalendarAlt>
                  Reservation
                </Link>
              </li>
              <li>
                <Link>
                  <FaHome></FaHome>
                  User Home
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <MdMenuBook></MdMenuBook>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
              <TfiWrite></TfiWrite>
              Order
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
