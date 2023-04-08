import React, { useContext, useEffect, useState } from "react";
import CartList from "../Shop/CartList/CartList";
import { ShopContext } from "../../App";
import ProductList from "../Shop/ProductLIst/ProductList";
import { dataForCartFromDb } from "../../utilities/utilities";

const Order = () => {
  const [cart, setCart] = useState([]);
  const ProductLIst = useContext(ShopContext);

  useEffect(() => {
    const allCartProduct = dataForCartFromDb(ProductLIst);
    setCart(allCartProduct);
  }, [ProductLIst]);

  return (
    <div>
      <div className="grid grid-cols-Shop">
        <div>
          {cart.map((pd) => (
            <CartItem product={pd} key={pd.id}></CartItem>
          ))}
        </div>
        <CartList cart={cart}></CartList>
      </div>
    </div>
  );
};

function CartItem({ product }) {
  const { quantity, price, image, title } = product;
  return (
    <div className="px-6 py-3 rounded-lg shadow-lg mb-8 border-2 grid grid-cols-cartItem gap-8 items-center">
      <img className=" rounded-md " src={image} alt="" />
      <div>
        <h4 className="card-title">{title}</h4>
        <p className="font-semibold"> Price : ${price}</p>
      </div>
      <div>
        <button className="btn-sm btn text-xl font-bold  btn-success">+</button>
        <input
          type="text"
          value={quantity}
          className="text-center w-2/5 border-2 rounded-md mx-3 "
          readOnly
        />
        <button className="btn-sm btn text-xl font-bold  btn-success">-</button>
      </div>
      <button className="btn-sm btn text-xl font-bold  bg-red-700 text-white">
        X
      </button>
    </div>
  );
}

export default Order;
