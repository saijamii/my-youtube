import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { AUTOCOMPLETE_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  console.log(suggestions[suggestionIndex],"suggestions[suggestionIndex]")

  useEffect(() => {
    const storedSearchQuery =
      window.location.pathname !== "/" && localStorage.getItem("searchQuery");
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
    window.location.href = `/results?search_query=${encodeURIComponent(query)}`;
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(AUTOCOMPLETE_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleClickOutside = (e) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target) &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (event) => {
    //Up
    if (event.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // Down
    else if (event.keyCode === 40) {
      setSuggestionIndex(suggestionIndex + 1);
    }
    // Enter
    else if (event.keyCode === 13 && searchQuery !== "") {
      let query = suggestions[suggestionIndex] || searchQuery;
      setSearchQuery(query);
      setSuggestions(searchCache[searchQuery]);
      setSuggestionIndex(0);
      setShowSuggestions(false);
      localStorage.setItem("searchQuery", query);
      window.location.href = `/results?search_query=${encodeURIComponent(
        query
      )}`;
    }
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
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
          value={searchQuery}
          ref={inputRef}
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleClickOutside}
          onKeyDown={handleKeyPress}
        />
        <button className="px-2 py-1 bg-gray-300 border border-gray-500 p-1 rounded-r-full">
          Search
        </button>
        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 z-10"
          >
            <ul>
              {suggestions.map((s, id) => (
                <div onClick={() => handleSearch(s)}>
                  <li
                    key={id}
                    className={
                      id === suggestionIndex
                        ? "bg-[#eeeeee] items-center justify-start flex px-3 py-2 font-bold"
                        : "items-center justify-start flex px-3 py-2 font-bold"
                    }
                  >
                    <img
                      className="mr-2 h-4 ml-3 inline-block"
                      alt="search-icon"
                      src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                    />
                    <span>{s}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
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
