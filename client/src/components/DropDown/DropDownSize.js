import IconDown from "components/Icon/IconDown";
import useClickOutSide from "hooks/useClickOutSide";
import React from "react";

const DropDownSize = ({ setSelect, data, size }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative max-w-[60px]">
      <div
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className="flex items-center justify-between px-1 border border-gray-400 cursor-pointer "
      >
        <p className="text-xs">{size}</p>
        <IconDown />
      </div>
      {show && (
        <div className="absolute w-full border">
          {data.map((item) => (
            <p
              key={item.id}
              onClick={setSelect}
              className="px-1 text-xs transition-colors bg-white cursor-pointer hover:bg-slate-400 "
            >
              {item.size}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownSize;
