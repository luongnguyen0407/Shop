import React from "react";
import Profile from "../Profile";
import Heading from "components/heading/Heading";
import ErrorFallback from "../ErrorFallback";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
const HeaderAdmin = () => {
  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full p-2 bg-white shadow-md h-11">
      <Link to={"/"}>
        <Heading className="pr-2 text-2xl font-normal text-grey_700">
          Laura's Closet
        </Heading>
      </Link>
      <Heading className="flex-1 text-secondary md:ml-16">
        Welcome Back ! Admin
      </Heading>
      <div className="flex items-center gap-x-4">
        <div className="relative p-1 cursor-pointer">
          <AiOutlineBell className="text-lg" />
          <p className="absolute px-1 text-xs text-white bg-red-400 rounded-full -right-1 -top-1/4">
            2
          </p>
        </div>
        <Profile></Profile>
      </div>
    </div>
  );
};

export default withErrorBoundary(HeaderAdmin, {
  FallbackComponent: ErrorFallback,
});
