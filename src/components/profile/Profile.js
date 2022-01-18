import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pic from "./Photo.jpg";
import Card from "./Card";

function Profile() {
  return (
    <div>
      {/* profile section */}
      <div
        style={{ maxWidth: "750px", margin: "0px auto", padding: "24px 0px" }}
      >
        <div className="row" style={{ borderBottom: "1px solid yellow" }}>
          <div className="col-md-3">
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                marginBottom: "12px",
              }}
              src={Pic}
            />
          </div>
          <div
            className="col-md-7"
            style={{ color: "yellow", marginTop: "12px" }}
          >
            <h4>Yash Dudhatra</h4>
            <h6>yashdudhatra001@gmail.com</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>
                Rating : <span>6/10</span>{" "}
              </h6>
            </div>
          </div>
          <div className="col-md-2">
            <div style={{ color: "yellow" }}> Edit Profile</div>
          </div>
        </div>
        <div>
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ color: "yellow" }}
                aria-current="page"
                data-toggle="tab"
                href="#prods"
              >
                My Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#trans"
                style={{ color: "yellow" }}
              >
                Transactions
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* grid Section */}
      <div className="tab-content">
        <div className="container-fluid d-flex justify-content-center pt-10">
          <div className="row">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center mt-10 pt-10">
          <div className="row">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
