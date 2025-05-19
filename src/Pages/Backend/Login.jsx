import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { login } = use(AuthContext);
     const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);

    login(email,password)
    .then((userCredential) => {
        const user = userCredential.user;
    
        if (user && user.uid) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location = "/dashboard"; // Redirect after alert closes
          });
        }
      })
      .catch((error) => {
        console.error("Error Login account:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });

     }
    return (
        <>
            <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-coffee text-center mb-6">
            ☕ Join Coffee Club
          </h1>
          <form className="space-y-4" onSubmit={handlelogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-coffee">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@coffee.com"
                name="email"
                className="input bg-white input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-coffee">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••"
                name="password"
                className="input bg-white input-bordered input-primary w-full"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't Have an Account?{" "}
            <NavLink to="/register" className="text-coffee font-semibold hover:underline">
              Register here
            </NavLink>
          </p>
        </div>
      </div>  
        </>
    );
};

export default Login;