import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "redux/auth/authSlide";

const Profile = () => {
  const { curentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("ok");
    dispatch(userLogOut(curentUser));
  };
  return (
    <>
      {curentUser.accessToken ? (
        <div className="flex items-center gap-x-3">
          <div className="px-2 text-white rounded-sm bg-secondary">
            {curentUser.username}
          </div>
          <p
            onClick={handleLogout}
            className="text-sm text-red-300 cursor-pointer"
          >
            LogOut
          </p>
        </div>
      ) : (
        <Link to={"/login"} className="px-2 text-white bg-green-300 rounded-sm">
          Login
        </Link>
      )}
    </>
  );
};

export default Profile;
