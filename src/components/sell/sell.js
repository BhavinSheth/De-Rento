import "./sell.css";
import React from "react";

function Sell() {
  return (
    <div className="sell-bg">
      <div className="sell-header">
        <h3>want to earn some passive income?</h3>
        <h4>just sell ur useless item!</h4>
      </div>
      <form action="" className="form-control">
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
        <input type="date" name="date" className="curve" />

        <p className="input-text">images</p>
        {/* <input
          type="image"
          src="../../images/.bg.jpeg"
          alt=""
          className="curve"
        /> */}
      </form>
    </div>
  );
}

export default Sell;