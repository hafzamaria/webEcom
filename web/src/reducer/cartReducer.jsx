import React from 'react'

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART"){
        let{id , color , amount,product} = action.payload;

        console.log(product);
    }
  return state;
}

export default cartReducer
