import React from "react";
import { useParams } from "react-router";

function ProductsDetailPage() {
  const params = useParams();
  console.log(params);

  return (
    <div className="grid grid-cols-2 h-[30rem]">
      <div>我是圖片</div>
      <div className="grid grid-rows-2">
        <div>Logo+文字信息</div>
        <div>数量+价格+add</div>
      </div>
    </div>
  );
}

export default ProductsDetailPage;
