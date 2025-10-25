import React, { use, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ForgotPass = () => {

    const {handleForgetPassword} = use(AuthContext)
    const emailRef = useRef()
    const location = useLocation()

      useEffect(() => {
    if (location.state?.email && emailRef.current) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

    const forgetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();

    if (!email) {
      return;
    }

    handleForgetPassword(email);
  };

  return (
    <div className="flex items-center justify-center  w-11/12">
      <div className="bg-[#f6b076] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Forgot Password
        </h2>

        <form className="space-y-4">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              required
              name="email"
              ref={emailRef}
              type="email"
              className="input input-bordered w-full text-black focus:border-[#F2994A] focus:ring-[#F2994A]"
              placeholder="Enter your email"
            />

            <Link to={""}>
            <button
              type="submit"
              onClick={forgetPass}
              className="btn bg-[#F2994A] hover:bg-[#e68930] text-white w-full mt-4"
            >
              Reset Password
            </button>
            </Link>

            
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
