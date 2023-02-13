import React from "react";

function RecommendListTitle() {
  return (
    <div className="text-center text-[2.7rem] md:text-[4rem] lg:text-[5rem] py-3 text-white bg-zinc-600">
      Recommend for You
      <div className="flex my-3">
        <button className="text-[1rem] px-2 bg-transparent border-2 border-white rounded ml-auto mr-[4rem]">
          Show All
        </button>
      </div>
    </div>
  );
}

export default RecommendListTitle;
