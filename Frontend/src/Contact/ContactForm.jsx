import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-20 bg-white">
      <form className="w-full max-w-xl p-6 border rounded-xl shadow-sm bg-white" onSubmit={handleSubmit(onSubmit)}>

        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border w-full p-3 rounded-lg outline-none"
            required
            {...register("fullName", { required: true })}
          />
          {errors.name && (
              <p className="text-red-500 text-xs">Email is required</p>
            )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            {...register("email", { required: true })}
            className="border w-full p-3 rounded-lg outline-none"
            required
          />
          {errors.email && (
              <p className="text-red-500 text-xs">Email is required</p>
            )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Type your message"
            rows="5"
            {...register("message", { required: true })}
            className="border w-full p-3 rounded-lg outline-none resize-none"
            required
          ></textarea>
          {errors.message && (
              <p className="text-red-500 text-xs">Email is required</p>
            )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
