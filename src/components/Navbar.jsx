import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [cart, setCart] = useState(5);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="menu">
      <div className="logo">Shopping Cart Application</div>
      <button onClick={() => setSidebarOpen((prev) => !prev)} className="">
        <Badge color="secondary" badgeContent={cart}>
          <ShoppingCartIcon />
        </Badge>
      </button>
      {sidebarOpen && (
        <Sidebar setSidebarOpen={setSidebarOpen} />
      )}
    </nav>
  );
};

export default Navbar;
