import React from "react";

const CartList = ({ cart }) => {
  // console.log(cart[0]);
  let totalProduct = cart.reduce((pr, cr) => cr.quantity + pr, 0);
  let totalPrice = cart.reduce((pr, cr) => cr.price * cr.quantity + pr, 0);
  let tex = (totalPrice / 100) * 13.5;

  return (
    <div className="sticky top-0 bg-orange-200 h-screen ">
      <h1 className="text-center text-xl font-semibold mt-8"> Order Summary</h1>
      <div className="ml-4 font-normal mt-4">
        <p className="mt-2">Total Product : ${totalProduct} </p>
        <p className="mt-2">Total Price : ${totalPrice.toFixed(2)} </p>
        <p className="mt-2">Total Tex : ${tex.toFixed(2)} </p>
        <p className="font-semibold mt-2">
          Net Total : {(totalPrice + tex).toFixed(2)}{" "}
        </p>
      </div>
    </div>
  );
};

export default CartList;
