import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Title = ({ to = "", title, className = "", thin = false }) => {
  if (to) {
    return (
      <Link to={to}>
        <span
          className={`inline-block ${
            thin ? "font-base" : "font-semibold"
          } text-sm  ${className}`}
        >
          {title}
        </span>
      </Link>
    );
  } else {
    return (
      <span
        className={`inline-block ${
          thin ? "font-base" : " font-semibold"
        } text-sm ${className}`}
      >
        {title}
      </span>
    );
  }
};
Title.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  thin: PropTypes.bool,
};
export default Title;
