import React from "react";
import FormatPrice from "../helpers/FormatPrice"
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useState } from "react";


const CartItem = ({ id, name, image, color, amount, price ,stock}) => {
    const {removeItem} = useCartContext();

    // const [amounts , setAmount] = useState(1);
    const setDecrease =()=>{
        //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
   const setIncrease =()=>{
    //   amount < stock  ? setAmount(amount + 1) : setAmount(stock); 
    }

  return (
  <div className="container2">
    <div className="cart-heading2 grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    {/* price   */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price} />
      </p>
    </div>

    {/* Quantity  */}
    <CartAmountToggle
      amount={amount}
      setDecrease={setDecrease}
      setIncrease={setIncrease}
    />

    {/* //Subtotal */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price * amount} />
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon" onClick={()=>removeItem(id)} />
    </div>
  </div>
  
  </div>
  );
};

export default CartItem;
