import HeaderAdmin from "components/common/admin/HeaderAdmin";
import SideBar from "components/common/admin/SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen p-2 mt-9">
        <div className="w-1/5 border-r border-grey_400">
          <SideBar />
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
