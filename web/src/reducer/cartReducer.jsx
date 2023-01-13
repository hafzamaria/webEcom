
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART"){

        let{id , color , amount,product} = action.payload;
        // console.log(product);

///////////////tackle the existing product
let existingProduct = state.cart.find((curItem) => curItem.id == id+ color);
// console.log("existingProduct:" ,existingProduct);

  if(existingProduct) {
   let updatedProduct = state.cart.map((curElem)=>{
    if(curElem.id == id + color) {
        let newAmount = curElem.amount + amount;

        if(newAmount >= curElem.max){
            newAmount = curElem.max;
        }
        return {
            ...curElem,
            amount: newAmount,
        };
    }else{
        return curElem;
    }
   });
   return {
    ...state,
    cart:updatedProduct,
    };
  }else{
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
}

/////to set the increment & decrement

if(action.type === "SET_DECREASE"){
    let updatedProduct = state.cart.map((curItem)=>{
     if(curItem.id === action.payload){
        // console.log(curItem);
        let decAmount = curItem.amount -1;
        if(decAmount <= 0){
            decAmount = 1;
            
        }
        return{
            ...curItem,
            amount: decAmount,
        }
     }else{
        return curItem;
        
     }   
    })
    return{
        ...state,
        cart:updatedProduct,
    }
}

if(action.type === "SET_INCREASE"){
    let updatedProduct = state.cart.map((curItem)=>{
     if(curItem.id === action.payload){
        // console.log(curItem);
        let incAmount = curItem.amount +1;
        if(incAmount >= curItem.max){
            incAmount = curItem.max;
            
        }
        return{
            ...curItem,
            amount: incAmount,
        }
     }else{
        return curItem;
        
     }   
    })
    return{
        ...state,
        cart:updatedProduct,
    }
}

if(action.type === "REMOVE_ITEM"){
    let updatedCart = state.cart.filter(
        (curItem)=>curItem.id !== action.payload
        );
    return {
        ...state,
        cart:updatedCart,

    }
}
////////////to clear Cart
 if (action.type === "CLEAR_CART" ){
    return{
        ...state,
        cart:[],
    }
 }
 ////////////////////


  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }
 /////////////////////

 
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }


return state;
}

export default cartReducer
