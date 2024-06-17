import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./../Utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../Utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  console.log(nextPageToken, "nextPageToken");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(openMenu());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [nextPageToken]);

  const getVideos = async () => {
    setLoading(true);
    const url = nextPageToken
      ? `${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}`
      : YOUTUBE_VIDEO_API;
    const response = await fetch(url);
    const data = await response.json();
    setVideos((prevVideos) => [...prevVideos, ...data.items]);
    setNextPageToken(data.nextPageToken);
    setLoading(false);
  };

  const isBottomOfPage = () => {
    return (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    );
  };

  const handleScroll = () => {
    if (isBottomOfPage() && !loading) {
      console.log("Page Bottom");
      getVideos();
    }
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
