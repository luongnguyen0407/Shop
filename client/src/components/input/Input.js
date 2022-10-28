import React, { useState } from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { IconHideEye, IconOpenEye } from "components/Icon";

const Input = ({ icon, control, name, ...res }) => {
  const { field } = useController({ name, control });
  const handleTogglePass = () => {
    setShowPass(!showPass);
  };
  const [showPass, setShowPass] = useState(true);
  return (
    <div className="relative">
      <input
        id={name}
        type={`${showPass && icon ? "password" : "text"}`}
        className={`${
          icon ? "pr-8" : ""
        } w-full p-2 transition-all bg-gray-100 border border-transparent rounded-lg outline-none input-sig focus:border focus:border-gray-200 focus:bg-white`}
        {...res}
        {...field}
      ></input>
      {icon && (
        <div
          onClick={handleTogglePass}
          className="absolute cursor-pointer select-none right-3 top-2/4 -translate-y-2/4 text-grey_500"
        >
          {!showPass ? (
            <IconOpenEye></IconOpenEye>
          ) : (
            <IconHideEye></IconHideEye>
          )}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};
export default Input;
