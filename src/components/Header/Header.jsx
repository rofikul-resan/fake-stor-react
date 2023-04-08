import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ control }) => {
  //  control nav link

  const navigator = useNavigate();

  return (
    <div>
      <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center ">
        <div>
          <h1 className="text-white text-3xl">Fake-Store.Com</h1>
        </div>
        <div className="mr-20  text-white flex gap-4 items-center">
          <Link to={"/"}>Shop</Link>
          <Link to={"/order"}>Order</Link>
          <Link to={"/logIn"}>Log in</Link>
          <button
            onClick={() => navigator("/singUp")}
            className="px-6 py-2 rounded-md bg-green-600 ml-28"
          >
            Sing Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
