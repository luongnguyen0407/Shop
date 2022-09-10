import React from "react";

const HeadingXl = ({ children, className }) => {
  return (
    <h2
      className={`font-semibold text-3xl lg:text-5xl text-text3 ${className}`}
    >
      {children}
    </h2>
  );
};

export default HeadingXl;
