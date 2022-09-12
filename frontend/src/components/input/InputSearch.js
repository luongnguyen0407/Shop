import IconClose from "components/Icon/IconClose";
import IconSearch from "components/Icon/IconSearch";
import React from "react";
import PropTypes from "prop-types";

const InputSearch = ({
  value = "",
  onChange = () => {},
  onClick = () => {},
  clearValue = () => {},
}) => {
  return (
    <div className="flex items-center flex-1 w-full text-sm border-b-2 border-gray-300 div-search search-header">
      <IconSearch />
      <input
        value={value}
        onClick={onClick}
        onChange={onChange}
        placeholder="Search for an Item..."
        type="text"
        className="w-full h-full p-3 py-2 bg-transparent border-none outline-none"
      />
      {value && <IconClose onClick={clearValue} />}
    </div>
  );
};
InputSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  clearValue: PropTypes.func,
};
export default InputSearch;
