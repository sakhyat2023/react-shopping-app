import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
const Sidebar = ({ setSidebarOpen }) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="sidebar">
      <div className="sidebar-info">
        <div className="sidebar-header">
          <span>Your Cart</span>
          <button onClick={() => setSidebarOpen((prev) => !prev)}>
            <CloseIcon fontSize="small" />
          </button>
        </div>
        <div className="cart-content">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-footer">
          <div className="price">
            <span>Total Price:</span>
            <span>12,00</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
