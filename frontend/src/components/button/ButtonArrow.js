import IconArrow from "components/Icon/IconArrow";
import React from "react";
import { Link } from "react-router-dom";

const ButtonArrow = ({ to = "/", children, className = "" }) => {
  return (
    <Link to={to}>
      <button
        className={`p-3 ${className} uppercase gap-x-2 flex items-center`}
      >
        {children}
        <IconArrow />
      </button>
    </Link>
  );
};

export default ButtonArrow;
