import React, { useContext } from "react";
import Rating from "../Rating/Rating";
import { Mycontext } from "../Context/Context";
const Shop = ({ shop }) => {
  const { state, dispatch } = useContext(Mycontext);
  return (
    <div>
      <div className="bg-blue-400 m-2 md:p-5 p-3 w-56 md:w-72 rounded">
      <img src={shop.images} alt={shop.name} className="h-56 w-full"/>
        <p className="text-slate-900 text-2xl mt-5">Name : <span className="text-red-600">{shop.name}</span></p>
        <p className="text-white">Category : {shop.category}</p>
        <p className="text-orange-600 font-bold">Price : ${shop.price}</p>
        <span className="flex gap-1 text-yellow-500">
          <span className="text-black">Rating:</span>{" "}
          <Rating rating={shop.rating} /> {shop.rating}
        </span>
        {state.cart.some((p) => p.id === shop.id) ? (
          <button
            onClick={() => dispatch({ type: "REMOVECART", payload: shop.id })}
            className="bg-red-500 px-5 my-3 rounded text-white hover:bg-red-700"
          >
            Remove To Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADDCART", payload: shop })}
            className="bg-green-500 px-5 my-3 rounded text-white hover:text-black hover:bg-green-700"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;
