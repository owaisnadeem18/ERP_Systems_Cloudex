import React, { useState } from "react";
import InputPassword from "../ui/InputPassword";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { cloudexSmallLogo } from "../../assets";
import axios from "axios";
import { showSuccess, showError } from "../ui/ToastProvider";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          username,
          newPassword,
        }
      );

      if (res.data.success) {
        showSuccess(res.data.message);
      } else {
        showError("Something went wrong");
      }
    } catch (err) {
      showError(err.response?.data?.message || "Request Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:bg-linear-to-br md:from-primary-green md:via-[#6FB8C9] md:to-primary-blue sm:px-0 md:px-8 lg:px-4">

      <div
        className="w-full flex flex-col gap-6 items-center max-w-md bg-white/10
        border border-white/20 sm:border-white/10
        shadow-2xl 
        rounded-2xl 
        p-4 sm:p-6"
      >

        {/* Header */}
        <div className="flex flex-col gap-2 items-center">

          <img src={cloudexSmallLogo} alt="CloudEx Logo" className="w-30" />

          <h2 className="text-3xl font-bold text-center md:text-text-secondary text-white">
            Forgot Password
          </h2>

          <p className="text-sm text-center md:text-text-secondary text-white">
            Reset your Cloudex account password
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleReset} className="w-full flex flex-col gap-4">

          {/* Username */}
          <Input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            className=""
          />

          {/* New Password */}
          {/* <InputPassword
            name="newPassword"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          /> */}

          {/* Button */}

          <Link to = "/reset-password" > 
          
          <Button loading={loading} type="submit"  >
            Next
          </Button>
          
          </Link>

        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;