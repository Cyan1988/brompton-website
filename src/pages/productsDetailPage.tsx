import { useParams } from "react-router";
import productsList from "../data/products_list.json";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/feature/cartSlice";
import { useState } from "react";

function ProductsDetailPage() {
  // 獲取路由傳來的參數id
  const params = useParams();
  // 頁面本身的非數據内容的頁面渲染由其本身管理
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
    folded_size: string;
    handlebars: string;
  }[] = productsList;

  // filter返回的是一個數組對象，我们需要的有且只有第一個
  const detailList = itemList.filter((item) => item.id === params.id);
  const view = detailList[0];

  // 設置函數通過tailwind改變背景色
  function colorTheme() {
    switch (true) {
      case view.series === "A Line": {
        return "bg-teal-600";
      }
      case view.series === "C Line": {
        return "bg-red-600";
      }
      case view.series === "P Line": {
        return "bg-violet-900";
      }
    }
  }

  function colorSubTheme() {
    switch (true) {
      case view.series === "A Line": {
        return "border-teal-600 text-teal-600";
      }
      case view.series === "C Line": {
        return "border-red-600 text-red-600";
      }
      case view.series === "P Line": {
        return "border-violet-900 text-violet-900";
      }
    }
  }

  // 商品數量的狀態
  let [count, setCount] = useState(1);

  // 以下是redux獲取數據
  const dispatch = useAppDispatch();

  return (
    <div className="bg-[#F7F7F7] grid grid-rows-3 lg:grid-rows-none place-items-center text-center lg:grid-cols-7">
      <div className="row-span-1 lg:col-span-4">
        {/* 左侧大图片 */}
        <img className="object-cover" src={view.img_url} alt=""></img>
      </div>

      {/* 右侧详情 */}
      <div className="row-span-2 lg:row-span-1 lg:col-span-3 text-slate-50">
        <div className={`${colorTheme()}`}>
          <div className="py-10">
            <img
              className="h-[6em] mx-auto mt-2"
              src={require(`../images/${view.logo}`)}
              alt=""
            ></img>
          </div>
          <div className="px-10">
            <p className="text-[1.25rem]">{view.details}</p>
            <p className="font-bold pb-3 pt-5 text-[1.5rem]">{view.title}</p>
            <p className="pb-5">{view.text}</p>
          </div>
        </div>

        <div className={`py-4 text-left border-2 ${colorSubTheme()}`}>
          <div className="my-auto px-10">
            <p className="font-bold text-center">SPECIFICATION</p>
            <div className="flex flex-nowrap">
              <div className="whitespace-nowrap">
                <span className="font-bold">Folded size:</span>
              </div>
              <div className="flex flew-warp pl-1.5">
                <span> {view.folded_size}</span>
              </div>
            </div>
            <span className="font-bold">Weight:</span>
            <span> {view.weight}</span>
            <br />
            <span className=" font-bold">Handlebar: </span>
            <span> {view.handlebars}</span>
          </div>
        </div>

        <div className="bg-[#F7F7F7] text-slate-900 text-center mt-5">
          <div className="font-bold text-[1.5rem]">
            Quantity:
            <button
              onClick={() => {
                count > 1 && setCount(count - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block w-6 mx-2 align-sub"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 mx-2 align-sub inline-block"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="my-3">
            <span className="font-bold text-[1.25rem]">
              Price: {view.price}
            </span>
          </div>

          <button
            className="bg-slate-900 hover:bg-slate-500 text-[1.25rem] text-slate-200 font-semibold hover:text-white w-[40%] h-[2.75rem] mb-3 border border-black hover:border-transparent rounded"
            onClick={() => {
              dispatch(
                addToCart({
                  id: view.id,
                  title: view.title,
                  img: view.img_url,
                  price: view.price,
                  quantity: count,
                })
              );
            }}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetailPage;
