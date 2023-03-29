import React, { useState } from "react";

const Header = ({ control }) => {
  //  control nav link

  return (
    <div>
      <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center ">
        <div>
          <h1 className="text-white text-3xl">Fake-Store.Com</h1>
        </div>
        <div className="mr-20  text-white flex gap-4 items-center">
          <Link control={control} href={"shop"}>
            Shop
          </Link>
          <Link control={control} href={"order"}>
            Order
          </Link>
          <Link control={control} href={"logIn"}>
            Log in
          </Link>
          <button className="px-6 py-2 rounded-md bg-green-600 ml-28">
            Sing Up
          </button>
        </div>
      </nav>
    </div>
  );
};

function Link({ children, control, href }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        control(e);
      }}
    >
      {children}
    </a>
  );
}

export default Header;
