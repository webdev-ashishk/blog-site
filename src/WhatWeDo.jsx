import { Outlet } from "react-router-dom";
function WhatWeDo() {
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: "green",
            textAlign: "center",
            fontSize: "8rem",
          }}
        >
          Catergories rendered-1
        </h1>
      </div>
      <Outlet />
    </>
  );
}

export default WhatWeDo;
