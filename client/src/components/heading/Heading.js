import React, { memo } from "react";
import PropsTypes from "prop-types";
const Heading = ({ children, className = "", bar = false }) => {
  return (
    <>
      <h2 className={`block font-semibold ${className}`}>{children}</h2>
      {bar && (
        <span className="block w-14 my-3 mx-auto h-[2px] bg-black "></span>
      )}
    </>
  );
};

Heading.PropsTypes = {
  className: PropsTypes.string,
  bar: PropsTypes.bool,
};
export default memo(Heading);
