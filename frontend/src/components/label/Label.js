import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "", dark = false }) => {
  return (
    <label
      className={`text-base font-medium cursor-pointer ${
        dark ? "text-black" : "text-grey_400"
      }`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};
export default Label;
