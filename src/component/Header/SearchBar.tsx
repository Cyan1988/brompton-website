import React from "react";
import { Link } from "react-router-dom";
import { Input, ConfigProvider } from "antd";

function SearchBar(props: any) {
  // 设置开关状态
  let { search, getSetSearch } = props;

  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <div
      className={`fixed ${
        search ? "grid" : "hidden"
      } grid grid-rows-3 grid-cols-1 text-center justify-between w-[27rem] h-screen z-20 top-0 right-0 pt-24 bg-neutral-100`}
    >
      <button
        className="absolute top-3 right-3"
        onClick={() => {
          getSetSearch(search);
        }}
      >
        Close
      </button>
      <div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "gray",
            },
          }}
        >
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            className="w-[70%]"
          />
        </ConfigProvider>
      </div>
      <div>Recommend List</div>
      <button className="bg-transparent hover:bg-slate-500 text-black font-semibold hover:text-white w-[50%] h-[20%] m-auto border border-black hover:border-transparent rounded">
        <Link to="/">Search</Link>
      </button>
    </div>
  );
}

export default SearchBar;
