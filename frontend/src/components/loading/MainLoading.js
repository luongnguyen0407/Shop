import React from "react";

const MainLoading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 border-4 rounded-full border-t-purple-300 border-l-green-300 border-b-red-300 border-r-yellow-200 animate-spin"></div>
    </div>
  );
};

export default MainLoading;
