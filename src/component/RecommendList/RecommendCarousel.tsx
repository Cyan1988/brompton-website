import React, { useRef } from "react";
import { Carousel, Card } from "antd";
import products_list from "../../data/products_list.json";
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router";

const itemList: {
  title: string;
  img_url: string;
  price: string;
  weight: string;
  text: string;
  id: string;
}[] = products_list;

// 卡片组件
const { Meta } = Card;

// 响应式的卡片轮播图
const RecommendCarousel: React.FC = () => {
  // useRef 傳參
  const carouselRef: any = useRef(null);

  const navigate = useNavigate();

  return (
    <>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        // arrows={true}
        dots={false}
        responsive={[
          {
            breakpoint: 2048,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        className="content-around px-12 pb-2 bg-[#E8E8E8]"
        ref={carouselRef}
      >
        {itemList.map((item) => (
          <div key={item.title}>
            <Card
              className="block h-[25rem] md:h-[30rem] mx-4 my-6 bg-[#F9F7F8] cursor-pointer"
              hoverable
              onClick={() => {
                navigate(`/shop/detail/${item.id}`);
              }}
              cover={
                <img
                  className="h-[15rem] md:h-[20rem] object-contain"
                  alt=""
                  src={item.img_url}
                />
              }
            >
              <Meta title={item.title} />
              <div className="my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </div>
        ))}
      </Carousel>

      {/* 左右切換按鈕 */}
      <LeftOutlined
        className="text-gray-700 absolute text-[2rem] left-2 -translate-y-[18rem]"
        onClick={() => {
          carouselRef.current.prev();
        }}
      />
      <RightOutlined
        className="text-gray-700 absolute text-[2rem] right-2 -translate-y-[18rem]"
        onClick={() => {
          carouselRef.current.next();
        }}
      />
    </>
  );
};
export default RecommendCarousel;
