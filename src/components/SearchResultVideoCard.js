import React from "react";

const SearchResultVideoCard = ({ video }) => {
  return (
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
      <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={video?.high?.url}
          alt="video-thumbnail"
        />
      </div>
      SearchResultVideoCard
    </div>
  );
};

export default SearchResultVideoCard;
