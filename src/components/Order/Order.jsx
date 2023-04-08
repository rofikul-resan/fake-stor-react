import React, { useContext, useEffect, useState } from "react";
import CartList from "../Shop/CartList/CartList";
import { ShopContext } from "../../App";
import ProductList from "../Shop/ProductLIst/ProductList";
import {
  addQuantityInDb,
  dataForCartFromDb,
  removeItemFromDb,
} from "../../utilities/utilities";
import OrderItem from "./OrderItem";

const Order = () => {
  const [cart, setCart] = useState([]);
  const ProductLIst = useContext(ShopContext);

  useEffect(() => {
    const allCartProduct = dataForCartFromDb(ProductLIst);
    setCart(allCartProduct);
  }, [ProductLIst]);

  function HandleQuantity(id, isAdd) {
    addQuantityInDb(id, isAdd);
    const allCartProduct = dataForCartFromDb(ProductLIst);
    setCart(allCartProduct);
  }

  function deleteItem(id) {
    removeItemFromDb(id);
    const allCartProduct = dataForCartFromDb(ProductLIst);
    setCart(allCartProduct);
  }

  return (
    <div>
      <div className="grid grid-cols-Shop">
        <div>
          {cart.map((pd) => (
            <OrderItem
              product={pd}
              key={pd.id}
              handler={{ HandleQuantity, deleteItem }}
            ></OrderItem>
          ))}
        </div>
        <CartList cart={cart}></CartList>
      </div>
    </div>
  );
};

export default Order;
