import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sidebar from "./Sidebar";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart, isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div className="menu">
      <div className="logo">Shopping Cart Application</div>
      <button onClick={() => setIsOpen((prev) => !prev)} className="">
        <Badge
          color="secondary"
          badgeContent={`${cart.length === 0 ? 0 : cart.length}`}
        >
          <ShoppingCartIcon />
        </Badge>
      </button>
      {isOpen && <Sidebar />}
    </div>
  );
};

export default Navbar;
