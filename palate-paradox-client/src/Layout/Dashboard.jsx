import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
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
          <li className="flex items-start">
            <Link to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>

              My Cart<div className="badge badge-ghost">+{cart?.length || 0}</div>

            </Link>
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
