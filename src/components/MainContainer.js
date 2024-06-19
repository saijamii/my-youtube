import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="h-full overflow-y-auto mx-48 w-full overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
