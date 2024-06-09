import React from "react";
import Siderbar from "./Siderbar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Siderbar />
      <MainContainer />
    </div>
  );
};

export default Body;
