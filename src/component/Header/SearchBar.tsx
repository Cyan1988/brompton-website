import { Input, ConfigProvider } from "antd";

function SearchBar(props: any) {
  // 获取header的状态设置开关
  let { searchShow, getSetSearchShow } = props;

  const { Search } = Input;

  const onSearch = (value: string) => {
    window.location.href = `/shop/result/${value}`;
  };

  return (
    <div
      className={`fixed ${
        searchShow ? "grid" : "hidden"
      } grid grid-rows-3 grid-cols-1 text-center justify-between w-[27rem] h-screen z-20 top-0 right-0 pt-24 bg-neutral-100`}
    >
      <button
        className="absolute top-3 right-3"
        onClick={() => {
          getSetSearchShow(searchShow);
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
    </div>
  );
}

export default SearchBar;
