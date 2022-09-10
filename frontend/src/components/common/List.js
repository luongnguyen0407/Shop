import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatPrice from "utils/formatPrice";

const List = ({ show, nodeRef }) => {
  const { listProduct, loading } = useSelector((state) => state.product);
  return (
    <>
      {show && (
        <ul
          ref={nodeRef}
          className="z-50 absolute flex flex-col w-full p-2 min-h-[100px] bg-white shadow-sm group top-full gap-y-3"
        >
          {loading && (
            <div className="w-5 h-5 mx-auto border-2 border-t-4 border-blue-300 rounded-full animate-spin border-t-transparent"></div>
          )}
          {listProduct.length > 0 && !loading ? (
            listProduct.map((item) => (
              <li key={item._id}>
                <Link to={"/"} className="flex overflow-hidden gap-x-2">
                  <img
                    className="max-w-[50px] h-[50px] object-cover rounded-md"
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <p className="whitespace-nowrap">{item.title}</p>
                    <p className="font-sm text-grey_400">
                      {formatPrice(item.price)}$
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div className="text-xs italic font-thin leading-9 text-center transition-all">
              No products
            </div>
          )}
        </ul>
      )}
    </>
  );
};

export default List;
