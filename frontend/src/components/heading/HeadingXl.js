import React from "react";

const HeadingXl = ({ children, className }) => {
  return (
    <h2 className={`font-semibold text-2xl lg:text-3xl ${className}`}>
      {children}
    </h2>
  );
};

export default HeadingXl;
