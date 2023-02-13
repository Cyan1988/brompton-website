import React from "react";
import { Link } from "react-router-dom";

function Cart(props: any) {
  // 设置开关状态
  let { show, getSetShow } = props;

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
        Your basket is empty.
        <br />
        （这里需要数据更新）
      </div>
      <button className="bg-transparent hover:bg-slate-500 text-black font-semibold hover:text-white w-[50%] h-[20%] m-auto border border-black hover:border-transparent rounded ">
        <Link to="checkout">CHECK OUT</Link>
      </button>
    </div>
  );
}

export default Cart;
