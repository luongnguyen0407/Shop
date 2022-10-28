import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import List from "components/common/List";
import IconSearch from "components/Icon/IconSearch";
import IconClose from "components/Icon/IconClose";
import axiosClient from "axios/configAxios";
import { useDebounce } from "hooks/useDebounce";
import { toast } from "react-toastify";
import useClickOutSide from "hooks/useClickOutSide";

const InputSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const { show, setShow, nodeRef } = useClickOutSide(".search-header");
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
  }, [debouncedSearchTerm, setShow]);
  return (
    <>
      <div className="flex items-center flex-1 w-full text-sm border-b-2 border-gray-300 div-search search-header">
        <IconSearch />
        <input
          ref={nodeRef}
          onClick={() => {
            setShow(!show);
          }}
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search for an Item..."
          type="text"
          className="w-full h-full p-3 py-2 bg-transparent border-none outline-none"
        />
        {searchValue && <IconClose onClick={handleClearValue} />}
      </div>
      <List data={listProduct} loading={isLoading} show={show}></List>
    </>
  );
};
InputSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  clearValue: PropTypes.func,
};
export default InputSearch;
