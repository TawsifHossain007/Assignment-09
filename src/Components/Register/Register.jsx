import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, handleGoogleSignIn } =
    use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            toast("Registration Successful");
            form.reset();
            navigate("/");
          })
          .catch((err) => {
            setError(err.code);
            setUser(user);
          });
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(() => {
        toast.success("Logged in with Google");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.code);
      });
  };

  return (
    <div className="card bg-[#f6b076] w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center font-semibold text-[25px] pt-4 text-white">
        Please Register
      </h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input text-black"
            placeholder="Name"
          />
          <label className="label">Photo URL</label>
          <input
            required
            name="PhotoURL"
            type="text"
            className="input text-black"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            required
            name="email"
            type="email"
            className="input text-black"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            required
            name="password"
            type="password"
            className="input text-black"
            placeholder="Password"
          />
          <div>
            {error && <p className="text-red-600 font-medium">!!! {error}</p>}
          </div>
          <button
            type="submit"
            className="btn bg-[#F2994A] hover:bg-[#E47E25] text-white mt-4"
          >
            Register
          </button>
          <p className="text-[15px] text-center mt-2 font-medium">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-white">
              Login
            </Link>
          </p>

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
        </form>
      </div>
    </div>
  );
};

export default Register;
