import React from "react";
import { currencyFormate } from "../lib/currencyFormate";

const ProductItem = ({ product }) => {
  return (
    <div className="product-content">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <h1>{product.title}</h1>
      <p>Price: {currencyFormate(product.price)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
