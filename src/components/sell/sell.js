import "./sell.css";
import React from "react";

function Sell() {
  return (
    <div className="sell-bg" id="sell">
      <div className="sell-header">
        <h2>want to earn some passive income?</h2>
        <h3>just sell ur useless item!</h3>
      </div>

      <form action="" className="form1 section">
        <div className="form-control">
          <p className="input-text">name</p>
          <input
            type="text"
            name="name"
            placeholder="i.e Bhavin Sheth"
            className="curve input-name"
          />

          <p className="input-text desc">desc</p>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            className="curve"
            placeholder={`i.e this product has become useless for me and want to earn money from such worned out item`}
          ></textarea>

          <p className="input-text">price</p>
          <input
            type="number"
            name="price"
            placeholder="i.e $10M"
            className="curve"
          />

          <p className="input-text">duration</p>
          <input
            type="date"
            name="date"
            className="curve"
            placeholder="11/05/2001"
          />

          <p className="input-text">images</p>
          <input type="file" alt="" className="curve file" />
        </div>
        <button type="submit" className="form-submit btn">
          post
        </button>
      </form>
    </div>
  );
}

export default Sell;
