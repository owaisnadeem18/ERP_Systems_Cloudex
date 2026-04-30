import React, { useState } from "react";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../lib/validations";
import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { cloudexSmallLogo } from "../../assets";
import { Link } from "react-router-dom";

const Login = () => {
  // custom hook of useAuth():

  const { loginUser, loading, error } = useAuth();

  const navigate = useNavigate();

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
      rememberMe: false,
    },
  });

  const onSubmit = async ({ username, password, rememberMe }) => {
    // Calling custom hook of useAuth()

    const result = await loginUser(username, password, rememberMe);

    if (result) {
      reset();

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:bg-linear-to-br md:from-primary-green md:via-[#6FB8C9] md:to-primary-blue  sm:px-0 md:px-8 lg:px-4">
      
      
      <div
        className="w-full flex flex-col gap-6 items-center max-w-md bg-white/10
  border border-white/20 sm:border-white/10
  shadow-2xl 
  rounded-2xl 
  p-4 sm:p-6"
      >
        <div className="flex flex-col gap-2 items-center" >

      <img src={cloudexSmallLogo} alt="CloudEx Logo" className="w-30" />
        {/* Title */}
        <h2 className="text-3xl font-bold text-center md:text-text-secondary text-white">
          Sign In
        </h2>

        <p className="text-sm text-center md:text-text-secondary text-white">
          Login to your Cloudex account
        </p>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
  
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

  {/* Remember + Forgot Row */}
  <div className="flex items-center justify-between text-sm">
    
    {/* Left - Remember Me */}
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        {...register("rememberMe")}
        className="accent-blue-600"
      />
      <span className="text-white">Remember me</span>
    </label>

    <Link
  to="/forgot-password"
  className="flex items-center text-white gap-1 cursor-pointer"
>
  <span className = "hover:underline" >Forgot password?</span>
  <span title="We’ll keep you signed in on this device">❓</span>
</Link>

  </div>

  <Button loading={loading} type="submit">
    Sign In
  </Button>

</form>


      </div>
    </div>
  );
};

export default Login;
