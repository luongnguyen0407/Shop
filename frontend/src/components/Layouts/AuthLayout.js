import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-auth_bg w-full  flex justify-center items-center min-h-screen">
      <div className="w-3/4 grid grid-cols-2 max-h-[450px] overflow-hidden rounded-3xl ">
        <div>
          <img
            className="block object-cover h-full w-full"
            src="/auth.jpg"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
