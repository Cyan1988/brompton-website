import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/feature/cartSlice";
import DeleteConfirm from "./DeleteConfirm";

function Cart(props: any) {
  // 设置开关状态
  let { cartOpen, getSetCartOpen } = props;

  // 獲取redux的狀態
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  // 計算總價格和總數量，中間是字符串轉數字
  const getTotal = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      let cleanPriceStr = item.price.replace("$", "");
      let priceNoCommasStr = cleanPriceStr.replace(/,/g, "");
      let price = Number(priceNoCommasStr);
      totalQuantity += item.quantity;
      totalPrice += price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  // 刪除確認框的狀態
  const [deleteShow, setDeleteShow] = useState(false);
  const getSetDeleteShow = () => {
    setDeleteShow(!deleteShow);
  };

  // 要刪除的商品id用於傳參
  const [deleteId, setDeleteId] = useState("");

  return (
    <>
      <div
        className={`fixed ${
          cartOpen ? "grid" : "translate-x-full"
        } grid grid-rows-8 grid-cols-1 text-center justify-between text-lg w-full sm:w-[70%] md:w-[50%] lg:w-[35%] h-full z-20 top-0 right-0 pt-24 bg-neutral-200 transition-transform`}
      >
        {/* 開關 */}
        <button
          className="absolute top-6 right-6"
          onClick={() => {
            getSetCartOpen(cartOpen);
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
        {/* 圖標 */}
        <div>
          <img
            className="inline-block row-span-1"
            src={require("../../icons/basket.png")}
            alt=""
          ></img>
        </div>
        {/* 商品列表 */}
        <div className="row-span-5 mx-1 overflow-y-scroll">
          {cart !== undefined && cart.length === 0 ? (
            <div>Your Basket is Empty.</div>
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <div className="grid grid-cols-4 items-center" key={item.id}>
                  <div>
                    <img
                      src={`${item.img}`}
                      alt=""
                      className="inline-block h-[4rem] w-[6rem] object-cover"
                    ></img>
                  </div>
                  <div>{item.title}</div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(decrementQuantity(item.id));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 align-sub inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <span className="mx-1">{item.quantity}</span>
                    <button
                      onClick={() => {
                        dispatch(incrementQuantity(item.id));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 align-sub inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setDeleteId(item.id);
                        setDeleteShow(true);
                      }}
                    >
                      <span className="right-0 mx-2 underline">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* 總數 */}
        <div
          className={`row-span-1 font-bold ${
            getTotal().totalPrice === 0 ? "hidden" : ""
          }`}
        >
          <div>Total Quantity: {getTotal().totalQuantity}</div>
          <div>
            Total Amount:{" "}
            {getTotal().totalPrice.toLocaleString("zh-HK", {
              style: "currency",
              currency: "HKD",
            })}
          </div>
        </div>
        {/* CHECK OUT */}
        <div className="row-span-1">
          <button className="bg-transparent hover:bg-slate-500 text-black font-semibold hover:text-white w-[45%] my-3 mx-auto border-2 border-black hover:border-transparent rounded-md">
            <Link
              to="checkout"
              onClick={() => {
                getSetCartOpen(cartOpen);
                cart.map((item) => dispatch(removeItem(item.id)));
              }}
            >
              CHECK OUT
            </Link>
          </button>
        </div>
      </div>

      {/* 刪除確認 */}
      <DeleteConfirm
        deleteShow={deleteShow}
        getSetDeleteShow={getSetDeleteShow}
        deleteId={deleteId}
      ></DeleteConfirm>
    </>
  );
}

export default Cart;
