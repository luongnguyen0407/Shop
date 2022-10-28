import ButtonBorder from "components/button/ButtonBorder";
import React from "react";
import { useState } from "react";
import "../style/Content.scss";

const ProductFor = ({ data }) => {
  const [isShowMore, setShowMore] = useState(false);
  const handleSetShow = () => {
    console.log("o");
    setShowMore((prev) => !prev);
  };
  return (
    <div className="w-4/5 mx-auto ">
      <div
        className={`${
          isShowMore ? "h-auto" : "h-[350px]"
        } overflow-hidden relative border-b border-slate-400 transition-all`}
      >
        <div
          className="p-3 entry-content "
          dangerouslySetInnerHTML={{
            __html: data || "",
          }}
        ></div>
        <div className="bg-article"></div>
      </div>
      <ButtonBorder
        onClick={handleSetShow}
        className="block mx-auto mt-2 border border-primary"
      >
        Read more
      </ButtonBorder>
    </div>
  );
};

export default ProductFor;
