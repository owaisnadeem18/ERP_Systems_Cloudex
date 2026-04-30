import React from 'react'
import Login from '../components/auth/Login'

export const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-y-hidden">

      {/* Left Side - Background Image */}
      <div className="hidden md:block md:w-1/2 h-screen relative">
  
  {/* Image */}
  <img
    src="https://media.istockphoto.com/id/1665910516/photo/cloud-and-edge-computing-technology-data-transfer-concept-a-large-cloud-icon-is-in-the-center.jpg?s=612x612&w=0&k=20&c=v37ipYB5w6g47pk9bv1b0hcRJBuiyJ7X_WE2q8OEW8o="
    alt="Auth Background"
    className="w-full h-full object-cover"
  />

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

</div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative px-4 md:px-0">

        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://img.freepik.com/premium-photo/data-processing-technology-data-storage-computing-concept-with-digital-cloud-symbol-with-circuit-scheme-dark-blue-abstract-matrix-technological-background-3d-rendering_670147-40060.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Auth Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 md:hidden"></div>

        {/* Login Form */}
        <div className="relative z-10 w-full">
          <Login />
        </div>

      </div>

    </div>
  )
}