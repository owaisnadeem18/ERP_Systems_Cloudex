import React from "react";
import { useNavigate } from "react-router-dom";

const TenantList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Tenant List</h1>

      <button onClick={() => navigate("/tenants/create")}>
        Add Tenant
      </button>
    </div>
  );
};

export default TenantList;