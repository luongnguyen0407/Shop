import useClickOutSide from "hooks/useClickOutSide";
import React from "react";
import { userLogOut } from "redux/auth/authSlide";
import { useDispatch, useSelector } from "react-redux";
import { NoSubMenu } from "./admin/SideBarItem";
import { LIST_PROFILE_MENU } from "assets/Const";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
const Profile = () => {
  const { curentUser } = useSelector((state) => state.auth);
  return (
    <>
      {curentUser.accessToken ? (
        <Logged curentUser={curentUser} />
      ) : (
        <Link
          to={"/login"}
          className="px-2 text-white bg-green-300 rounded-sm "
        >
          Login
        </Link>
      )}
    </>
  );
};

const Logged = ({ curentUser }) => {
  const { show, setShow, nodeRef } = useClickOutSide(".profile-list");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOut(curentUser));
  };
  const handleShowMenu = () => {
    setShow(!show);
  };
  return (
    <div className="relative flex items-center gap-x-1">
      <div className="w-8 h-8 overflow-hidden rounded-full">
        <img
          src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <p
        ref={nodeRef}
        onClick={handleShowMenu}
        className="flex items-center text-sm cursor-pointer text-grey_500"
      >
        {curentUser.username}
        <AiOutlineDown className="mt-1 text-xs" />
      </p>
      <div
        className={`${
          show ? "h-48" : "h-0"
        } profile-list absolute right-0 z-50 mt-2 overflow-hidden duration-500 transition-all bg-white rounded-sm shadow-sm w-36 top-full`}
      >
        <div className="p-2 ">
          {LIST_PROFILE_MENU.map((item, index) => (
            <NoSubMenu key={index} item={item} sm />
          ))}
          <p
            onClick={handleLogout}
            className="flex items-center px-2 text-red-400 rounded-lg cursor-pointer gap-x-2 whitespace-nowrap"
          >
            <AiOutlinePoweroff />
            LogOut
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
