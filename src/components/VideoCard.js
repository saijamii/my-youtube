import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const cardWidth = isMenuOpen ? "w-64" : "w-70";
  const cardPadding = isMenuOpen ? "p-2" : "p-4";
  const cardMargin = isMenuOpen ? "w-64" : "w-70";
  const maxWidth = isMenuOpen ? "max-" : "max-w-lg";

  return (
    <div
      className={`${cardPadding} ${cardMargin} ${cardWidth} ${maxWidth} shadow-lg`}
    >
      <img
        className="rounded-lg hover:drop-shadow-xl"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="flex justify-start items-start">
        <img
          className="rounded-full w-7 h-7 mt-2 mr-2"
          alt="channel"
          src={thumbnails?.default?.url}
        />
        <div>
          <li className="font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px]">
            {title}
          </li>
          <li className="text-gray-500 text-[13px]">{channelTitle}</li>
        </div>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border bg-slate-300 opacity-70 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
