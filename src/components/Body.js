import React from "react";
import Siderbar from "./Siderbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="fixed z-10  flex flex-row h-[calc(100%-56px)]">
        <Siderbar />
      </div>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto overflow-x-hidden bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
