import React from "react";
import { NavLink } from "react-router-dom";

function RecommendListTitle() {
  return (
    <div className="text-center text-[2.7rem] md:text-[4rem] lg:text-[5rem] text-zinc-600 bg-gray-200 pt-2">
      BROMPTON BIKES
      <div className="flex">
        <button className="text-[1rem] px-2 bg-transparent border-2 border-zinc-600 text-zinc-600 font-semibold rounded mt-3 mr-[3rem] md:mr-[4rem] ml-auto mb-2">
          <NavLink to="/shop">Show All</NavLink>
        </button>
      </div>
    </div>
  );
}

export default RecommendListTitle;
