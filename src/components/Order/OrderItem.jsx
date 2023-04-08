import React from "react";
import { BsTrashFill } from "react-icons/bs";

function OrderItem({ product, handler }) {
  const { HandleQuantity, deleteItem } = handler;
  const { quantity, price, image, title } = product;
  return (
    <div className="px-6 py-3 rounded-lg shadow-lg mb-8 border-2 grid grid-cols-cartItem gap-8 items-center w-10/12 mx-auto mt-5">
      <img className=" rounded-md " src={image} alt="" />
      <div>
        <h4 className="card-title">{title}</h4>
        <p className="font-semibold mt-2 ">
          {" "}
          Price :{" "}
          <span className="text-green-600">
            ${(price * quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="w-fit mx-auto">
        <button
          onClick={() => HandleQuantity(product.id, true)}
          className="btn-sm btn text-xl font-bold  btn-success"
        >
          +
        </button>
        <input
          type="text"
          value={quantity}
          className="text-center w-2/5 border-2 rounded-md mx-3 "
          readOnly
        />
        <button
          onClick={() => HandleQuantity(product.id, false)}
          className="btn-sm btn text-xl font-bold  btn-success"
        >
          -
        </button>
      </div>
      <button
        onClick={() => deleteItem(product.id)}
        className="btn-sm btn text-xl font-bold  bg-red-700 text-white"
      >
        <BsTrashFill />
      </button>
    </div>
  );
}

export default OrderItem;
