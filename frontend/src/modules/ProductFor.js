import React from "react";

const ProductFor = ({ data }) => {
  return (
    <div
      className="w-4/5 p-3 mx-auto entry-content"
      dangerouslySetInnerHTML={{
        __html: data || "",
      }}
    ></div>
  );
};

export default ProductFor;
