import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({ control, name, ...res }) => {
  const { field } = useController({ name, control });
  return (
    <input
      id={name}
      className="w-full p-2 transition-all bg-gray-100 border border-transparent rounded-lg outline-none input-sig focus:border focus:border-gray-200 focus:bg-white"
      {...res}
      {...field}
    ></input>
  );
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};
export default Input;
