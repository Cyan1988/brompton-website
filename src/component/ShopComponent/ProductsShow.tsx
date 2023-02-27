import { Card } from "antd";
import { List, Breadcrumb, ConfigProvider } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

const ProductsShow = () => {
  // 產品顯示界面不需要派發，只需要接收數據進行狀態渲染
  const list = useAppSelector((state) => state.filter);

  // 路由跳轉
  const navigate = useNavigate();

  // Ant Design卡片组件
  const { Meta } = Card;

  return (
    <div className="md:col-start-2 md:col-end-7">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "gray",
          },
        }}
      >
        {/* 麵包屑 */}
        <Breadcrumb className="absolute z-10 ml-7 mt-5">
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/shop">bike</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        {/* Grid List 组件 */}
        <List
          className="bg-[#eff2f2] pt-5"
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
                className="block h-[25rem] mt-10 cursor-pointer bg-[#F9F7F8]"
                hoverable
                bordered
                cover={
                  <img
                    className="h-[15rem] object-contain"
                    alt=""
                    src={item.img_url}
                  />
                }
                onClick={() => {
                  navigate(`/shop/detail/${item.id}`);
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
    </div>
  );
};

export default ProductsShow;
