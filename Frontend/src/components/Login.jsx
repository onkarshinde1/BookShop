import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:2411/user/login",
        userInfo
      );

      alert("Login Successfully ✅");

      // Save logged-in user
      localStorage.setItem("Users", JSON.stringify(res.data.user));

      // Close modal
      document.getElementById("my_modal_3").close();
    } catch (err) {
      if (err.response) {
        alert("Error : " + err.response.data.message);
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Close Button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-center">Login</h3>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="malik@gmail.com"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-[10px] text-red-600">
                  Email is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-[10px] text-red-600">
                  Password is required
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-3">
              <button
                type="submit"
                className="btn px-6 bg-pink-500 hover:bg-pink-600 border-none text-white"
              >
                Login
              </button>

              <p className="text-sm">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
 