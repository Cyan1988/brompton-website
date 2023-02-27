import React from "react";
import { Carousel } from "antd";

const MainCarouselList: {
  id: string;
  text: string;
}[] = [
  {
    id: "1551x702 CHPT3 Hero HP.jpg",
    text: "Brompton x CHPT3",
  },
  {
    id: "Clound-Blue-C-Line-Folded-Banner.png",
    text: "Spread the cost of your new Brompton with Klarna.",
  },
  { id: "Built to last.jpg", text: "Made in London." },
  {
    id: "1680x915 Folds into your journey Shadow.jpg",
    text: "Folds into your journey Shadow.",
  },
];

// 遍历列表的图片
const MainCarousel: React.FC = () => (
  <Carousel autoplay>
    {MainCarouselList.map((item) => (
      <div className="h-[20rem] md:h-[40rem]" key={item.id}>
        <img
          className="block h-[20rem] w-full md:h-[40rem] object-cover"
          src={require("./carousel_img/" + item.id)}
          alt=""
        ></img>
        <p
          className="text-[2rem] md:text-[3rem] transition-shadow text-violet-50 text-center -translate-y-[13rem] md:-translate-y-[24rem]"
          style={{ textShadow: "1px 1px 1px black" }}
        >
          {item.text}
        </p>
      </div>
    ))}
  </Carousel>
);

export default MainCarousel;
