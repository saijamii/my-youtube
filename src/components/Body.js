import React from "react";
import Siderbar from "./Siderbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="fixed z-10 h-full">
        <Siderbar />
      </div>
      <div className="w-full overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
