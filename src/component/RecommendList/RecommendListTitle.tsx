import React from "react";
import { NavLink } from "react-router-dom";

function RecommendListTitle() {
  return (
    <div className="text-center text-[2.7rem] md:text-[4rem] lg:text-[5rem] text-gray-700 bg-[#E8E8E8] pt-2">
      BROMPTON BIKES
      <div className="flex">
        <button className="text-[1.25rem] px-2 bg-transparent border-2 border-gray-700 rounded mt-3 mr-[3rem] md:mr-[4rem] ml-auto mb-2">
          <NavLink to="/shop">Show All</NavLink>
        </button>
      </div>
    </div>
  );
}

export default RecommendListTitle;
