import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  // 導航欄開關
  const [navOpen, setNavOpen] = useState(false);
  // 購物車開關
  const [cartOpen, setCartOpen] = useState(false);
  // 購物車右上角數字，獲取公共狀態
  const cart = useAppSelector((state) => state.cart.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return { totalQuantity };
  };
  // 父子通信，把状态和修改状态的方法传给子组件
  const getSetCartOpen = (cartOpen: boolean) => {
    setCartOpen(!cartOpen);
  };
  // 搜索的状态
  const [searchShow, setSearchShow] = useState(false);
  const getSetSearchShow = (searchShow: boolean) => {
    setSearchShow(!searchShow);
  };

  return (
    <div className="h-[4.3rem]">
      <nav
        className={`fixed z-20 w-full ${
          navOpen ? "h-screen md:h-auto" : "h-auto"
        }  bg-gray-100 font-sans md:flex`}
      >
        {/* 左上角logo */}
        <div className="ml-2">
          <Link to="/">
            <svg
              width="149"
              height="37"
              viewBox="0 0 149 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block m-4"
            >
              <path
                d="M0 0.0507812V36.0508H148.011V0.0507812H0ZM146.022 34.0619H1.99139V2.04471H146.022V34.0619Z"
                fill="#060606"
              />
              <path
                d="M21.6826 21.5835C21.6826 19.714 20.6285 18.4618 18.5456 17.8573C20.2576 17.2527 21.233 15.9344 21.233 14.2123C21.233 13.0794 20.7986 12.1091 19.9782 11.403C19.0435 10.5978 17.682 10.1914 15.9319 10.1914H10.1406V11.8856H11.6011V24.2226H10.1406V25.9168H16.2164C19.5362 25.9143 21.6826 24.215 21.6826 21.5835ZM13.4808 11.8602H15.8811C18.0833 11.8602 19.3483 12.7772 19.3483 14.3774C19.3483 16.1148 18.0249 17.1105 15.716 17.1105H13.4808V11.8602ZM13.4808 18.6878H15.7617C18.3272 18.6878 19.7979 19.7089 19.7979 21.4921C19.7979 23.1913 18.4415 24.248 16.2596 24.248H13.4808V18.6878Z"
                fill="#060606"
              />
              <path
                d="M60.7806 24.2226H59.3251V13.6433L64.5703 23.6739L64.5881 23.712H65.1444L70.4327 13.6433L70.4378 24.2226H68.9722V25.9168H73.844V24.2226H72.3454V11.8856H73.8542V10.1914H70.5216L64.8904 20.7021L59.2896 10.2295L59.2718 10.1914H55.9062V11.8856H57.415V24.2226H55.9062V25.9168H60.7806V24.2226Z"
                fill="#060606"
              />
              <path
                d="M81.633 24.2226H80.0581V20.2551C80.5179 20.2779 81.3713 20.2982 82.1968 20.2982C85.8037 20.2982 88.044 18.3297 88.044 15.1623C88.044 12.2361 85.6488 10.1914 82.2197 10.1914H76.6875V11.8856H78.1506V24.2226H76.6875V25.9168H81.6304V24.2226H81.633ZM80.0556 11.8856H82.2426C84.5718 11.8856 86.1364 13.2115 86.1364 15.1851C86.1364 17.3086 84.6632 18.6294 82.2908 18.6294C81.1199 18.6294 80.3401 18.5989 80.0556 18.5862V11.8856Z"
                fill="#060606"
              />
              <path
                d="M91.9165 11.8145H95.6986V24.2226H94.1264V25.9168H99.1785V24.2226H97.6037V11.8145H101.386V13.7983H103.199V10.1914H90.1055V13.7983H91.9165V11.8145Z"
                fill="#060606"
              />
              <path
                d="M45.9662 26.1981C50.4646 26.1981 54.1121 22.5506 54.1121 18.0522C54.1121 13.5538 50.4646 9.90625 45.9662 9.90625C41.4678 9.90625 37.8203 13.5538 37.8203 18.0522C37.8203 22.5506 41.4678 26.1981 45.9662 26.1981ZM45.9662 11.8113C49.4131 11.8113 52.2071 14.6053 52.2071 18.0522C52.2071 21.499 49.4131 24.293 45.9662 24.293C42.5194 24.293 39.7253 21.499 39.7253 18.0522C39.7253 14.6053 42.5194 11.8113 45.9662 11.8113Z"
                fill="#060606"
              />
              <path
                d="M112.642 26.1981C117.14 26.1981 120.788 22.5506 120.788 18.0522C120.788 13.5538 117.14 9.90625 112.642 9.90625C108.144 9.90625 104.496 13.5538 104.496 18.0522C104.496 22.5506 108.144 26.1981 112.642 26.1981ZM112.642 11.8113C116.089 11.8113 118.883 14.6053 118.883 18.0522C118.883 21.499 116.089 24.293 112.642 24.293C109.195 24.293 106.401 21.499 106.401 18.0522C106.401 14.6053 109.198 11.8113 112.642 11.8113Z"
                fill="#060606"
              />
              <path
                d="M28.9265 24.2212H27.4202V19.5425C27.8114 19.5603 29.1805 19.5857 29.1805 19.5857C30.0517 19.5857 30.7833 19.7025 31.1871 20.4442L33.3309 24.7191C33.844 25.7529 33.8821 25.9104 35.1089 25.9104H36.506V24.2187H35.9116C35.3757 24.2187 35.02 23.9317 34.7965 23.4592L32.8991 19.6568C32.6807 19.2326 32.3682 19.0192 32.2641 18.9557C34.1361 18.1988 35.241 16.6646 35.241 14.7799C35.241 11.9909 32.9931 10.1875 29.5132 10.1875H24.0547V11.8817H25.5152V24.2187H24.0547V25.9129H28.9265V24.2212ZM27.4202 11.8817H29.4167C31.906 11.8817 33.3335 12.9561 33.3335 14.8282C33.3335 16.7332 31.7688 17.9168 29.2491 17.9168C28.5023 17.9168 27.8495 17.894 27.4177 17.8711V11.8817H27.4202Z"
                fill="#060606"
              />
              <path
                d="M125.893 13.529L135.299 25.9193H136.417V11.8831H137.875V10.1914H132.975V11.8831H134.606V21.9391L125.715 10.2168L125.695 10.1914H122.594V11.8831H124.059V24.2226H122.594V25.9143H127.397V24.2226H125.893V13.529Z"
                fill="#060606"
              />
            </svg>
          </Link>
        </div>

        {/* 菜單子選項 */}

        <div
          className={`${
            navOpen ? "flex" : "translate-x-full"
          } bg-inherit fixed md:static md:translate-x-0 transform duration-200 h-[90%] w-full px-7 py-4 md:flex md:justify-between md:px-1 md:py-3`}
        >
          <ul
            className="text-[1.25rem] md:inline-flex md:space-x-3"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            <Link to="/home">
              <li className="py-2">HOME</li>
            </Link>
            <Link to="/shop">
              <li className="py-2">SHOP</li>
            </Link>
            <Link to="/contact">
              <li className="py-2">CONTACT</li>
            </Link>
            <Link to="/about">
              <li className="py-2">ABOUT</li>
            </Link>
          </ul>

          {/* 登錄 + 搜索 */}
          <ul
            className="absolute bottom-[5%] md:inline-flex md:static md:py-2"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            {/* 搜索 */}
            <li
              className="py-2 cursor-pointer md:py-0"
              onClick={() => {
                setSearchShow(!searchShow);
              }}
            >
              <img
                className="inline-block h-7 pr-1 mt-[2px] md:mx-2"
                src={require("../../icons/search.png")}
                alt="search"
              ></img>
              <span className="text-sm md:hidden">SEARCH</span>
            </li>
            {/* 登錄 */}
            <Link to="/login">
              <li>
                <img
                  className="inline-block h-7 pr-1"
                  src={require("../../icons/account.png")}
                  alt="account"
                ></img>
                <span className="text-sm md:text-base">LOGIN</span>
              </li>
            </Link>
          </ul>
        </div>

        {/* 始終在導航欄出現的購物車按鈕 */}
        <div className="absolute top-5 right-2 md:static md:inline-flex md:mt-5 md:mr-4">
          <span className="hidden md:flex ml-4 mr-2">|</span>
          <img
            className="inline-block mx-2 h-7 cursor-pointer"
            src={require("../../icons/basket.png")}
            alt="basket"
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          ></img>
          {/* 購物車數量 */}
          <span
            className={`${
              getTotal().totalQuantity === 0 ? "hidden" : "flex"
            } absolute bg-slate-700 text-white text-xs  text-center leading-4 rounded-full top-0 md:top-4 right-7 xl:right-2 lg:right-1 md:right-0`}
          >
            <p className="px-1">{getTotal().totalQuantity}</p>
          </span>

          {/* 移動端導航欄開關 */}
          <button
            className="md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {navOpen ? (
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline-block h-6 right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 购物车 shop cart */}
      <Cart cartOpen={cartOpen} getSetCartOpen={getSetCartOpen} />

      {/* 搜索框 search bar */}
      <SearchBar searchShow={searchShow} getSetSearchShow={getSetSearchShow} />
    </div>
  );
};

export default Header;
