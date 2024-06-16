import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./../Utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../Utils/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
