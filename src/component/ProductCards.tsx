import { Card } from "antd";
import products_list from "../data/products_list.json";

// 涉及到组件库的配合、样式修改和变化的问题不作为组件使用

const itemList: {
  title: string;
  img_url: string;
  price: string;
  weight: string;
  text: string;
}[] = products_list;

// 卡片组件
const { Meta } = Card;

function ProductCards() {
  return (
    <>
      {itemList.map((item) => (
        <div className="" key={item.title}>
          <Card
            className="block h-[30rem] w-[18rem] mx-4 my-6 cursor-pointer"
            hoverable
            cover={
              <img
                className="h-[15rem] object-cover"
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
    </>
  );
}

export default ProductCards;
