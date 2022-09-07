import React from "react";

const Label = ({ children, htmlFor = "" }) => {
  return (
    <label
      className="text-base text-grey_400 font-semibold cursor-pointer"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
