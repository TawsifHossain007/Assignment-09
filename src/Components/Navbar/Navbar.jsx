import { CircleUserRound } from "lucide-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Logout Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-2" to={"/"}>
          <img className="h-[40px] w-[40px]" src="https://i.ibb.co.com/YBHwPscL/Logo.jpg" alt="" />
          <p className="font-medium text-[20px] hidden md:block">WarmPaws</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {user && (
          <div className="relative flex flex-col items-center group">
            <img
              className="h-[40px] w-[40px] rounded-full cursor-pointer"
              src={user.photoURL}
              alt=""
            />
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2
                             bg-gray-800 text-white text-[18px] font-medium rounded px-2 py-1
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             whitespace-nowrap z-50 ">
              {user.displayName}
            </span>
          </div>
        ) 
          
        }

        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="btn bg-[#F2994A] text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link to={"/auth/login"} className="btn bg-[#F2994A] text-white">
            Login
          </Link>
          <Link to={"/auth/register"} className="btn bg-[#F2994A] text-white">
            Register
          </Link>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
