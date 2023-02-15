import React, { useState, useEffect } from "react";
import products_list from "../../data/products_list.json";

const FilterNav = (props: any) => {
  // 获取需要的数据
  const itemList: {
    title: string;
    img_url: string;
    price: string;
    weight: string;
    text: string;
    series: string;
  }[] = products_list;

  // 得到所有的series name
  const allSeriesList = itemList.map((item) => {
    return item.series;
  });

  // 过滤重复的数据的函数
  function unique(arr: string[]) {
    return Array.from(new Set(arr));
  }
  // 得到不重复的seriesList
  const seriesList = unique(allSeriesList);

  // 控制下拉菜单的状态
  const [open, setOpen] = useState(false);

  // 子组件接收参数，传递数据给父组件
  const { getSeriesName } = props;
  const [seriesName, setSeriesName] = useState<string>("All Series");
  // 待页面渲染完成后执行父组件修改状态的方法的监听，[]里的是依赖，需要依赖变化才会触发useEffect的重新渲染
  useEffect(() => {
    getSeriesName(seriesName);
  }, [seriesName, getSeriesName]);

  return (
    <div className="bg-neutral-200 text-[1.25rem] p-3  lg:pt-6 lg:col-start-1 lg:col-end-1">
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
          id="All Series"
          onClick={(e) => {
            setSeriesName(e.currentTarget.id);
          }}
        >
          All
        </li>
        {seriesList.map((item) => (
          <div
            className="text-[1.5rem] h-[3rem] leading-[3rem] cursor-pointer active:bg-gray-300"
            key={item}
            id={item}
            // 踩坑：1.key值无法被读取 2.需要使用 currentTarget
            onClick={(e) => {
              setSeriesName(e.currentTarget.id);
            }}
          >
            {item}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FilterNav;
