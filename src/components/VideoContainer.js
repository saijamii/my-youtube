import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./../Utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
