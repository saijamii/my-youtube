import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  useEffect(() => {
    // getData();
  }, []);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search";
  const API_KEY = "AIzaSyDo6l411i4StVx3BugFdqjOWVKIEJdEG0c";

  const getSearchSuggestions = async (text) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: text,
    });

    const url = `${YOUTUBE_SEARCH_API}?${params}`;

    const response = await fetch(url);
    const data = await response.json();

    // Process and use the data
    console.log(data);
    // You can access items like data.items, which contains search results
  };

  getSearchSuggestions("777");

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenu}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://i.pinimg.com/564x/96/33/0f/96330f95e5f907dd65fec5f6cf6a1faf.jpg"
        />
        <a href="/">
          <img
            className="h-7 ml-3 "
            alt="youtube-logo"
            src="https://www.mygrow.me/wp-content/uploads/2020/03/302-3020719_youtube-music-logo-png-transparent-background-youtube-logo.jpg"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
        />
        <button className="px-2 py-1 bg-gray-300 border border-gray-500 p-1 rounded-r-full">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-7"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
