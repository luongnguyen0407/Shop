import React from "react";
import { LIST_SIDEBAR } from "assets/Const";
import SideBarItem from "./SideBarItem";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";
const SideBar = () => {
  return (
    <div>
      <div className="fixed flex flex-col p-3 gap-y-3 list_sidebar">
        {LIST_SIDEBAR.map((item, index) => (
          <SideBarItem key={index} list={item} />
        ))}
      </div>
    </div>
  );
};

export default withErrorBoundary(SideBar, {
  FallbackComponent: ErrorFallback,
});
