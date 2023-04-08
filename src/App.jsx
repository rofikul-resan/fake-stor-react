import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const ShopContext = createContext();
export const CartContext = createContext();

const App = () => {
  const ProductLIst = useLoaderData();

  function pageController(p) {}
  return (
    <div>
      <ShopContext.Provider value={ProductLIst}>
        <Header control={pageController}></Header>
        <Outlet />
      </ShopContext.Provider>
    </div>
  );
};

export default App;
