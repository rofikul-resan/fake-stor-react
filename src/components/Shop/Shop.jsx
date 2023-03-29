import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/utilities";
import CartList from "./CartList/CartList";
import ProductList from "./ProductLIst/ProductList";

const Shop = () => {
  const [ProductLIst, setProductList] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  // data for cart list
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    if (cart) {
      const eexist = cart.find((pd) => pd.id === product.id);
      if (!eexist) {
        product.quantity = 1;
        setCart([...cart, product]);
      } else {
        eexist.quantity += 1;
        const remain = cart.filter((pd) => pd.id !== product.id);
        setCart([...remain, eexist]);
      }
    } else {
      setCart([product]);
    }
    addToDb("pd-no-" + product.id);
  }

  return (
    <main className="grid grid-cols-Shop">
      <ProductList products={ProductLIst} addToCart={addToCart}></ProductList>
      <CartList cart={cart}></CartList>
    </main>
  );
};

export default Shop;
