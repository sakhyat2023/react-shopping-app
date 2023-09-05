import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { currencyFormate } from "../lib/currencyFormate";
import { CartContext } from "../context/CartContext";
const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cart-info">
        <img
          src={item.image}
          alt={item.title}
        />
        <span>{item.title}</span>
        <button onClick={() => removeItem(item.id)}>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
      <div className="total">
      <span>Price: {currencyFormate(item.price)}</span>
      <span> Item: {item.amount}</span>
      </div>
    </div>
  );
};

export default CartItem;
