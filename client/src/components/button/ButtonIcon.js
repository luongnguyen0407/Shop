import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonIcon = ({ to = "", children, className = "", icon }) => {
  return (
    <Link to={to}>
      <button
        className={`p-3 ${className} uppercase gap-x-2 flex items-center`}
      >
        {children}
        {icon}
      </button>
    </Link>
  );
};
ButtonIcon.propTypes = {
  icon: PropTypes.node,
};
export default ButtonIcon;
