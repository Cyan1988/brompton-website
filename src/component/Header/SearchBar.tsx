import { Input, ConfigProvider } from "antd";
import { useNavigate } from "react-router";

function SearchBar(props: any) {
  // 获取header的状态设置开关
  let { searchShow, getSetSearchShow } = props;

  const { Search } = Input;

  const navigate = useNavigate();

  const onSearch = (value: string) => {
    navigate(`/shop/result/${value}`);
  };

  return (
    <div
      className={`fixed ${
        searchShow ? "grid" : "translate-x-full"
      } grid grid-rows-3 grid-cols-1 justify-between w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-screen z-20 top-0 right-0 pt-24 p-10 bg-neutral-100 transition-transform`}
    >
      <button
        className="absolute top-3 right-3"
        onClick={() => {
          getSetSearchShow(searchShow);
        }}
      >
        <svg
          className="inline-block h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
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
          />
        </ConfigProvider>
      </div>
      <div>
        <div className="text-sm">POPULAR SEARCHES</div>
        <div className="grid grid-cols-2 pt-[2rem] text-2xl gap-2">
          <span
            className="cursor-pointer"
            onClick={() => {
              onSearch("C Line");
            }}
          >
            C Line
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              onSearch("Explore");
            }}
          >
            Explore
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              onSearch("Electric");
            }}
          >
            Electric
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              onSearch("Urban");
            }}
          >
            Urban
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
