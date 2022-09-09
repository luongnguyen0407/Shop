import Heading from "components/heading/Heading";
import InputSearch from "components/input/InputSearch";
import Title from "components/Title/Title";
import useClickOutSide from "hooks/useClickOutSide";
import { useDebounce } from "hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "redux/product/productSlide";
import Category from "./Category";
import ErrorFallback from "./ErrorFallback";
import List from "./List";

const LIST_PROFILE = [
  {
    title: "Store",
    to: "/",
  },
  {
    title: "Account",
    to: "/",
  },
  {
    title: "Wish List",
    to: "/",
  },
  {
    title: "Basket",
    to: "/",
  },
];

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const { show, setShow, nodeRef } = useClickOutSide(".search-header");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchProduct(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);
  return (
    <>
      <div className="px-2 py-3 bg-text3">
        <div className="flex items-center justify-between container-fix">
          <Link to={"/"}>
            <Heading className="text-2xl font-normal text-grey_700">
              Laura's Closet
            </Heading>
          </Link>
          <div ref={nodeRef} className="relative">
            <InputSearch
              onClick={() => {
                setShow(!show);
              }}
              onChange={handleInputChange}
            ></InputSearch>
            <List show={show}></List>
          </div>
          <div className="flex gap-x-3">
            {LIST_PROFILE.map((item) => (
              <Title
                className="font-normal text-grey_500"
                key={item.title}
                to={item.to}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Category />
    </>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorFallback,
});
