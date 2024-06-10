import React from "react";

const Buttons = ({ name }) => {
  console.log(name, "name");
  return (
    <div>
      <button className="p-2 m-2 px-5 py-2 w-max rounded-lg bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
