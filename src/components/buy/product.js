import React from "react";

const Product = ({ name, item, desc, price, date, img }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} className="product-img" alt="" />
        <span></span>
      </div>
      <div className="product-desc">
        <div className="product-header">
          <p className="item-name">{item}</p>
          <p>
            by <span className="owner-name">{name}</span>
          </p>
        </div>
        <div className="product-info">{desc}</div>
        <div className="product-price">
          <p className="price">${price}</p>
          <p>
            untill <span className="date">{date}</span>
          </p>
        </div>
        <button className="buy-btn btn">buy</button>
      </div>
    </div>
  );
};

export default Product;
