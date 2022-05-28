import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        height: "56px",
      }}
    >
      <div style={{ margin: "auto 0", padding: "0 20px" }}>
        <strong>Article Analyzer</strong>
      </div>
    </header>
  );
};

export default Header;
