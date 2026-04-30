import { useState } from "react";
import "./App.css";
import Input from "./components/ui/Input";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import { AuthLayout } from "./layouts/AuthLayout";
import { Navigate } from "react-router-dom";
import ForgotPassword from "./components/auth/ForgotPassword";
import  ResetPassword from "./components/auth/ResetPassword";
import TenantList from "./modules/tenant/pages/TenantList";
import TenantForm from "./modules/tenant/pages/TenantForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* AUTH LAYOUT */}
        <Route path="/" element={<AuthLayout />}>

          {/* default route → /login */}
          <Route index element={<Navigate to="/login" replace />} />

          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/" element={<ResetPassword />} />

        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="tenants" element={<TenantList />} />
  <Route path="tenants/create" element={<TenantForm />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
