import FilterNav from "../component/ShopComponent/FilterNav";
import ProductsShow from "../component/ShopComponent/ProductsShow";

function ProductsPage() {
  return (
    <div className="lg:grid lg:grid-cols-6">
      <FilterNav />
      <ProductsShow />
    </div>
  );
}

export default ProductsPage;
