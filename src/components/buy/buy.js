import React from "react";
import "./buy.css";
import data from "./data";
import Product from "./product";

function Buy() {
  return (
    <div className="buy" id="buy">
      {data.map((item) => {
        return <Product {...item} />;
      })}
    </div>
  );
}

export default Buy;
