import React, { useState } from "react";
import { removeItem } from "../../redux/feature/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

function DeleteConfirm(props: any) {
  // 確認的狀態
  const [confirm, setConfirm] = useState(false);

  // 接受props
  let { deleteShow, getSetDeleteShow, deleteId } = props;

  // dispatch
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed ${
        deleteShow ? "" : "hidden"
      } top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-20`}
    >
      <div className="bg-zinc-100 w-[20rem] sm:w-[25rem] md:w-[30rem] h-[15rem] mx-auto px-6 translate-y-[10rem] rounded-xl font-sans text-slate-800 grid grid-rows-3 items-center">
        <h2 className="text-2xl font-bold border-b-2 border-gray-600 pb-2">
          Confirm
        </h2>
        <p className="text-lg text-center">
          {confirm
            ? "Delete Successfully."
            : "Are you sure you want to delete this item?"}
        </p>
        <div className="absolute right-8 bottom-6">
          {confirm ? (
            <div>
              <button
                className="border-solid border-gray-600 border-2 rounded-md px-2 py-1"
                onClick={() => {
                  getSetDeleteShow(false);
                  setConfirm(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <button
                className="border-solid bg-gray-600 text-slate-100 border-gray-600 border-2 rounded-md px-2 py-1 mr-3"
                onClick={() => {
                  setConfirm(true);
                  dispatch(removeItem(deleteId));
                }}
              >
                Confirm
              </button>
              <button
                className="border-solid border-gray-600 border-2 rounded-md px-2 py-1"
                onClick={() => {
                  getSetDeleteShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
