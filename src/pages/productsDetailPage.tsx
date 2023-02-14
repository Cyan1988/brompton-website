import { useParams } from "react-router";
import productsList from "../data/products_list.json";

function ProductsDetailPage() {
  // 获取动态路由传来的参数id
  const params = useParams();

  const itemList: {
    title: string;
    img_url: string;
    price: string;
    weight: string;
    text: string;
    series: string;
    details: string;
    logo: string;
    id: string;
  }[] = productsList;

  // 放弃axios，改回本地json读取。因为axios总是会先返回一个空数组，使得state的类型总有一个undefined，结果就是undefined不存在property，不知道该怎么解决，或许有朝一日可以明白

  // 踩坑：filter返回的是数组对象，我们需要提取整个数组对象的第一个
  const detailList = itemList.filter((item) => item.id === params.id);
  const view = detailList[0];

  // 改变tailwindCSS背景色
  function bgTheme() {
    if (view.series === "A Line") {
      return "bg-teal-600";
    }
    if (view.series === "C Line") {
      return "bg-red-600";
    }
    if (view.series === "P Line") {
      return "bg-violet-900";
    }
  }

  return (
    <div className="grid grid-cols-2 h-[30rem]">
      <div className="bg-zinc-500">
        <img src={view.img_url} alt=""></img>
      </div>
      <div className="grid grid-rows-2 text-slate-50">
        <div className={`${bgTheme()}`}>
          <div>
            <img src={require(`../images/${view.logo}`)} alt=""></img>
          </div>
          <div className="p-4">
            <p>{view.details}</p>
            <p>{view.text}</p>
          </div>
        </div>
        <div className="text-black">
          <div>Quantity</div>
          <div>
            <span>
              {view.price}-{view.weight}
            </span>
          </div>
          <div>
            <button>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetailPage;
