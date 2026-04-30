import React, { useState } from "react";
import InputPassword from "../ui/InputPassword";
import Button from "../ui/Button";
import { cloudexSmallLogo } from "../../assets";
import axios from "axios";
import { showSuccess, showError } from "../ui/ToastProvider";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const token = window.location.pathname.split("/").pop();

      const res = await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        {
          token,
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
            Reset Password
          </h2>

          <p className="text-sm text-center md:text-text-secondary text-white">
            Enter your new password
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleReset} className="w-full flex flex-col gap-4">

          {/* New Password */}
          <InputPassword
            name="newPassword"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* Confirm Password */}
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Button */}
          <Button loading={loading} type="submit">
            Reset Password
          </Button>

        </form>

      </div>
    </div>
  );
};

export default ResetPassword;