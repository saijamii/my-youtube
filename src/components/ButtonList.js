import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Cooking",
    "Marvel",
    "Spider Man",
    "Telugu cinema",
    "Vlogs",
  ];
  return (
    <div className="flex">
      {list?.map((e) => (
        <Buttons key={e} name={e} />
      ))}
    </div>
  );
};

export default ButtonList;
