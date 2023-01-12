import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData=()=>{
  let localCartData = localStorage.getItem("MyCart");
  if(localCartData === []){
    return[];
  }else{
    return JSON.parse(localCartData);///parse is a method to get original data which is converted by JSON.stringify
  }
};

const initialState ={
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
};

const CartProvider =({children})=>{
    const [state , dispatch] = useReducer(reducer , initialState);

  const addToCart =(id , color , amount ,product)=>{
   dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}});
  };

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",payload:id});
  } ;

  ////////////to clear the Cart
  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }

  ////////////to add data in local storage
  ////get vs set////
  useEffect(()=>{
    localStorage.setItem("MyCart" , JSON.stringify(state.cart));

  },[state.cart])

    return <CartContext.Provider value={{...state , addToCart , removeItem ,clearCart}}>{children}</CartContext.Provider>
}

const useCartContext =()=>{
    return useContext(CartContext);
};

export {CartProvider , useCartContext};