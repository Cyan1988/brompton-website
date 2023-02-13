import React from "react";
import { Carousel } from "antd";

// 因为官网没有轮播图，所以没有图片的JSON文件，因此手动创建list代替
const MainCarouselList: {
  id: string;
  text: string;
}[] = [
  {
    id: "Clound-Blue-C-Line-Folded-Banner.png",
    text: "Spread the cost of your new Brompton with Klarna.",
  },

  { id: "Built to last.jpg", text: "Made in London." },

  {
    id: "TIG welding 1551x702.jpg",
    text: "I am the storm that is approaching.",
  },
  { id: "We are Brompton.jpg", text: "We are Brompton." },
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
