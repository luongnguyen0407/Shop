import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { connectStart } from "redux/auth/authSlide";

const Main = ({ children }) => {
  const dispatch = useDispatch();
  const { curentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    // if (!curentUser.accessToken) dispatch(connectStart());
  }, [curentUser, dispatch]);
  return <>{children}</>;
};

export default Main;
