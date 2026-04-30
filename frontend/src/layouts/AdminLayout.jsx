
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/dashboard/DashboardSidebar";
import { useMenu } from "../context/MenuContext";

const AdminLayout = () => {

  // Here, we need to check either the menu is present or not: 

//   const menu = useSelector(state => state?.auth?.menu)

  const {menu} = useMenu()

  return (
    <div className="flex min-h-screen">

      <div className={`transition-all ease-in-out duration-500 flex-none ${menu ? "w-16 lg:w-75" : "w-16 md:w-20"} text-white`} >
        <AdminSidebar/>
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>  

    </div>
  );
};

export default AdminLayout; 