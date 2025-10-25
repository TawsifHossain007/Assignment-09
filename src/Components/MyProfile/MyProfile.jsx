import React, { use } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';

const MyProfile = () => {
  const {user,logout} = use(AuthContext)
  console.log(user)
    return (
        <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-10"
    >
      <div>
        {
  user ? (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 relative">
  <div className="flex flex-col items-center text-center">
    <img
      src={user.photoURL}
      alt={user.displayName}
      className="w-24 h-24 rounded-full border-4 border-[#F2994A] shadow-md"
    />
    <h2 className="text-2xl font-bold mt-4">{user.displayName}</h2>
    <p className="text-gray-500">{user.email}</p>

    <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full mt-3">
      {user.emailVerified ? "Verified Account" : "Unverified"}
    </span>
  </div>
      <div className="flex justify-center gap-4 mt-6">
  <Link to={"/auth/edit-profile"} className="btn btn-outline btn-warning">Edit Profile</Link>
  <button onClick={logout} className="btn btn-error text-white">Logout</button>
</div>
</div>
</motion.div>
  ) : (
    <div className="flex items-center justify-center min-h-screen text-center">
      <h1 className="font-bold text-5xl">
        Please{" "}
        <span className="text-[#F2994A]">
          <Link
            to="/auth/login"
            className="underline hover:text-[#d88337] transition font-semibold"
          >
            Login
          </Link>
          /
          <Link
            to="/auth/register"
            className="underline hover:text-[#d88337] transition font-semibold"
          >
            Register
          </Link>
        </span>{" "}
        first
      </h1>
    </div>
    
  )
}

      </div>
      
    </motion.div>
    );
};

export default MyProfile;