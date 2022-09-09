import React from "react";
import { Link } from "react-router-dom";

const Title = ({ to = "", title, className }) => {
  if (to) {
    return (
      <Link to={to}>
        <span className={`inline-block text-sm font-semibold ${className}`}>
          {title}
        </span>
      </Link>
    );
  } else {
    return (
      <span className={`inline-block text-sm font-semibold ${className}`}>
        {title}
      </span>
    );
  }
};

export default Title;
