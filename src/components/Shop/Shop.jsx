import React, { useContext, useEffect, useState } from "react";
import { addToDb, dataForCartFromDb } from "../../utilities/utilities";
import CartList from "./CartList/CartList";
import ProductList from "./ProductLIst/ProductList";
import { useLoaderData } from "react-router-dom";
import { CartContext, ShopContext } from "../../App";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const ProductLIst = useContext(ShopContext);

  useEffect(() => {
    const allCartProduct = dataForCartFromDb(ProductLIst);
    setCart(allCartProduct);
  }, [ProductLIst]);

  // data for cart list
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
    addToDb(product.id);
  }

  return (
    <main className="grid grid-cols-Shop">
      <ProductList products={ProductLIst} addToCart={addToCart}></ProductList>
      <CartList cart={cart}></CartList>
    </main>
  );
};

export default Shop;
