import axios from "axios";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useParams } from "react-router";

function ProductsDetailPage() {
  // 获取动态路由传来的参数id
  const params = useParams();

  // axios 获取数据
  const [data, setData] = useState(Array);

  // 在页面渲染前获取数据
  useLayoutEffect(() => {
    // 踩坑：axios访问本地public的文件时不需要写前缀
    axios
      .get("/products_list.json")
      .then((response) => {
        // 踩坑：filter 获取的是一组数组对象，我们需要的是数组的第一项数组
        const filterData = response.data.filter((item: any) => {
          return item.id === params.id;
        });
        setData(filterData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  console.log(data);

  return (
    <div className="grid grid-cols-2 h-[30rem]">
      <div>图片</div>
      <div className="grid grid-rows-2">
        <div>Logo+文字信息</div>
        <div>数量+价格+add</div>
      </div>
    </div>
  );
}

export default ProductsDetailPage;
