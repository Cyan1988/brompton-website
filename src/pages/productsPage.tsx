import { useEffect } from "react";
import { useParams } from "react-router";
import FilterNav from "../component/ShopComponent/FilterSider";
import ProductsShow from "../component/ShopComponent/ProductsShow";
import { result } from "../redux/feature/filterSlice";
import { useAppDispatch } from "../redux/hooks";

function ProductsPage() {
  let { search } = useParams();
  let searchResult = () => {
    if (search === undefined) {
      return " ";
    } else {
      return search as string;
    }
  };
  console.log(searchResult());

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
