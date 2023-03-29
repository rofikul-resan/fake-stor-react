import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center ">
        <div>
          <h1 className="text-white text-3xl">Fake-Stor.Com</h1>
        </div>
        <div className="mr-20  text-white flex gap-4 items-center">
          <a href="/shop">Shop</a>
          <a href="/Order"> Order </a>
          <a href="/Log In">Log In</a>
          <button className="px-6 py-2 rounded-md bg-green-600 ml-28">
            Sing Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
