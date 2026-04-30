import React, { useState } from "react";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../lib/validations";
import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  // custom hook of useAuth():

  const {loginUser , loading , error} = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });



  const onSubmit = async ({username , password}) => {

    // Calling custom hook of useAuth()

    const result = await loginUser(username , password)

    if (result) {
      reset();

      setTimeout(() => {
        navigate("/admin/dashboard")
      }, 1000);

    }
    
  };

  return (
  <div className="min-h-screen flex items-center justify-center md:bg-linear-to-br md:from-primary-green md:via-[#6FB8C9] md:to-primary-blue  sm:px-0 md:px-8 lg:px-4">

    <div className="w-full max-w-md bg-white/10
  border border-white/20 sm:border-white/10
  shadow-2xl 
  rounded-2xl 
  p-6 sm:p-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center md:text-text-secondary text-white">
        Sign In
      </h2>

      <p className="text-sm text-center mt-2 md:text-text-secondary text-white">
        Login to your Cloudex account
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

        <Input
          name="username"
          placeholder="Enter username"
          label="Username"
          register={register}
          error={errors.username}
        />

        <InputPassword
          name="password"
          label="Password"
          register={register}
          error={errors.password}
        />

        <Button loading={loading} type="submit">
          Sign In
        </Button>

      </form>
    </div>
  </div>
);

};

export default Login;
