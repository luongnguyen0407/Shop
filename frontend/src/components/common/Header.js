import useClickOutSide from "hooks/useClickOutSide";
import Title from "components/Title/Title";
import React from "react";
import Profile from "./Profile";
import InputSearch from "components/input/InputSearch";
import Heading from "components/heading/Heading";
import ErrorFallback from "./ErrorFallback";
import Category from "./Category";
import { withErrorBoundary } from "react-error-boundary";
import { LIST_PROFILE } from "assets/Const";
import { Link } from "react-router-dom";

const Header = () => {
  const { show, setShow, nodeRef } = useClickOutSide(".search-header");
  return (
    <>
      <div className="px-2 py-3 bg-text3">
        <div className="flex items-center justify-between container-fix">
          <Link to={"/"}>
            <Heading className="text-2xl font-normal text-grey_700">
              Laura's Closet
            </Heading>
          </Link>
          <div ref={nodeRef} className="relative flex-1 max-w-xs">
            <InputSearch setShow={setShow} show={show}></InputSearch>
          </div>
          <div className="flex items-center gap-x-3">
            {LIST_PROFILE.map((item) => (
              <Title
                className="font-normal text-grey_500"
                key={item.title}
                to={item.to}
                title={item.title}
              />
            ))}
            <Profile />
          </div>
        </div>
      </div>
      <Category />
    </>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorFallback,
});
