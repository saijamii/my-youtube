import React from "react";
import { getDifference } from "../Utils/helper";
import { Link } from "react-router-dom";

const SearchResultVideoCard = ({ video }) => {
  if (!video || !video.snippet) {
    return null;
  }

  const { snippet, id } = video;
  const { title, channelTitle, description, thumbnails, publishTime } = snippet;

  return (
    <Link to={`/watch?v=${id?.videoId}`}>
      <div className="flex flex-row min-h-48">
        <img
          className="m-2 p-2 w-1/7 rounded-2xl h-full max-h-64 w-full max-w-96"
          src={thumbnails?.high?.url}
          alt="video-thumbnail"
        />

        <div className="px-2 py-4">
          <h2 className="font-bold">{title}</h2>
          <div className="flex items-center">
            <img
              className="rounded-full w-7 h-7 mt-2 mr-2"
              alt="channel"
              src={thumbnails?.default?.url}
            />
            <p>{channelTitle}</p>
            <p className="mx-2 font-semibold">
              {getDifference(publishTime) + " ago"}
            </p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
