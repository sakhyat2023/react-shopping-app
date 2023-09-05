import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart } = useContext(CartContext);
  return (
    <nav className="menu">
      <div className="logo">Shopping Cart Application</div>
      <button onClick={() => setSidebarOpen((prev) => !prev)} className="">
        <Badge
          color="secondary"
          badgeContent={`${cart.length === 0 ? 0 : cart.length}`}
        >
          <ShoppingCartIcon />
        </Badge>
      </button>
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </nav>
  );
};

export default Navbar;
