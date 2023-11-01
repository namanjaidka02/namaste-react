import React, { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="mx-auto my-5 w-6/12 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {" "}
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{">"}</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
