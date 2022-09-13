import Heading from "components/heading/Heading";
import React from "react";
import { Link } from "react-router-dom";
import { LIST_SIDEBAR } from "assets/Const";
import SideBarItem from "./SideBarItem";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";
const SideBar = () => {
  return (
    <div>
      <Link to={"/"}>
        <Heading className="text-2xl font-normal text-grey_700">
          Laura's Closet
        </Heading>
      </Link>
      <div className="mt-10">
        <div className="flex flex-col gap-y-3 list_sidebar">
          {LIST_SIDEBAR.map((item, index) => (
            <SideBarItem key={index} list={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(SideBar, {
  FallbackComponent: ErrorFallback,
});
