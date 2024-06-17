import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
