import { createContext, useReducer, useState } from "react";
import { theapi } from "../Api/Api";
import { reducer } from "./Reducer";
export const Mycontext = createContext();
export const Myprovider = ({ children }) => {
  const [product, setProduct] = useState(theapi);
  const initialState = {
    product: product,
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Mycontext.Provider value={{ state, dispatch }}>
      {children}
    </Mycontext.Provider>
  );
};
