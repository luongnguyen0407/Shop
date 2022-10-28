import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";

const SideBarItem = ({ list }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {list.subMenu ? (
        <HaveSubMenu onClick={handleShowMenu} list={list} showMenu={showMenu} />
      ) : (
        <NoSubMenu item={list} />
      )}
    </>
  );
};

const HaveSubMenu = ({ list, onClick, showMenu }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex items-center justify-between rounded-lg cursor-pointer gap-x-2"
      >
        <div className="flex items-center select-none gap-x-3">
          {list.icon}
          <p>{list.title}</p>
        </div>
        <AiOutlineCaretDown />
      </div>
      <div
        className={`${
          showMenu ? "h-20 max-h-[75px]" : "h-0"
        } transition-all duration-500 bg-white overflow-hidden`}
      >
        {list.subMenu.map((item, index) => (
          <NoSubMenu key={index} item={item} sm />
        ))}
      </div>
    </>
  );
};

export const NoSubMenu = ({ item, sm = false }) => {
  return (
    <NavLink
      to={item.to}
      className={`${
        sm ? "text-sm" : ""
      } flex items-center p-2 rounded-lg gap-x-2 whitespace-nowrap`}
    >
      {item.icon}
      <p>{item.title}</p>
    </NavLink>
  );
};

export default SideBarItem;
