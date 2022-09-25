import React from "react";
import { Link } from "react-router-dom";
import formatPrice from "utils/formatPrice";
import LoadingSkeleton from "./LoadingSkeleton";

const List = ({ data, show = true, nodeRef, loading = false }) => {
  return (
    <>
      {show && (
        <ul
          ref={nodeRef}
          className="list-search z-50 rounded-b-lg absolute flex flex-col w-full max-h-[250px] overflow-y-auto bg-white shadow-sm group top-full "
        >
          {loading && (
            <div className="flex flex-col gap-2 p-2">
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
            </div>
          )}
          {data.length > 0 && !loading ? (
            data.splice(0, 10).map((item) => (
              <li
                key={item._id}
                className="p-1 transition-colors hover:bg-slate-100"
              >
                <Link to={"/"} className="flex overflow-hidden gap-x-2">
                  <img
                    className="max-w-[50px] h-[50px] object-cover rounded-md"
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <p className="w-64 overflow-hidden whitespace-nowrap text-ellipsis">
                      {item.title}
                    </p>
                    <p className="font-sm text-grey_400">
                      {formatPrice(item.price)}$
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div className="h-full text-xs italic font-thin leading-9 text-center transition-all">
              No products
            </div>
          )}
        </ul>
      )}
    </>
  );
};

const ListSkeleton = () => {
  return (
    <div className="flex gap-x-2 h-[50px]">
      <LoadingSkeleton width="50px" height="50px" rounded="6px" />
      <div className="flex-1">
        <LoadingSkeleton height="12px" rounded="2px" />
        <p className="p-2"></p>
        <LoadingSkeleton height="12px" width="40%" rounded="2px" />
      </div>
    </div>
  );
};

export default List;
