import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, ...res }) => {
  return (
    <input
      id={name}
      className="w-full outline-none p-2 rounded-lg bg-gray-200 focus:border border border-transparent focus:border-gray-200 focus:bg-white transition-all"
      {...res}
    ></input>
  );
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Input;
