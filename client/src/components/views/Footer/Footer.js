import { Icon } from "antd";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        Closer than ever <Icon type="smile" />
      </p>
    </div>
  );
}

export default Footer;
