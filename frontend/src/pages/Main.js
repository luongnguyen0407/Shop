import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectStart } from "redux/auth/authSlide";

const Main = ({ children }) => {
  const dispatch = useDispatch();
  const { isLogin, curentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isLogin && !curentUser.accessToken) {
      dispatch(connectStart());
    }
  }, [isLogin, dispatch, curentUser]);
  return <>{children}</>;
};

export default Main;
