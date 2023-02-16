import { Card } from "antd";
import { List, ConfigProvider } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterSelector } from "../../redux/feature/filterSlice";

const ProductsShow = () => {
  const list = useAppSelector((state) => state.filterList);
  const dispatch = useAppDispatch();

  console.log("list", list);

  // Ant Design卡片组件
  const { Meta } = Card;

  return (
    // 修改组件默认主题色
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "gray",
        },
      }}
    >
      {/* 左上角系列名 */}
      <div className="absolute text-[2rem] pt-1 ml-[5%] sm:ml-[4%] lg:ml-[18.2%] z-10"></div>
      {/* Grid List 组件 */}
      <List
        className="bg-neutral-200 pt-6 md: col-start-2 md:col-end-7"
        grid={{
          gutter: 0,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={list} // 这个参数会收到传来的数据
        pagination={{
          pageSize: 6,
          className: "float-none text-center pb-6",
        }}
        renderItem={(item) => (
          <List.Item>
            <Card
              className="block h-[25rem] mt-10 cursor-pointer"
              hoverable
              bordered
              cover={
                <img
                  className="h-[15rem] object-cover"
                  alt=""
                  src={item.img_url}
                />
              }
              onClick={() => {
                window.location.href = `/shop/detail/${item.id}`;
              }}
            >
              <Meta title={item.title} />
              <div className="my-6">
                {item.price}
                <span className="px-2">—</span>
                {item.weight}
              </div>
              <Meta description={item.text}></Meta>
            </Card>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
};

export default ProductsShow;
