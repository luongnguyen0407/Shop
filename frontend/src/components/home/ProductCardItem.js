import Heading from "components/heading/Heading";
import formatPrice from "utils/formatPrice";
import Title from "components/Title/Title";
import React from "react";
import LazyLoad from "components/common/LazyLoad";

const ProductCardItem = ({ data }) => {
  if (!data) return null;
  return (
    <div className="cursor-pointer min-h-[420px] relative pb-8">
      <LazyLoad className="object-cover w-full h-80" url={data.img} />

      {/* <img
        className="object-cover w-full h-80"
        src={data.img}
        alt={data.title}
      /> */}
      <div className="mt-2 ">
        <Title
          thin
          title={data.title}
          className="flex-1 mb-2 text-sm select-none text-grey_700 line-clamp-2"
        />
        <div className="absolute bottom-0 flex items-center justify-between w-full select-none">
          <Heading>{formatPrice(data.price)}$</Heading>
          <div className="p-1 text-white bg-black">+ Add to Basket</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
