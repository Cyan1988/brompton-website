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

  // 改变tailwindCSS背景色, 这个就不用状态设置了
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
    <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-5">
      {/* 左侧大图片 */}
      <div className="bg-gray-100 md:col-span-3">
        <img className="w-[60rem] mx-auto my-6" src={view.img_url} alt=""></img>
      </div>
      {/* 右侧详情 */}
      <div className="grid grid-rows-2 md:col-span-2 text-slate-50">
        <div className={`${bgTheme()} grid grid-rows-2`}>
          <div>
            <img
              className="h-[7rem] mx-auto mt-8"
              src={require(`../images/${view.logo}`)}
              alt=""
            ></img>
          </div>
          <div className="py-5 px-10">
            <p className="text-[1.25rem]">{view.details}</p>
            <p className="pt-5">{view.text}</p>
          </div>
        </div>
        <div className="bg-zinc-200 text-slate-900 text-center grid grid-rows-3">
          <div className="font-bold text-[1.5rem] my-auto">
            Quantity: 这里设置状态
          </div>
          <div className="my-auto">
            <span className="font-bold text-[1.25rem] mr-6">
              Price: {view.price}
            </span>
            <span className="align-text-bottom">Weight: {view.weight}</span>
          </div>
          <div className="my-auto">
            <button className="bg-slate-900 hover:bg-slate-500 text-[1.25rem] text-slate-200 font-semibold hover:text-white w-[30%] h-[2.75rem] m-auto border border-black hover:border-transparent rounded">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetailPage;
