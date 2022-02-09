import React from "react";
import { BiCopyright } from "react-icons/bi";
import { FaCopyright } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>
        <BiCopyright style={{ fontSize: "1.1rem", color: "var(--clr-main)" }} />
        2022 <span>de-rento</span> all rights reserved
      </p>
    </div>
  );
};

export default Copyright;
