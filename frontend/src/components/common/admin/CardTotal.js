import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
const CardTotal = ({ data }) => {
  return (
    <div
      className={`flex text-secondary bg-primary items-center p-3  rounded-lg cursor-pointer gap-x-3`}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 font-semibold text-white bg-secondary rounded-md`}
      >
        <AiOutlineShopping />
      </div>
      <div>
        <p>{data.title}</p>
        <p className="text-xs font-light">{data.cost}</p>
      </div>
    </div>
  );
};

export default CardTotal;
