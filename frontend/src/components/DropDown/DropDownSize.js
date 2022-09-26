import IconDown from "components/Icon/IconDown";
import useClickOutSide from "hooks/useClickOutSide";
import React from "react";

const DropDownSize = ({ setSelect, data, size }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative max-w-[100px]">
      <div
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className="flex items-center justify-between px-2 border border-gray-400 cursor-pointer "
      >
        <p className="text-xl">{size}</p>
        <IconDown />
      </div>
      {show && (
        <div className="absolute w-full border">
          {data.map((item) => (
            <p
              key={item.id}
              onClick={setSelect}
              className="px-2 text-xl transition-colors bg-white cursor-pointer hover:bg-slate-400 "
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
