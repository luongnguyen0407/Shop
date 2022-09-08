import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({ control, name, ...res }) => {
  const { field } = useController({ name, control });
  return (
    <input
      id={name}
      className="input-sig w-full outline-none p-2 rounded-lg bg-gray-100 focus:border border border-transparent focus:border-gray-200 focus:bg-white transition-all"
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
