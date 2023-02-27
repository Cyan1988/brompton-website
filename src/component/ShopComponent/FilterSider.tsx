import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { result } from "../../redux/feature/filterSlice";
import productsList from "../../data/products_list.json";

const FilterNav = () => {
  // 控制下拉菜單展開的狀態
  const [open, setOpen] = useState(false);

  // redux toolkit 派發方法
  const dispatch = useAppDispatch();

  // 創建方法：根據某個property對數組去重，獲得不重複的series name，用於遍歷出filter的選項
  function unique(arr: Array<any>, val: PropertyKey) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[val]) && res.set(item[val], 1));
  }

  return (
    <div className="bg-[#eff2f2] text-[1.25rem] p-3  lg:pt-6 lg:col-start-1 lg:col-end-1">
      {/* Filter 按键 电脑端不显示 */}
      <div className="text-right">
        <div
          className="lg:hidden inline-block cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
      </div>
      {/* 菜单选项 */}
      {/* 传入state改变className */}
      <div className="hidden text-[2.5rem] h-[3rem] leading-[3rem] mx-4 lg:inline">
        Series
      </div>
      <ul
        className={`px-2 divide-y-2 ${
          open ? "" : "hidden"
        } lg:block lg:divide-y-2 lg:divide-gray-900 lg:m-6`}
      >
        <li
          className="text-[1.5rem] h-[3rem] leading-[3rem] cursor-pointer active:bg-gray-300"
          id=" "
          onClick={(e) => {
            dispatch(result(e.currentTarget.id));
          }}
        >
          All
        </li>
        {unique(productsList, "series").map((item) => (
          <div
            className="text-[1.5rem] h-[3rem] leading-[3rem] cursor-pointer active:bg-gray-300"
            key={item.id}
            id={item.series}
            onClick={(e) => {
              dispatch(result(e.currentTarget.id));
            }}
          >
            {item.series}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FilterNav;
