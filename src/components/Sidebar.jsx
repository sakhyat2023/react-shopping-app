import React from "react";
import CloseIcon from "@mui/icons-material/Close";
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
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <h1>welcome</h1>
        </div>
        <div className="cart-item">
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
