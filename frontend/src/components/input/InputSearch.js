import IconSearch from "components/Icon/IconSearch";
import React from "react";

const InputSearch = ({ onChange = () => {}, onClick = () => {} }) => {
  return (
    <div className="flex items-center text-sm border-b-2 border-gray-300 search-header">
      <IconSearch />
      <input
        onClick={onClick}
        onChange={onChange}
        placeholder="Search for an Item..."
        type="text"
        className="w-full h-full p-3 py-2 bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default InputSearch;
