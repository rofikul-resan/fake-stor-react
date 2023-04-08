import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/utilities";
import CartList from "./CartList/CartList";
import ProductList from "./ProductLIst/ProductList";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const ProductLIst = useLoaderData();

  // data from db

  useEffect(() => {
    const localData = localStorage.getItem("fake-stor");
    const selectedProduct = [];
    if (localData) {
      const localObj = JSON.parse(localData);
      for (const id in localObj) {
        const eexist = ProductLIst.find((pd) => pd.id === +id);
        if (eexist) {
          eexist.quantity = localObj[id];
          selectedProduct.push(eexist);
        }
      }
      setCart(selectedProduct);
    }
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
