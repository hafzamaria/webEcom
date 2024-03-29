import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { json } from "react-router-dom";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData=()=>{
  let localCartData = localStorage.getItem("MyCart");
//   if(localCartData === []){
//     return[];
//   }else{
//     return JSON.parse(localCartData);///parse is a method to get original data which is converted by JSON.stringify
//   }///after hosting this method give error so new method
const parseData = JSON.parse(localCartData);
if(!Array.isArray(parseData)) return [];
return parseData;
};




const initialState ={
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:50000,
};

const CartProvider =({children})=>{
    const [state , dispatch] = useReducer(reducer , initialState);

  const addToCart =(id , color , amount ,product)=>{
   dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}});
  };

  ///////////increment and decrement the product quantity


  const setDecrease =(id)=>{
    dispatch({type:"SET_DECREASE",payload:id})
  }

  const setIncrease =(id)=>{
    dispatch({type:"SET_INCREASE",payload:id})
  }

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
    dispatch({type:"CART_TOTAL_ITEM"})///for cart icon total jo navbar pr h
    dispatch({type:"CART_TOTAL_PRICE"})
    // dispatch({type:"CART_ITEM_PRICE_TOTAL_"})////simplify cart code
    localStorage.setItem("MyCart" , JSON.stringify(state.cart));

  },[state.cart])

    return <CartContext.Provider value={{...state , addToCart , removeItem ,clearCart ,setDecrease ,setIncrease}}>{children}</CartContext.Provider>
}

const useCartContext =()=>{
    return useContext(CartContext);
};

export {CartProvider , useCartContext};