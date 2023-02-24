import React from "react";

function aboutPage() {
  return (
    <>
      <div>
        <img
          src={require("../images/WE ARE BROMPTON2.jpg")}
          alt=""
          className="w-full"
        ></img>
      </div>
      {/* 一段文字 + 一個圖片 */}
      <div
        className="bg-gray-200 font-sans grid grid-rows-2 md:grid-rows-none md:grid-cols-2"
        style={{ direction: "rtl" }}
      >
        <img
          src={require("../images/1000x836 Brentford.jpg")}
          alt=""
          className="w-full object-cover"
        ></img>

        <div className="p-4 text-center self-center">
          <p className="font-bold text-[2rem] lg:text-[3rem] mb-2">
            The Brompton story
          </p>
          <p className="lg:text-[1.25rem]">
            Andrew Ritchie was a young engineer who believed in a better way to
            move around the city. In 1975 in the bedroom of his flat overlooking
            the Brompton Oratory, he invented a bike with an ingenious 3-part
            fold. A vehicle that transformed into a small package and could go
            anywhere with him. A 'magic carpet' for the city.
          </p>
        </div>
      </div>

      <div className="bg-gray-200 font-sans grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
        <img
          src={require("../images/C Line Four Block 840 x 740.jpg")}
          alt=""
          className="w-full object-cover"
        ></img>

        <div className="p-4 text-center self-center">
          <p className="font-bold text-[2rem] lg:text-[3rem] mb-2">
            Not like other bikes
          </p>
          <p className="lg:text-[1.25rem]">
            Bromptons are made different. We engineer an efficient solution for
            moving around the city and beyond. Ours is a bike that does more
            than the obvious. It answers problems owners tell us they didn't
            know they had. <br />
            <p className="mt-6">
              'You don't get Brompton until you get a Brompton.'
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default aboutPage;
