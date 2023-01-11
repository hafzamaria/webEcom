import React from 'react'

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART"){

        let{id , color , amount,product} = action.payload;
        // console.log(product);

        let cartProduct;

        cartProduct = {
            id  :id + color,
            name:product.name,
            color,
            amount,
            price:product.price,
            image:product.image[0].url,
            max:product.stock,
        }
    
  return {
    ...state,
    cart:[...state.cart ,  cartProduct],
};
  
}
return state;
}

export default cartReducer
