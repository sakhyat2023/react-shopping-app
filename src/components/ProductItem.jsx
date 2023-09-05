import React, { useContext } from "react";
import { currencyFormate } from "../lib/currencyFormate";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart, setIsOpen } = useContext(CartContext);
  const toogleCart = () => {
    addToCart(product, product.id);
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="product-content">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <h1>{product.title}</h1>
      <p>Price: {currencyFormate(product.price)}</p>
      <button onClick={toogleCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
