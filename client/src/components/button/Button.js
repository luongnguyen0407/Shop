import LoadingSpin from "components/loading/LoadingSpin";
import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, isLoading = false }) => {
  return (
    <button
      disabled={isLoading}
      className={`${
        isLoading ? "opacity-50" : ""
      } w-full py-3 bg-primary rounded-lg text-white font-semibold h-[50px] flex justify-center items-center`}
      type={type}
    >
      {isLoading ? <LoadingSpin /> : children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
