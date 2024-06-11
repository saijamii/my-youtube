import React from "react";
import Siderbar from "./Siderbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Siderbar />
      <Outlet />
    </div>
  );
};

export default Body;
