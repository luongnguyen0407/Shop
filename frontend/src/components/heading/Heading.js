import React from "react";

const Heading = ({ children, className = "" }) => {
  return <h2 className={`block font-semibold ${className}`}>{children}</h2>;
};

export default Heading;
