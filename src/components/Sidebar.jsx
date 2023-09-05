import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
const Sidebar = ({ setSidebarOpen }) => {
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
          <CartItem />
        </div>
        <div className="cart-footer">
          <div className="price">
            <span>Total</span>
            <span>12,00</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
