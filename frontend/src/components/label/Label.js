import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "" }) => {
  return (
    <label
      className="text-base font-medium cursor-pointer text-grey_400"
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
