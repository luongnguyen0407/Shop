import React from "react";

const ButtonBorder = ({ children, className = "", onClick = () => {} }) => {
  return (
    <button onClick={onClick} className={`p-2 ${className} rounded-md`}>
      {children}
    </button>
  );
};

export default ButtonBorder;
