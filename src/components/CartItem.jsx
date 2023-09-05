import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { currencyFormate } from "../lib/currencyFormate";
const CartItem = () => {
  return (
    <div className="cart">
      <div className="cart-info">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <span>Mens Casual Premium Slim Fit T-Shirts</span>
        <button>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
      <span>{currencyFormate(109)}</span>
    </div>
  );
};

export default CartItem;
