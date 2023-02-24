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
  }[] = productsList;

  // filter返回的是一個數組對象，我们需要的有且只有第一個
  const detailList = itemList.filter((item) => item.id === params.id);
  const view = detailList[0];

  // 設置函數通過tailwind改變背景色
  function colorTheme() {
    switch (true) {
      case view.series === "A Line": {
        return "teal-600";
      }
      case view.series === "C Line": {
        return "red-600";
      }
      case view.series === "P Line": {
        return "violet-900";
      }
    }
  }

  // 商品數量的狀態
  let [count, setCount] = useState(1);

  // 以下是redux獲取數據
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-rows-2 items-center text-center bg-gray-100 lg:grid-rows-none lg:grid-cols-5">
      <div className="lg:col-span-3">
        {/* 左侧大图片 */}
        <img
          className="inline-block object-cover"
          src={view.img_url}
          alt=""
        ></img>
      </div>
      {/* 右侧详情 */}
      <div className="grid grid-rows-2 lg:col-span-2 text-slate-50">
        <div className="grid grid-rows-2 bg-slate-700">
          <div>
            <img
              className="h-[6em] mx-auto mt-10"
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
                className="inline-block w-6 mx-2 align-sub text-slate-700"
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
                className="inline-block w-6 mx-2 align-sub text-slate-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="my-auto">
            <span className="font-bold text-[1.25rem] mr-6">
              Price: {view.price}
            </span>
            <span className="align-text-bottom font-bold">
              Weight: {view.weight}
            </span>
          </div>
          <div className="my-auto">
            <button
              className="bg-slate-900 hover:bg-slate-500 text-[1.25rem] text-slate-200 font-semibold hover:text-white w-[40%] h-[2.75rem] m-auto border border-black hover:border-transparent rounded"
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
    </div>
  );
}

export default ProductsDetailPage;
