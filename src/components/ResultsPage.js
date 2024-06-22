import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { throttle } from "../Utils/helper";

const ResultsPage = () => {
  const [resultVideos, setResultVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);


  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 500 &&
      !loading
    ) {
      fetchSearchResults();
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

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const url = nextPageToken
        ? `${YOUTUBE_SEARCH_API}&q=${query}&pageToken=${nextPageToken}`
        : `${YOUTUBE_SEARCH_API}&q=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setResultVideos([...resultVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      setLoading(false);
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
