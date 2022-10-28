import IconDown from "components/Icon/IconDown";
import useClickOutSide from "hooks/useClickOutSide";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "redux/product/productSlide";

const DropDown = ({ control, name, setValue }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  useWatch({
    control,
    name,
    defaultValue: "",
  });
  const [selectCategory, setSelectCategory] = useState(
    "Select product category"
  );
  const { listCategory } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.textContent);
    setValue(name, e.target.dataset.value);
  };

  return (
    <div className="relative mt-4 cursor-pointer">
      <div
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className="flex items-center justify-between p-2 bg-gray-200 border border-gray-200 rounded-lg"
      >
        <p>{selectCategory}</p>
        <IconDown />
      </div>
      {show && listCategory.length > 0 && (
        <div className={`shadow-lg absolute left-0 w-full bg-white z-20`}>
          {listCategory.map((category) => (
            <div
              key={category._id}
              onClick={handleSelectCategory}
              data-value={category._id}
              className="p-2 bg-white border-b border-l border-r border-gray-100"
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
// opacity-0 invisible
