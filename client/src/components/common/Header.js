import Title from "components/title/Title";
import React from "react";
import Profile from "./Profile";
import InputSearch from "components/input/InputSearch";
import Heading from "components/heading/Heading";
import ErrorFallback from "./ErrorFallback";
import Category from "./Category";
import { withErrorBoundary } from "react-error-boundary";
import { LIST_PROFILE } from "assets/Const";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { debounce } from "lodash";
// import { useRef } from "react";

const Header = () => {
  //fixed header

  // const HeadRef = useRef(null);
  // useEffect(() => {
  //   const windowScroollHandler = debounce((e) => {
  //     if (window.window.scrollY > HeadRef.current.clientHeight) {
  //       HeadRef.current.classList.add("fixed");
  //       document.body.style.paddingTop = HeadRef.current.clientHeight + "px";
  //     } else if (window.window.scrollY < HeadRef.current.clientHeight) {
  //       HeadRef.current.classList.remove("fixed");
  //       document.body.style.paddingTop = "0px";
  //     }
  //   }, 500);
  //   window.addEventListener("scroll", windowScroollHandler);
  //   return () => {
  //     window.removeEventListener("scroll", windowScroollHandler);
  //   };
  // }, []);

  return (
    <>
      <header className="top-0 z-50 w-full px-2 py-3 bg-text3 ">
        <div className="flex items-center justify-between container-fix">
          <Link to={"/"}>
            <Heading className="text-2xl font-normal text-grey_700">
              Laura's Closet
            </Heading>
          </Link>
          <div className="relative flex-1 max-w-xs">
            <InputSearch></InputSearch>
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
      </header>
      <Category />
    </>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorFallback,
});
