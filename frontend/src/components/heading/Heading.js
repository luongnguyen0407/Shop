import React, { memo } from "react";
import PropsTypes from "prop-types";
const Heading = ({ children, className = "" }) => {
  return <h2 className={`block font-semibold ${className}`}>{children}</h2>;
};

Heading.PropsTypes = {
  className: PropsTypes.string,
};
export default memo(Heading);
