import React from "react";
import { useMenu } from "../../../context/MenuContext";

const AdminSudoSidebar = () => {
  const { menu } = useMenu();

  return (
    <div  
      className={`transition-all ease-in-out duration-500 h-screen ${
        menu ? "w-20 lg:w-75" : "w-16 md:w-20"
      }`}
    ></div>
  );
};

export default AdminSudoSidebar;