import SideBar from "components/common/admin/SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex p-2">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
