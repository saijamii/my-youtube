import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Siderbar = () => {
  const isMenuOPen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOPen) return null;
  return (
    <div className="p-5  shadow-lg col-span-1 w-48 h-full bg-slate-50">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
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
