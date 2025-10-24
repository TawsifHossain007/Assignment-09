import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const {createUser,setUser} = use(AuthContext)
        
    

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value


        createUser(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
            setUser(user)
            toast('Registration Successful')
             form.reset(); 
        }).catch(err => {
            console.log(err)
        });
    }

    return (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}  className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
          required
            name="name"
            type="text"
            className="input text-[#F2994A]"
            placeholder="Name"
          />
          {/* PhotoURL */}
          <label className="label">Photo URL</label>
          <input
          required
            name="PhotoURL"
            type="text"
            className="input text-[#F2994A]"
            placeholder="Photo URL"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
          required
            name="email"
            type="email"
            className="input text-[#F2994A]"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
          required
            name="password"
            type="password"
            className="input text-[#F2994A]"
            placeholder="Password"
          />
          <div>
          </div>
          <button type="submit" className="btn bg-[#F2994A] hover:bg-[#E47E25] text-white mt-4 ">
            Register
          </button>
          <ToastContainer></ToastContainer>
          <p className="text-[15px] text-center mt-2">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-[#F2994A]">Login</Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Register;