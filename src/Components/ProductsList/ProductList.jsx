import React from "react";
import "./ProductsList.css";
import Product from "./Product/Product";



const ProductList = ({ title, products,span }) => {
  return (
    <div style={{margin: '10px'}}>
      <div className="flex">
      <h2>{title}</h2>
      <button className="btn_sp"  >{span}</button>
      </div>
      <div className="product" style={{ gap: "15px", flexWrap: "wrap" }}>
        {products &&
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;