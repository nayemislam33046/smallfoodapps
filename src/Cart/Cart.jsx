import React, { useContext } from "react";
import { Mycontext } from "../Context/Context";
import { BiTrashAlt } from "react-icons/bi";
const Cart = () => {
  const { state, dispatch } = useContext(Mycontext);
  return (
    <div className="my-20">
      {state.cart.map((mycart) => {
        return (
          <div key={mycart.id} className="flex items-center justify-center">
            <div className="bg-amber-200 w-full lg:w-[70%] m-2 p-5 rounded flex items-center justify-between">
              <div className="flex gap-5 items-start w-[40%]">
              <div>
                <img src={mycart.images} alt={mycart.images} className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg"/>
              </div>
                 <div>
                   <p className="font-bold text-2xl text-blue-600">{mycart.name}</p>
                   <p className="text-sm text-lime-900">{mycart.category}</p>
                 </div>
              </div>
              <div className="">
                <p className="font-bold text- md:text-lg">{mycart.price} TK</p>
              </div>
              <div className="">
                <button
                onClick={() =>
                  dispatch({ type: "REMOVECART", payload: mycart.id }) 
                }
              >
                <BiTrashAlt />
              </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
