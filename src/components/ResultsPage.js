import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";

const ResultsPage = () => {
  const [resultVideos, setResultVideos] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const fetchSearchResults = async () => {
    try {
      const url = `${YOUTUBE_SEARCH_API}&q=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, "data");
      setResultVideos(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-y-auto">
      <div className="p-4 mx-1">
        {resultVideos?.map((video, id) => (
          <SearchResultVideoCard key={video?.id?.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
