import { useEffect } from "react";
import { useParams } from "react-router";
import FilterNav from "../component/ShopComponent/FilterSider";
import ProductsShow from "../component/ShopComponent/ProductsShow";
import { result } from "../redux/feature/filterSlice";
import { useAppDispatch } from "../redux/hooks";

function ProductsPage() {
  // 路由傳參
  let { search } = useParams();
  // 修改類型並保證輸出結果
  let searchResult = () => {
    if (search === undefined) {
      return " ";
    } else {
      return search as string;
    }
  };

  // 派發
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(result(`${searchResult()}`));
  });

  return (
    <div className="lg:grid lg:grid-cols-6">
      <FilterNav />
      <ProductsShow />
    </div>
  );
}

export default ProductsPage;
