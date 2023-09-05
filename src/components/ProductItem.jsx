import React, { useContext } from "react";
import { currencyFormate } from "../lib/currencyFormate";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-content">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <h1>{product.title}</h1>
      <p>Price: {currencyFormate(product.price)}</p>
      <button onClick={() => addToCart(product, product.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
