import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { useSearchParams } from "react-router-dom";

const ResultsPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("search_query"));
  useEffect(() => {
    dispatch(closeMenu());
  // eslint-disable-next-line
  }, []);
  return (
    <div className="grow  h-full overflow-y-auto bg-white">
      <SearchResultVideoCard />
    </div>
  );
};

export default ResultsPage;
