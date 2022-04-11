import React from "react";
import stars from "../../Assets/images/stars.svg"
import "./Product.css"

const Product = ({ product }) => {
  return (
    <div>
      <div className="main_card">
        <div className="productss_img">
            <img
                className="product_image"
                src={product?.image}
                alt={product?.name}
            />
        </div>
          
        <div >
          <p className="product_name">{product.name}</p>
           <img className="stars" src={stars} alt="photo" />
            <div className="sdf">
              <p className="product_old_price" >{product.old_price ?<s> {product.old_price + ' $'}</s>: <br/>}</p>
              <h3 className="product_price" >{product.price} $</h3>
            </div>
          <p className="monthly_pay" > {product.monthly_pay ? 'От ' + product.monthly_pay + ' $/12 мес' : ''}</p>
        </div>
        
          <button className="btns" style={{backgroundColor: `${product.in_stock ? '#4D96FF' : '#ccc'}`, color: 'white', padding: '10px',border: '0', width: '115px', borderRadius:'6px'}}>
            В корзину</button>
      </div>
       
        
    </div>
  );
};

export default Product;