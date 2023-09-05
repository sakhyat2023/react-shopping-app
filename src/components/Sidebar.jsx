import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { currencyFormate } from "../lib/currencyFormate";
const Sidebar = ({ setSidebarOpen }) => {
  const { cart, getTotalPrice } = useContext(CartContext);
  return (
    <div className={`sidebar ${cart.length > 3 && "sidebarOver"}`}>
      <div className="sidebar-info">
        <div className="sidebar-header">
          <span>Your Cart</span>
          <button onClick={() => setSidebarOpen((prev) => !prev)}>
            <CloseIcon fontSize="small" />
          </button>
        </div>
        <div className="cart-content">
        {cart.length === 0 && "Your shopping cart is empty!"}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-footer">
          <div className="price">
            <span>Total Price:</span>
            <span>{currencyFormate(getTotalPrice())}</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
