import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/"}>CONTACT US</Link>
      </li>
      <li>
        <Link to={"/"}>DASHBOARD</Link>
      </li>
      <li>
        <Link to={"/menu"}>OUR MENU</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>ORDER</Link>
      </li>
      <li>
        <Link to={"/login"}>LOGIN</Link>
      </li>
      <li>
        <Link to={"/register"}>SIGN UP</Link>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {
        console.error(error);
      })
  }

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
            <a onClick={handleSignOut}  className="btn mr-4">Sign Out</a>
            <button className="btn">{user.email}</button>
          </>
        ) : (
          <Link to={"/login"}>
            <a className="btn">Sign In</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
