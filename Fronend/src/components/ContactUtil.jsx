import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Login from "./Login";

function ContactUtil() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="w-fit mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} method="">

        <h1 className="font-bold">Contact Us</h1>
        <div className="mt-4 space-y-2">
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("fullname", { required: true })}
          />
          <br />
          {errors.fullname && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>
        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>
        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Message</span>
          <br />
          <textarea
            rows="4"
            cols="50"
            placeholder="Type your message"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("message", { required: true })}
          />
          <br />
          {errors.message && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>
        {/* Button */}
        <button className="btn btn-info text-white">Submit</button>
      </form>
    </div>
  )
}

export default ContactUtil;
