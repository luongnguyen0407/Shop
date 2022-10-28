import Title from "components/title/Title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "redux/product/productSlide";

const Category = () => {
  const dispatch = useDispatch();
  const { listCategory } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div className="p-2 py-4 min-h-[56px]">
      <div className="flex justify-between container-fix">
        {listCategory.length > 0 &&
          listCategory.map((item) => (
            <Title
              className="font-semibold text-grey_800"
              key={item._id}
              to={`/product/${item._id}`}
              title={item.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;
