import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { signIn, handleGoogleSignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast("Login Successful");

        navigate(location.state ? location.state : "/");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        setError(err.code);
      });
  };

    const handleForgotPassword = () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput?.value.trim();

    if (!email) {
      return;
    }

    navigate("/auth/forgot-password", { state: { email } });
  };

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(() => {
        toast("Logged in with Google");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.code);
      });
  };

  return (
    <div className="card bg-[#f6b076] w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center font-semibold text-[25px] text-white pt-4">Please Login</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            required
            name="email"
            type="email"
            className="input text-black"
            placeholder="Email"
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            required
            name="password"
            type="password"
            className="input text-black"
            placeholder="Password"
          />

          <div>
            <button onClick={handleForgotPassword} className="link link-hover">Forgot password?</button>
          </div>

          {error && <p className="text-red-600 font-medium">!!! {error}</p>}

          <button
            type="submit"
            className="btn bg-[#F2994A] hover:bg-[#E47E25] text-white mt-4"
          >
            Login
          </button>
          <p className="text-center font-medium text-[15px]">Or</p>

          {/* Google Sign-In */}
          <button
            onClick={handleGoogle}
            type="button"
            className="btn border border-blue-200 bg-white hover:bg-gray-200 text-black"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-[15px] text-center mt-2 font-medium">
            Don’t have an account?
            <Link to={"/auth/register"} className="text-white ml-1">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
