import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:2411/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully...!!");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error : " + err.response.data.message);
        }
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="model-box relative bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={() => document.getElementById("my_model_3").close()}
          >
            ✕
          </Link>

          <h3 className="text-2xl font-semibold mb-6 text-center">
            Create Account
          </h3>

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              {...register("fullname", { required: true })}
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
            {errors.fullname && (
              <p className="text-red-500 text-xs">Full name is required</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="yourname@gmail.com"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="•••••••••"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">Password is required</p>
            )}
          </div>

          {/* Confirm Password */}
          {/* <div className="flex flex-col gap-1 mt-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder="•••••••••"
              className="input input-bordered w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                Confirm Password is required
              </p>
            )}
          </div> */}

          {/* Login redirect */}
          <p className="text-sm pt-2 text-center">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />
          </p>

          {/* Signup Button */}
          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 text-white border-none mt-3"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
