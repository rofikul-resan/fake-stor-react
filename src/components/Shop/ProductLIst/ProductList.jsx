import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 px-7">
      {products.map((product) => (
        <Card product={product} addToCart={addToCart} key={product.id}></Card>
      ))}
    </div>
  );
};
function Badge(props) {
  return (
    <div className="badge badge-primary absolute right-2 top-2">
      {props.children}
    </div>
  );
}

// product card
function Card({ product, addToCart }) {
  const { title, price, image, category } = product;
  return (
    <div className="card card-side bg-slate-200 shadow-xl p-3 relative ">
      {product.quantity && <Badge>{product.quantity}</Badge>}
      <figure className="flex-col">
        <img src={image} alt="" className="w-3/4 rounded-md mx-auto" />
        <p className="text-center py-2 font-semibold">{category}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p>Price : ${price} </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
