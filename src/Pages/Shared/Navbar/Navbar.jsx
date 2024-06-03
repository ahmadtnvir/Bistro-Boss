import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../state/useCart";

const Navbar = () => {
  const [cart] = useCart();
  const links = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/"}>CONTACT US</Link>
      </li>
      <li>
        <Link to={"/menu"}>OUR MENU</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>ORDER</Link>
      </li>
      <li>
        <Link className="indicator mt-1" to={"/dashboard/cart"}>
          <span className="indicator-item badge badge-info badge-xs -mr-2">
            +{cart.length}
          </span>
          <MdShoppingCart />
        </Link>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-black text-white z-10 bg-opacity-30 max-w-[90%] md:max-w-[90%] lg:max-w-6xl fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">
          Bistro Boss <br /> Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <a onClick={handleSignOut} className="btn mr-4">
              Sign Out
            </a>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <a className="btn mr-4">Sign In</a>
            </Link>
            <Link to={"/register"}>
              <a className="btn">Sign Up</a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
