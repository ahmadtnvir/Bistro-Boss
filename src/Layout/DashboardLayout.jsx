import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
            <h1 className="uppercase text-3xl font-bold mb-10">
              Bistro Boss
              <br />
              Restaurant
            </h1>
            {/* Sidebar content here */}
            <li>
              <a to={"/dashboard/userHome"}>
                <FaHome></FaHome>
                USER HOME
              </a>
            </li>
            <li>
              <a to={"/dashboard/reservation"}>
                <FaCalendar></FaCalendar>
                RESERVATION
              </a>
            </li>
            <li>
              <a to={"/dashboard/payment"}>
                <FaWallet></FaWallet>
                PAYMENT HISTORY
              </a>
            </li>
            <li>
              <a to={"/dashboard/cart"}>
                <FaShoppingCart></FaShoppingCart>
                MY CART
              </a>
            </li>
            <li>
              <a to={"/dashboard/review"}>
                <TbStarsFilled />
                ADD REVIEW
              </a>
            </li>
            <li>
              <a to={"/dashboard/booking"}>
                <GrValidate />
                MY BOOKING
              </a>
            </li>
            <div className="divider"></div>
            <li>
              <a href={"/"}>
                <FaHome></FaHome>
                HOME
              </a>
            </li>
            <li>
              <a href="/order/salad">
                <IoMenu />
                MENU
              </a>
            </li>
            <li>
              <a to={"/dashboard/userHome"}>
                <GiShoppingBag />
                SHOP
              </a>
            </li>
            <li>
              <a to={"/dashboard/userHome"}>
                <MdOutlineForwardToInbox />
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
