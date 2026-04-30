import React, { useState } from "react";
import axios from "axios";
import { showSuccess , showError } from "../components/ui/ToastProvider";

const useAuth = () => {
  const [loading, setLoading] = useState(false);


  const [error, setError] = useState(null);

  const loginUser = async (username, password, rememberMe) => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
        rememberMe,
      });

      if (res?.data?.success) {
        setLoading(false);

        if (rememberMe) {
            localStorage.setItem("token", res.data.token);

        } else {
            sessionStorage.setItem("token", res.data.token);
        }

        showSuccess("Login Successful");

        return res?.data;
      } else {
        showError("Invalid credentials ❌");
        return null;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed!");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};

export default useAuth;
