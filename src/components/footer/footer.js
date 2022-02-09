import React from "react";
import { social } from "../navbar/data";
import Social from "../navbar/social";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-icons">
          {social.map((item) => {
            return <Social {...item} />;
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
