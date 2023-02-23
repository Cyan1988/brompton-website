import React from "react";
import { Carousel, Card } from "antd";
import products_list from "../../data/products_list.json";
import "./arrow_style.css";

const itemList: {
  title: string;
  img_url: string;
  price: string;
  weight: string;
  text: string;
}[] = products_list;

// 卡片组件
const { Meta } = Card;

// 輪播思考重構中

// 响应式的卡片轮播图
const RecommendCarousel: React.FC = () => (
  <>
    <div className="hidden xl:block">
      <Carousel
        autoplay
        arrows={true}
        dots={false}
        slidesToShow={4}
        slidesToScroll={4}
        className="content-around px-12 bg-zinc-600"
      >
        {itemList.map((item) => (
          <div key={item.title}>
            <Card
              className="block h-[30rem] mx-4 my-6 cursor-pointer"
              hoverable
              cover={
                <img
                  className="h-[20rem] object-cover"
                  alt=""
                  src={item.img_url}
                />
              }
            >
              <Meta title={item.title} />
              <div className="mx-1 my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </div>
        ))}
      </Carousel>
      {/* 先用组件库内置函数和css代替一下，以后再自己写 */}
      <div className="absolute flex w-full -translate-y-[17.7rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block translate-x-3 h-10 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block h-10 ml-auto mr-2 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div className="hidden lg:block xl:hidden">
      <Carousel
        autoplay
        arrows={true}
        dots={false}
        slidesToShow={3}
        slidesToScroll={4}
        className="content-around px-12 bg-zinc-600"
      >
        {itemList.map((item) => (
          <div key={item.title}>
            <Card
              className="block h-[30rem] mx-4 my-6 cursor-pointer"
              hoverable
              cover={
                <img
                  className="h-[20rem] object-cover"
                  alt=""
                  src={item.img_url}
                />
              }
            >
              <Meta title={item.title} />
              <div className="mx-1 my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </div>
        ))}
      </Carousel>
      {/* 先用组件库内置函数和css代替一下，以后再自己写 */}
      <div className="absolute flex w-full -translate-y-[17.7rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block translate-x-3 h-10 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block h-10 ml-auto mr-2 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div className="hidden md:block lg:hidden">
      <Carousel
        autoplay
        arrows={true}
        dots={false}
        slidesToShow={2}
        slidesToScroll={6}
        className="content-around px-12 bg-zinc-600"
      >
        {itemList.map((item) => (
          <div key={item.title}>
            <Card
              className="block h-[30rem] mx-4 my-6 cursor-pointer"
              hoverable
              cover={
                <img
                  className="h-[20rem] object-cover"
                  alt=""
                  src={item.img_url}
                />
              }
            >
              <Meta title={item.title} />
              <div className="mx-1 my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </div>
        ))}
      </Carousel>
      {/* 先用组件库内置函数和css代替一下，以后再自己写 */}
      <div className="absolute flex w-full -translate-y-[17.7rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block translate-x-3 h-10 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block h-10 ml-auto mr-2 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div className="block md:hidden">
      <Carousel
        autoplay
        arrows={true}
        slidesToShow={1}
        slidesToScroll={1}
        className="content-around px-12 bg-zinc-600"
      >
        {itemList.map((item) => (
          <div key={item.title}>
            <Card
              className="block h-[20rem] mx-6 mb-6 cursor-pointer"
              hoverable
              cover={
                <img
                  className="h-[11rem] object-cover"
                  alt=""
                  src={item.img_url}
                />
              }
            >
              <Meta title={item.title} />
              <div className="mx-1 my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  </>
);
export default RecommendCarousel;
