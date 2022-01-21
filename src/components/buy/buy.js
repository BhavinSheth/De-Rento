import React from "react";
import "./buy.css";
import data from "./data";
import Product from "./product";
import Search from "./search";

function Buy() {
  return (
    <div className="buy-main" id="buy">
      <Search />
      <div className="buy" id="buy">
        {data.map((item) => {
          return <Product {...item} />;
        })}
      </div>
    </div>
  );
}

export default Buy;
