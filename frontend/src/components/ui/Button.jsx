import React from "react";
import Loader from "./Loader";

const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        w-full
        flex items-center justify-center gap-2
        bg-primary-blue
        hover:bg-primary-green
        text-white
        font-medium
        py-2
        rounded-lg
        transition
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {loading ? <Loader size={18} /> : children}
    </button>
  );
};

export default Button;