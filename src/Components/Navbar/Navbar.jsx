import { CircleUser, CircleUserRound } from 'lucide-react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/Logo.jpg'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';


const Navbar = () => {

  

  const {user,logout} = use(AuthContext)

  const handleLogout = () => {
    logout()
    .then((res) => {
      console.log(res)
      toast('Logout Successful')
    })
    .catch(err => {
      console.log(err)
    })
  }

    const links = <>

        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/my-profile"}>My Profile</NavLink></li>
    
    </>
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link className='flex items-center gap-2' to={"/"}>
    <img className='h-[40px] w-[40px]' src={logo} alt="" />
    <p className='font-medium text-[20px]'>WarmPaws</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-1">
    {
      user? <img className='h-[40px] w-[40px] rounded-full' src={user.photoURL} alt="" /> : <CircleUserRound className='mr-0 md:mr-2' size={40}></CircleUserRound>
    
    }
    
    {
  user ? (
    <>
      <ToastContainer />
      <button onClick={handleLogout} className="btn bg-[#F2994A] text-white">
        Logout
      </button>
    </>
  ) : (
    <Link to={"/auth/login"} className="btn bg-[#F2994A] text-white">
      Login
    </Link>
  )
}
   
  </div>
</div>
    );
};

export default Navbar;