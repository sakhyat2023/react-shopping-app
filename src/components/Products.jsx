import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContex";

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
