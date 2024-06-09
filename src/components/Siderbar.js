import React from "react";

const Siderbar = () => {
  return (
    <div className="p-5  shadow-lg col-span-1 w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subcriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Moives</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Moives</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Siderbar;
