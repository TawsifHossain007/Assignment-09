import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
          />
          {/* PhotoURL */}
          <label className="label">Photo URL</label>
          <input
            name="PhotoURL"
            type="text"
            className="input"
            placeholder="Photo URL"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <p className="text-[15px] text-center mt-2">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-[#F2994A]">Login</Link>
          </p>
        </fieldset>
      </div>
    </div>
    );
};

export default Register;