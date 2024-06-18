import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import SearchResultVideoCard from "./SearchResultVideoCard"

const ResultsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="grow  h-full overflow-y-auto bg-white">
      <SearchResultVideoCard />
    </div>
  );
};

export default ResultsPage;
