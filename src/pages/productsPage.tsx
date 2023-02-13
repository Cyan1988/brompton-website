import React, { createContext, useState } from "react";
import FilterNav from "../component/ShopComponent/FilterNav";
import ProductsShow from "../component/ShopComponent/ProductsShow";

export const SeriesContext = createContext("");

function ProductsPage() {
  // 设置状态
  const [series, setSeries] = useState("");

  // 设置改变状态的方法
  const getSeriesName = (seriesName: any) => {
    setSeries(seriesName);
  };

  return (
    <SeriesContext.Provider value={series}>
      <div className="lg:grid lg:grid-cols-6">
        {/* 将状态和设置状态的方法以参数传给子组件 */}
        <FilterNav series={series} getSeriesName={getSeriesName} />
        <ProductsShow />
      </div>
    </SeriesContext.Provider>
  );
}

export default ProductsPage;
