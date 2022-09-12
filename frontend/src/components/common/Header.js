import { LIST_PROFILE } from "assets/Const";
import axiosClient from "axios/configAxios";
import Heading from "components/heading/Heading";
import InputSearch from "components/input/InputSearch";
import Title from "components/Title/Title";
import useClickOutSide from "hooks/useClickOutSide";
import { useDebounce } from "hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Category from "./Category";
import ErrorFallback from "./ErrorFallback";
import List from "./List";
import Profile from "./Profile";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const { show, setShow, nodeRef } = useClickOutSide(".search-header");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClearValue = () => {
    setSearchValue("");
  };
  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const handleFetchProduct = async () => {
      setIsLoading(true);
      setShow(true);
      let start = new Date();
      try {
        const { productList } = await axiosClient.request({
          method: "get",
          url: "/v1/getproduct",
          params: {
            search: debouncedSearchTerm,
          },
        });
        setListProduct(productList);
      } catch (error) {
        toast.error("Sever error");
      }
      let end = new Date();
      if (end - start > 1000) {
        setIsLoading(false);
      } else {
        await delay(1000 - (end - start));
        setIsLoading(false);
      }
    };
    if (debouncedSearchTerm) {
      handleFetchProduct();
    } else {
      setListProduct([]);
    }
  }, [debouncedSearchTerm, dispatch, setShow]);

  return (
    <>
      <div className="px-2 py-3 bg-text3">
        <div className="flex items-center justify-between container-fix">
          <Link to={"/"}>
            <Heading className="text-2xl font-normal text-grey_700">
              Laura's Closet
            </Heading>
          </Link>
          <div ref={nodeRef} className="relative flex-1 max-w-xs">
            <InputSearch
              onClick={() => {
                setShow(!show);
              }}
              value={searchValue}
              onChange={handleInputChange}
              clearValue={handleClearValue}
            ></InputSearch>
            <List data={listProduct} loading={isLoading} show={show}></List>
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
            <Profile />
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
