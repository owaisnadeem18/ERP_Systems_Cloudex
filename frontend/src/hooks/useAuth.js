import React, { useState } from 'react'
import axios from 'axios'
import { showSuccess } from '../components/ui/ToastProvider'

const useAuth = () => {

    const [loading , setLoading] = useState(false)

    const [error , setError] = useState(null)

    const loginUser = async (username , password) => {

        setLoading(true)

        try {
            const res = await axios.post( "http://localhost:5000/api/auth/login" , {
                username,
                password
            })

            if (res?.data?.success) {
                setLoading(false)

                showSuccess("Login Successful")

                localStorage.setItem("token" , res?.data?.token)
                // localStorage.setItem("user" , res?.data?.data)
                

                return res?.data

            }

            else {
      showError("Invalid credentials ❌");
    }

        }

        catch (err) {
            setError(err.response?.data?.message || "Login Failed!");
            return null;
        }
        finally {
            setLoading(false)
        }

    }


  return {loginUser ,loading , error}
}

export default useAuth