import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/feature/cartSlice";

function Cart(props: any) {
  // 设置开关状态
  let { show, getSetShow } = props;

  // 獲取redux的狀態
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const getTotal = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      let cleanPriceStr = item.price.replace("£", "");
      let priceNoCommasStr = cleanPriceStr.replace(/,/g, "");
      let price = Number(priceNoCommasStr);
      totalQuantity += item.quantity;
      totalPrice += price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div
      className={`fixed ${
        show ? "grid" : "hidden"
      } grid grid-rows-3 grid-cols-1 text-center justify-between w-[27rem] h-screen z-20 top-0 right-0 pt-24 bg-neutral-100`}
    >
      <button
        className="absolute top-3 right-3"
        onClick={() => {
          getSetShow(show);
        }}
      >
        Close
      </button>
      <div>
        <img
          className="inline-block"
          src={require("../../icons/basket.png")}
          alt=""
        ></img>
      </div>
      <div>
        {cart !== undefined && cart.length === 0 ? (
          <div>Your Basket is Empty.</div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                {item.title} ----{" "}
                <button
                  onClick={() => {
                    dispatch(decrementQuantity(item.id));
                  }}
                >
                  --
                </button>
                {item.quantity}{" "}
                <button
                  onClick={() => {
                    dispatch(incrementQuantity(item.id));
                  }}
                >
                  ++
                </button>
                <button
                  onClick={() => {
                    dispatch(removeItem(item.id));
                  }}
                >
                  delete
                </button>
              </div>
            ))}
            <div>
              Total Amount:
              {getTotal().totalPrice.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
              })}
            </div>
            <div>Total items: {getTotal().totalQuantity}</div>
          </div>
        )}
      </div>

      <button className="bg-transparent hover:bg-slate-500 text-black font-semibold hover:text-white w-[50%] h-[20%] m-auto border border-black hover:border-transparent rounded ">
        <Link to="checkout">CHECK OUT</Link>
      </button>
    </div>
  );
}

export default Cart;
