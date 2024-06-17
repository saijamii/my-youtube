import React, { useCallback, useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./../Utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../Utils/appSlice";
import { throttle } from "../Utils/helper";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(openMenu());
    // eslint-disable-next-line
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 500 &&
      !loading
    ) {
      getVideos();
    }
  // eslint-disable-next-line
  }, [loading]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledHandleScroll = useCallback(throttle(handleScroll, 500), [
    handleScroll,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll, throttledHandleScroll]);

  const getVideos = async () => {
    setLoading(true);
    const url = nextPageToken
      ? `${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}`
      : YOUTUBE_VIDEO_API;
    const response = await fetch(url);
    const data = await response.json();
    setVideos([...videos, ...data.items]);
    setNextPageToken(data.nextPageToken);
    setLoading(false);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((video, id) => (
        <Link key={id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
